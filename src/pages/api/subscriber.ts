import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import Subscriber from "models/subscriber";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const subscribers = await Subscriber.find({});
        res.status(200).json({ success: true, data: subscribers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const subscriber = await Subscriber.create(req.body);
        res.status(201).json({ success: true, data: subscriber });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
