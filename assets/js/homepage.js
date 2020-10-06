//this page searches for GitHub users and lists all of their repositiories
var getUserRepos = function(){
    fetch("https://api.github.com/users/octocat/repos")
};

getUserRepos();