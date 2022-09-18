import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import DatePicker from "react-datepicker";
import classNames from "classnames/bind";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import MenuCard from "../../components/MenuCard";
import styles from "./Statistic.module.css";
import StatisticService from "../../services/statistic.service";

const cx = classNames.bind(styles);
const statisticService = new StatisticService();
function Statistic() {
	const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
	const [statisticData, setStatisticData] = useState();
	const today = new Date().toDateString();
	const [dateSelected, setDateSelected] = useState(new Date(today));
	const [dates,setDates]= useState([]);

	useEffect(() => {
		const initData = async () => {
			try {
				const statistic = await statisticService.getByDate({
					idNguoiDung: userInfo["_id"],
					ngay: dateSelected.toISOString(),
				});
				const datesGetted=await statisticService.getDates({idNguoiDung: userInfo["_id"]})
				setDates(datesGetted);
				toast.dismiss()
				toast.success("Đã tìm thấy thống kê!");
				setStatisticData(statistic);
			} catch (ex) {
				setStatisticData([]);
				toast.dismiss()
				toast.error("Không có thống kê cho ngày này!");
			}
		};
		initData();
	}, [dateSelected]);
	

	return (
		<div className={cx("wrapper")}>
			<div className={cx("header")}>
				<h1>Thống kê</h1>
				<div>
					<DatePicker
						onChange={setDateSelected}
						selected={dateSelected}
						dateFormat="dd/MM/y"
						highlightDates={dates.map(item=>new Date(item))}
					/>
				</div>
			</div>
			<h2>Lượng calo cơ thể cần: {userInfo.calo_muc_tieu} (Kcal)</h2>
			<h2>Lượng calo của thực đơn: {statisticData?.calo_nap} (Kcal)</h2>
			<h2>Thực đơn</h2>
			<Grid container spacing={2}>
				{statisticData?.thuc_don?.map((item) => {
					return (
						<Grid item xs={4}>
							<MenuCard data={item} key={item["_id"]} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default Statistic;
