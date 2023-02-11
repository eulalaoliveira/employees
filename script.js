//variable to manipulate html
var table = document.getElementById("infoTable");
var hidden = table.style.display = "none";
var searchBtn = document.getElementById('searchBtn');
var notFound = document.getElementById('notFound');

//function when the btn is clicked
searchBtn.onclick = async function () {
    //it takes the value of textarea - search value
    var inputText = document.getElementById('inputText').value;

    //fetch to take json file and then create an array to be used
    const data = await fetch("http://localhost:8000/", {params: { term: inputText }}).then((response) => response.json())
    let html = '';

    //filter by id, lastname and level
    if (inputText.length >= 1) {
      const result = data.filter(employee => 
        employee.empId == inputText ||
        employee.empLastname == inputText || 
        employee.empLevel == inputText);

        console.log(result);

        result.forEach(employee => {
          html += `<tr>
          <td>${employee.empId}</td>
          <td>${employee.empFirstname}</td>
          <td>${employee.empLastname}</td>
          <td>${employee.empSalary}</td>
          <td>${employee.empLevel}</td>
          </tr>`;
        })
      } else {
        (data || []).forEach(employee => {
          html += `<tr>
            <td>${employee.empId}</td>
            <td>${employee.empFirstname}</td>
            <td>${employee.empLastname}</td>
            <td>${employee.empSalary}</td>
            <td>${employee.empLevel}</td>
          </tr>`;
        })
      }
    
    if (inputText.length >= 1) {
      const result = data.filter(employee => 
        employee.empId == inputText ||
        employee.empLastname == inputText || 
        employee.empLevel == inputText);

        console.log(result);
        console.log("entrou aqui");

        if (result == false) {
          alert("No records found");
        }
      }
      
      console.log(data);
      document.querySelector('tbody').innerHTML = html;
      document.getElementById('infoTable').style.display = 'block'
    
}