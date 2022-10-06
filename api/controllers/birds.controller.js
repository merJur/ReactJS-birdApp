
//CRUD

const Bird = require('../models/Bird.model');

//READ
module.exports.list = (req, res, next) => {
    Bird.find()
    .sort({ name: 1 })
    .then((birds) => {
        res.json(birds)
    })
    .catch(next)
}

module.exports.birdDetail = (req, res, next) => {  //REVISAR
    const { id } = req.params;              

    Bird.findById(id)
    .populate("albums")
    .then((bird) => res.status(201).json(bird))                 // res.render("birds/birdDetails", { bird });
    .catch((err) => {
        console.log(err)
        next(createError(404, "Ave no encontrada"))
    })
}

module.exports.birdDetailTotal = (req, res, next) => {
    const { id } = req.params;              

    Bird.findById(id)
    .populate("albums")
    .populate({
        path: "annotations",
        populate: {
            path: "user",
        }
    })
    .then((bird) => {
        console.log(id, bird)
        res.status(201).json(bird)              //res.render("birds/birdDetailTotal", { bird });
    })
}

//CREATE
module.exports.create = (req, res, next) => {
    const birdToCreate = req.body

    if (req.body) { birdToCreate.image = req.file.path }

    birdToCreate.user = req.user._id
    console.log(birdToCreate);

    Bird.create(birdToCreate)
    .then((bird) => {
        res.status(201).json(bird)              //revisar!!!!!
    })
    .catch((err) => next(err))
}

//FALTA UPDATE 

//DELETE
module.exports.delete = (req, res, next) => {
    Bird.findByIdAndDelete(req.params.id)
    .then(()=> res.status(200).json('ok'))
    .catch(err => next(err))
}

