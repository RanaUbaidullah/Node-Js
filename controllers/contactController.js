// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
  res.status(200).json({ massage: "Get all contents" });
};

// @desc Create contacts
// @route POST /api/contacts
// @access public

const crateContact = (req, res) => {
  console.log("The request body is ",req.body)
  const {name, email, phone, address} = req.body
  res.status(201).json({ massage: "Create contents" });
};

// @desc Get contact
// @route GET /api/contacts/:id
// @access public

const getContact = (req, res) => {
  res.status(200).json({ massage: `Get content for ${req.params.id}` });
}

// @desc Update contact
// @route PUT /api/update/:id
// @access public

const updateContact = (req, res) => {
  res.status(200).json({ massage: `Update content for ${req.params.id}` });
}

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = (req, res) => {
  res.status(200).json({ massage: `Delete content for ${req.params.id}` });
}


module.exports = { getContacts, crateContact, getContact, updateContact,deleteContact };
