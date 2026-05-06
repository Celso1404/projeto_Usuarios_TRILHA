var fields = document.querySelectorAll("#form-user-create [name]"); //puxa todos os dados do campo determinado do html
var user = {};


document.getElementById("form-user-create").addEventListener("submit", function(event) {

    event.preventDefault();

    fields.forEach(function(field, index){

    if (field.name == "gender" && field.checked) {

        user[field.name] = field.value;

    } else {

        user[field.name] = field.value; //atribuí o nome do usuário
        
    }
});

console.log(user);

});