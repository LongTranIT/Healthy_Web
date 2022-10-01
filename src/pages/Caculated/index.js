import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Radio, FormControlLabel, RadioGroup, Button } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import classNames from "classnames/bind";
import styles from "./Caculated.module.css";
import Helpers from "../../common/Helpers";
import UserService from "../../services/user.service";

const userService = new UserService()
const cx = classNames.bind(styles);
function Following() {
	const navigate  = useNavigate()
	const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
	const caloStandard = Helpers.calculateCalo(
		userInfo.gioi_tinh,
		userInfo.tuoi,
		userInfo.can_nang,
		userInfo.chieu_cao,
		userInfo.van_dong
	);
	const [coefficient, setCoefficient] = useState(0);
	return (
		<>
			<h1> Kết quả tính toán</h1>
			<table>
				<tbody>
					<tr>
						<th>Giảm cân ({Math.floor(userInfo.can_nang * 0.9)} Kg)</th>
						<th>Giữ cân ({Math.floor(userInfo.can_nang * 1)} Kg)</th>
						<th>Tăng cân ({Math.floor(userInfo.can_nang * 1.1)} Kg)</th>
					</tr>
					<tr>
						<td>{Math.floor(caloStandard * 0.9)}</td>
						<td>{caloStandard}</td>
						<td>{Math.floor(caloStandard * 1.1)}</td>
					</tr>
				</tbody>
			</table>
			<h3>Vui lòng chọn mục tiêu bạn muốn</h3>

			<RadioGroup
				value={coefficient}
				onChange={(e) => {
					userInfo.calo_muc_tieu=e.target.value
					sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
					setCoefficient(e.target.value)
				}}
			>
				<FormControlLabel
					value={0.9}
					control={<Radio />}
					label={"Giảm cân ("+Math.floor(userInfo.can_nang * 0.9)+ "Kg)"}
				/>
				<FormControlLabel
					value={1}
					control={<Radio />}
					label={"Giữ cân ("+Math.floor(userInfo.can_nang * 1)+ "Kg)"}
				/>
				<FormControlLabel
					value={1.1}
					control={<Radio />}
					label={"Tăng cân ("+Math.floor(userInfo.can_nang * 1.1)+ "Kg)"}
				/>
			</RadioGroup>
			<i>
				Lượng calo bạn cần hàng hàng là: <b>{Math.floor(caloStandard * coefficient)}</b>
			</i>
			<br/>
			<Button
				size="medium"
				startIcon={<AddTaskIcon />}
				variant={"contained"}
				onClick={()=>{
					userService.updateUser(userInfo['_id'],{
						calo_muc_tieu: Math.floor(caloStandard * coefficient),
						can_nang_muc_tieu:Math.floor(userInfo.can_nang * coefficient)
					})
					navigate('/menu')
				}}
				disabled={coefficient===0}
			>
				Tạo thực đơn
			</Button>
		</>
	);
}

export default Following;
