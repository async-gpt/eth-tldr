import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import SubscriberService from "../../../backend/services/subscriberService";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, query } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { email } = body;
        const createdSubscriber = await SubscriberService.createSubscriber(email);
        return res.status(201).json(createdSubscriber);
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
      }

    case "GET":
      const { email, status } = query;
      if (email) {
        const subscriber = await SubscriberService.findSubscriberByEmail(email as string);
        return res.status(200).json(subscriber);
      } else if (status) {
        const subscribers = await SubscriberService.findSubscribersByEmailStatus(
          status as "sent" | "unsent" | "failed" | "pending"
        );
        return res.status(200).json(subscribers);
      } else {
        return res.status(400).json({ error: "Missing status or email query parameter" });
      }

    case "DELETE":
      const { email: emailToDelete } = query;
      if (typeof emailToDelete === "string") {
        const deletedSubscriber = await SubscriberService.deleteSubscriberByEmail(emailToDelete);
        return res.status(200).json(deletedSubscriber);
      } else {
        return res.status(400).json({ error: "Invalid email query parameter" });
      }

    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
};
