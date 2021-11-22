var gitHubForm = document.querySelector('#github-lookup-form');

gitHubForm.addEventListener('submit', handleGitHubForm);

function handleGitHubForm(event) {
  console.log('Heard submit event!');
  event.preventDefault();
}
