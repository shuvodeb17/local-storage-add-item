const addItemBtn = () => {
    const addBar = document.getElementById('add-bar');
    const addBarText = addBar.value;
    console.log(addBarText);
    addBar.value = '';
}