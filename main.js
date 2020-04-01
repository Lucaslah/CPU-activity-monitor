const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hiddenInset',
    backgroundColor: "#111",
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.once('ready-to-show', () => {
    win.show()
  })
}

app.whenReady().then(createWindow)