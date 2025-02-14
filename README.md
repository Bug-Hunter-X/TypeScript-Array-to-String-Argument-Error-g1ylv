# TypeScript Array to String Argument Error

This repository demonstrates a common TypeScript error: passing an array to a function expecting a single string.  The example shows the error and how to fix it by modifying either the function signature or the argument passed to the function.

## Bug

The `greeter` function expects a single string argument.  However, the `user` variable is an array of strings.  Calling `greeter` with `user` results in a type error.