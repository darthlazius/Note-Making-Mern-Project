const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true 
    },
    tag:{
        type :String,
        required : true
    }
});

module.exports = Note = mongoose.model('note',NoteSchema);


