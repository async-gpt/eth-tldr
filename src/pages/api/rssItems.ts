import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import RssItem from "models/rssItems";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const rssItems = await RssItem.find({});
        res.status(200).json({ success: true, data: rssItems });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const rssItem = await RssItem.create(req.body);
        res.status(201).json({ success: true, data: rssItem });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
