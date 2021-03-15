export class UI {
  constructor() {
    this.inputName = document.querySelector("#name")
    this.inputDepartmen = document.querySelector("#department")
    this.inputSalary = document.querySelector("#salary")
    this.employeeList = document.querySelector("#employees")
    this.updateEmployeeBtn = document.querySelector("#update")
  }

  addAllEmployee(employees) {
    let result = ""
    employees.forEach(element => {
      result += `
      <tr>
        <td>${element.name}</td>
        <td>${element.department}</td>
        <td>${element.salary}</td>
        <td>${element.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
      </tr>
      `
    });

    this.employeeList.innerHTML = result
  }

  addEmployeeUI(element) {
    this.employeeList.innerHTML += `
      <tr>
        <td>${element.name}</td>
        <td>${element.department}</td>
        <td>${element.salary}</td>
        <td>${element.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
      </tr>
    `
  }

  deleteEmployee(element) {
    element.remove()
  }

  toggleFunc(element) {
    if (this.updateEmployeeBtn.style.display === "none") {
      this.updateEmployeeBtn.style.display = "block"
      this.employeInfos(element)
    } else {
      this.updateEmployeeBtn.style.display = "none"
      this.clear()
    }
  }

  employeInfos(element) {
    const children = element.children

    this.inputName.value = children[0].textContent
    this.inputDepartmen.value = children[1].textContent
    this.inputSalary.value = children[2].textContent
  }

  updateEmployeeUI(data, element) {
    element.innerHTML = `
      <tr>
        <td>${data.name}</td>
        <td>${data.department}</td>
        <td>${data.salary}</td>
        <td>${data.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
      </tr>
    `
    this.updateEmployeeBtn.style.display = "none"
  }

  clear() {
    this.inputName.value = ""
    this.inputDepartmen.value = ""
    this.inputSalary.value = ""
  }
}