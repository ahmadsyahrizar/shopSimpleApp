//Product Constructor
/**
 * here to create new Product
 */
class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}


//UI 
class UI {
  //Product template
  addProduct(product) {
    const productList = document.getElementById("product-list")
    const element = document.createElement("div"); // <= create div element
    //to input new html as a child of div element above;
    element.innerHTML = ` 
      <div class="card text-center mb-4">
        <div class="card-body">
          <h5><strong>${product.name}</strong></h5>
          <strong >Price</strong>: ${product.price}€ 
          <strong class="ml-4">Year</strong>: ${product.year} 
          <a href="#" class="btn btn-danger ml-5" name="delete">Delete</a>
        </div>
      </div>
    `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      return true;
    }
  }

  showMessage(message, cssClass) {
    const msg = document.createElement("div");
    msg.className = `alert alert-${cssClass} mt-2 text-center`;
    msg.appendChild(document.createTextNode(message));

    //Show in the DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");

    //Insert message in the UI
    container.insertBefore(msg, app);

    //Remove after 2 seconds
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 1000);
  }
}

//DOM Events
document.getElementById("product-form").addEventListener("submit", e => {
  const name = e.target['product name'].value;
  const  price =  e.target['number'].value;
  const  year =  e.target['product year'].value;

  console.log({name, price, year})

  // Create a new Object Product
  const product = new Product(name, price, year);

  //Create a new UI
  const ui = new UI();

  //Save product and then we reset ad
  ui.addProduct(product);
  ui.resetForm();
  ui.showMessage("Product added successfully", "success");

  e.preventDefault();
  // console.log({e})


});

//Delete product
document.getElementById("product-list").addEventListener("click", e => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  if(ui.deleteProduct(e.target)) {
    ui.showMessage("Product removed successfully", "danger");
  }
  e.preventDefault();
});
