function errorDiv(input, div) {
    if (! input.checkValidity()) {
        document.getElementById(div).innerHTML = input.title
    } else {
        document.getElementById(div).innerHTML = ""
    }
}