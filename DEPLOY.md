# PET英语屋 移动端部署指南

## 🚀 最简单方法：Netlify Drop（推荐）

1. 访问 https://app.netlify.com/drop
2. 将 `src` 文件夹拖到网页中
3. 等待10秒，获得永久链接！

---

## 📱 使用方法

部署后，手机浏览器访问：
```
https://你的链接.netlify.app/index-mobile.html
```

### 添加到主屏幕（iOS）：
1. Safari 打开上面的链接
2. 点击底部"分享"按钮
3. 滑动找到"添加到主屏幕"
4. 点击"添加"

### 添加到主屏幕（Android）：
1. Chrome 打开链接
2. 点击菜单（三个点）
4. 选择"添加到主屏幕"

---

## 🔗 数据同步说明

PC端和移动端会自动同步数据（只要在同一浏览器）：
- PC端：file:///Users/helen/Downloads/Pet/src/index.html
- 手机端：https://你的链接.netlify.app/index-mobile.html

**注意**：跨域（file:// 和 https://）时，使用"导出/导入数据"功能手动同步。

---

## ❓ 常见问题

**Q: 数据会丢失吗？**  
A: 不会，数据存在手机浏览器本地，随时可以导出备份。

**Q: 离线能用吗？**  
A: 可以添加到主屏幕后，有缓存可以部分离线使用。

**Q: 如何更新？**  
A: 重新上传文件到 Netlify Drop 即可。
