import axios from "axios"
class MenuTypeService{
	getAll=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/loaithucdon")
		return result.data
	}
}

export default MenuTypeService