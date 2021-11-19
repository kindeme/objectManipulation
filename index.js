let Employee = function (name, role, workHours) {
	let salary = 0;
	let overTime = 0;
	this.name = name;
	this.role = role;
	this.workHours = workHours;
	this.overTime = () => {
		if (this.workHours > 40) {
			overTime = workHours - 40;
		}
		return overTime;
	};
	this.getSalary = () => {
		switch (this.role.toLowerCase()) {
			case "manager":
				salary = 6000;
				break;
			case "consultant":
				salary = 4000;
				break;
			case "senior manager":
				salary = 8000;
				break;
			default:
				salary = 4000;
				break;
		}

		salary += this.overTime() * 50;
		return salary;
	};
	this.display = () => {
		console.log(
			`${this.name} is a ${
				this.role
			}, his/her salary is $${this.getSalary()} with ${overTime} hours overtime.`
		);
	};
};

let manager = new Employee("Francis", "Manager", 46);
manager.display();

let consultant = new Employee("Tabitha", "Consultant", 40);
consultant.display();

let seniorManager = new Employee("Ryan", "Senior Manager", 52);
seniorManager.display();
