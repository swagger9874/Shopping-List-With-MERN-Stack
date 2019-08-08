const express = require('express')
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@router   GET from "localhost:<PORT>//api/items"
//@desc     GET Items
//@access   Public
router.get('/', (req,res) => {
    Item.find()                                                 //.find() method is Promise based so we use .then() method
        .sort({ date: -1 })                                     // "-1" means it sorts descending if it was "1" then it sorts ascending
        .then(items => res.json(items))
})

//@router   POST item to "localhost:<PORT>//api/items"
//@desc     Create An Item
//@access   Public

router.post('/', (req,res) => {
    const newItem = new Item({                                  //Item is a model that we created and we get it from above
        name: req.body.name
    })      
    newItem.save().then(item => res.json(item))                 //.save() method is Promise based 
});                                                             //so we use .then() method and it returns the saved item

//@router   DELETE item from "localhost:<PORT>//api/items/:id"
//@desc     DELETE An Item
//@access   Public

router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success : true })))
    .catch(err => res.status(404).json( {success : false} ));
});

module.exports = router