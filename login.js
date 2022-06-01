function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "father" && password == "less") {
        alert("login succesfully");
		window.location.replace('public_html/room1.html');
        return false;

    } else {
        alert("login failed");
    }


}