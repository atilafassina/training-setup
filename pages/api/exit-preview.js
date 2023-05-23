// @ts-check
/**
 *
 * @param {import("next").NextApiRequest} _req
 * @param {import("next").NextApiResponse} res
 */
export default function exit(_req, res) {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' })
  res.end()
}
