import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ExerciseDoing.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import StepLabel from "@mui/material/StepLabel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Timer from "../../components/Timer"
import ExerciseService from "../../services/exercise.service";

const exerciseService = new ExerciseService();
const cx = classNames.bind(styles);
function ExerciseDoing() {
	const navigate = useNavigate();
	const { exerciseId } = useParams();
	const [exercise, setExercise] = useState();
	const [currentStep, setCurrentStep] = useState(0);
	useEffect(() => {
		const initData = async () => {
			const ex = await exerciseService.getById(exerciseId);
			setExercise(ex);
		};
		initData();
	}, []);
	const steps = exercise ? exercise?.dong_tac?.map((item) => item.ten) : [];
	const iconButton =
		currentStep < exercise?.dong_tac.length - 1 ? (
			<ArrowForwardIosIcon />
		) : (
			<CheckCircleOutlineIcon />
		);
	const handleNextStep=()=>{
		if (currentStep < exercise?.dong_tac.length - 1) {
			setCurrentStep(currentStep + 1);
		} else {
			toast.success("Đã hoàn thành bài tập!");
			navigate("/statistic");
		}
	}
	return (
		<>
			<div className={cx("wrapper")}>
				<Button
					size="small"
					startIcon={iconButton}
					variant={"outlined"}
					
				>
					{currentStep < exercise?.dong_tac.length - 1
						? "Động tác kế tiếp"
						: "Hoàn thành"}
				</Button>

				<Timer expiryTimestampInSecond={6} onExpire={()=>{handleNextStep()}}/>
				
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
					<Stepper activeStep={currentStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
				</Box>
				<div className={cx("exercise-item")}>
					<h2>{exercise?.dong_tac[currentStep]?.ten}</h2>
					<img
						src={exercise?.dong_tac[currentStep]?.hinh}
						width={500}
					/>
					<p style={{ whiteSpace: "pre-wrap" }}>
						{exercise?.dong_tac[currentStep]?.mo_ta}
					</p>
				</div>
			</div>
		</>
	);
}

export default ExerciseDoing;
