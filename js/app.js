const displayLocalStorage = () => {
    const product = getProduct();
    for (const products in product) {
        displayUi(products)
    }
}
const addItemBtn = () => {
    const addBar = document.getElementById('add-bar');
    const addBarText = addBar.value;
    if (!addBarText) {
        return;
    }
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
    if (addProduct[name]) {
        addProduct[name] = addProduct[name] + 1;
    } else {
        addProduct[name] = 1;
    }
    const stringify = JSON.stringify(addProduct);
    localStorage.setItem('product', stringify);
}

const placeOrder = () => {
    document.getElementById('add').textContent = '';
    localStorage.removeItem('product');
}
displayLocalStorage();