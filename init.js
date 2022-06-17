const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 250
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})