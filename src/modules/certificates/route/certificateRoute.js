import express from "express"
import { createCertificate, getAllCertificates } from "../controller/certificateController.js"

const route = express.Router()


route.get("/", getAllCertificates)
route.post("/", createCertificate)


export default route
