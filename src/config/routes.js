const express = require('express');
const route = express.Router();
const Tasks = require('../controllers/tasks');
const Albums = require('../controllers/albums');

route.get('/task', Tasks.getAll);
route.put('/task', Tasks.create);
route.get('/task/:id', Tasks.getTask);
route.delete('/task/:id', Tasks.delete);
route.post('/task/:id', Tasks.edit);

route.get('/album', Albums.getAll);
route.put('/album', Albums.create);
route.get('/album/:id', Albums.getAlbum);
route.delete('/album/:id', Albums.delete);
route.post('/album/:id', Albums.edit);

module.exports = route;