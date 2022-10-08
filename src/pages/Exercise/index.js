import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/system";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Exercise.module.css";
import ExerciseCard from "../../components/ExerciseCard";
import ExerciseService from "../../services/exercise.service";

const cx = classNames.bind(styles);
const exerciseService = new ExerciseService();
function Menu() {
	const [tabIndex, setTabIndex] = useState("1");
	const [exerciseData, setExerciseData] = useState([]);

	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	};

	useEffect(() => {
		const initData = async () => {
			const exercise = await exerciseService.getAll();
			setExerciseData(exercise);
			setTabIndex(exercise[0]['_id'])
		};
		initData();
	}, []);
	return (
		<div className={cx("wrapper")}>
			<h1 className={cx("header")}>Tập thể dục</h1>
			<TabContext value={tabIndex}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={handleChange}>
						{exerciseData.map((item) => {
							return (
								<Tab label={item?.ten} value={item["_id"]} />
							);
						})}
					</TabList>
				</Box>
				{exerciseData.map((exercise) => {
					return (
						<TabPanel value={exercise["_id"]}>
							<Grid container spacing={2}>
								{exercise.bai_tap.map((item) => {
									return (
										<Grid item xs={4}>
											<ExerciseCard title={item.ten} img={item.hinh} id={item['_id']} calo={item.calo}/>
										</Grid>
									);
								})}
							</Grid>
						</TabPanel>
					);
				})}

				
			</TabContext>
		</div>
	);
}

export default Menu;
