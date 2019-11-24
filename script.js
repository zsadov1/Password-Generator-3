//generate random password
function generate(){

    //set password length/complexity
    var complexity = document.getElementById("slider").values;

    //possible password values
    var values = 'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+';

    var password = '';

    // create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById('display').value = password;
}   