import {useState}from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import classNames from "classnames/bind";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DatePicker from 'react-date-picker';

import styles from "./MenuCard.module.css";


const cx = classNames.bind(styles);
export default function MenuCard() {
	const [open, setOpen] = useState(false);
	const [dateSelected, setDateSelected] = useState(new Date());
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
					<DatePicker onChange={setDateSelected} value={dateSelected} format="dd/MM/y"/>
					<Button
						size="small"
						startIcon={<LibraryAddIcon />}
						variant={'contained'}
						onClick={handleClose}
					>
						Xác nhận
					</Button>
				</Box>
			</Modal>
			<Card>
				<CardMedia
					component="img"
					height="250"
					image="https://www.thatlangon.com/wp-content/uploads/2021/01/ca-kho-2.jpg"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Cá kho
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						className={cx("limit-text")}
					>
						Cá kho là một trong những món ăn đặc trưng trên mâm cơm
						thường ngày của người Việt. Có tới hàng chục cách kho,
						hương vị cá kho khác nhau, thay đổi theo vùng miền. Có
						vùng thích cá kho nổi mùi riềng, thịt rắn đanh, rục
						xương. Có vùng thích kho cá lạt, vị thanh, còn nhiều
						nước, chan bún như canh. Có nơi thích nước kho sệt, nổi
						vị mặn ngọt đậm đà. Hôm nay, Thật Là Ngon giới thiệu
						cách kho cá quả kiểu kho tộ miền Nam cùng nhiều bí kíp
						để có một nồi cá kho ngon với tất tật các loại cá và các
						loại gia vị khác nhau. Bạn có thể áp dụng cho hầu hết
						các loại cá như cá chép, trắm, rô, basa,... Cả nhà quây
						quần bên mâm cơm có cơm dẻo, cá kho đậm đà, đĩa rau luộc
						chấm nước kho sánh kẹo thì hạnh phúc chừng nào! Mình
						cùng vào bếp nhé!
					</Typography>
				</CardContent>
				<CardActions className={cx("action-group")}>
					<Button size="small" startIcon={<SearchIcon />}>
						Xem{" "}
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
