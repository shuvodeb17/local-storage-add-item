const addItemBtn = () => {
    const addBar = document.getElementById('add-bar');
    const addBarText = addBar.value;
    console.log(addBarText);
    addBar.value = '';
    displayUi(addBarText);
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