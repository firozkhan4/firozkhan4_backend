import certificateService from "../service/certificateService.js"

export const getAllCertificates = async (req, res) => {
  const certificates = await certificateService.getAllCertificates()
  return res.json(certificates)
}

export const createCertificate = async (req, res) => {

  const certificate = await certificateService.createCertificate(req.body)
  return res.json(certificate)

}
