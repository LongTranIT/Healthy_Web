const Helpers ={
	sum: (a,b)=>a+b,
	/**
	 * Return amount calo need for a person
	 * @param {string} gender 
	 * @param {number} age 
	 * @param {number} weight 
	 * @param {number} height 
	 * @param {number} activityLevel 
	 */
	calculateCalo:(gender,age, weight, height, activityLevel)=>{
		const weightIbs=weight*2.2046;
		const heightInch= height* 0.3937;
		let caloResult;
		if(gender==="nam"||gender==="male"){
			caloResult=10*weightIbs + 6.25*heightInch - 5*age +5
		}
		else if(gender==="nữ"||gender==="female"){
			caloResult=10*weightIbs + 6.25*heightInch - 5*age - 161
		}
		else {
			caloResult=0;
		}
		return Math.floor(caloResult)*activityLevel;
	}
}
export default Helpers