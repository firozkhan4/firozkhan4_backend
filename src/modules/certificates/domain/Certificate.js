import { model, Schema } from "mongoose";

const certificateSchema = Schema({
  title: {
    type: String,
    required: true
  },
  issuer: {
    type: String,
    required: true

  },
  date: {
    type: String,
    required: true

  },
  id: {
    type: String,
    required: true

  },
  link: {
    type: String,
    required: true

  },
  skills: {
    type: String,
    required: true

  },
  certificateId: {
    type: String,
    required: true
  }
})

const Certificate = model("Certificate", certificateSchema)

export default Certificate;
