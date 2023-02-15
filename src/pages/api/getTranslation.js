// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { translate } = require("free-translate");

export default async function handler(req, res) {
  const { text, lang } = req.body;

  try {
    const translatedText = await translate(text, {
      from: "en",
      to: lang,
    });

    res.status(200).json({ data: translatedText });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}
