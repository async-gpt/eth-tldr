import { Schema, model, models, Document, Types } from "mongoose";
import Subscriber from "./subscriber";

interface IDailyEmailContent extends Document {
  date: Date;
  _rssIds: Types.ObjectId[];
  subscribers: Types.ObjectId[];
}

const dailyEmailContentSchema = new Schema<IDailyEmailContent>(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    _rssIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "RssFeed",
      },
    ],
    subscribers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subscriber",
      },
    ],
  },
  {
    versionKey: false,
  }
);

const DailyEmailContent =
  models.DailyEmailContent ||
  model<IDailyEmailContent>("DailyEmailContent", dailyEmailContentSchema);

export default DailyEmailContent;
