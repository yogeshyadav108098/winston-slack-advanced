![Winston Slack Transport](assets/winstonSlackTransport.png?raw=true "Winston Slack Transport")

# Winston slack advanced
Slack transporter for winston

## Features
1. Sends messages from your logger to your slack.

## Getting started.

## Install

```
npm install --save winston-slack-advanced
```

## Usage

```js
var Winston = require('winston');
var Slack = require('winston-slack-advanced');

Winston.add(Slack, {
    webHookUrl: "https://hooks.slack.com/services/XXXXXX/XXXXXX/XXXXXX",
    channel: "#channelname",
    username: "ErrorBot",
    level: 'info',
    handleExceptions: true
});
```

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Have a problem? Come chat with us! ##
[LinkedIn](https://www.linkedin.com/in/yogeshyadav108098)<br />
[Twitter](https://twitter.com/Yogeshyadav098)<br />
[Github](https://github.com/yogeshyadav108098)<br />
[Gmail](<mailto:yogeshyadav108098@gmail.com>)

## Maintained by ##
[Yogesh Yadav](https://www.linkedin.com/in/yogeshyadav108098/)

## Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like
 - **Paytm** You can make one-time donations via Paytm (+91-7411000282). I'll probably buy a coffee.
 - **UPI** You can make one-time donations via UPI (7411000282@paytm).
 - **Bitcoin** You can send me bitcoins at this address (or scanning the code below): `3BKvX4Rck6B69JZMuPFFCPif4dSctSxJQ5`

Thanks!


## Where is this library used?
If you are using this library in one of your projects, add it here.


## License
MIT © [Yogesh Yadav](https://www.linkedin.com/in/yogeshyadav108098/)

[contributing]: /CONTRIBUTING.md