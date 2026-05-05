var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");


var fields = document.querySelectorAll("#form-user-create [name]"); //puxa todos os dados do campo determinado do html

fields.forEach(function(field, index){

    if (field.name == "gender" && field.checked) {

        console.log("SIM", field)

    } else {

        console.log("Não")
    }

});