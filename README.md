<p align="center">
  <img src="https://i.loli.net/2021/03/11/69sRUvYhkGrInX2.png" alt="wean logo" width="180">
</p>

---

**:fire: Note this is early experimental! 实验阶段的主要工作是想办法让整体架构变稳定、简洁，不建议上生产。**

---

wean 是一个小程序构建工具，它负责将标准的微信小程序打包成 web 项目，这样做有很多好处——

- **小程序引擎** - 将打包产物跑到 APP webview 上，就可以成为专属小程序，如“携程小程序”
- **开箱即用** - 更现代的标准，更短的开发链路，从某种程度上缓解微信小程序的历史包袱
- **跨双端** - 以保住微信为前提，一套代码，支持微信和 h5 两个端

wean 借助 [fre](https://github.com/yisar/fre) 实现渲染，借助 [berial](https://github.com/berialjs/berial) 实现路由和沙箱，不需要 webpack 等

除了基本的编译打包，wean 实现了一些先进特性：**Tree shaking**、**Module federation**、**Hot reload**，做更现代，更简洁的小程序子集

### Run

```shell
$ npm install
$ npm link
$ wean -e app.json -o /dist/
```

如果小程序工具导入 dist 目录，遇到 dist 缺少 app.json 和 sitemap.json 的报错，先手动将 demo 里的这两个文件拷贝到 dist 下，能跑起来再说。

剩下的只需要按照 [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/) 开发即可

值得注意的是，并非所有的微信小程序的特性都被支持，简单地说，wean 只支持“现代特性”

### Motivation

在 wean 之前，大量小程序工具使用 webpack 进行打包，各种 loader、plugin 导致整个开发链路变长

wean 旨在解决链路问题，它自研编译器和打包器，对于标准小程序项目，可以做到开箱即用

### Package

| Package                       | Description      | Version                                                                        |
| ----------------------------- | :--------------- | :----------------------------------------------------------------------------- |
| [wean](packages/core) | 微信小程序打包器 | [![npm](https://img.shields.io/npm/v/wean.svg)](https://npm.im/@wean/core) |
| [wean/wxml](packages/wxml) | wxml 编译器      | [![npm](https://img.shields.io/npm/v/wean.svg)](https://npm.im/@wean/wxml) |

### Design

![wean](https://i.loli.net/2021/03/11/4fvJhZ2lbUgmsj1.png)

#### License

MIT @ctripcorp
