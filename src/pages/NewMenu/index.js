import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from "react-date-picker";
import classNames from "classnames/bind";
import styles from "./NewMenu.module.css";
import FoodService from "../../services/food.service";
import MenuDetailService from "../../services/menuDetail.service";
import MenuService from "../../services/menu.service";
import MenuTypeService from "../../services/menuType.service";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
const foodService = new FoodService();
const menuDetailService = new MenuDetailService();
const menuService = new MenuService();
const menuTypeService = new MenuTypeService();

function FoodList() {
	const userInfo= JSON.parse(sessionStorage.getItem('userInfo'))
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [foodData, setFoodData] = useState([]);
	const [menu, setMenu] = useState({});
	const [menuElements, setMenuElements] = useState([]);
	const [menuElement, setMenuElement] = useState({});
	useEffect(() => {
		const initData = async () => {
			const foods = await foodService.getAll();
			setFoodData(foods);
		};
		initData();
	}, []);

	useEffect(() => {
		setMenu({
			...menu,
			thanh_phan: menuElements,
			calo: calCaloTotal(),
		});
	}, [menuElements]);

	const foodsDisplay = foodData.map((item, index) => {
		return {
			label: item.ten + "    -   " + item.calo + " Kcal",
			id: item["_id"],
			calo: item.calo,
		};
	});
	const calCaloTotal = () => {
		let caloTotal = 0;
		menuElements.forEach((item) => {
			caloTotal += (item.calo / 100) * item.so_luong;
		});
		return Math.floor(caloTotal);
	};

	const handleAddMenu = () => {
		Promise.all(
			menuElements.map((item) =>
				menuDetailService.add({
					thuc_pham: item.thuc_pham,
					so_luong: item.so_luong,
				})
			)
		).then(async (results) => {
			const thanh_phan = results.map((item) => item["_id"]);
			const newMenu = await menuService.add({
				ten: menu.ten,
				thanh_phan,
				mo_ta: menu.mo_ta,
				calo: menu.calo,
				hinh: "https://monhuenhalam.com/wp-content/themes/ntna076/images/icon_256-.png",
			});
			menuTypeService.addMenu({ idThucDon: newMenu["_id"], idNguoiDung: userInfo['_id'] }).then(() => {
				toast.success("???? th??m th??nh c??ng");
				navigate("/menu");
			});
		});
	};

	return (
		<div className={cx("wrapper")}>
			<div className={cx("header")}>
				<h1>T???o th???c ????n m???i</h1>
				<div className={cx("header-actions")}>
					<Button
						size="small"
						startIcon={<LibraryAddIcon />}
						variant={"contained"}
						onClick={handleAddMenu}
					>
						T???o th???c ????n
					</Button>
				</div>
			</div>
			<hr />
			<div className={cx("wrapper-input")}>
				<h2>T??n th???c ????n</h2>
				<TextField
					id="outlined-basic"
					label="T??n th???c ????n"
					variant="outlined"
					size="small"
					sx={{ marginLeft: 8 }}
					onChange={(e) => {
						setMenu({
							...menu,
							ten: e.target.value,
						});
					}}
				/>
			</div>
			<hr />
			<div className={cx("wrapper-input")}>
				<h2>Ch???n th???c ph???m (Kcal/gam)</h2>
				<Autocomplete
					size="small"
					disablePortal
					id="combo-box-demo"
					options={foodsDisplay}
					isOptionEqualToValue={(option, value) =>
						option.id === value.id
					}
					sx={{ width: 300 }}
					renderInput={(params) => (
						<TextField {...params} label="Th???c ph???m" />
					)}
					onChange={(event, value) =>
						setMenuElement({
							...menuElement,
							thuc_pham: value?.id,
							ten: value.label,
							calo: value.calo,
						})
					}
				/>
			</div>
			<div className={cx("wrapper-input")}>
				<h2>S??? l?????ng (gam)</h2>
				<TextField
					id="outlined-basic"
					type={"number"}
					label="S??? l?????ng"
					variant="outlined"
					size="small"
					sx={{ marginLeft: 8 }}
					onChange={(event) =>
						setMenuElement({
							...menuElement,
							so_luong: +event.target.value,
						})
					}
				/>
			</div>
			<div className={cx("wrapper-input")}>
				<h2>K???t qu???</h2>
				<Button
					size="small"
					startIcon={<LibraryAddIcon />}
					onClick={() => {
						const elementDuple = menuElements.find(
							(i) => i.thuc_pham === menuElement.thuc_pham
						);
						if (elementDuple) {
							const newMenuElement = {
								...menuElement,
								so_luong:
									menuElement.so_luong +
									elementDuple.so_luong,
							};
							const newMenuElements = menuElements.filter(
								(i) => i.thuc_pham !== elementDuple.thuc_pham
							);
							setMenuElements([
								...newMenuElements,
								newMenuElement,
							]);
						} else {
							setMenuElements([...menuElements, menuElement]);
						}
					}}
				>
					Th??m th??nh ph???n
				</Button>
			</div>
			<div>
				{menuElements.map((item) => {
					return (
						<div>
							<Button
								size="small"
								startIcon={<HighlightOffIcon />}
								onClick={() => {
									const newMenuElements = menuElements.filter(
										(i) => i.thuc_pham !== item.thuc_pham
									);
									setMenuElements(newMenuElements);
								}}
							/>
							{item?.ten} {item?.so_luong}g
						</div>
					);
				})}
			</div>
			<hr />
			<div className={cx("wrapper-input")}>
				<h2>M?? t???</h2>
				<TextField
					id="outlined-basic"
					multiline
					rows={4}
					label="M?? t???"
					variant="outlined"
					size="small"
					sx={{ marginLeft: 8, width: 500 }}
					onChange={(e) => {
						setMenu({
							...menu,
							mo_ta: e.target.value,
						});
					}}
				/>
			</div>
			<h2>T???ng calo: {menu.calo}</h2>
		</div>
	);
}

export default FoodList;
