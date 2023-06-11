import { Schema, model, models, Document } from "mongoose";

interface IRssFeed extends Document {
  name: string;
  link: string;
  lastFetchedTime: Date;
}

const rssFeedSchema = new Schema<IRssFeed>(
  {
    name: String,
    link: {
      type: String,
      required: true,
      unique: true,
    },
    lastFetchedTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const RssFeed = models.RssFeed || model<IRssFeed>("RssFeed", rssFeedSchema);

export default RssFeed;
