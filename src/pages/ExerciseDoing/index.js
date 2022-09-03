import classNames from "classnames/bind";
import styles from "./ExerciseDoing.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const cx = classNames.bind(styles);
function Menu() {
	const steps = [
		'Gập bụng',
		'Vặn chéo',
		'Duỗi người kiểu hổ mang',
	  ];
	return (
		<>
			<div className={cx("wrapper")}>
				<h1 className={cx("title-page")}>Bắt đầu thử thách</h1>
				{/* <Button
					size="small"
					startIcon={<AddCircleIcon />}
					variant={"contained"}
					// onClick={handleOpen}
				>
					Thêm
				</Button> */}
				<Box sx={{ width: "100%" }}>
					<Stepper activeStep={1} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
				</Box>
				<div className={cx("exercise-item")}>
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
