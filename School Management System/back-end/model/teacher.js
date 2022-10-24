import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    phone: Number,
    exyears: Number,
    age: Number,
    sub: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'teacher');
// we need to turn it into a model
const postTeacher = mongoose.model('teacher', userSchema);

export default postTeacher;