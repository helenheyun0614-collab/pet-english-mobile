#!/bin/bash

echo "🚀 PET魔法英语屋 - 快速打包脚本"
echo "=================================="
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未找到 Node.js"
    echo "请先安装 Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js 版本: $(node -v)"
echo ""

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    echo "（如果网络较慢，建议使用国内镜像：npm config set registry https://registry.npmmirror.com）"
    echo ""
    
    npm install
    
    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ 依赖安装失败！"
        echo "💡 建议："
        echo "   1. 检查网络连接"
        echo "   2. 使用国内镜像：npm config set registry https://registry.npmmirror.com"
        echo "   3. 清除缓存：npm cache clean --force"
        exit 1
    fi
    echo ""
else
    echo "✅ 依赖已安装"
    echo ""
fi

# 选择打包平台
echo "请选择打包平台："
echo "1) macOS (.dmg)"
echo "2) Windows (.exe)"
echo "3) Linux (.AppImage)"
echo "4) 当前系统"
echo ""
read -p "请输入选项 (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📦 正在打包 macOS 版本..."
        npm run build:mac
        ;;
    2)
        echo ""
        echo "📦 正在打包 Windows 版本..."
        npm run build:win
        ;;
    3)
        echo ""
        echo "📦 正在打包 Linux 版本..."
        npm run build:linux
        ;;
    4)
        echo ""
        echo "📦 正在打包当前系统版本..."
        npm run build
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 打包完成！"
    echo "📁 文件位置: dist/ 目录"
    echo ""
    echo "🎉 可以开始分发应用了！"
else
    echo ""
    echo "❌ 打包失败，请查看错误信息"
    exit 1
fi



















