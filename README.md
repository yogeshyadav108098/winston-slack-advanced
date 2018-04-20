# Winston slack advanced
Slack transport for winston


## Install

```
npm install --save winston winston-slack-advanced
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