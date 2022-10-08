import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./ExerciseCard.module.css";

const cx = classNames.bind(styles);
export default function ExerciseCard({title,img, id, calo}) {
	const navigate = useNavigate();
	return (
		<>
			<Card>
				<CardMedia
					component="img"
					height="300"
					image={img}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						className={cx("limit-text")}
					>
						Giảm {calo} Kcal sau khi tập
					</Typography>
				</CardContent>
				<CardActions className={cx("action-group")}>
					<Button
						size="small"
						startIcon={<SearchIcon />}
						onClick={() => {
							navigate("/exercisedetail/"+id);
						}}
					>
						Xem
					</Button>
					<Button
						size="small"
						startIcon={<TaskAltIcon />}
						variant={"contained"}
						onClick={() => {
							navigate("/exercisedoing/"+id);
						}}
					>
						Tập luyện
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
