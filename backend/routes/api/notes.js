

const express = require('express');
const router = express.Router();

const Note = require('../../models/Notes');
//route testing
router.get('/test',(req,res) => res.send('note route testing!'));

//displaying all notes
router.get('/',(req,res)=>{
    Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(404).json({nonotesfound:'No Notes Found'}))
})
//displaying a single note
router.get('/:id', (req, res) => {
    Note.findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(404).json({ nonotefound: 'No Note found' }));
  });

  //adding a note (creating a note)
router.post('/',(req,res)=>{
    Note.create(req.body)
    .then(note => res.json({msg:'Note added successfully'}))
    .catch(err => res.status(400).json({error:'Unable to add this note'}));
})
//updating a note
router.put('/:id',(req,res)=>{ 
    Note.findByIdAndUpdate(req.params.id)
    .then(note => res.json({msg:'Note updated successfully'}))
    .catch(err => res.status(400).json({error:'Unable to update the database'}));
});
//deleting a note
router.delete('/:id',(req,res)=>{
    Note.findByIdAndRemove(req.params.id,req.body)
    .then(note => res.json({msg:'Note deleted successfully'}))
    .catch(err => res.status(404).json({error:'No such note'}));
});

module.exports = router;