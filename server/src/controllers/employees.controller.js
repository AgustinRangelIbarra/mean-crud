const employeeCtrl = {};
const Employee = require('../models/Employee');


employeeCtrl.getEmployees = async (req, res) => {
	console.log('worked/getEmployees');
	const employees = await Employee.find();
	res.json(employees);
}


employeeCtrl.createEmployee = async (req, res) => {
	console.log("worked/createEmployee");
	const newEmployee = new Employee(req.body);
	await newEmployee.save();
	res.send({message: "Employee Created"});
}


employeeCtrl.getEmployee = async (req, res) => {
	console.log("worked/getEmployee");
	console.log(req.params);
	const employeeId = req.params.id
	const employee = await Employee.findById(employeeId);
	res.json(employee);
}


employeeCtrl.updateEmployee = async (req, res) => {
	console.log('worked/updateEmployee');
	const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
	res.json({status: "Employee updated"});
}


employeeCtrl.deleteEmployee = async (req, res) => {
	console.log("worked/deleteEmployee");
	const employee = await Employee.findByIdAndDelete(req.params.id);
	res.json({status: "Employee Deleted"});
}


module.exports = employeeCtrl;
