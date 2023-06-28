import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import SubscriberService from "@/backend/services/subscriberService";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const subscriberService = new SubscriberService();

  await dbConnect();

  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const newSubscriber = await subscriberService.createNewSubscriber(email);
      res.status(201).json(newSubscriber);
    } catch (error) {
      res.status(500).json({ error: "Failed to create subscriber" });
    }
  } else if (req.method === "GET") {
    try {
      const subscribers = await subscriberService.getSubscribers();
      res.status(200).json(subscribers);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve subscribers" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { email } = req.query;
      if (typeof email === "string") {
        const deletedSubscriber = await subscriberService.deleteSubscriberByEmail(email);
        res.status(204).json(deletedSubscriber);
      } else {
        res.status(400).json({ error: "Invalid or missing email parameter" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete subscriber" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
