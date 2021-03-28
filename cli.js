#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const { gen } = require('./core');

console.log();
console.log(chalk.cyanBright('Hi, welcome to "create-inquirer-app" for creating a beautiful inquirer CLI App 😘'));
console.log(chalk.yellow('-- 请确保是在 umi H5 项目根目录执行该命令 --'));
console.log();

const QUESTION_NAME = 'appType';
const CHOICES = {
  h5Popup: 'h5-popup',
  simpleImgPopup: 'simpleImgPopup',
  cdpComponent: 'cdp-component',
}

const QUESTION_CONTENT_LIST = {
  h5Popup: 'H5 弹屏：投放会加载成 webview 后在目标页弹出',
  simpleImgPopup: '图片弹屏：图片加链接或 lottie 弹屏',
  cdpComponent: '<cdp /> 组件：单行图片、轮播图片、H5Banner',
}

/** @type {Parameters<typeof inquirer.prompt>[0]} */
const questions = [
  {
    name: QUESTION_NAME,
    message: '想要生成何种 cdp 弹屏应用?',
    type: 'list',
    choices: [
      {
        value: CHOICES.h5Popup,
        name: `• ${QUESTION_CONTENT_LIST.h5Popup}`,
        short: `(${QUESTION_CONTENT_LIST.h5Popup})`,
        checked: true,
      },
      {
        value: CHOICES.simpleImgPopup,
        name: `• ${QUESTION_CONTENT_LIST.simpleImgPopup}`,
        short: `(${QUESTION_CONTENT_LIST.simpleImgPopup})`,
      },
      {
        value: CHOICES.cdpComponent,
        name: `• ${QUESTION_CONTENT_LIST.cdpComponent}`,
        short: `(${QUESTION_CONTENT_LIST.cdpComponent})`,
      },
    ],
  }
];

const FRAMEWORK_QUESTION_NAME = 'frameworkType';
const FRAMEWORKS_TYPES = {
  umi: 'umi',
  others: 'others',
};

/** @type {typeof questions} */
const frameworkQuestions = [
  {
    name: FRAMEWORK_QUESTION_NAME,
    message: 'H5 框架是?',
    type: 'list',
    choices: [
      {
        value: FRAMEWORKS_TYPES.umi,
        name: '• umi',
        short: '(umi)',
        checked: false,
      },
      {
        value: FRAMEWORKS_TYPES.others,
        name: '• 其他框架',
        short: '(其他框架)',
      },
    ]
  }
];

inquirer.prompt(questions).then((answers) => {
  // console.log(answers);

  switch (answers[QUESTION_NAME]) {
    case CHOICES.h5Popup:
      handleH5Popup();
      break;

    case CHOICES.cdpComponent:
      handleCdpComponent();
      break;

    case CHOICES.simpleImgPopup:
      handleSimpleImgPopup();
      break;

    default:
      break;
  }
});

function handleH5Popup() {
  inquirer.prompt(frameworkQuestions).then((answers) => {
    // console.log(answers);

    switch (answers[FRAMEWORK_QUESTION_NAME]) {
      case FRAMEWORKS_TYPES.umi:
        createH5PopupCode();
        break;

      case FRAMEWORKS_TYPES.others:
        doNothing();
        break;

      default:
        doNothing();
        break;
    }
  });
}

async function createH5PopupCode() {
  console.log('');

  console.time('> 耗时');
  await gen();
  console.timeEnd('> 耗时')

  console.log('> 代码已自动生成，执行以下命令查看效果：');
  console.log(chalk.whiteBright.bold(`
  npm run dev:mock
  sim cdp-popup
`
  ));
}

function doNothing() {
  console.log();
  console.warn('暂不支持该类型框架');
  console.log();
}

function handleCdpComponent() {
  console.log();
  console.log('> <cdp /> 组件：显示广告视图，支持样式包括单行图片，轮播图片，gif/lottie 动图，H5Banner');
  console.log('> 小程序方可使用，复制以下代码即可');
  console.log(`
  <cdp
    spaceCode="UMI_HOME_ROTATION"
    extInfo=""
    onRenderSuccess="onRenderSuccess"
    onRenderFail="onRenderFail"
  />
`
  );
  console.log('> 文档：https://github.com/legend80s/commit-msg-linter');
  console.log();
}

function handleSimpleImgPopup() {
  console.log();
  console.log('> 图片/Lottie 弹屏：运营按照视觉提供的图片/Lottie素材配置单元即可。');
  console.log('> 无需技术接入，运营申请展位配置即生效。');
  console.log('> 文档：https://github.com/legend80s/commit-msg-linter');
  console.log();
}
