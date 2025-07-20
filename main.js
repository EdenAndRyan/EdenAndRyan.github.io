document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';

    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));

    if (!isVisible) {
      answer.style.display = 'block';
      button.classList.add('open');
    }
  });
});
