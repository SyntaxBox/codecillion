import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    console.error("Must be a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  if (!secret) {
    console.error("no secret");
    return res.status(500).json({ message: "no secret found" });
  }

  let signature = req.headers[SIGNATURE_HEADER_NAME];

  if (!signature) {
    console.error("no signature");
    return res.status(402).json({ message: "no signature found" });
  }

  if (typeof signature !== "string") signature = signature[0];

  const isValid = isValidSignature(JSON.stringify(req.body), signature, secret);

  if (!isValid) {
    console.error("signature is not valid");
    return res.status(405).json({ message: "signature is not valid" });
  }

  try {
    const path = req.body.slug.current as string;
    const type = req.body._type as string;
    console.log(`Revalidating: ${type} -- ${path}`);
    await res.revalidate(`/`);
    await res.revalidate(`/${type === "stacks" ? type : `${type}s`}/${path}`);

    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error while revalidating");
  }
}
