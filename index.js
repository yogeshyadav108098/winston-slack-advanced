const Util = require('util');
const Uuid = require('uuid');
const Request = require('request');
const Winston = require('winston');

class Slack {
    constructor(config) {

        if (!config || !config.webHookUrl || !config.username || !config.channel) {
            throw new Error('Required parameters are missing (webHookUrl, username, channel)');
        }
        Winston.Transport.call(this, config);

        this.level = config.level || 'info';
        this.username = config.username;
        this.webHookUrl = config.webHookUrl;
        this.colors = {
            log: '#008000',
            error: '#FF0000',
            info: '#008000',
            debug: '#0000FF',
            warn: '#FFFF00',
            verbose: '#764FA5',
            silly: '#808000',
            critical: '#8B0000',
            exception: '#8B0000'
        };
        this.attachmentTitles = {
            log: 'Ignore, logging normally',
            error: 'Error, handle or can cause problems',
            info: 'Ignore, logging normally',
            debug: 'Ignore, debug logs',
            warn: 'Warned, handle or can cause more errors',
            verbose: 'Ignore, verbose logs',
            silly: 'Ignore, silly logs',
            critical: 'Critical, handle or can cause more destruction',
            exception: 'Unhandled Exception, handle immediately',
        }
        this.handleExceptions = !!config.handleExceptions;
        this.addMeta = !!config.addMeta ? true : false;
        this.iconEmoji = config.iconEmoji;
        this.customMessageFormatter = (typeof config.customMessageFormatter === 'function')
            ? config.customMessageFormatter : undefined;

    }

    log(level, message, meta, callback) {
        callback = callback || console.log;

        if (this.addMeta && !this.customMessageFormatter) {
            message += JSON.stringify(Util.inspect(meta), null, 4)
        }

        if (this.customMessageFormatter) {
            message = this.customMessageFormatter({
                level: level,
                message: message,
                meta: meta
            });
        }

        let payload = {
            channel: this.channel,
            text: '[' + level + ']' + ' ### ' + (this.attachmentTitles[level] || this.attachmentTitles['info']),
            username: this.username + Uuid.v4().slice(0, 8),
            attachments: [{
                text: message,
                color: this.colors[level] || this.colors['info']
            }]
        };

        if (this.iconEmoji) {
            payload.iconEmoji = this.iconEmoji;
        }

        let requestOptions = {
            url: this.webHookUrl,
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload),
        };

        Request(requestOptions, function (error, response, body) {
            if (error) {
                return callback(error);
            }

            if (response.statusCode !== 200) {
                return callback(new Error('Non 200 status code from Slack API: ' + response.statusCode));
            }
            return callback(null, true);
        });
    }
}

Util.inherits(Slack, Winston.Transport);
Winston.transports.Slack = Slack;
module.exports = Slack;