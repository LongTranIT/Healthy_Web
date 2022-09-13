import axios from "axios"
class MenuDetailService{
	getAll=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/chitietthucdon")
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/chitietthucdon/"+id)
		return result.data
	}
	add=async(data)=>{
		const result= await axios.post("https://healthy--api.herokuapp.com/chitietthucdon/",data)
		return result.data
	}
}

export default MenuDetailService