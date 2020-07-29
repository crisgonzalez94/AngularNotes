// Import necesarios
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

// Inicializamos la ventana de Electron
let win: BrowserWindow;
function createWindow() {
    //para fullscreem , reemplazar parametros por fullscreem:
    win = new BrowserWindow({ width: 500, height: 800 });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/AngularNotes/index.html`),
            protocol: 'file:',
            slashes: true
        })
    );

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// Para ver el estado de la app
app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
