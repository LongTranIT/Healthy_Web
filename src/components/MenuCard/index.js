import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import classNames from "classnames/bind";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MenuService from "../../services/menu.service";
import StatisticService from "../../services/statistic.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./MenuCard.module.css";
const menuService = new MenuService();
const statisticService = new StatisticService();
const cx = classNames.bind(styles);
const userInfo= JSON.parse(sessionStorage.getItem('userInfo'))

export default function MenuCard({ data, deleteAble, setReload }) {
	const navigate = useNavigate();
	const today=(new Date()).toDateString()
	const [open, setOpen] = useState(false);
	const [dateSelected, setDateSelected] = useState(new Date(today));
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleSubmit=()=>{
		statisticService.addMenu({
			ngay: dateSelected,
			idThucDon: data['_id'],
			idNguoiDung: userInfo['_id']
		})
		.then(result=>{
			toast.success("Đã thêm thành công");
			handleClose()
		})
	}

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

		display: "flex",
		flexDirection: "column",
		gap: 2,
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
						onClick={handleSubmit}
						disabled={dateSelected===null}
					>
						Xác nhận
					</Button>
				</Box>
			</Modal>
			<Card>
				<CardMedia
					component="img"
					height="250"
					image={data.hinh}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{data.ten}
					</Typography>
					<h3>Calo: {data.calo}</h3>
					<Typography
						variant="body2"
						color="text.secondary"
						className={cx("limit-text")}
					>
						{data.mo_ta}
					</Typography>
				</CardContent>
				<CardActions className={cx("action-group")}>
					{deleteAble ? (
						<Button
							size="small"
							startIcon={<HighlightOffIcon />}
							onClick={() => {
								menuService.delete(data["_id"]).then(() => {
									toast.success("Đã xóa thành công");
									setReload(true);
								});
							}}
							color={"error"}
						>
							Xóa
						</Button>
					) : (
						""
					)}
					<Button
						size="small"
						startIcon={<SearchIcon />}
						onClick={() => {
							navigate(`/menudetail/${data["_id"]}`);
						}}
						color={"info"}
					>
						Xem
					</Button>

					<Button
						size="small"
						startIcon={<AddCircleIcon />}
						onClick={handleOpen}
					>
						Thêm
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
