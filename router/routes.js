const express = require('express')

const router = new express.Router()

const menu_cont = require('../controller/menu_controller')
const toppings_cont = require('../controller/topping_controller')
const pizzaorder = require('../controller/orders_controller')
const favpizza = require('../controller/fav_controller')
const pendingorder = require('../controller/pending_controller')
const admin = require('../controller/admin_controller')
const addrs_item = require('../controller/add_item_controller')



//get all pizza
router.get('/items/menu', menu_cont.gettallmenu)

//view a pizza
router.get('/items/:id', menu_cont.viewpizza)

//get all toppings

router.get('/addons/view', toppings_cont.getalltoppings)

//post order

router.post('/orders/item', pizzaorder.ordernow)

//post favorite

router.post('/favorites/add', favpizza.addfavpizza)

//ordre list
router.get('/orders/list', pizzaorder.getordderdetails)



//remove ordering
router.delete('/orders/remove/:id', pizzaorder.removeorder)

//get favorite
router.get('/orders/get/', favpizza.getfavpizza)

//remove favorite

router.delete('/fav/remove/:id', favpizza.removefav)

//save address

router.post('/pendings/orders',pendingorder.pending)

//get admin 
router.get('/admindetails/login',admin.admindetails)

//delete menu admin
router.delete('/admin/deletemenu/:id',menu_cont.removemenu)

//add to menu admin
router.post('/admin/add',menu_cont.addtomenu)

//post address ans ordersdc pizza
router.post('/addressanditems/add',addrs_item.postaddress_item)

//get all pending details
router.get('/addressanditems/allitems',addrs_item.getfromaddress)

module.exports = router