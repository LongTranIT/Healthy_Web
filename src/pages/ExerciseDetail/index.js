import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ExerciseDetail.module.css";
import ExerciseService from "../../services/exercise.service";

const exerciseService =new ExerciseService();
const cx = classNames.bind(styles);
function Menu() {
	const {exerciseId}=useParams();
	const [exercise,setExercise]=useState();
	useEffect(() => {
		const initData = async () => {
			const ex = await exerciseService.getById(exerciseId);
			setExercise(ex);
		};
		initData();
	}, []);
	return (
		<>
			<div className={cx("wrapper")}>
				<h1 className={cx("title-page")}>{exercise?.ten}</h1>
				{/* <Button
					size="small"
					startIcon={<AddCircleIcon />}
					variant={"contained"}
					// onClick={handleOpen}
				>
					Thêm
				</Button> */}
				<img
					src={exercise?.hinh}
					width={800}
				/>
				{exercise?.dong_tac?.map(item=>{
					return (
						<div className={cx('exercise-item')}>
					<h2>{item?.ten}</h2>
					<img
						src={item?.hinh}
						width={500}
					/>
					<p style={{whiteSpace: "pre-wrap"}}>{item?.mo_ta}</p>
				</div>
					)
				})}
			</div>
		</>
	);
}

export default Menu;
