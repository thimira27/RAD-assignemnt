import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    dateofbirth: Date,
    email: String,
    phone: Number,
    address: String,
    gender: String  
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'student');
// we need to turn it into a model
const postStudent = mongoose.model('student', userSchema);

export default postStudent;