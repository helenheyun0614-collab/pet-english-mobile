#!/bin/bash

# PET英语屋 - 移动端一键部署脚本
# 使用方法: ./deploy.sh

set -e  # 遇到错误立即退出

echo "🚀 开始部署 PET英语屋移动端..."

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 1. 准备部署文件
echo -e "${BLUE}📁 准备部署文件...${NC}"

# 复制源文件到部署目录
cp /Users/helen/Downloads/Pet/src/index-mobile.html /Users/helen/Downloads/Pet/netlify-deploy/index.html

# 更新版本号（添加时间戳）
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
sed -i '' "s/<title>PET英语屋 - 移动端.*<\/title>/<title>PET英语屋 - 移动端 v3.3 ($TIMESTAMP)<\/title>/" /Users/helen/Downloads/Pet/netlify-deploy/index.html

echo -e "${GREEN}✅ 部署文件已准备${NC}"
echo ""

# 2. 提交到 GitHub（触发 Netlify 自动部署）
echo -e "${BLUE}📤 推送到 GitHub...${NC}"

cd /Users/helen/Downloads/Pet

# 添加所有更改
git add -A

# 提交
git commit -m "🚀 v3.3: UI和交互优化

更新内容：
- 导航按钮简化：只保留箭头图标（增大到28px）
- 测试模式改进：显示中文释义，选择英文单词
- 移除左右滑动切换单词功能（避免误触）
- 词典查询也使用在线音频API"

# 推送
git push origin main

echo -e "${GREEN}✅ 已推送到 GitHub${NC}"
echo ""

# 3. 说明
echo -e "${BLUE}📝 部署说明：${NC}"
echo "   如果已配置 Netlify + GitHub 集成："
echo "   → Netlify 会自动检测到推送并开始部署"
echo "   → 约 1-2 分钟后访问新链接"
echo ""
echo "   如果未配置，请访问："
echo "   → https://app.netlify.com/start"
echo "   → 连接 GitHub 仓库 pet-english-mobile"
echo "   → 选择主分支并部署"
echo ""
echo -e "${GREEN}🎉 部署完成！${NC}"
