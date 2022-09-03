import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import classNames from "classnames/bind";
import styles from "./ExerciseDetail.module.css";

const cx = classNames.bind(styles);
function Menu() {
	return (
		<>
			<div className={cx("wrapper")}>
				<h1 className={cx("title-page")}>Bụng cho người bắt đầu</h1>
				{/* <Button
					size="small"
					startIcon={<AddCircleIcon />}
					variant={"contained"}
					// onClick={handleOpen}
				>
					Thêm
				</Button> */}
				<img
					src="https://wheyshop.vn/wp-content/uploads/2020/08/4-phut-de-co-bung-6-mui-tai-nha-cho-nam-600x314-1.jpg"
					width={800}
				/>
				<div className={cx('exercise-item')}>
					<h2>Vặn chéo</h2>
					<img
						src="https://musclewiki.com/media/uploads/male-dumbbell-russian-twist-front.gif"
						width={500}
					/>
					<p>Ngồi trên sàn và xoay người qua lại</p>
				</div>
				<div className={cx('exercise-item')}>
					<h2>Vặn chéo</h2>
					<img
						src="https://musclewiki.com/media/uploads/male-dumbbell-russian-twist-front.gif"
						width={500}
					/>
					<p>Ngồi trên sàn và xoay người qua lại</p>
				</div>
				<div className={cx('exercise-item')}>
					<h2>Vặn chéo</h2>
					<img
						src="https://musclewiki.com/media/uploads/male-dumbbell-russian-twist-front.gif"
						width={500}
					/>
					<p>Ngồi trên sàn và xoay người qua lại</p>
				</div>
				<div className={cx('exercise-item')}>
					<h2>Vặn chéo</h2>
					<img
						src="https://musclewiki.com/media/uploads/male-dumbbell-russian-twist-front.gif"
						width={500}
					/>
					<p>Ngồi trên sàn và xoay người qua lại</p>
				</div>
			</div>
		</>
	);
}

export default Menu;
