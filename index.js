

function ispalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

   const reversedStr = cleanStr.split('').reverse().join('');     //in this line we use the replace but it is the string method  not array  so we used the reverse ()  to convert the string into array then it join() to combine the array into string
   
   console.log(reversedStr);

   return cleanStr === reversedStr;
}

function palindromeChecker(){
    const inputText = document.getElementById("inputChecker");
    const result = document.getElementById("result");

    if(ispalindrome(inputText.value)){
        result.textContent= `"${inputText.value}" is a Palindrome`;
    }else{
        result.textContent= `"${inputText.value}" is Not a Palindrome`;
    }

    result.classList.add('fadeIn');
    inputText.value="";
}


document.getElementById('checkButton').addEventListener("click", palindromeChecker);