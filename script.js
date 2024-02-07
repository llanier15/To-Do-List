(() => {
  // Empty array until to-do items are added
  let toDoListArray = [];
  
  const form = document.querySelector(".form");
  const input = form.querySelector(".form__input");
  const ul = document.querySelector(".toDoList");

  form.addEventListener('submit', e => {
    // Prevent page from reloading
    e.preventDefault();
    // Give item a unique ID
    let itemId = String(Date.now());
    // Assign input value
    let toDoItem = input.value;
    // Pass ID and item into functions
    addItemToDOM(itemId , toDoItem);
    addItemToArray(itemId, toDoItem);
    // Clear the input box.
    input.value = '';
  });

  ul.addEventListener('click', e => {
    let id = e.target.getAttribute('data-id')
    if (!id) return 
    // Pass id through to functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });

  // Functions
  function addItemToDOM(itemId, toDoItem) {
    // Create a li
    const li = document.createElement('li')
    li.setAttribute("data-id", itemId);
    // Add toDoItem text to li
    li.innerText = toDoItem
    // Add li to the DOM
    ul.appendChild(li);
  }

  function addItemToArray(itemId, toDoItem) {
    // Add item to array with an ID so we can delete it later
    toDoListArray.push({ itemId, toDoItem});
    console.log(toDoListArray)
  }

  function removeItemFromDOM(id) {
    // Get the list item by data ID
    var li = document.querySelector('[data-id="' + id + '"]');
    // Remove list item
    ul.removeChild(li);
  }

  function removeItemFromArray(id) {
    // Create a new toDoListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter(item => item.itemId !== id);
    console.log(toDoListArray);
  }

})();
