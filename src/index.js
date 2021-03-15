import { Request } from './request'

const form = document.querySelector("#employee-form")
const inputName = document.querySelector("#name")
const inputDepartmen = document.querySelector("#department")
const inputSalary = document.querySelector("#salary")
const employeeList = document.querySelector("#employees")
const updateEmployeeBtn = document.querySelector("#update")

const req = new Request("http://localhost:3000/employees")

// req.get()
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

// req.post({
//   name: "Canan Birinci",
//   salary: 7000,
//   department: "Software Developer"
// })
// .then(res => console.log(res))
// .catch(err => console.error(err))

// req.put({
//   name: "Ferhat Demir",
//   salary: 9000,
//   department: "Front-end Developer"
// }, 4)
// .then(res => console.log(res))
// .catch(err => console.error(err))

// req.delete(4)
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
