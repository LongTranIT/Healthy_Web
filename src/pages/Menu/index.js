import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Menu.module.css";
import MenuCard from "../../components/MenuCard";
import { useNavigate } from "react-router-dom";
import MenuTypeService from "../../services/menuType.service";

const cx = classNames.bind(styles);
const menuTypeService = new MenuTypeService();
function Menu() {
	const [menuTypes, setmenuTypes] = useState([]);
	const [reload, setReload] = useState(false);
	useEffect(() => {
		const initData = async () => {
			const menus = await menuTypeService.getAll();
			setmenuTypes(menus);
			setTabIndex(menus[0]['_id'])
		};
		initData();
		setReload(false)
	}, [reload]);
	const navigate = useNavigate();
	const [tabIndex, setTabIndex] = useState();

	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	};
	return (
		<div className={cx("wrapper")}>
			<h1 className={cx("title-page")}>Danh sách thực đơn</h1>
			<Button variant="contained" className={cx("new-menu-button")} startIcon={<AddIcon />} onClick={()=>{navigate('/newMenu')}}>Thêm thực đơn</Button>
			<TabContext value={tabIndex}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={handleChange}>
						{menuTypes.map((type) => {
							return (
								<Tab
									label={type.ten}
									value={type["_id"]}
									key={type["_id"]}
								/>
							);
						})}
					</TabList>
				</Box>
				{menuTypes.map((type) => {
					return (
						<TabPanel value={type["_id"]} key={type["_id"]}>
							<h3>{type.mo_ta}</h3>
							<Grid container spacing={2}>
								{type.thuc_don.reverse().map((menu) => {
									return (
										<Grid item xs={4} key={menu['_id']}>
											<MenuCard data={menu} deleteAble={type.ten==='Thực đơn tự tạo'} setReload={setReload}/>
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
