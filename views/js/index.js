const filepicker = document.querySelector("#filepicker");
filepicker.addEventListener(
  "change",
  (event) => {
    let output = document.getElementById("listing");
    for (const file of event.target.files) {
      let item = document.createElement("li");
      item.textContent = file.webkitRelativePath;
      output.appendChild(item);
    }
  },
  false
);

const inputName = document.querySelector("#input-name");
const inputDescription = document.querySelector("#input-description");
const inputPrice = document.querySelector("#input-price");

const getButton = document.querySelector("#btn-get");
getButton.addEventListener("click", () => {
  ipcRenderer.send("get-products");
});

const saveButton = document.querySelector("#btn-save");
saveButton.addEventListener("click", () => {
  const data = {
    name: inputName.value,
    description: inputDescription.value,
    price: Number(inputPrice.value),
  };
  ipcRenderer.send("create-product", data);
});

ipcRenderer.on("get-products", (event, args) => {
  console.log(args);
  const products = JSON.parse(args);
  console.log(products);
});

ipcRenderer.on("create-product", (e, args) => {
  const productSaved = JSON.parse(args);
  console.log(productSaved);
  alert("Product Created Successfully");
});
