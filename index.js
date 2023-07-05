let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let upperrcase=document.getElementById("upperrcase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon")



// This is for showing input slider value 
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input", ()=>
{
    sliderValue.textContent=inputSlider.value;
})



// This is calling back gnerate password function 
genBtn.addEventListener("click",()=>
{
    passBox.value=generatePassword();
});



// function to generate password
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";
function generatePassword()
{
    let genPassword = " ";
    let allChars = " ";
    allChars += lowercase.checked ? lowerChars: "";
    allChars += upperrcase.checked ? upperChars: "";
    allChars += numbers.checked ? allNumbers: "";
    allChars += symbols.checked ? allSymbols: "";

    if(allChars==" " || allChars.length == 0)
    {
        return genPassword;
    }

    // we are making loop so we can take the length of password that user gave 
    let i=1;
    while(i<=inputSlider.value)
    {
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}



//Here we are making the copy text
copyIcon.addEventListener("click",()=>
{
    if(passBox.value !="" || passBox.value>=1)
    {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "copied";
        setTimeout(()=>
        {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title="";
        },1000 );
    }
});