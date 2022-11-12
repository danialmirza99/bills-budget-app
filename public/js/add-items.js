const getItems = document.getElementById("add-item");
getItems.addEventListener("click", addItem);

function addItem() {
    document.getElementsByClassName("item-list").innerHTML = "Hello World";
    console.log("test")
}