var gitHubForm = document.querySelector('#github-lookup-form');

gitHubForm.addEventListener('submit', handleGitHubForm);

function handleGitHubForm(event) {
  var username = document.querySelector('#username').value;
  event.preventDefault();
  console.log("Heard submit event! Let's look up", username);
}
