const express = require('express');

const router = express.Router();

const Fighter = require('../models/Fighter');

router.get('/', async (req, res) => {
  try {
    const allFighters = await Fighter.find();
    res.json({
      code: 200,
      message: "success",
      data: allFighters
    })
  } catch(err){
    res.send(err)
  }
})

router.post('/', async (req, res) => {
  try{
    const createdFighter = await Fighter.create(req.body);
    res.json({
      status: {
        code: 201,
        message: 'success'
      },
      data: createdFighter
    })
  } catch(err){
    res.send(err)
  }
});

router.get('/:id', async (req, res) => {
  try{
    const foundFighter = await Fighter.findById(req.params.id);
    res.json({
      status: {
        code: 200,
        message: 'success'
      },
      data: foundFighter
    })
  }catch(err){
    res.send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedFighter = Fighter.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
        code: 200,
        message: 'updated successfully'
      },
      data: updatedFighter
    })
  } catch(err){
    res.send(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedFighter = await Fighter.findByIdAndRemove(req.params.id);
    res.json({
      status: {
        code: 200,
        message: 'deleted successfully'
      }
    })
  } catch(err){
    res.send(err);
  }
});

module.exports = router;
