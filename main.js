const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 900,
        minHeight: 600,
        title: 'Helen 老师的 PET 魔法英语屋',
        icon: path.join(__dirname, 'assets', 'icon.png'), // 如果有图标的话
        webPreferences: {
            nodeIntegration: false,      // 安全起见，不使用nodeIntegration
            contextIsolation: true,
            enableRemoteModule: false,
            webSecurity: true
        },
        show: false, // 先不显示，等加载完成后再显示
        backgroundColor: '#f2f7ff'
    })

    win.loadFile(path.join(__dirname, 'src', 'index.html'))

    // 窗口加载完成后显示
    win.once('ready-to-show', () => {
        win.show()
        // 开发环境下可以打开开发者工具
        // win.webContents.openDevTools()
    })

    // 窗口关闭事件
    win.on('closed', () => {
        // 在macOS上，即使所有窗口关闭，应用通常继续运行
    })
}

// 当Electron完成初始化并准备创建浏览器窗口时调用
app.whenReady().then(() => {
    createWindow()

    // macOS上，当点击dock图标且没有其他窗口打开时，通常会重新创建窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// 当所有窗口关闭时退出应用（Windows和Linux）
app.on('window-all-closed', () => {
    // macOS上，除非用户明确退出，否则应用通常保持运行
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
