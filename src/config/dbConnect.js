import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://SU:<password>@cluster0.q28klwk.mongodb.net/api-rest");

let db = mongoose.connection;

export default db;
