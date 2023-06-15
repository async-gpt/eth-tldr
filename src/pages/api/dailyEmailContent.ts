import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/dbConnect";
import DailyEmailContent from "models/dailyEmailContent";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const dailyEmailContents = await DailyEmailContent.find({});
        res.status(200).json({ success: true, data: dailyEmailContents });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const dailyEmailContent = await DailyEmailContent.create(req.body);
        res.status(201).json({ success: true, data: dailyEmailContent });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
