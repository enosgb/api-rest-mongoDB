import mongoose from 'mongoose';

mongoose.connect("your mongo connect configuration");

let db = mongoose.connection;

export default db;
