import { useState } from "react";
import { Grid } from "@mui/material";
import DatePicker from "react-date-picker";
import classNames from "classnames/bind";

import MenuCard from "../../components/MenuCard";
import styles from "./Statistic.module.css";

const cx = classNames.bind(styles);
function FoodList() {
	const [open, setOpen] = useState(false);
	const [dateSelected, setDateSelected] = useState(new Date());

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
			<h2>Lượng calo của thực đơn: [tổng calo]</h2>
			<h2>Thực đơn</h2>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<MenuCard />
				</Grid>
				<Grid item xs={4}>
					<MenuCard />
				</Grid>
				<Grid item xs={4}>
					<MenuCard />
				</Grid>
				<Grid item xs={4}>
					<MenuCard />
				</Grid>
				<Grid item xs={4}>
					<MenuCard />
				</Grid>
				<Grid item xs={4}>
					<MenuCard />
				</Grid>
			</Grid>
		</div>
	);
}

export default FoodList;
