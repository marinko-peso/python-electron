const { app, BrowserWindow } = require('electron');
const PythonShell = require('python-shell');


// PythonShell.run('hello.py', (err, results) => {
//     if (err) throw err;
//     console.log('hello.py was executed');
//     console.log('results: ', results);
// });

function createWindow() {
    window = new BrowserWindow({ width: 800, height: 600 });
    window.loadFile('index.html');

    PythonShell.run('engine.py', (err, results) => {
        if (err) console.log(err);
    });

    // First attempt to run Python code.
    // const python = require('child_process').spawn('python', ['./hello.py']);
    // python.stdout.on('data', data => {
    //     console.log('data: ', data.toString('utf8'));
    // });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
