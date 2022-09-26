import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

import classNames from "classnames/bind";
import styles from "./FoodList.module.css";
import FoodService from "../../services/food.service";

const cx = classNames.bind(styles);
const foodService = new FoodService()
function FoodList() {
	const [data, setData]= useState([])
	useEffect(()=>{
		const initData= async()=>{
			const foods= await foodService.getAll()
			setData(foods)
		}
		initData()
	},[])
	const columns = [
		{ field: "stt", headerName: "STT", width: 150 },
		{
			field: "loai_thuc_pham",
			headerName: "Loại thực phầm",
			width: 250,
		},
		{
			field: "ten",
			headerName: "Tên thực phầm",
			width: 250,
		},
		{
			field: "calo",
			headerName: "Năng lượng (kcal/100g)",
			width: 250,
		},
	];

	const rows = data.map((item, index)=>{
		return {
			stt: index+1,
			...item,
			id: item['_id']
		}
	});

	return (
		<>
			<h1>Danh sách thực phẩm</h1>
			<Box sx={{ height: 400, width: "60%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[5]}
					disableSelectionOnClick
					autoHeight
				/>
			</Box>
		</>
	);
}

export default FoodList;
