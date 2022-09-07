var string = "";
var body = document.querySelector("body")
var formEl = document.querySelector(".myForm");
var inputEl = document.querySelector(".inputMy");



var result = document.querySelector(".result");
var bWord = document.querySelector(".longest-word")
var bLength = document.querySelector(".longest-length")

formEl.addEventListener('submit', (event) =>{

    event.preventDefault();

    result.classList.remove("unvisible");

    bWord.textContent = ""
    bLength.textContent = "";
    let inputValue = inputEl.value;
    let longString = bigstring(inputValue);
    bWord.textContent =longString ;
    bLength.textContent = longString.length;

    inputEl.value = "";
})

function bigstring(str){
    const arr = str.split(' ');
    let longestWord = arr[0];
    let longestWordLength =arr[0].length;
    for(var i=0; i < arr.length; i++){
        if(arr[i].length > longestWordLength){
            longestWord = arr[i];
        }
    }
    return longestWord;
}