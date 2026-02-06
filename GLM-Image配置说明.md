# GLM-Image API 配置说明

## 概述

词典查询功能已集成智谱 GLM-Image 图片生成 API，可以为每个单词生成对应的插图，帮助用户更好地理解和记忆单词。

## API 获取方式

1. 访问 [智谱AI开放平台](https://open.bigmodel.cn/)
2. 注册/登录账号
3. 进入控制台，创建 API Key
4. 复制生成的 API Key

## 配置步骤

### 方法一：通过浏览器控制台设置

1. 打开应用
2. 按 `F12` 打开开发者工具
3. 切换到 `Console`（控制台）标签
4. 输入以下命令并按回车：

```javascript
localStorage.setItem('glm_image_api_key', '你的API_KEY')
```

将 `你的API_KEY` 替换为你在智谱平台获取的实际 API Key。

### 方法二：通过 JavaScript 代码设置

在应用的 `<script>` 标签中添加：

```javascript
// 在页面加载前设置 API Key
localStorage.setItem('glm_image_api_key', '你的API_KEY');
```

## API 调用说明

### API 端点

```
POST https://open.bigmodel.cn/api/paas/v4/images/generations
```

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| model | string | 是 | 固定值：`glm-image` |
| prompt | string | 是 | 图片描述文本（最大1000字符） |
| size | string | 否 | 图片尺寸，默认 `1280x1280` |

### 支持的图片尺寸

- 1280x1280 (1:1)
- 1568x1056 (3:4)
- 1056x1568 (4:3)
- 1472x1088 (16:9)
- 1088x1472 (9:16)
- 1728x960 (16:9)
- 960x1728 (9:16)

自定义尺寸要求：
- 长宽范围：512px - 2048px
- 长宽必须是 32 的整数倍

### 费用

- 0.1 元 / 次

## 功能说明

### 词典图片生成

当用户查询单词时，系统会自动调用 GLM-Image API 生成该单词的插图：

1. **Prompt 设计**：系统会为每个单词生成适合儿童学习的卡通风格插图提示词
2. **图片尺寸**：默认使用 1280x1280 尺寸
3. **加载方式**：图片异步加载，失败时显示默认图片
4. **错误处理**：如果 API 调用失败，会自动回退到默认图片

### 示例 Prompt

```
A simple, clear illustration of "adventure" for English vocabulary learning, suitable for children, cartoon style, bright colors, white background
```

## 故障排除

### 问题：图片无法加载

**可能原因：**
1. API Key 未配置或已失效
2. API 调用次数超限
3. 网络连接问题

**解决方法：**
1. 检查 API Key 是否正确设置
2. 打开浏览器控制台查看错误日志
3. 确认智谱平台账户余额充足

### 问题：图片生成速度慢

**说明：**
- GLM-Image API 响应时间通常在 3-10 秒
- 系统使用异步加载，不会阻塞主功能
- 图片加载失败时会显示默认图片

### 问题：图片质量不符合预期

**说明：**
- GLM-Image 模型会根据 Prompt 生成图片
- 可以通过修改 Prompt 来调整图片风格
- 建议使用简单、明确的描述

## 技术实现

### 代码位置

- `src/index.html` - 主要词典查询功能
- `src/pet-content.js` - 词典内容加载逻辑

### 核心函数

```javascript
window.fetchAIGeneratedImage = function(word, callback) {
    const GLM_IMAGE_API_KEY = localStorage.getItem('glm_image_api_key') || '';
    const GLM_IMAGE_API_URL = 'https://open.bigmodel.cn/api/paas/v4/images/generations';
    
    // API 调用逻辑...
}
```

### 回调机制

```javascript
window.fetchAIGeneratedImage(word, function(url) {
    if (url) {
        // 图片 URL 获取成功
        img.src = url;
    } else {
        // 使用默认图片
        img.src = 'assets/default.jpg';
    }
});
```

## 相关文档

- [GLM-Image 官方文档](https://docs.bigmodel.cn/)
- [智谱AI开放平台](https://open.bigmodel.cn/)
- [API 文档索引](https://docs.bigmodel.cn/llms.txt)

## 更新日志

- 2025-02-03: 集成 GLM-Image API，支持单词图片生成
