function errorDiv(input, div) {
    if (! input.checkValidity()) {
        console.log("hi")
        document.getElementById(div).innerHTML = input.title
    } else {
        document.getElementById(div).innerHTML = ""
    }
}