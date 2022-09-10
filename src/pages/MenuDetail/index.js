import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DatePicker from 'react-date-picker';

import classNames from "classnames/bind";
import styles from "./MenuDetail.module.css";
import MenuService from "../../services/menu.service";

const cx = classNames.bind(styles);
const menuService = new MenuService();
function Menu() {
	const { menuId } = useParams();
	const [open, setOpen] = useState(false);
	const [dateSelected, setDateSelected] = useState(new Date());
	const [menuData, setMenuData]= useState()
	useEffect(() => {
		const initData = async () => {
			const menu = await menuService.getById(menuId);
			setMenuData(menu);
		};
		initData();
	}, []);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const modalStyle = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
		
		display: 'flex',
		flexDirection: 'column',
		gap: 2
	};

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						Thực đơn cho ngày nào?
					</Typography>
					<DatePicker
						onChange={setDateSelected}
						value={dateSelected}
						format="dd/MM/y"
					/>
					<Button
						size="small"
						startIcon={<LibraryAddIcon />}
						variant={"contained"}
						onClick={handleClose}
					>
						Xác nhận
					</Button>
				</Box>
			</Modal>
			<div className={cx("wrapper")}>
				<h1 className={cx("title-page")}>{menuData?.ten}</h1>
				<Button
					size="small"
					startIcon={<AddCircleIcon />}
					variant={"contained"}
					onClick={handleOpen}
				>
					Thêm
				</Button>
				<img
					src={menuData?.hinh}
					width={1000}
				/>
				<h2>Nguyên liệu</h2>
				<ul>
					{menuData?.thanh_phan.map((item,index)=>{
						return (
							<li key={index}>
								{item?.thuc_pham?.ten} - {item.so_luong} (gam)
							</li>
						)
					})}
				</ul>
				<h2>Mô tả</h2>
				<p>
					{menuData?.mo_ta}
				</p>
			</div>
		</>
	);
}

export default Menu;
