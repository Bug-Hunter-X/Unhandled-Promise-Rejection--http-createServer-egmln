# Unhandled Promise Rejection in Node.js http.createServer
This repository demonstrates a common error encountered when using the `http.createServer` method in Node.js: an unhandled promise rejection.  The issue arises from incorrectly treating `server.listen` as if it returns a promise, when it does not.

## Problem
The provided code attempts to use the server.listen method like it returns a promise, which results in an unhandled promise rejection error.  This error is caught by the Node.js process and is not immediately obvious.

## Solution
The solution is to remove any promise handling for `server.listen`. The `server.listen` method is asynchronous, but it does not return a promise.  Error handling should be implemented differently.