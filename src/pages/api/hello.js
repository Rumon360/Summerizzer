export default async function handler(req, res) {
  res.status(200).json({ result: process.env.random });
}
