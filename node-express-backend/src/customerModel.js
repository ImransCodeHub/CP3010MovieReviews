import mongoose from "mongoose";

const { Schema, model } = mongoose;

const customerSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    movie: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
});
  
const Customer = model('Customer', customerSchema);
  
export default Customer;