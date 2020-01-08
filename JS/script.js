//generate random password
function handleChange() {
    var complexity = document.getElementById("complexity");  
    document.getElementById("selected-complexity").innerHTML = complexity.value;
  };
  
  
  function generate() {
    
       // How long should out password be?
       var complexity = document.getElementById("complexity").value;
    
       // What requirements should it have?
       var useSpecialChars = document.getElementById("cb_special").checked;
       var useNumeric = document.getElementById("cb_numeric").checked;
       var useLowercase = document.getElementById("cb_lowercase").checked;
       var useUppercase = document.getElementById("cb_uppercase").checked;
        //  My friend taught me about conditionals and ! (logical operator).  
       if(!useSpecialChars && !useNumeric && !useLowercase && !useUppercase){

        alert("Please make at least one selection.")
        return;
       }
    
       // Requirement values
       var specialChars = '!@#$%^&*()_+';
       var numericChars = '1234567890';
       var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
       var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
       // Build out the final value string in which to build the password from.
       let values = `${useUppercase ? upperCaseChars : ''}${useLowercase ? lowerCaseChars : ''}${useSpecialChars ? specialChars: ''}${useNumeric ? numericChars : ''}`;
      
  
      var password = '';

      // Create for loop to choose password characters
      for (var i = 0; i <= complexity; i++) {
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
      }
  
      //Add password to textbox/display area
      document.getElementById('display').value = password;
  } 
    //Add ability to copy and paste
  function copyPassword(){
      var password = document.getElementById('display');
      password.select();
      document.execCommand("copy");
      alert('password copied!')
  }