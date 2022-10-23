import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    isbn: String,
    author: String,
    copies: Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'book');
// we need to turn it into a model
const postStudent = mongoose.model('book', userSchema);

export default postStudent;