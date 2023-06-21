const faqQuestions = document.querySelectorAll('.arrow');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains('active');

    if (isActive) {
      question.classList.remove('active');
      answer.style.display = 'none';
      question.style.fontWeight = 'normal';
    } else {
      faqQuestions.forEach((q) => {
        q.classList.remove('active');
        q.nextElementSibling.style.display = 'none';
        q.style.fontWeight = 'normal';
      });

      question.classList.add('active');
      answer.style.display = 'block';
      question.style.fontWeight = 'bold';
    }

  
  });
});







