import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO: nonce CANNOT BE hardcoded. The number should only be used once and have expiration.
  // Store it persistently for validation.
  res.status(200).json({ nonce: 42 });
}
