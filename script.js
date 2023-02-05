//variable to manipulate html
var table = document.getElementById("infoTable");
var hidden = table.style.display = "none";
var searchBtn = document.getElementById('searchBtn');
var notFound = document.getElementById('notFound');

//function when the btn is clicked
searchBtn.onclick = async function () {
    //it takes the value of textarea - search value
    var inputText = document.getElementById('inputText').value;

    //fetch to take json file and then create a array to be used
    const data = await fetch("http://localhost:8000/", {params: { term: inputText }}).then((response) => response.json())
    let html = '';
    (data || []).forEach(usuario => {
      html += `<tr>
        <td>${usuario.empId}</td>
        <td>${usuario.empFirstname}</td>
        <td>${usuario.empLastname}</td>
        <td>${usuario.empSalary}</td>
        <td>${usuario.empLevel}</td>
      </tr>`;
    });
    
    document.querySelector('tbody').innerHTML = html;
    document.getElementById('infoTable').style.display = 'block'
    
}