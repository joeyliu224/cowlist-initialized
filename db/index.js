const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cows');

const cowlistSchema = mongoose.Schema({
    name: String,
    description: String
});

const Cow = mongoose.model('Cow', cowlistSchema);

const save = (cow) => {
    let newCow = new Cow({
        name: cow.name,
        description: cow.description
    });
    newCow.save((err) =>{
        if(err) {
            console.log(err);
        }
    });
}

const retreive = () => {
    return Cow.find().exec();
}

const deleteOne = (id) => {
    const objId = `ObjectId(${id})`
    return Cow.deleteOne({_id: id},(err)=>{
        if(err) {
            console.log(err);
        }
    })
}

module.exports.save = save;
module.exports.retreive = retreive;
module.exports.delete = deleteOne;