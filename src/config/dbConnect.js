import mongoose from "mongoose";
mongoose.connect("mongodb+srv://alura:123@api-livraria.fpfiliu.mongodb.net/alura-node");
let db = mongoose.connection;
export default db;