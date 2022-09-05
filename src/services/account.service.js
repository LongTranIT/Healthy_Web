import axios from "axios"
class AccountService{
	login=async(username, password)=>{
		const result= await axios.post("https://healthy--api.herokuapp.com/login",{username, password})
		return result.data
	}
}

export default AccountService