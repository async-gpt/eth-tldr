import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";


type Data = {
  name?: string; // Make the 'name' property optional
  error?: string; // Add an optional 'error' property
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    await connectDB();
    console.log("Database connected"); // Log a message indicating successful connection
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    console.error("Failed to connect to database:", error); // Log the error if connection fails
    res.status(500).json({ error: "Failed to connect to database" });
  }
}
