/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
}
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0px";
}

// Average Function

function average() {
    var result = document.getElementById("result");
    var sum = 0;

    for (var i = 1; i <= 10; i++) {
        var number = document.getElementById("num" + i);

        if (number.value === '') {
            number.style.borderColor = "#ED6A5A";
            return false;
        }

        else if (isNaN(number.value)) {
            number.style.borderColor = "#ED6A5A";
            alert("Please enter a valid number for field " + i);
            return false;
        }

        else {
            sum += parseFloat(number.value);
            number.style.borderColor = "#060047";
        }
    }

    result.value = sum / 10;
    result.style.borderColor = "#060047";

    return result;
}

// Hide Function

function hideAverageSection() {
    var button = document.getElementById("averageButton").innerText;

    if (button == "HIDE AVERAGE SECTION") {
        document.getElementById("average").style.display = "none";
        document.getElementById("averageButton").innerText = "Show Average Section";
        return true;
    }

    else {
        document.getElementById("average").style.display = "block";
        document.getElementById("averageButton").innerText = "Hide Average Section";
        return true;
    }
}

function hideContactSection() {
    var button = document.getElementById("contactButton").innerText;

    if (button == "HIDE CONTACT SECTION") {
        document.getElementById("main").style.display = "none";
        document.getElementById("contactButton").innerText = "Show Contact Section";
        return true;
    }

    else {
        document.getElementById("main").style.display = "block";
        document.getElementById("contactButton").innerText = "Hide Contact Section";
        return true;
    }
}

// Validation Form

function validateForm() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPhone = document.getElementById("userPhone").value;
    var error = document.getElementById("error");
    var text = '';

    if (userName === '') {
        // Error
        text = "Please Enter Username";
        error.innerHTML = text;
        return false;
    }

    else if (userName.length < 3) {
        // Error
        text = "Please Enter Valid Username";
        error.innerHTML = text;
        return false;
    }

    else if (userEmail === '') {
        // Error
        text = "Please Enter Email Address";
        error.innerHTML = text;
        return false;
    }

    else if (isNaN(userEmail) && userEmail.indexOf("@") == -1 && userEmail.length < 10) {
        // Error
        text = "Please Enter Valid Email Address";
        error.innerHTML = text;
        return false;
    }

    else if (userPhone === '') {
        // Error
        text = "Please Enter Phone Number";
        error.innerHTML = text;
        return false;
    }

    else if (!(isNaN(userPhone)) && userPhone.length != 11) {
        // Error
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false;
    }
    
    else {
        alert("Your information have been successfully submitted.");
    }
}