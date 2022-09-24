import { useState } from "react";
import classNames from "classnames/bind";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import "react-datepicker/dist/react-datepicker.css";
import StatisticOneDay from "./components/StatisticOneDay";
import StatisticRange from "./components/StatisticRange";
import styles from "./Statistic.module.css";
import "react-datepicker/dist/react-datepicker.css";

const cx = classNames.bind(styles);
function Statistic() {
	const [tabIndex, setTabIndex] = useState(0);
	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	};

	return (
		<div className={cx("wrapper")}>
			<div className={cx("header")}>
				<h1>Thống kê</h1>
			</div>
			<TabContext value={tabIndex}>
				<Box sx={{ marginLeft: "40%" }}>
					<TabList
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Số liệu" key={1} />
						<Tab label="Biểu đồ" key={2} />
					</TabList>
				</Box>
				<TabPanel value={0}>
					<StatisticOneDay/>
				</TabPanel>
				<TabPanel value={1}>
					<StatisticRange/> 
				</TabPanel>
			</TabContext>
		</div>
	);
}

export default Statistic;
