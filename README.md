# General Info
- Listens on port 9000 for incoming HTTP connections in non-blocking fashion, accepts and handles concurrent
 connections with acceptable connections/second.
- The service implements a handler that expects a string-bodied submission to the'POST /input' route. It remembers every single string submitted this way. See below.
- The service implements a handler at the 'GET /query' route with query parameter-'key'. It will check to see if it has ever seen this exact key from previous input
submissions. If it hasn’t seen the key before, it will return 0 (i.e. “0”). If it has seen the key before, it will return the number of times it has seen the key (e.g. “3”) in the response body.

# Setup
- start mongod service on your platform.
- enter 'node index.js' at the root directory of the assignment folder.
