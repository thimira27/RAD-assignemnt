import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    itemCode: String,
    name: String,
    description: String,
    count: Number,
    labno: Number,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'labitem');
// we need to turn it into a model
const postLabItem = mongoose.model('labitem', userSchema);

export default postLabItem;