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
