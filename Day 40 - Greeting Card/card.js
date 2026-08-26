let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedElement = JSON.parse(greeting);

let p1Element = document.getElementById("p1");
p1Element.textContent = "From:" + parsedElement.from;

let p2Element = document.getElementById("p2");
p2Element.textContent = "To:" + parsedElement.to;

let p3Element = document.getElementById("p3");
p3Element.textContent = parsedElement.greetText;
