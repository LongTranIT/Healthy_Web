import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import classNames from "classnames/bind";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./../../Statistic.module.css";
import StatisticService from "../../../../services/statistic.service";
const statisticService = new StatisticService();
const cx = classNames.bind(styles);

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
  );
  
  export const options = {
	responsive: true,
	plugins: {
	  legend: {
		position: 'top' ,
	  },
	  title: {
		display: true,
		text: 'Chart.js Line Chart',
	  },
	},
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','July','July','July','July','July','July','July','July','July','July','July','July','July','July','July','July','July'];
  
  export const data = {
	labels,
	datasets: [
	  {
		label: 'Dataset 1',
		data: [200,300,400],
		borderColor: 'rgb(255, 99, 132)',
		backgroundColor: 'rgba(255, 99, 132, 0.5)',
	  },
	  {
		label: 'Dataset 2',
		data: [500,600,400],
		borderColor: 'rgb(53, 162, 235)',
		backgroundColor: 'rgba(53, 162, 235, 0.5)',
	  },
	],
  };

function StatisticRange() {
	const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
	const [statisticData, setStatisticData] = useState();
	const today = new Date().toDateString();
	const [dateRange, setDateRange] = useState([
		new Date(today).setDate(1),
		new Date(today),
	]);
	const [startDate, endDate] = dateRange;
	// useEffect(() => {
	// 	const initData = async () => {
	// 		toast.dismiss();
	// 		const datesGetted = await statisticService.getDates({
	// 			idNguoiDung: userInfo["_id"],
	// 		});
	// 		setDates(datesGetted);
	// 		try {
	// 			const statistic = await statisticService.getByDate({
	// 				idNguoiDung: userInfo["_id"],
	// 				ngay: dateSelected.toISOString(),
	// 			});
	// 			toast.success("Đã tìm thấy thống kê!");
	// 			setStatisticData(statistic);
	// 		} catch (ex) {
	// 			setStatisticData([]);
	// 			toast.error("Không có thống kê cho ngày này!");
	// 		}
	// 	};
	// 	initData();
	// }, [dateSelected]);
	return (
		<>
			<div className={cx("header")}>
				
					<DatePicker
						selectsRange={true}
						startDate={startDate}
						endDate={endDate}
						onChange={(update) => {
							setDateRange(update);
						}}
						withPortal
						dateFormat="dd/MM/y"
					/>
					<Line options={options} data={data} className={cx("chart-box")}/>
			</div>
		</>
	);
}

export default StatisticRange;
