const { model, Schema } = require("mongoose");

const foodie = model(
  "foodie",
  Schema(
    {
      foodie_name: {
        type: String,
        required: true,
      },
  
      foodie_rating: {
        type: String,
        required: true,
      },
      food_info: {
        type: String,
        required: true,
      },
      screenshot: {
        type: picture,
        required: true,
      },
      uploader_name: {
        type: String,
        required: true,
      },
      food_item_photo: {
        type: picture,
        required: true,
      },
      contact_number: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = foodie;