const mongoose = require("mongoose");
//require("./album.model"); // aún no está creado

const birdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    scifyName: {
      type: String,
      required: [true, "Scientific Name is required"],
    },
    comment: {
      type: String,
      required: [true, "A comment is required"],
    },
    weight: {
      type: String,
    },
    size: {
      type: String,
    },
    wingspan: {
      type: String,
    },
    longevity: {
      type: String,
    },
    image: {
      type: String,
      required: [true, "A picture is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "An user is required"],
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.__v;
        delete ret._id;
        delete ret.password; //aún no en uso
      }
    },
  }
);

//falta virtual de birdschema con albums
//falta virtual de birdschema con annotations

const Bird = mongoose.model("Bird", birdSchema);

module.exports = Bird;