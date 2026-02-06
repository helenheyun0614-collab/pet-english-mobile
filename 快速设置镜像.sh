#!/bin/bash

echo "🚀 快速设置国内镜像"
echo "===================="
echo ""

# 设置 npm 镜像
echo "📦 正在设置 npm 镜像..."
npm config set registry https://registry.npmmirror.com

if [ $? -eq 0 ]; then
    echo "✅ npm 镜像设置成功！"
    echo "   当前镜像: $(npm config get registry)"
else
    echo "❌ npm 镜像设置失败"
    exit 1
fi

echo ""

# 设置 Electron 镜像
echo "⚡ 正在设置 Electron 镜像..."
export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"

if [ $? -eq 0 ]; then
    echo "✅ Electron 镜像设置成功！"
    echo "   当前镜像: $ELECTRON_MIRROR"
else
    echo "❌ Electron 镜像设置失败"
    exit 1
fi

echo ""
echo "🎉 镜像设置完成！"
echo ""
echo "现在可以运行："
echo "  npm install    # 安装依赖"
echo "  npm run build  # 打包应用"
echo ""
echo "💡 提示：Electron 镜像设置是临时的（仅当前终端有效）"
echo "   如果想永久设置，请查看 设置国内镜像指南.md"



















