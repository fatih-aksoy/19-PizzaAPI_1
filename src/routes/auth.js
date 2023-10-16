"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/auth:

const auth = require("../controllers/auth");

// URL: /auth

router.post("/login", auth.login);
router.post("/refresh", auth.refresh);

// All yapsaydik swagger bunu yakalamaz, o yuzden get yaptik
router.get("/logout", auth.logout);

/* ------------------------------------------------------- */
module.exports = router;
