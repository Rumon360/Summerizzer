// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { translate } = require("free-translate");

export default async function handler(req, res) {
  const { text, lang } = req.body;

  const translatedText = await translate(text, {
    from: "en",
    to: lang,
  });

  res.status(200).json({ data: translatedText });
}
