/*
const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

// validate is dev
const isDev = process.env.NODE_ENV !== "development";

// connection db
require("./database");
// models
const Product = require("./models/product.model");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Application",
    width: isDev ? 1000 : 500,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // open devtools
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, "./views/index.html"));
}

app.whenReady().then(() => {
  {
    createMainWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
      }
    });
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// ipc
ipcMain.on("get-products", async (e, arg) => {
  const products = await Product.find({});
  e.reply("get-products", JSON.stringify(products));
});

ipcMain.on("create-product", async (e, arg) => {
  const newProduct = new Product(arg);
  const productSaved = await newProduct.save();
  e.reply("create-product", JSON.stringify(productSaved));
});
*/

const path = require("path");
const { app, BrowserWindow } = require("electron");

// validate is dev
const isDev = process.env.NODE_ENV !== "development";

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Application",
    width: isDev ? 1000 : 500,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // open devtools
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, "./views/index.html"));
}

app.whenReady().then(() => {
  {
    createMainWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
      }
    });
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
