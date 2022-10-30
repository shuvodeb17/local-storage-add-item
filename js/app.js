const displayLocalStorage = () => {
    const product = getProduct();
    for (const products in product) {
        displayUi(products)
    }
}
const addItemBtn = () => {
    const addBar = document.getElementById('add-bar');
    const addBarText = addBar.value;

    // clear add bar
    addBar.value = '';

    displayUi(addBarText);
    addProduct(addBarText);
}
// display UI
const displayUi = productName => {
    const ul = document.getElementById('add');
    const li = document.createElement('li');
    li.innerHTML = `
    <li>${productName}</li>
    `
    ul.appendChild(li);
}

// local storage
const getProduct = () => {
    const product = localStorage.getItem('product');
    let productCon;
    if (product) {
        productCon = JSON.parse(product);
    } else {
        productCon = {};
    }
    return productCon;
}

// add local storage
const addProduct = name => {
    const addProduct = getProduct();
    addProduct[name] = 1;
    const stringify = JSON.stringify(addProduct);
    localStorage.setItem('product', stringify);
}
displayLocalStorage();