import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./ExerciseCard.module.css";


const cx = classNames.bind(styles);
export default function MenuCard() {
	const navigate= useNavigate()
	return (
		<>
			
			<Card>
				<CardMedia
					component="img"
					height="300"
					image="https://wheyshop.vn/wp-content/uploads/2020/08/4-phut-de-co-bung-6-mui-tai-nha-cho-nam-600x314-1.jpg"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Người mới bắt đầu
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						className={cx("limit-text")}
					>
						Giảm 500 - 1000kcal sau khi tập
					</Typography>
				</CardContent>
				<CardActions className={cx("action-group")}>
					<Button 
					size="small" 
					startIcon={<SearchIcon />}
					onClick={()=>{navigate('/exercisedetail')}}
					>
						Xem
					</Button>
					<Button
						size="small"
						startIcon={<TaskAltIcon />}
						variant={"contained"}
						// onClick={handleOpen}
					>
						Tập luyện
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
