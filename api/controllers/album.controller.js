const createError = require("http-errors");
const uploadCloud = require("../config/cloudinary.config");
const Bird = require("../models/Bird.model");
const Album = require("../models/album.model");

//CRUD

//DETAIL
module.exports.detail = (req, res, next) => {
  Album.findById(req.params.id) //mirar si la busqueda sigue siendo así
    .populate("photos")
    .then((album) => {
      res.json(album);
    })
    .catch(next);
};

//Create
module.exports.create = (req, res, next) => {     // revisar este create!!! el req.body, el req.file, todo!!
  const albumToCreate = req.body;
  if (req.file) {
    albumToCreate.url = req.file.path;
  }
  albumToCreate.user = req.user._id;

  Album.create(albumToCreate)
    .then((album) => {
      res.json (album)            //redirect(`/profile`)
    })
    .catch((err) => {
      next(err);
    });
};

/*//Edit                                      FALTA POR HACER UPDATE Y DELETE-> CON MODULO3

//Delete
module.exports.delete = (req, res, next) => {
  const { id } = req.params;

  Album.findByIdAndDeleteOne(req.params.id)
    .then(() => {
      res.redirect("/profile");
    })
    .catch((err) => {
      console.error(err);
      next(createError(404, "Album no encontrado"));
    });
};
*/