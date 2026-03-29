const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".icon");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.maxHeight = null;
      });
      document.querySelectorAll(".icon").forEach(i => {
        i.textContent = "+";
      });

      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "×";
    }
  });
});


const emailInput=document.getElementById("input1");
const getstartedbtn=document.getElementById("get-start");
if(getstartedbtn){
  getstartedbtn.addEventListener("click",()=>{
    const email =emailInput.value.trim();

if (email.endsWith("@gmail.com")&&email.length>10){
  window.location.href="watching.html";
}
else{
  alert("Please enter a valid Gmail address.");
  emailInput.focus();
  emailInput.style.borderColor="red";

}

  });
}


if(emailInput){
  emailInput.addEventListener("input",()=>{
    emailInput.style.borderColor="";
  });
}