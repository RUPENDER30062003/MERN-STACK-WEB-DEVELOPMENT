let btn=document.querySelector("#btn");
let body=document.querySelector("body");

btn.addEventListener("click",function(){
    body.style.backgroundColor="green";
});

const nameInput = document.getElementById('nameInput');
const nameHeading = document.getElementById('nameHeading');

// Listen for input changes on the name input element
nameInput.addEventListener('input', () => {
const inputText = nameInput.value;

// Remove all characters except letters (a-z, A-Z) and space
const cleanedText = inputText.replace(/[^a-zA-Z\s]/g, '');

// Update the heading text with cleaned input
nameHeading.textContent = cleanedText;
});

let newheading=document.getElementById("newheading");
let newinput=document.getElementById("newinput");

newinput.addEventListener("input",function(event){
    let text=newinput.value;
    let filteredText = text.replace(/[^a-zA-Z ]/g, ''); // Remove non-alphabetic characters
    newheading.textContent = filteredText;
})