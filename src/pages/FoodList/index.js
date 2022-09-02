import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

import classNames from "classnames/bind";
import styles from "./FoodList.module.css";

const cx = classNames.bind(styles);
function FoodList() {
	const columns = [
		{ field: "stt", headerName: "STT", width: 200 },
		{
			field: "ten",
			headerName: "Tên thực phầm",
			width: 300,
		},
		{
			field: "calo",
			headerName: "Năng lượng (kcal/100g)",
			width: 300,
		},
	];

	const rows = [
		{ id: 1, stt: 1, ten: "Snow", calo: 100 },
		{ id: 1, stt: 1, ten: "Snow", calo: 100 },
		{ id: 1, stt: 1, ten: "Snow", calo: 100 },
		{ id: 1, stt: 1, ten: "Snow", calo: 100 },
		{ id: 1, stt: 1, ten: "Snow", calo: 100 },
		{ id: 1, stt: 1, ten: "Snow", calo: 100 },
		{ id: 1, stt: 1, ten: "Snow", calo: 100 },
	];

	return (
		<>
			<h1>Danh sách thực phẩm</h1>
			<Box sx={{ height: 400, width: "60%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={20}
					rowsPerPageOptions={[5]}
					disableSelectionOnClick
					autoHeight
				/>
			</Box>
		</>
	);
}

export default FoodList;
