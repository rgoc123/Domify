# Domify
#### Introduction
Domify is an exercise in using Vanilla JavaScript for one of software engineering's most powerful fundamental skills: creating custom libraries. This project taught two important things: 1) Vanilla JavaScript is amazingly powerful, and 2) writing custom libraries provides incredible flexibility and efficiency.

Other important fundamentals I learned from this project:
- Using callbacks and user events (keystrokes, clicks, etc.) to write efficient code and provide flexible user inputs
- Establishing nodes with traversable parent-children relationships

Below is further description of the library and how to implement it!

#### Description
Domify is a JavaScript DOM library that allows developers to manipulate the DOM in several ways:

- Select single and multiple DOM elements, selectors, and functions
- Manipulate DOM elements
- Manipulate CSS classes
- Traverse parent and children nodes

Live Example: [MakeItHappen](http://robertoconnor.io/MakeItHappen/)

#### How to Implement
Simply download this repo and include the "./lib/domify_main.js" in an HTML file.

#### Example of the code
The below example shows the code behind the "attr()" function, one function that provides two abilities: a developer can either get or set attributes for a given HTML element based on different needs.
```javascript
attr(attributeName, attributeValue){
  if(attributeValue === undefined){
    return this.nodeListArray[0].getAttribute(attributeName);
  } else {
    this.nodeListArray[0].setAttribute(attributeName, attributeValue);
  }
}
```
