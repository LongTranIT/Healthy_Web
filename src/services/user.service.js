import axios from "axios"
class UserService{
	getUsers=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/nguoidung")
		return result.data
	}
}

export default UserService