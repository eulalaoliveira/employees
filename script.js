var table = document.getElementById("infoTable");
var hidden = table.style.display = "none";
var searchBtn = document.getElementById('searchBtn');

searchBtn.onclick = function () {
    
    var inputText = document.getElementById('inputText').value;

    if (inputText) {
        table.style.display = "";
    } 

    if (inputText == "") {
        return alert("Type something.");
    } else {
        fetch("employees.json").then((response) => {
            response.json().then((usuarios) => {
                usuarios.map((usuario) => {
                    console.log("foi chamada");
                    if (usuario.empId == inputText ||
                    usuario.empLastname == inputText || 
                    usuario.empLevel == inputText) {
                        
                        document.getElementById('idTable').innerHTML = usuario.empId;
                        document.getElementById('firstNameTable').innerHTML = usuario.empFirstname;
                        document.getElementById('lastNameTable').innerHTML = usuario.empLastname;
                        document.getElementById('salaryTable').innerHTML = usuario.empSalary;
                        document.getElementById('levelTable').innerHTML = usuario.empLevel;
                        } 
                })
            })
        })
    }
}


