import axios from "axios"
class FoodService{
	getAll=async()=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thucpham`)
		return result.data
	}
}

export default FoodService