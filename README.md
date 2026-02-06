# Helen 老师的 PET 魔法英语屋

PET级别英语学习桌面应用，包含单词背诵、阅读理解、固定搭配、完形填空等模块。

## 功能特点

- 📚 **单词背诵**：700+ PET级别词汇
- 📖 **阅读理解**：200道PET级别阅读题
- 🔗 **固定搭配**：200道固定搭配练习
- 🧩 **完形填空**：200道完形填空练习
- 📅 **打卡记录**：记录学习进度，支持周统计和月复盘
- 💾 **本地存储**：所有数据自动保存到本地
- 📁 **Excel导入**：支持导入自定义题库

## 开发环境运行

### 安装依赖

```bash
npm install
```

### 运行开发版本

```bash
npm run dev
```

## 打包为桌面应用

### 打包当前平台

```bash
npm run build
```

### 打包特定平台

```bash
# macOS
npm run build:mac

# Windows
npm run build:win

# Linux
npm run build:linux

# 所有平台
npm run build:all
```

打包后的应用会在 `dist` 目录中。

## 系统要求

- Node.js 16+ 
- npm 或 yarn

## 项目结构

```
Pet/
├── main.js              # Electron主进程
├── package.json         # 项目配置
├── src/
│   ├── index.html      # 主页面
│   └── pet-content.js   # 题库数据
├── libs/
│   └── xlsx.full.min.js # Excel处理库
└── dist/               # 打包输出目录（打包后生成）
```

## 注意事项

1. 首次打包可能需要较长时间，因为需要下载Electron二进制文件
2. macOS打包需要代码签名（可选，用于分发）
3. Windows打包需要安装NSIS（electron-builder会自动处理）

## 许可证

MIT






