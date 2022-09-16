import axios from "axios"
class StatisticService{
	getAll=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thongke")
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thongke/"+id)
		return result.data
	}
	add=async(data)=>{
		const result= await axios.post("https://healthy--api.herokuapp.com/thongke/",data)
		return result.data
	}
}

export default StatisticService