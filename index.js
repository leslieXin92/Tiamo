#!/usr/bin/env node
// 第一行的注释是告诉系统 以node的环境去执行这个脚本

const { Command } = require('commander')
const versionOptions = require('./lib/core/version')
const cabbage = require('./lib/core/cabbage')
const bobo = require('./lib/core/bobo')
const butterfly = require('./lib/core/butterfly')
const orange = require('./lib/core/orange')
const helpOptions = require('./lib/core/help')
const test = require('./lib/core/test')

const program = new Command()

test(program)

// 查看版本号
versionOptions(program)

// 小白菜
cabbage(program)

// 小肥啵
bobo(program)

// 小蝴蝶
butterfly(program)

// 小橘子
orange(program)

// 帮助面板
helpOptions(program)

program.parse(process.argv)
