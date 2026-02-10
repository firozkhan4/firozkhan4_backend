import Certificate from "../domain/Certificate.js"

const getAllCertificates = async () => {

  const certificates = await Certificate.find({})
  return certificates

}

const createCertificate = async (c) => {

}

export default {
  getAllCertificates, createCertificate
}
