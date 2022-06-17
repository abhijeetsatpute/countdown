const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        icon:'icon.png',
        width: 420,
        height: 140,
        resizable: false,
        maximizable: false,
        titleBarStyle: 'hidden',
        //   titleBarOverlay: {
        //     color: '#1a1c2a',
        //     symbolColor: '#FFFFFF'
        //   },
        alwaysOnTop: true,
        closable: false
    })
    
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})