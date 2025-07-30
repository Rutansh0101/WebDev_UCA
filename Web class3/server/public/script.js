// JS is single-thredded, object-oriented scripting language

// function foo(param1) {
// // Hoisting is a feature of JS where it moves the declaration not the initialisation of a variable to the top level scope of the inner function.
//     // var x; Declared here due to Hoisting.
//     if(param1) {
//         console.log(param1);
//     } else {
//         console.log("Hello World!", document.getElementById("tag1")?.innerHTML);
//         // document.getElementById("tag1")?.innerHTML
//         // This checks if the element exists and gives 'undefined' if it doesn't exists.
//     }
//     if(document.getElementById("tag1")) {
//         var x = 20; // Originally written here.
//         // x = 20; This becomes x = 20 because declaration was moved above.
//         document.getElementById("tag1").innerHTML = "Hello World from JavaScript!";
//     }
//     // document.getElementById("tag1")?.innerHTML = "Hello World from JavaScript!";
//     // This will throw an error because '?' can't be on left side of '=' operator.

// }
// foo();

// setTimeout(() => {
//     console.log("This is a delayed message.");
// }, 2000);
// making a function inside.

// setTimeout(foo, 2000, "Hello World from setTimeout");
// It is used to delay the code by second, the first parameter is function and second is time.

var ProductList = [];

function loadProducts(renderProducts) {
    document.getElementById("data").innerHTML = "Getting Data from the server..."
  setTimeout(() => {
    ProductList = ProductListFromServer;
    renderProducts();
  }, 2000);
}

// function loadData() {
//     document.getElementById("data").innerHTML = `<table>
//                 <thead>
//                     <tr>
//                         <th>Product Name</th>
//                         <th>Price</th>
//                         <th>Description</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Product 1</td>
//                         <td>$10.00</td>
//                         <td>This is a great Prroduct</td>
//                     </tr>
//                     <tr>
//                         <td>Product 2</td>
//                         <td>$20.00</td>
//                         <td>This is even better Product</td>
//                     </tr>
//                 </tbody>
//             </table>`;
// }

function renderProducts() {
  document.getElementById("data").innerHTML = `<table>
        <thead>
            <tr>
                <th>Sr.No.</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${
                ProductList.map(
                    (product, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.description}</td>
                        </tr>
                        `
                ).join("")
            }
        </tbody>
    </table>`;
}

loadProducts(renderProducts);
// Template literal (Double back tics ``) is used to define multi-line strings, initially made for defining templates.

// setTimeout(loadProducts, 2000);
// setTimeout(loadData, 2000);

// setTimeout is not JS feature it is a web API called by Browser
