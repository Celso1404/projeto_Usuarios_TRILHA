var fields = document.querySelectorAll("#form-user-create [name]"); //puxa todos os dados do campo determinado do html
var user = {};

fields.forEach(function(field, index){

    if (field.name == "gender" && field.checked) {

        user.gender

    } else {

        user[field.name] = field.value; //atribuí o nome do usuário
        


    }
});

console.log(user)