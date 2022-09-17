import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import DatePicker from "react-date-picker";
import classNames from "classnames/bind";
import { toast } from "react-toastify";

import MenuCard from "../../components/MenuCard";
import styles from "./Statistic.module.css";
import StatisticService from "../../services/statistic.module";


const cx = classNames.bind(styles);
const statisticService = new StatisticService();
function Statistic() {
	const [statisticData, setStatisticData] = useState();
	const today=(new Date()).toDateString()
	const [dateSelected, setDateSelected] = useState(new Date(today));

	useEffect(() => {
		const initData = async () => {
			try{
				const statistic = await statisticService.getByDate(dateSelected.toISOString());
				setStatisticData(statistic);
			}
			catch(ex){
				setStatisticData([])
				toast.error('Không có thống kê cho ngày này!');
			}
		};
		initData();
	}, [dateSelected]);

	return (
		<div className={cx("wrapper")}>
			<div className={cx("header")}>
				<h1>Thống kê</h1>
				<DatePicker
					onChange={setDateSelected}
					value={dateSelected}
					format="dd/MM/y"
				/>
			</div>
			<h2>Lượng calo cơ thể cần: [calo mục tiêu]</h2>
			<h2>Lượng calo của thực đơn: {statisticData?.calo_nap} (Kcal)</h2>
			<h2>Thực đơn</h2>
			<Grid container spacing={2}>
				{statisticData?.thuc_don?.map((item) => {
					return (
						<Grid item xs={4}>
							<MenuCard data={item} key={item['_id']}/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default Statistic;
