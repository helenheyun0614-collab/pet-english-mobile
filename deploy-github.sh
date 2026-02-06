#!/bin/bash

# PET英语屋 - GitHub Pages 部署脚本

echo "🚀 PET英语屋 - GitHub Pages 部署向导"
echo ""

# 检查是否有GitHub远程仓库
if git remote get-url origin &>/dev/null; then
    echo "✅ 已检测到远程仓库"
    git remote get-url origin
else
    echo "📝 创建步骤："
    echo ""
    echo "1️⃣  在浏览器打开：https://github.com/new"
    echo "2️⃣  创建新仓库："
    echo "   - 仓库名：pet-english-mobile"
    echo "   - 设置为 Public（公开）"
    echo "   - ❌ 不要初始化 README"
    echo ""
    echo "3️⃣  创建后，GitHub 会显示类似这样的命令："
    echo "   git remote add origin https://github.com/你的用户名/pet-english-mobile.git"
    echo ""

    read -p "请输入你的GitHub用户名: " username
    read -p "请输入仓库名 (默认: pet-english-mobile): " reponame

    reponame=${reponame:-pet-english-mobile}

    git remote add origin "https://github.com/${username}/${reponame}.git"
    echo ""
    echo "✅ 远程仓库已添加"
fi

echo ""
echo "📤 推送代码到 GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "🌐 启用 GitHub Pages："
    echo "1️⃣  访问：https://github.com/${username:-YOUR_USERNAME}/${reponame:-pet-english-mobile}/settings/pages"
    echo "2️⃣  Source 选择："
    echo "   - Branch: main"
    echo "   - Folder: /src"
    echo "3️⃣  点击 Save"
    echo ""
    echo "⏳ 等待1-2分钟，你的移动端应用将部署到："
    echo "   https://${username:-YOUR_USERNAME}.github.io/${reponame:-pet-english-mobile}/index-mobile.html"
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "1️⃣  是否已创建 GitHub 仓库"
    echo "2️⃣  仓库名是否正确"
    echo "3️⃣  是否已登录 GitHub (git credential fill)"
fi
