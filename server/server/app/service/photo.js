const Service = require('egg').Service;

class PhotoService extends Service {
    async getPhotoList() {
        const { app } = this;
        console.log('123')
        try {
            const photoList = await app.mysql.select('photo', {
                orders: [['photoId','desc']]
              });
              console.log(photoList)
            return photoList;
        } catch (e) {
            return null;
        }
    }
}

module.exports = PhotoService;