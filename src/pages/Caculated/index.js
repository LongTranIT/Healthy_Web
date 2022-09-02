import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Caculated.module.css";
import Helpers from "../../common/Helpers";

const cx = classNames.bind(styles);
function Following() {
	const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
	const caloStandard = Helpers.calculateCalo(
		userInfo.gender,
		userInfo.age,
		userInfo.weight,
		userInfo.height,
		userInfo.activityLevel
	);
    const [caloSelected, setCaloSelected]= useState(0);
	return (
		<>
			<h1> Kết quả tính toán</h1>
			<table>
				<tbody>
					<tr>
						<th>Giảm cân</th>
						<th>Giữ cân</th>
						<th>Tăng cân</th>
					</tr>
					<tr>
						<td>{Math.floor(caloStandard * 0.8)}</td>
						<td>{caloStandard}</td>
						<td>{Math.floor(caloStandard * 1.2)}</td>
					</tr>
				</tbody>
			</table>
			<h3>Vui lòng chọn mục tiêu bạn muốn</h3>
	
				<RadioGroup
					value={caloSelected}
					onChange={(e)=>setCaloSelected(e.target.value)}
				>
					<FormControlLabel
						value={Math.floor(caloStandard * 0.8)}
						control={<Radio />}
						label="Giảm cân"
					/>
					<FormControlLabel
						value={caloStandard}
						control={<Radio />}
						label="Giữ cân"
					/>
					<FormControlLabel
						value={Math.floor(caloStandard * 1.2)}
						control={<Radio />}
						label="Tăng cân"
					/>
				</RadioGroup>
			<i>Lượng calo bạn cần hàng hàng là: <b>{caloSelected}</b></i>
		</>
	);
}

export default Following;
