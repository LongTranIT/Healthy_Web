import axios from "axios"
class ExerciseService{
	getAll=async()=>{
		const result= await axios.get("https://healthy--api.herokuapp.com/nhomco")
		return result.data
	}
}

export default ExerciseService