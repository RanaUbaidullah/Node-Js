import chalk from 'chalk';
import http from 'http'
import oneLinerJoke from 'one-liner-joke'

console.log(chalk.blue('Hello world!'));
http.createServer((req, res) => {
  // Set the response headers to specify the content type as JSON.
  res.setHeader('Content-Type', 'application/json')

  // Generate a random joke.
  var getRandomJoke = oneLinerJoke.getRandomJoke();

  // Create a JSON object.
  const jsonData = {
    randomjoke: getRandomJoke,
    data: chalk.blue('Hello world')
  }

  // Send the JSON data as the response body.
  res.write(JSON.stringify(jsonData))

  // Close the response.
  res.end()
}).listen(3000)
