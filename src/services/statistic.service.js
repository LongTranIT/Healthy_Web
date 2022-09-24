import axios from "axios"
class StatisticService{
	getAll=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thongke")
		return result.data
	}
	getByDate=async(data)=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thongke",{
			params:data
		})
		return result.data
	}
	getDates=async(idNguoiDung)=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thongke/date",{
			params:idNguoiDung
		})
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thongke/"+id)
		return result.data
	}
	getByRange=async(data)=>{
		const result= await axios.get("http://localhost:3000/thongke/",{
			params:data
		})
		return result.data
	}
	updateWeight=async(id,weight)=>{
		const result= await axios.patch("http://localhost:3000/thongke/"+id,{
			can_nang: weight
		})
		return result.data
	}
	add=async(data)=>{
		const result= await axios.post("https://healthy--api.herokuapp.com/thongke/",data)
		return result.data
	}
}

export default StatisticService