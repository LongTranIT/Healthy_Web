import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/system";
import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Exercise.module.css";
import ExerciseCard from "../../components/ExerciseCard";

const cx = classNames.bind(styles);
function Menu() {
	const [tabIndex, setTabIndex] = useState("1");

	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	};
	return (
		<div className={cx("wrapper")}>
			<h1 className={cx("header")}>Tập thể dục</h1>
			<TabContext value={tabIndex}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						onChange={handleChange}
					>
						<Tab label="Bài tập toàn thân" value="1" />
						<Tab label="Bài tập bụng" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value="2">
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
						<Grid item xs={4}>
							<ExerciseCard />
						</Grid>
						
					</Grid>
				</TabPanel>
				
			</TabContext>
		</div>
	);
}

export default Menu;
