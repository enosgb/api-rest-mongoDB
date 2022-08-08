import mongoose from 'mongoose';

mongoose.connect("your mongo db connection");

let db = mongoose.connection;

export default db;
