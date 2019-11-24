const Project = require("../model/projects");
const path = require('path');
const fs = require('fs');

const ctr = {
  home: (req, res) => {
    res.send("Home");
  },
  verProyectos: (req, res) => {
    Project.find((err, data) => {
      if (err) {
        res.status(404).json({
          err
        });
      } else {
        res.status(200).json({
          data
        });
      }
    });
  },
  verProyectosID: (req, res) => {
    const { id } = req.params;
    Project.findById(id, (err, data) => {
      if (err) return res.status(500).json(err);
      if (!data)
        return res.status(404).json({ message: "El proyecto no existe" });
      return res.status(200).send({ message: "Obtener 1", data });
    });
  },
  guardarProyecto: (req, res) => {
    const { nombre, descripcion, categoria, lenguajes, anio } = req.body;

    const project = new Project();
    project.nombre = nombre;
    project.descripcion = descripcion;
    project.categoria = categoria;
    project.lenguajes = lenguajes;
    project.anio = anio;
    project.imagen = null;

    project.save((err, data) => {
      if (err) {
        res.status(404).json({
          ok: false,
          message: "Error al guardar el proyecto"
        });
      } else {
        res.status(200).json({
          data
        });
      }
    });
  },
  eliminarProyecto: async (req, res) => {
    const { id } = req.params;
    await Project.findByIdAndDelete(id)
      .then(data => {
        return res.send({ message: "Borrar", data });
      })
      .catch(err => {
        return res.status(404).send({ err });
      });
  },
  editarProyecto: async (req, res) => {
    const { id } = req.params;
    const proyecto = req.body;
    console.log(proyecto);

    await Project.findByIdAndUpdate(id, proyecto, { new: true })
      .then(data => {
        return res.send({ message: "Actualizado", data });
      })
      .catch(err => {
        return res.status(404).send({ err });
      });
  },
  uploadImage: async (req, res) => {

      const { id } = req.params;
      const filePath = req.files.imagen.path;
      const fileName = filePath.split('/')[9];
      const ext = fileName.split('.')[1];
    
      if(req.files.imagen != null){
      if(ext == 'png' || ext == 'jpg' || ext == 'jpeg' || ext == 'gif'){
        await Project.findByIdAndUpdate(id,{imagen:fileName},{new:true})
        .then(data => {return res.status(200).send(data)})
        .catch(err => {return res.status(500).send(err)} )
      }else{
            await fs.unlinkSync(filePath);
            res.send('Archivo inválido');
      } 
    }else{
        res.send('No has seleccionado imagen a subir');
    }   
  }
};

module.exports = ctr;
