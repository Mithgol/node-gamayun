[![(a histogram of downloads)](https://nodei.co/npm-dl/gamayun.png?height=3)](https://npmjs.org/package/gamayun)

This module (`gamayun`) is a server that serves answers.

It is named after [a prophetic bird of Russian folklore.](https://en.wikipedia.org/wiki/Gamayun)

It is designed as a web application for the [Express.js](http://expressjs.com/) web server.

This module is currently in an early phase of its development and thus does not have the desired level of feature completeness.

## Goals

**Long-term goal:** a server where people ask their questions and the user replies (like [Ask.fm](http://ask.fm/) or [Spring.me](http://spring.me/)). Instead of a centralized approach, this should be installable on personal servers (such as [Krylov's answers](http://krylov.cc/fansw.php)).

**Short-term goal:** a server that is able to host answers imported by [the `autumn` package](https://github.com/Mithgol/node-autumn) from [Spring.me](http://spring.me/) servers.

## Installing Gamayun

[![(npm package version)](https://nodei.co/npm/gamayun.png?downloads=true&downloadRank=true)](https://npmjs.org/package/gamayun)

* Latest packaged version: `npm install gamayun`

* Latest githubbed version: `npm install https://github.com/Mithgol/node-gamayun/tarball/master`

The npm package does not contain the tests, they're published on GitHub only.

You may visit https://github.com/Mithgol/node-gamayun#readme occasionally to read the latest `README` because the package's version is not planned to grow after changes when they happen in `README` only. (And `npm publish --force` is [forbidden](http://blog.npmjs.org/post/77758351673/no-more-npm-publish-f) nowadays.)

## License

MIT license (see the `LICENSE` file).
