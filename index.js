const token = '34aac727a539d537412a8182af7db0cf2d2566a7';


function getToken() {
	return token 
}

// POST /repos/:owner/:repo/forks
// https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks


function forkRepo() {

 fetch(`https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`), 
  	{
  		method: 'POST',
  		headers: {
  			Authorization: `token ${getToken()};`
  		}
  	}.then(res => console.log(res))
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
