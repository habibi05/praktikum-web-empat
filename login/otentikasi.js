function validate() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username == "ahmad2017" && password == "integrity") {
		window.alert("Login Sukses");
		window.location.href = "index.html";
	} else {
		alert("Username atau Password yang anda masukan Salah");
	}
}