// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { translate } from "@vitalets/google-translate-api";

export default async function handler(req, res) {
  const { mainText, lang } = req.body;

  const { text } = await translate(mainText, { to: lang });

  try {
    const { text } = await translate(mainText, { to: lang });

    res.status(200).json({ data: text });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}
