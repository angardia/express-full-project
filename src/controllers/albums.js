var moment = require('moment'); // require
moment().format();
const albumsData = [];
let counter = 0;

class Albums {
    static getAll(req, res) {
        res.send(albumsData);

    }
    static getAlbum(req, res) {
        const albumId = parseInt(req.params.id);
        const requestedAlbum = Albums.find(albumId);
        if (!requestedAlbum) {
            res.status(404).send('error');
            return;
        }
        res.send(requestedAlbum);
    }

    static create(req, res) {
        const { title, date } = req.body;
        const dateFormat = 'DD-MM-YYYY HH:mm:ss';
        const checkDate = moment(date, dateFormat, true);
        if (!title || title.length < 3) {
            res.status(400).send('error');
            return;
        }
        if (!checkDate.isValid()) {
            res.status(400).send('date format error');
            return;
        }

        counter++;
        const newAlbum = {
            id: counter,
            title,
            date
        }
        albumsData.push(newAlbum);
        res.sendStatus(201);

    }

    static delete(req, res) {
        const albumId = parseInt(req.params.id);
        const doesExist = Albums.find(albumId);
        if (!doesExist) {
            res.status(404).send("Error");
            return;
        }
        const albumIndex = albumsData.findIndex(album => album.id === albumId);
        albumsData.splice(albumIndex, 1);
        res.sendStatus(204);

    }

    static edit(req, res) {
        const { title} = req.body;
        const albumId = parseInt(req.params.id);
        const doesExist = Albums.find(albumId);
        if (!doesExist) {
            res.status(404).send("Error");
            return;
        }
        if (title.length < 3 || !title) {
            res.status(400).send('error');
            return;
        }
        const index = albumsData.findIndex(album => album.id === albumId);
        const editedAlbum = {
            id: albumId,
            title,
            date: doesExist.date
        }
        albumsData.splice(index,1,editedAlbum);
        res.sendStatus(200);

    }

    static find(albumId) {
        return albumsData.find(album => album.id === albumId);
    }

}

module.exports = Albums;