import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { Input, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames/bind";
import MenuCard from "../../../../components/MenuCard";
import ExerciseCard from "../../../../components/ExerciseCard";
import styles from "./../../Statistic.module.css";
import StatisticService from "../../../../services/statistic.service";
const statisticService = new StatisticService();
const cx = classNames.bind(styles);
function StatisticOneDay() {
	const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
	const [statisticData, setStatisticData] = useState();
	const today = new Date().toDateString();
	const [dateSelected, setDateSelected] = useState(new Date(today));
	const [dates, setDates] = useState([]);
	const [weight, setWeight] = useState(0);

	const initData = async () => {
		toast.dismiss();
		const datesGetted = await statisticService.getDates({
			idNguoiDung: userInfo["_id"],
		});
		setDates(datesGetted);
		try {
			const statistic = await statisticService.getByDate({
				idNguoiDung: userInfo["_id"],
				ngay: dateSelected.toISOString(),
			});
			setWeight(statistic?.can_nang);
			toast.success("Đã tìm thấy thống kê!");
			setStatisticData(statistic);
		} catch (ex) {
			setStatisticData([]);
			toast.error("Không có thống kê cho ngày này!");
		}
	};
	useEffect(() => {
		initData();
	}, [dateSelected]);
	const handleUpdateWeight = async () => {
		try {
			await statisticService.updateWeight(statisticData["_id"], weight);
			toast.success("Đã cập nhật thành công!");
		} catch (ex) {
			setStatisticData([]);
			toast.error("Cập nhật có lỗi!");
		}
	};

	const handleDeleteMenu = async (idMenu) => {
		try {
			const result = await statisticService.deleteMenu(
				statisticData["_id"],
				idMenu
			);
			await initData();
			toast.dismiss();
			toast.success("Đã cập nhật thành công!");
		} catch (ex) {
			setStatisticData([]);
			toast.error("Cập nhật có lỗi!");
		}
	};
	return (
		<>
			<div className={cx("header")}>
				<div>
					<DatePicker
						onChange={setDateSelected}
						selected={dateSelected}
						dateFormat="dd/MM/y"
						highlightDates={dates.map((item) => new Date(item))}
					/>
				</div>
			</div>
			<div className={cx("form-group")}>
				<h2>Cân nặng</h2>
				<Input
					type={"number"}
					style={{ marginLeft: "40px" }}
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
				/>
				<h2>Kg</h2>
				<Button
					variant="outlined"
					startIcon={<AddIcon />}
					style={{ marginLeft: "40px" }}
					disabled={
						statisticData === undefined ||
						statisticData.length === 0
					}
					onClick={handleUpdateWeight}
				>
					Xác nhận
				</Button>
			</div>

			<h2>Lượng calo cơ thể cần: {userInfo.calo_muc_tieu} (Kcal)</h2>
			<h2>Lượng calo của thực đơn: {statisticData?.calo_nap} (Kcal)</h2>
			<h2>Lượng calo tiêu thụ do tập luyện: {statisticData?.calo_tieu} (Kcal)</h2>
			<h2>Thực đơn</h2>
			<Grid container spacing={2}>
				{statisticData?.thuc_don?.map((item) => {
					return (
						<Grid item xs={4}>
							<Button
								variant="outlined"
								onClick={() => {
									handleDeleteMenu(item["_id"]);
								}}
							>
								X
							</Button>
							<MenuCard data={item} key={item["_id"]} />
						</Grid>
					);
				})}
			</Grid>
			<h2>Bài Tập</h2>
			<Grid container spacing={2}>
				{statisticData?.bai_tap?.map((item) => {
					return (
						<Grid item xs={4}>
							<ExerciseCard
								title={item.ten}
								img={item.hinh}
								id={item["_id"]}
							/>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}

export default StatisticOneDay;
