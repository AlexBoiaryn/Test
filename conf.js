const fs = require('fs');

class Config {
    static get() {
        if (this.config === null) {
            // this.config = JSON.parse(readFileSync('config/local.json').toString()) as EnvConfig;//typescript style
            this.config = JSON.parse(fs.readFileSync('config/prod.json').toString());
            //this.config = JSON.parse(fs.readFileSync('config/stage.json').toString());
        }
        return Config.config;
    }
}
Config.config = null;

exports.Config = Config;