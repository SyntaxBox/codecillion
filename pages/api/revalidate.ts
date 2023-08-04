import { isValidRequest } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!secret) {
    console.error("no secret");
    return res.status(500).json({ message: "no secret found" });
  }

  if (req.method !== "POST") {
    console.error("Must be a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  if (!isValidRequest(req, secret)) {
    res.status(403).json({ message: "Invalid signature" });
    return;
  }

  try {
    const path = req.body.slug.current as string;
    const type = req.body._type as string;
    console.log(`Revalidating: ${type} -- ${path}`);
    await res.revalidate(`/${type === "stacks" ? type : `${type}s`}/${path}`);

    return res.json({ message: "Revalidated" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error while revalidating");
  }
}
