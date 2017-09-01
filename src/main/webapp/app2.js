

function clickHandler()
{
    var promise = fetch('PersonServlet');
     promise.then(function (response) {
       return response.json();
     }).then(function (persons) {
        
     vartableRowsArray = persons.map(function(p){
         return "<tr><td>"+p.fname + "</td><td>" +p.lname + "</td><td>"+p.phone + "</td></tr>"                                     //converting an array to table rows
     }).join("");

     document.getElementById("btn").onclick = clickHandler;

 });
}
