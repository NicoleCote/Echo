/***********************************************************
* By: Nicole Cote
*
* User types in a username, clicks the "Copy" button
* and the user's input is echoed back.
*
***********************************************************/


function echoUserName() {
	var userInput,		//username given by user 
		echoInput; 	//copy of the username

	userInput = document.getElementById('username').value;
	console.log("Username: " + userInput);

	if(userInput.length != 0) {
		error.innerHTML = "";
		echoInput = userInput;
		echoform.echoedUserName.value = echoInput;
	}
	else {
		//window.alert("Error: Did not input a username.")
		error.innerHTML = " * Required";
	}



}
