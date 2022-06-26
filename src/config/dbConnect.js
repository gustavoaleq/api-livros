import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://alura:123@api-livros.5bixns5.mongodb.net/api-livros")

let db = mongoose.connection;

export default db