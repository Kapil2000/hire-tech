import mongoose from 'mongoose'

const URI = process.env.MONGODB_URI;

const connectDb = async () => {  
    try {
      await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  };

export default connectDb;