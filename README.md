<h1 align="center">Welcome to create-inquirer-app 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


> Create an beautiful inquiry CLI App 😘.

## 使用

在 umi H5 项目根目录执行以下命令即可：

```sh
tnpx create-inquirer-app
```

或先安装

```sh
tnpm install create-inquirer-app
```

然后项目根目录执行：

```sh
create-inquirer-app
```

```sh
➜  create-inquirer-app-test git:(master) create-inquirer-app

Hi, welcome to "create-inquirer-app" for creating a beautiful inquirer CLI App 😘
-- 请确保是在 umi H5 项目根目录执行该命令 --

? 想要生成何种 cdp 弹屏应用? (H5 弹屏：投放会加载成 webview 后在目标页弹出)
? H5 框架是? (umi)

> 正在生成代码...

> ✅ mock/index.js done
> ✅ plugins/dev/mock/index.js done
> ✅ 所有代码已生成 🎉

> 部分依赖没有安装，正在自动安装...
> tnpm i git-commit-msg-linter --save
-
✔ Installed 1 packages
✔ Linked 1 latest versions
✔ Run 0 scripts
✔ All packages installed (used 160ms(network 159ms), speed 30.63KB/s, json 1(4.87KB), tarball 0B)

> 耗时: 2137.377ms
> 代码已自动生成，执行以下命令查看效果：

  npm run dev:mock
  sim cdp-popup

```

最后运行项目：

```sh
npm run dev:mock
sim cdp-popup
```

## Why

如何提升日常开发效率，甚至在遇到从未涉及过的处女地也能快速入手，其中一种方式是让开发者少写甚至不写代码，即用脚手架生成开箱即用的具备生产能力代码，内含符合最佳实践的代码，也同时将很多『坑』或『难点』通过自动生成的代码提前规避或隐藏掉。

创建改脚手架就是出自此目的。比如：

- sub-questions
- colorful log
- bin script

故开发一个脚手架自动生成代码是有价值的，至少目前来看。该脚手架真正实现了只要一个命令，就能完成一个效果极佳的弹屏，开发者只要对其修修改改即可完成需求。预计能将开发时间从 2 天降低到 1 天。

## How it works

### mock

利用 umi 插件，在 HTML head 中插入脚本实现 mock 运行时参数的能力。并完整实现了一个基于代码注入的 mock 的框架,，支持 dev 和 prod 环境，作为对已有 mock 方案的补充。

```sh
├── mock
│   └── index.js
├── plugins
│   └── dev
│       └── mock
│           └── index.js
├── umi.config.js
...
```

如上图 mock 只会在 dev 环境生效。数据来自 mock/index.js。

mock/index.js 中支持 [umi 插件](https://umi.antfin-inc.com/plugin/umi-compat/)。自定义 mock 只需要修改 mock/index.js 即可。

- 插入 script link
- 插入代码
- ...

以下说明 mock 代码已生效：

## 发布

```sh
npm version major/minor/patch && npm publish && gp && gp --tags
```

## Author

👤 **legend80s**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/legend80s/create-inquirer-app/issues).

## Show your support

[Give a ⭐️ if this project helped you!](https://github.com/legend80s/create-inquirer-app)

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
