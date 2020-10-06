# get-it-done
JSON Formatter (Links to an external site.) is a Google Chrome web extension that makes JSON data easier to read in the browser, providing syntax highlighting, collapsible trees, and clickable URLs.

The GitHub API (Links to an external site.) is a RESTFul server-side API that provides URLs, or endpoints, where a developer can make requests for GitHub user and repository data to use in their own application. You'll access this API using JavaScript in your project code.

Open source software is software that's free to use, with source code that's public and editable by the community.

GitHub provides a server-side API that allows apps like yours to request data as needed

A server is a piece of hardware set up to provide resources to other devices (often called clients). Clients can send requests to these servers in a number of ways. For example, a common HTTP (or HTTPS) request is to visit a URL in the browser (e.g., https://www.google.com). In turn, the server will send back the resource it defined for that URL, be it an HTML file, a PDF, an image, or data.

If an application has a database, that database lives on the server. Browsers and clients can't talk directly to a database, but they can make requests to the server that controls the database. Thus, the server can read and format the data from the database and send it back to the client

Using their public API, you can request almost any data about accounts on GitHub, like their repositories, contributors, commit histories, and more.

To obtain this information, you can make a request to one of GitHub's API endpoints. An endpoint specifies which resources you can access. All GitHub API access is over HTTPS, building off the base URL https://api.github.com. For example, the following URL returns data about a user named Octocat: https://api.github.com/users/octocat.

You might notice that the users/octocat URL displays a JavaScript object instead of HTML content. To be more specific, data displayed in this format is called JavaScript Object Notation, or JSON. APIs commonly use JSON to deliver data because developers can easily parse it for the information they want.

JSON is a lightweight data interchange format - way to format data that allows us to transfer it from a server to a client. Easy for computers to parse and generate. It can be used by many other languages (language agnostic)

Opens with curly braces and contains a number of key, value pairs - always using quotes on the key

{
    "name": "jess",
    "age": 22,
    "school": "oshkosh, uw extended"
}

JSON from users/octocat - if we assigned object to a variable response, how would we access location and number of followers?

console.log(response.location);
console.log(response.followers);


In terminal - curl https://api.github.com/users/octocat/repos
Using curl contacted the GitHub API endpoint and this returned JSON data
Curl only works in the terminal

If we can only use curl in the terminal, what options do we have for working in the browser? Fortunately, browsers provide other web APIs designed to communicate with server-side APIs. The newest of such APIs is called the Fetch API, because it fetches resources.

var getUserRepos = function() {
  fetch("https://api.github.com/users/octocat/repos");
};

In "network" tab browser makes an HTTP request.

 While most of it won't apply to us, note the Remote Address, which has a value along the lines of 192.30.255.117. This happens to be the IP address for GitHub's API. Every computer or server connected to the internet has an IP address to uniquely identify it. But thanks to the Domain Naming System (or DNS), you can use a more human-readable hostname like api.github.com, and the DNS will translate it to the correct IP address on your behalf.

 The response is the data that the request returned. Note that the data is formatted as JSON consisting of an array of objects. It would certainly be great to have access to that array in JavaScript!

 we've made an HTTP request to the GitHub API using fetch(). In turn, GitHub responded with JSON data. Remember that relationship: the request originated from the app, and the response came from GitHub's server.

 Promises are newer additions to JavaScript that act like more advanced callback functions. We'll dissect Promises in greater detail down the road. For now, note that Promises have a method called then(). This method is called when the Promise has been fulfilled.

 This kind of asynchronous communication with a server is often referred to as AJAX, which stands for Asynchronous JavaScript and XML. The XML in this term refers to an old-fashioned way of formatting data. XML has been largely replaced by JSON, but the name has persisted.

 status property has a value of 200 (which means success)

 json()
 -method formats the response as JSON, sometimes a resource may return non-JSON data, which then text() woudl be used

 the json() method returns another Promise, hence then(), method whose callback function captures the actual data.

 Testing a server-side API with hardcoded values (like the Octocat username) can help us verify that the API will work at all before we get carried away with too much other logic. 

  A lot of HTTP requests to server-side APIs receive responses with way more JSON data than necessary.

  HTTP headers allow the client and the server to pass additional information with an HTTP request or response. This often includes information like whether or not to cache (locally store) data and, if so, for how long. This data goes in the headers because it's often small in file size and not directly pertinent to the content in the body of a request or response.