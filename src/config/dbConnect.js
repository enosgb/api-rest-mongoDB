import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://SU:687412@cluster0.2u8porq.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
