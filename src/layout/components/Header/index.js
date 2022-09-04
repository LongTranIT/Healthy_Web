import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../../components/Logo";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const cx = classNames.bind(styles);

function Header() {
	const userInfo= JSON.parse(sessionStorage.getItem('userInfo'))
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	const modalStyle = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		borderRadius: '8px',
		boxShadow: 24,
		p: 4,

		display: "flex",
		flexDirection: "column",
		gap: 2,
	};
	return (
		<>
			<Modal
				open={openModal}
				onClose={handleCloseModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h1"
						sx={{textAlign:'center', fontSize: 30, fontWeight: 'Bold'}}
					>
						Đăng nhập
					</Typography>
					<div className={cx('title_input-group')}>
						<span>Username</span>
						<input className={cx('title_input-input')}/>
					</div>
					<div className={cx('title_input-group')}>
						<span>Password</span>
						<input type={'password'} className={cx('title_input-input')}/>
					</div>
					<Button
						size="small"
						startIcon={<LockOpenIcon />}
						variant={"contained"}
						onClick={handleCloseModal}
					>
						Đăng nhập
					</Button>
				</Box>
			</Modal>
			<header className={cx("wrapper")}>
				<div className={cx("inner")}>
					<div
						className={cx("logo")}
						onClick={() => {
							navigate("/");
						}}
					>
						<Logo />
					</div>
					<div className={cx("header-right")}>
						{
							userInfo?
							<Button
							variant="outlined"
							startIcon={<PersonIcon />}
							sx={{ color: "white" }}
							onClick={handleClick}
						>
							{userInfo.name}
						</Button>
							:
							 <Button
							variant="outlined"
							startIcon={<LoginIcon />}
							sx={{ color: "white" }}
							onClick={handleOpenModal}
						>
							Login
						</Button>
						}
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "center",
							}}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem
								onClick={() => {
									navigate("/FoodList");
									handleClose();
								}}
							>
								Danh mục thực phẩm
							</MenuItem>
							<MenuItem
								onClick={() => {
									navigate("/statistic");
									handleClose();
								}}
							>
								Thống kê
							</MenuItem>
							<MenuItem
								onClick={() => {
									navigate("/menu");
									handleClose();
								}}
							>
								Thực đơn
							</MenuItem>
							<MenuItem
								onClick={() => {
									navigate("/exercise");
									handleClose();
								}}
							>
								Tập thể dục
							</MenuItem>
							<MenuItem
								onClick={() => {
									sessionStorage.clear()
									handleClose()
									if(window.location.pathname==='/'){
										window.location.reload()
									}
									else{
										navigate('/')
									}
								}}
							>
								<LogoutIcon/>
								Đăng xuất
							</MenuItem>
						</Menu>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
