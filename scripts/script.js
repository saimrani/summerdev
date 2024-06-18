document.addEventListener('DOMContentLoaded', () => {
    const addItemBtn = document.getElementById('addItemBtn');
    const removeItemBtn = document.getElementById('removeItemBtn');
    const itemList = document.getElementById('itemList');

    addItemBtn.addEventListener('click', () => {
        const newItem = document.createElement('li');
        const itemCount = itemList.getElementsByTagName('li').length + 1;
        newItem.textContent = `Item ${itemCount}`;
        itemList.appendChild(newItem);
    });

    removeItemBtn.addEventListener('click', () => {
        if (itemList.children.length > 0) {
            itemList.removeChild(itemList.lastChild);
        }
    });
});