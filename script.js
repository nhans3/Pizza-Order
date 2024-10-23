// Inputs & InnerHTML

// .innerHTML command: Used in 2 ways.
//   1. Gets the contents of an HTML element E.g. <p>Click <a>here</a> </p>
// The innerHTML of the paragraph is Click <a>here</a>
// The innerHTML os the anchor/ <a> is: here
//    2. Sets the content of an HTML element.

// document.getElementById("btn").addEventListener("click", showContent);

// function showContent() {
//   document.getElementById("output").innerHTML =
//     "Welcome to my <a>Pizzeria</a>. Order below";
// }

//Value command: Retrieves the content of an <input> element.
//    *IMPORTANT* value command must ALWAYS be used within a function.

document.getElementById("order-btn").addEventListener("click", getOrder);

function getOrder() {
  // Input: Retrieve user's data.
  let topping1 = document.getElementById("top1input").value;
  let topping2 = document.getElementById("top2input").value;
  let size = document.getElementById("sizeInput").value;

  // Processing: Make output statement.
  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes.`;

  // Output: Display output in the "Your Order" section of the website.
  document.getElementById("order-output").innerHTML = output;
}
