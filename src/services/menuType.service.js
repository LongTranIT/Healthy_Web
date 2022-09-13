import axios from "axios"
class MenuTypeService{
	getAll=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/loaithucdon")
		return result.data
	}
	addMenu=async(data)=>{
		const ID_THUC_DON_TU_TAO="62fa11c76f8ef04029c3beb4"
		const result= await axios.put("https://healthy--api.herokuapp.com/loaithucdon/"+ID_THUC_DON_TU_TAO,data)
		return result.data
	}
}

export default MenuTypeService