/*window.addEventListener('load', function() {
  class GithubApi {
    constructor(username, token) {
      this.username = username;
      this.token = token;
    }
  
    async getRepos() {
      const response = await fetch(`https://api.github.com/users/${this.username}/repos`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      const data = await response.json();
      return data;
    }
  }
  
  const githubApi = new GithubApi('TetianaOstashko', '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');
  
  const reposList = document.getElementById('project-list');
  
  githubApi.getRepos()
    .then(data => {
      for (let repo of data) {
        const repoItem = document.createElement('li');
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.full_name;
        repoItem.appendChild(repoLink);
        if (repo.description) {
          const repoDesc = document.createElement('p');
          repoDesc.textContent = repo.description;
          repoItem.appendChild(repoDesc);
        }
        reposList.appendChild(repoItem);
      }
    })
    .catch(error => {
      console.error(error);
    });
});

*/

window.addEventListener('load', function() {
  class GithubApi {
    constructor(username, token) {
      this.username = username;
      this.token = token;
    }
  
    async getRepos() {
      const response = await fetch(`https://api.github.com/users/${this.username}/repos`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      const data = await response.json();
      return data;
    }
  }
  
  const githubApi = new GithubApi('TetianaOstashko', 'insert token');
  
  const reposList = document.getElementById('repos-list');
  
  githubApi.getRepos()
    .then(data => {
      const dataArray = Object.values(data);
      dataArray.forEach(repo => {
        const repoItem = document.createElement('li');
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.full_name;
        repoItem.appendChild(repoLink);
        if (repo.description) {
          const repoDesc = document.createElement('p');
          repoDesc.textContent = repo.description;
          repoItem.appendChild(repoDesc);
        }
        reposList.appendChild(repoItem);
      });
    })
    .catch(error => {
      console.error(error);
    });
});


