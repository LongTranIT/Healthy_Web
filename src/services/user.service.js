import axios from "axios"
class UserService{
	getUsers=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/nguoidung")
		return result.data
	}
	addUser=async(data)=>{
		const result= await axios.post("https://healthy--api.herokuapp.com/nguoidung",data)
		return result.data
	}
	updateUser=async(id,data)=>{
		const result= await axios.patch("https://healthy--api.herokuapp.com/nguoidung/"+id,data)
		return result.data
	}
}

export default UserService