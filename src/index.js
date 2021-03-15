import { Request } from './request'
import { UI } from './ui'

const form = document.querySelector("#employee-form")
const inputName = document.querySelector("#name")
const inputDepartmen = document.querySelector("#department")
const inputSalary = document.querySelector("#salary")
const employeeList = document.querySelector("#employees")
const updateEmployeeBtn = document.querySelector("#update")

const req = new Request("http://localhost:3000/employees")
const ui = new UI()

let state = null

eventListener()
function eventListener() {
  document.addEventListener("DOMContentLoaded", getAllEmployee)
  form.addEventListener("submit", addEmployee)
  employeeList.addEventListener("click", updateOrDelete)
  updateEmployeeBtn.addEventListener("click", updEmployee)
}

function getAllEmployee() {
  req.get()
  .then(res => {
    ui.addAllEmployee(res)
  })
  .catch(err => console.error(err))
}

function addEmployee(e) {
  const name = inputName.value.trim()
  const department = inputDepartmen.value.trim()
  const salary = inputSalary.value.trim()

  if ((name === "") || (department === "") || (salary === "")) {
    alert("Lutfen tum alanları doldurunuz..")
  } else {
    req.post({
      name,
      department,
      salary: Number(salary)
    })
    .then(res => {
      ui.addEmployeeUI(res)
    })
    .catch(err => console.error(err))
  }

  ui.clear()
  e.preventDefault()
}

function updateOrDelete(e) {
  if (e.target.id === "delete-employee") {
    if (confirm("Silmek istediğinizden emin misiniz..?")) {
      deleteEmployee(e.target)
    }
  } else if (e.target.id === "update-employee") {
    updateEmployee(e.target.parentElement.parentElement)    
  }

  e.preventDefault()
}

function deleteEmployee(element) {
  const id = element.parentElement.previousElementSibling.previousElementSibling.textContent

  req.delete(id)
    .then(res => {
      ui.deleteEmployee(element.parentElement.parentElement)
    })
    .catch(err => console.error(err))
}

function updateEmployee(element) {
  ui.toggleFunc(element)

  if (state === null) {
    state = {
      updateId: element.children[3].textContent,
      updateParent: element
    }
  } else {
    state = null
  }
}

function updEmployee() {
  if (state) {
    const data = {
      name: inputName.value.trim(),
      department: inputDepartmen.value.trim(),
      salary: Number(inputSalary.value.trim())
    }

    req.put(data, state.updateId)
      .then(res => {
        ui.updateEmployeeUI(res, state.updateParent)
        ui.clear()
      })
      .catch(err => console.error(err))   
    }
}

