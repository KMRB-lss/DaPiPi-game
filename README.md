# 🍑 打屁屁发泄室 (DaPiPi-game)

> 一个充满互动趣味的网页小游戏——点击桃子🍑发泄压力，看它如何逃跑、放屁、甚至进化！

## 🎮 在线体验

| 平台 | 地址 |
|------|------|
| 🌐 **Cloudflare Workers** | [https://dapipi-game.brazen-maize-1b8.workers.dev](https://dapipi-game.brazen-maize-1b8.workers.dev) |
| 🐙 GitHub Pages | [https://kmrb-lss.github.io/DaPiPi-game/](https://kmrb-lss.github.io/DaPiPi-game/) |

## ✨ 特色玩法

- **点击桃子** — 狂点桃子🍑来发泄，每一下都有音效和震动反馈
- **随机事件** — 暴击×2、放屁💨、闪避、反打、尖叫……各种随机事件让游戏充满惊喜
- **追击系统** — 桃子会随机逃跑，鼠标靠近时还会主动躲闪，考验你的手速
- **连击系统** — 快速连击触发 combo，连击越高桃子越敏捷
- **进化系统** — 累计击打让桃子进化（害羞→生气→哭→着火→濒死→超脱轮回）
- **挑战模式** — 20 秒限时追桃挑战，看你能命中多少次
- **红温效果** — 随着击打次数增加，背景逐渐变红，直至燃烧
- **数据持久化** — 使用 localStorage 保存历史记录，下次打开可继续
- **键盘快捷键** — Space 击打，R 重置

## 🎯 游戏机制

| 机制 | 说明 |
|------|------|
| 耐受度进度条 | 打到 100% 触发重置 |
| 括约肌疲劳度 | 打到 100% 触发"拉肚子"重置 |
| 终极结局 | 单次击打达到 200 下触发涅槃动画 |
| 连击中断 | 1.5 秒内未点击则连击中断 |
| 自动连打 | 点击 ×50 按钮自动连打 50 次 |

## 🛠️ 技术栈

- 纯原生 HTML + CSS + JavaScript
- Web Audio API 生成音效（无需外部音频文件）
- Vibration API 提供移动端震动反馈
- localStorage 数据持久化
- 零外部依赖，开箱即用

## 🚀 本地运行

```bash
# 克隆仓库
git clone https://github.com/KMRB-lss/DaPiPi-game.git

# 直接用浏览器打开
cd DaPiPi-game
open index.html
```

或者使用任意 HTTP 服务器：

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

## 📄 许可证

本项目基于 MIT 许可证开源。