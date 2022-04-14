const express = require ('express');
const router= express.Router()
const Listfilmcontroller = require('../controrellers/Listfilm')

router.route('/Listfilm')
.get(Listfilmcontroller.index)
.post(Listfilmcontroller.input)

router.route('/listfilm/:id')
.get(Listfilmcontroller.getListfilmbyid)
.update(Listfilmcontroller.update)
.delete(Listfilmcontroller.delete)

module.exports = router
