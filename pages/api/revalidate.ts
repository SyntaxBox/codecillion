import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!SANITY_WEBHOOK_SECRET) return res.status(500).send("No secrete found");

  let signature = req.headers[SIGNATURE_HEADER_NAME];
  if (!signature) {
    {
      res.status(403).json({ success: false, message: "no signature" });
      return;
    }
  }
  if (typeof signature !== "string") signature = signature[0];
  const isValid = isValidSignature(
    JSON.stringify(req.body),
    signature,
    SANITY_WEBHOOK_SECRET
  );

  console.log(`===== Is the webhook request valid? ${isValid}`);

  // Validate signature
  if (!isValid) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  try {
    const pathToRevalidate = req.body.slug.current as string;

    console.log(`===== Revalidating: ${pathToRevalidate}`);

    await res.revalidate(pathToRevalidate);

    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    // Could not revalidate. The stale page will continue to be shown until
    // this issue is fixed.
    return res.status(500).send("Error while revalidating");
  }
}
