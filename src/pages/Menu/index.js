import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Menu.module.css";
import MenuCard from "../../components/MenuCard";

const cx = classNames.bind(styles);
function Menu() {
	const [tabIndex, setTabIndex] = useState("1");

	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	};
	return (
		<div className={cx("wrapper")}>
			<h1 className={cx("title-page")}>Danh sách thực đơn</h1>
			<TabContext value={tabIndex}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<Tab label="Thực đơn giảm cân" value="1" />
						<Tab label="Thực đơn tự tạo" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
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
				</TabPanel>
				<TabPanel value="2">
					<Button variant="contained" className={cx("new-menu-button")} startIcon={<AddIcon />}>Thêm thực đơn</Button>
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
				</TabPanel>
			</TabContext>
		</div>
	);
}

export default Menu;
