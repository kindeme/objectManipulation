class Employee {
	#empName;
	#empId;
	#designation;
	#salary;
	constructor(empName, empId, designation) {
		this.#empName = empName;
		this.#empId = empId;
		this.#designation = designation;
	}

	get name() {
		return this.#empName;
	}
	get empID() {
		return this.#empId;
	}
	get designation() {
		return this.#designation;
	}
	set salary(salary) {
		if (salary > 1000) {
			this.#salary = salary;
			console.log("set your salary");
		} else {
			throw new Error("Salary less than 1000");
		}
	}

	get salary() {
		return this.#salary;
	}
}

let manager = new Employee("Yannick", "023", "manager");
manager.salary = 2000;
console.log(manager.salary);
