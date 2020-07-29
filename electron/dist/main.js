"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necesarios
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
// Inicializamos la ventana de Electron
var win;
function createWindow() {
    //para fullscreem , reemplazar parametros por fullscreem:
    win = new electron_1.BrowserWindow({ width: 500, height: 800 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/AngularNotes/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    //This is for view console
    /*
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
    */
}
// Para ver el estado de la app
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map