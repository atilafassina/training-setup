// @ts-check
/**
 *
 * @param {import("next").NextApiRequest} _req
 * @param {import("next").NextApiResponse} res
 */
export default function preview(_req, res) {
  res.setPreviewData({
    maxAge: 60 * 60, // expires in 1 hour
  })

  res.writeHead(307, { location: '/' })
  res.end()
}
