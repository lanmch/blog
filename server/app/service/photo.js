const Service = require('egg').Service;

class PhotoService extends Service {
    async getPhotoList() {
        const { app } = this;
        try {
            const photoList = await app.mysql.select('photo', {
                orders: [['photoId','desc']]
            });
            return photoList;
        } catch (e) {
            return null;
        }
    }
}

module.exports = PhotoService;