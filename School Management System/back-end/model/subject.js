import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({

        subName: String,
        numberOfCredits: Number,
        teachBy: String,
        medium: String

});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'book');
// we need to turn it into a model
const postSubject = mongoose.model('subject', userSchema);

export default postSubject;