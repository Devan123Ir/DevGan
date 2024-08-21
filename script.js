document.getElementById('search-button').addEventListener('click', function () {
  const input = document.getElementById('search-input').value.toLowerCase();
  const links = document.querySelectorAll('.link-list li a');

  links.forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes(input)) {
      link.parentElement.style.display = '';
    } else {
      link.parentElement.style.display = 'none';
    }
  });
});

document.getElementById('add-link-button').addEventListener('click', function () {
  const newLink = document.getElementById('add-link-input').value;
  if (newLink) {
    const linkList = document.getElementById('programming-links'); // Change ID according to the correct section
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = newLink;
    li.appendChild(a);
    linkList.appendChild(li);
    document.getElementById('add-link-input').value = '';
  }
});
