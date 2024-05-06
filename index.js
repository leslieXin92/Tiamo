#!/usr/bin/env node
// 第一行的注释是告诉系统 以node的环境去执行这个脚本

const { Command } = require('commander')
const versionOptions = require('./lib/core/version')
const cabbage = require('./lib/core/cabbage')
const helpOptions = require('./lib/core/help')

const program = new Command()

// 查看版本号
versionOptions(program)

// 猫爪印
cabbage(program)

// 帮助面板
helpOptions(program)

program.parse(process.argv)
