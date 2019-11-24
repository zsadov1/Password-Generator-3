//generate random password
function handleChange() {
    const complexity = document.getElementById("complexity");  
    document.getElementById("selected-complexity").innerHTML = complexity.value;
  };
  
  
  function generate() {
    
       // How long should out password be?
       const complexity = document.getElementById("complexity").value;
    
       // What requirements should it have?
       const useSpecialChars = document.getElementById("cb_special").checked;
       const useNumeric = document.getElementById("cb_numeric").checked;
       const useLowercase = document.getElementById("cb_lowercase").checked;
       const useUppercase = document.getElementById("cb_uppercase").checked;

       if(!useSpecialChars && !useNumeric && !useLowercase && !useUppercase){

        alert("Please make at least one selection.")
        return;
       }
    
       // Requirement values
       const specialChars = '!@#$%^&*()_+';
       const numericChars = '1234567890';
       const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
       const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
       // Build out the final value string in which to build the password from.
       let values = `${useUppercase ? upperCaseChars : ''}${useLowercase ? lowerCaseChars : ''}${useSpecialChars ? specialChars: ''}${useNumeric ? numericChars : ''}`;
      
  
      var password = '';

      // create for loop to choose password characters
      for (var i = 0; i <= complexity; i++) {
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
      }
  
      //add password to textbox/display area
      document.getElementById('display').value = password;
  } 

  function copyPassword(){
      const password = document.getElementById('display');
      password.select();
      document.execCommand("copy");
      alert('password copied!')
  }