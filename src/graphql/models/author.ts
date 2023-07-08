import { Schema, model, models } from 'mongoose';

const authorSchema = new Schema({
  name: {
    type: String,
  },
});

export default models.Author ?? model('Author', authorSchema);
