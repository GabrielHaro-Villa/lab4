function checkPassword() {
	var password1 = document.getElementById("pass").value;
	var confirmPass = document.getElementById("re_pass").value;

	if (password1.length < 8) {
		alert('The length of the first pass is less than 8 letters');
	} else if (password1 != confirmPass) {
		alert('Passwords do not match!');
	} else {
		alert('Passwords match!');
	}
}
