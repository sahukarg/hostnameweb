// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
setInterval(function () {
    var hostnameElement = document.getElementById("hostname");
    hostnameElement.classList.toggle("flashing-js");
}, 1000); // Adjust interval as needed
