import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../../components/Logo";
import ListIcon from "@mui/icons-material/List";

const cx = classNames.bind(styles);

function Header() {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<header className={cx("wrapper")}>
			<div className={cx("inner")}>
				{/* {Strings.App.TITLE} */}
				<div
					className={cx("logo")}
					onClick={() => {
						navigate("/");
					}}
				>
					<Logo />
				</div>
				<div className={cx("header-right")}>
					<ListIcon fontSize="large" onClick={handleClick} />
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
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
					</Menu>
				</div>
			</div>
		</header>
	);
}

export default Header;
