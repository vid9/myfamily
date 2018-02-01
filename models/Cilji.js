let mongoose = require("mongoose");

let ciljiSchema = new mongoose.Schema({
    _id : {type : mongoose.Schema.Types.ObjectId, required : true},
    ime: { type:String, required: true, unique: true},
    opis: { type:String, required: true},
    zacetek: { type:Date, default: Date.now },
    konec: { type:Date },
    xp: {Number},
    vezane_naloge: [{type: mongoose.Schema.Types.ObjectId, ref : "Naloge"}],
    vezani_uporabniki: [{type: mongoose.Schema.Types.ObjectId, ref : "Uporabnik"}],
    status: Boolean
});

mongoose.model('Cilji', ciljiSchema, 'Cilji');


