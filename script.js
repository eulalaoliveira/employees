//variable to manipulate html
var table = document.getElementById("infoTable");
var hidden = table.style.display = "none";
var searchBtn = document.getElementById('searchBtn');
var notFound = document.getElementById('notFound');

//function when the btn is clicked
searchBtn.onclick = function () {
    
    //it takes the value of textarea - search value
    var inputText = document.getElementById('inputText').value;

    //fetch to take json file and then create a array to be used
    fetch("employees.json").then((response) => {
        response.json().then((usuarios) => {
            //map to create a new array of objects
            usuarios.map((usuario) => {
                console.log("foi chamada");
                //loop to check the whole array
                for (let i = 0; i <= usuarios.length; i++) {
                    if (usuario.empId == inputText ||
                        usuario.empLastname == inputText || 
                        usuario.empLevel == inputText) {
                            {inputText ? table.style.display = "" : null}
                            document.getElementById('idTable').innerHTML = usuario.empId;
                            document.getElementById('firstNameTable').innerHTML = usuario.empFirstname;
                            document.getElementById('lastNameTable').innerHTML = usuario.empLastname;
                            document.getElementById('salaryTable').innerHTML = usuario.empSalary;
                            document.getElementById('levelTable').innerHTML = usuario.empLevel;
                        }
                    }
                })
            })
        })
    }
/*for (let i = 0; i <= usuarios.length; i++) {
                    if (usuario.empId == inputText ||
                        usuario.empLastname == inputText || 
                        usuario.empLevel == inputText) {
                            {inputText ? table.style.display = "" : null}
                            document.getElementById('idTable').innerHTML = usuario.empId;
                            document.getElementById('firstNameTable').innerHTML = usuario.empFirstname;
                            document.getElementById('lastNameTable').innerHTML = usuario.empLastname;
                            document.getElementById('salaryTable').innerHTML = usuario.empSalary;
                            document.getElementById('levelTable').innerHTML = usuario.empLevel;
                            }

                }*/

