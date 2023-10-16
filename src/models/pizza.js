"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Pizza Model:

const PizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    // birden fazla malzeme eklemek icin array icine aldik.
    toppings: [
      // push, pull
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    ],
  },
  {
    collection: "pizzas",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Pizza", PizzaSchema);
