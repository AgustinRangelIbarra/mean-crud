const employeeCtrl = {};


employeeCtrl.getEmployees = (req, res) => {
	console.log('worked/getEmployees');
	res.send('getEmployees');
}

employeeCtrl.createEmployee = (req, res) => {
	console.log("worked/createEmployee");
	res.send('createEmployee');
}

employeeCtrl.getEmployee = (req, res) => {
	console.log("worked/getEmployee");
	res.send('getEmployee');
}

employeeCtrl.updateEmployee = (req, res) => {
	console.log('worked/updateEmployee');
	res.send('updateEmployee');
}

employeeCtrl.deleteEmployee = (req, res) => {
	console.log("worked/deleteEmployee");
	res.send("deleteEmployee");
}


module.exports = employeeCtrl;
