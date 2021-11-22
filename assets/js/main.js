var gitHubForm = document.querySelector('#github-lookup-form');

gitHubForm.addEventListener('submit', handleGitHubForm);

function handleGitHubForm(event) {
  var gitHubUsersApi = 'https://api.github.com/users/'
  var username = document.querySelector('#username').value;
  event.preventDefault();
  console.log("Heard submit event! Let's look up", username);
  if ('fetch' in window) {
    fetch(gitHubUsersApi + username).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        attachGitHubUser(data.name, data.avatar_url);
      });
    });
  }
}

function attachGitHubUser(username, avatar) {
  var main = document.querySelector('main');
  var article = document.createElement('article');
  var h2 = document.createElement('h2');
  var img = document.createElement('img');
  h2.innerText = username;
  img.src = avatar;
  article.appendChild(h2);
  article.appendChild(img);
  main.appendChild(article);
}
