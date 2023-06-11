import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import DailySummary from "models/dailySummary";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const dailysummaries = await DailySummary.find({});
        res.status(200).json({ success: true, data: dailysummaries });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const dailySummary = await DailySummary.create(req.body);
        res.status(201).json({ success: true, data: dailySummary });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
