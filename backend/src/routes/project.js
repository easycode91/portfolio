const { Router } = require('express');
const path = require('path');
const ctr = require('../controller/project');
const connect_multiparty = require('connect-multiparty');

const router = Router();
const multiparty = connect_multiparty({ uploadDir : path.join(__dirname,'../upload')});

router.get('/home',ctr.home)
      .get('/projects',ctr.verProyectos)
      .get('/projects/:id',ctr.verProyectosID)
      .delete('/projects/:id',ctr.eliminarProyecto)
      .put('/projects/:id',ctr.editarProyecto)
      .post('/save',ctr.guardarProyecto)
      .post('/projects/upload/:id',multiparty,ctr.uploadImage)





module.exports = router;