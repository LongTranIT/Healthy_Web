import axios from "axios"
class MenuService{
	getAll=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thucdon")
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/thucdon/"+id)
		return result.data
	}
}

export default MenuService