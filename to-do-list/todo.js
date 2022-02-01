const add = document.getElementById('addBtn');
var val = document.getElementById('input');
const container = document.getElementById('container');


class item {
    constructor(itemName) {
        //Item Div created
        this.createDiv(itemName)
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.type = 'text';

        let itemBox = document.createElement('div');

        let editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Delete'

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => this.remove(itemBox));
        // removeBtn.addEventListener('click', this.remove(itemBox), false);
        editBtn.addEventListener('click', () => this.edit(input));
        // editBtn.addEventListener('click', this.edit(input));
    }

    edit(item) {
        let it = prompt("Update Item Here", item.value);
        if (it == "" || it == null) {
            alert("Please Update Item Name");
        }
        else {
            item.value = it;
            // item.value=item.value;
            // return item.value
        }
    }
    remove(item) {
        container.removeChild(item);
    }
}

function addItem() {
    if (val.value != "") {
        new item(val.value);
        val.value = "";
    }
}

// new item("hello");
add.addEventListener('click', addItem);

