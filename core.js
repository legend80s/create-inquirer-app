const fs = require('fs')
const child_process = require('child_process')
const path = require('path')
const mkdirp = require('mkdirp')
const chalk = require('chalk');

const NEW_FILES = [
  'mock/index.js',
  'plugins/dev/mock/index.js',
];

const PKG_FILE_PATH = 'package.json'
const umi_CONFIG_FILE_PATH = 'umi.config.js'

const packages = [
  'git-commit-msg-linter',
]

exports.gen = async () => {
  console.log('> 正在生成代码...');
  console.log();

  NEW_FILES.forEach(copyCode);
  updateGlobalStyle(GLOBAL_STYLE_FILE_PATH);
  enableMockPlugin(umi_CONFIG_FILE_PATH);
  const uninstalledPackages = updatePkgJSON(PKG_FILE_PATH, packages);

  console.log(chalk.cyan('> ✅ 所有代码已生成 🎉'));
  console.log();

  if (uninstalledPackages.length) {
    const names = uninstalledPackages.join(' ');
    console.log(chalk.yellow('> 部分依赖没有安装，正在自动安装...'));

    console.log(chalk.yellow(`> tnpm i ${names} --save`));
    child_process.execSync(`tnpm i ${names} --save`);
  }

  console.log();
}

function copyCode(filepath) {
  if (fs.existsSync(filepath)) {
    console.log(`> ${filepath} 已存在，跳过生成该文件`);

    return;
  }

  mkdirp.sync(getParentDirname(filepath));

  // !fs.existsSync('./mock') && fs.mkdirSync('./mock');

  fs.writeFileSync(
    filepath,

    fs.readFileSync(path.resolve(__dirname, `./skeleton-code/${filepath}`))
  );

  console.log(chalk.green('> ✅', filepath, 'done'));
}

function getParentDirname(filepath) {
  return path.dirname(filepath);
}

function updateGlobalStyle(filepath) {
  if (fs.readFileSync(filepath).toString().includes('弹窗背景必须透明，防止遮盖住目标页面')) {
    console.log(`> ${filepath} body background transparent 已添加，跳过更新该文件`);

    return;
  }

  const code = fs.readFileSync(path.resolve(__dirname, `./skeleton-code/${filepath}`));

  fs.appendFileSync(
    filepath,
    `\n${code}`
  );

  console.log(chalk.green('> ✅', filepath, 'done'));
}

/**
 *
 * @param {string} filepath
 * @param {string[]} packages
 * @returns {string[]}
 */
function updatePkgJSON(filepath, packages) {
  /** @type {{ scripts: { [k: string]: string; }; dependencies: { [k: string]: string; }; }} */
  const json = JSON.parse(fs.readFileSync(filepath).toString());

  json.scripts['dev:mock'] = 'MY_MOCK=ON npm run dev';

  fs.writeFileSync(filepath, `${JSON.stringify(json, null, 2)}\n`);

  return packages.filter(name => !json.dependencies[name]);
}

