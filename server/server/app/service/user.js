const Service = require('egg').Service;

class UserService extends Service {
    async login(params) {
        const { app } = this;
        try {
            const { username, password } = params;
            if(username!= 'lanmch' && password != 'lanmch') return null;
            const token = app.jwt.sign({
                username,
                password
            }, app.config.jwt.secret, {
                expiresIn: '300s', // 5min
            });

            return {
                token
            }
        } catch (e) {
            return null;
        }
    }
}

module.exports = UserService;