import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, (err) => {
    if (err) {
        return console.log("Connetion DB error - " + err);
    }
    return console.log("Connetion DB OK");
});

export default mongoose.connection;