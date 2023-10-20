const express = require("express");

const router = express.Router();

const { getContacts, crateContact, getContact, updateContact,deleteContact } = require("../controllers/contactController");


router.route("/").get(getContacts).post(crateContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;
 