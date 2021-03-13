//==============================================================================================================
// FileName: sample.model.js
// Date: 13 March, 2021
// Description: This file contains the model for the sample object
// Author: Abdullah Najjar
//==============================================================================================================

module.exports = mongoose => {

const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
    {
        title: String,
        description: String,
        published: Boolean
    },
        { timestamps: true }
    )
  );

  return Tutorial;
};