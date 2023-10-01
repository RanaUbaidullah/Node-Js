const http = require('http')

http.createServer((req, res) => {
  // Set the response headers to specify the content type as JSON.
  res.setHeader('Content-Type', 'application/json')

  // Create a JSON object.
  const jsonData = {
    name: 'Ubaidullah',
    message: 'tyr fgdgf'
  }

  // Send the JSON data as the response body.
  res.write(JSON.stringify(jsonData))

  // Close the response.
  res.end()
}).listen(3000)
