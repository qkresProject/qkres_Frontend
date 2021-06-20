const express = require('express');
const router = express.Router();
const Slot = require('../models/slots');
router.get('/', async(req,res) => {
    try {
        const slots = await Slot.find();
        res.json(slots);
    } catch (error) {
        res.send('Error ' + error);
    }
});
router.get('/:id', async(req,res) => {
    try {
        const slot = await Slot.findById(req.params.id);
        res.json(slot);
    } catch (error) {
        res.send('Error ' + error);
    }
});

router.post('/post', async (req, res) => {
    
    const slot = new Slot({Date:req.body.Date,slot:req.body.slot,taken:req.body.taken});
    try {
        const x = await slot.save();
       
    } catch (error) {
        res.send('Error ' + error);
    }
});


// router.delete('/delete/:id',async (req, res) => {
    
    // const slotID = req.params.id.toString().trim();
    // console.log(`req.params.id: ${req.params.id}`);
    // await Slot.findByIdAndRemove(slotID, (err, job) => { if (!err) {
    //     console.log("YES");
    //   } else {
    //     console.log("Error in employee delete :" + err);
    //   }});
//     try {
//         const response = await model.Slot.deleteOneArticleFromDB(slotID);
//         res.status(200).json({message: response, app: 'wiki-api'});
//     } catch (err) {
//         res.json({message: err, app: 'wiki-api'});
//     }


//    });

//    app.delete('/articles/:id', async (req, res) => {
//     const articleID = req.params.id;
//     console.log(`req.params.id: ${req.params.id}`);
    // try {
    //     const response = await model.DBUtility.deleteOneArticleFromDB(articleID);
    //     res.status(200).json({message: response, app: 'wiki-api'});
    // } catch (err) {
    //     res.json({message: err, app: 'wiki-api'});
    // }
// });
module.exports = router;