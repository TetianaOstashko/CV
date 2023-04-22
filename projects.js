window.addEventListener('load', function() {
    fetch('https://api.github.com/users/TetianaOstashko/repos')
      .then(response => response.json())
      .then(data => {
        const projectList = document.getElementById('project-list');
        data.forEach(repo => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.textContent = repo.full_name;
          a.href = repo.html_url;
          li.appendChild(a);
          if (repo.description) {
            const p = document.createElement('p');
            p.textContent = repo.description;
            li.appendChild(p);
          }
          projectList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Помилка завантаження даних про репозиторії з GitHub', error);
    });
});


