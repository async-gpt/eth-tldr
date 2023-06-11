import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import RssFeed from "models/rssFeed";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const rssFeeds = await RssFeed.find({});
        res.status(200).json({ success: true, data: rssFeeds });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const rssFeed = await RssFeed.create(req.body);
        res.status(201).json({ success: true, data: rssFeed });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
