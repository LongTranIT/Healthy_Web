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
  
  export const optionCalo = {
	responsive: true,
	plugins: {
	  legend: {
		position: 'top' ,
	  }
	},
  };
  export const optionWeight = {
	responsive: true,
	plugins: {
	  legend: {
		position: 'top' ,
	  },
	},
  };
  

function StatisticRange() {
	const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
	const [statisticData, setStatisticData] = useState([]);
	const today = new Date().toDateString();
	const [dates, setDates] = useState([]);
	const [dateRange, setDateRange] = useState([
		new Date((new Date()).setDate(1)),
		new Date(today),
	]);
	const [startDate, endDate] = dateRange;
	useEffect(() => {
		const initData = async () => {
			toast.dismiss();
			const datesGetted = await statisticService.getDates({
				idNguoiDung: userInfo["_id"],
			});
			setDates(datesGetted);
			try {
				const statistic = await statisticService.getByRange({
					idNguoiDung: userInfo["_id"],
					startDate,
					endDate
				});
				statistic.sort((a,b)=>{
					return +new Date(a.ngay) - +new Date(b.ngay)
				})
				setStatisticData(statistic);
			} catch (ex) {
				setStatisticData([]);
				toast.error("Không có thống kê cho ngày này!");
			}
		};
		initData();
	}, [dateRange]);


	const labels = statisticData.map(item=>(new Date(item.ngay)).toLocaleDateString('vi-VN'));
	 const dataCalo = {
		labels,
		datasets: [
		  {
			label: 'Calo nạp vào',
			data: statisticData.map(item=>item.calo_nap),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		  },
		  {
			label: 'Calo tiêu thụ',
			data: statisticData.map(item=>item.calo_tieu),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		  },
		  {
			label: 'Calo mục tiêu',
			data: statisticData.map(item=>userInfo.calo_muc_tieu),
			borderColor: '#5eba7d',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		  },
		],
	  };
	 const dataWeight = {
		labels,
		datasets: [
		  {
			label: 'Cân nặng',
			data: statisticData.map(item=>item.can_nang?item.can_nang:userInfo.can_nang),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)'
		  },
		  {
			label: 'Cân nặng',
			data: statisticData.map(item=>userInfo.can_nang_muc_tieu),
			borderColor: '#5eba7d',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		  },
		  {
			label: '',
			data: statisticData.map(item=>0),
			borderColor: '#ccc',
		  },
		],
	  };
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
						highlightDates={dates.map(
							(item) => new Date(item)
						)}
					/>
					<br/>
					<h2>Biểu đồ thống kê theo calo</h2>
					<Line options={optionCalo} data={dataCalo}/>
					<br/>
					<h2>Biểu đồ thống kê theo cân nặng</h2>
					<Line options={optionWeight} data={dataWeight}/>
			</div>
		</>
	);
}

export default StatisticRange;
