document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const parent = item.parentElement;
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            parent.classList.remove('expanded');
        } else {
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('expanded'));
            
            answer.style.display = 'block';
            parent.classList.add('expanded');
        }
    });
});