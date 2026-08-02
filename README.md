# 🍑 打屁屁发泄室 (DaPiPi-game)

> 一个充满互动趣味的网页小游戏——狂点桃子🍑发泄压力，看它如何逃跑、放屁、甚至进化！

[![🚀 Deploy to Cloudflare Workers](https://github.com/KMRB-lss/DaPiPi-game/actions/workflows/deploy.yml/badge.svg)](https://github.com/KMRB-lss/DaPiPi-game/actions/workflows/deploy.yml)
[![🔄 Auto Update README](https://github.com/KMRB-lss/DaPiPi-game/actions/workflows/update-readme.yml/badge.svg)](https://github.com/KMRB-lss/DaPiPi-game/actions/workflows/update-readme.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/KMRB-lss/DaPiPi-game?style=social)](https://github.com/KMRB-lss/DaPiPi-game)

---

> 📅 **最后更新：** {{BUILD_TIME}}

---

## 🎮 在线体验

| 平台 | 地址 | 说明 |
|------|------|------|
| 🌐 **Cloudflare Workers** | [https://dapipi-game.235575808.workers.dev](https://dapipi-game.235575808.workers.dev) | 🚀 全球加速，推荐访问 |
| 🐙 GitHub Pages | [https://kmrb-lss.github.io/DaPiPi-game/](https://kmrb-lss.github.io/DaPiPi-game/) | 📦 备用入口 |

> ⚡ 每次推送代码到 `main` 分支，GitHub Actions 会自动部署到 Cloudflare Workers，永久有效，完全免费。

---

## ✨ 特色玩法

- **点击桃子** 🍑 — 狂点桃子来发泄，每一下都有音效和震动反馈
- **随机事件** 🎲 — 暴击×2、放屁💨、闪避、反打、尖叫……各种随机事件让游戏充满惊喜
- **追击系统** 🏃 — 桃子会随机逃跑，鼠标靠近时还会主动躲闪，考验你的手速
- **连击系统** 🔥 — 快速连击触发 combo，连击越高桃子越敏捷
- **进化系统** 🧬 — 累计击打让桃子进化：害羞→生气→哭→着火→濒死→超脱轮回
- **挑战模式** ⏱️ — 20 秒限时追桃挑战，看你能命中多少次
- **红温效果** 🌡️ — 随着击打次数增加，背景逐渐变红，直至燃烧
- **数据持久化** 💾 — 使用 localStorage 保存历史记录，下次打开可继续
- **键盘快捷键** ⌨️ — Space 击打，R 重置

## 🏆 排行榜系统

> 无需注册账号，输入昵称即可参与全球排名！

| 功能 | 说明 |
|------|------|
| 📤 **提交成绩** | 游戏结束后点击"提交我的成绩"，输入昵称即可上传 |
| 👑 **全球排行** | 查看所有玩家的击打次数排名，前 100 名上榜 |
| 🔄 **自动更新** | 相同昵称只保留最高分，随时可以刷新排名 |
| 👉 **高亮自己** | 排行榜中自动标记你的位置，一目了然 |

**数据存储：** 使用 Cloudflare KV 持久化存储，全球边缘节点加速访问。

## 🎯 游戏机制

| 机制 | 说明 |
|------|------|
| 🍑 耐受度进度条 | 打到 100% 触发重置 |
| 💩 括约肌疲劳度 | 打到 100% 触发"拉肚子"重置 |
| 🔥 终极结局 | 单次击打达到 200 下触发涅槃动画 |
| 💔 连击中断 | 1.5 秒内未点击则连击中断 |
| 🤖 自动连打 | 点击 ×50 按钮自动连打 50 次 |

## 🛠️ 技术栈

- **前端** — 纯原生 HTML + CSS + JavaScript，零外部依赖
- **音效** — Web Audio API 程序化生成（无需外部音频文件）
- **震动** — Vibration API 提供移动端震动反馈
- **存储** — localStorage 数据持久化
- **排行榜 API** — Cloudflare Workers + KV 存储，提供 RESTful 接口
- **部署** — Cloudflare Workers（全球边缘网络）+ GitHub Actions 自动部署

## 🚀 本地运行

```bash
# 克隆仓库
git clone https://github.com/KMRB-lss/DaPiPi-game.git
cd DaPiPi-game

# 方式一：直接打开
open index.html

# 方式二：使用 HTTP 服务器
python3 -m http.server 8080
# 或
npx serve .
```

## ☁️ 自动部署

每次推送代码到 `main` 分支，GitHub Actions 会自动执行：

1. 拉取最新代码
2. 安装 Wrangler CLI
3. 部署到 Cloudflare Workers 全球边缘网络
4. 自动更新 README 中的最后更新时间

Workflow 配置文件：
- [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — 部署到 Cloudflare Workers
- [`.github/workflows/update-readme.yml`](.github/workflows/update-readme.yml) — 自动更新 README

## 📄 许可证

本项目基于 MIT 许可证开源。详见 [LICENSE](LICENSE) 文件。