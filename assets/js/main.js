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
      });
    });
  }
}
