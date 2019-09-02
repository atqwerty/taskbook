#!/usr/bin/env node
'use strict'
const meow = require('meow')
const updateNotifier = require('update-notifier')
const help = require('./src/help')
const pkg = require('./package.json')
const taskbook = require('.')
const flags = require('./src/flags')

const cli = meow(help, flags)

updateNotifier({ pkg }).notify()

taskbook(cli.input, cli.flags)
