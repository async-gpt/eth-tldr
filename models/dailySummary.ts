import { Schema, model, models, Document, Types } from "mongoose";

interface IDailySummary extends Document {
  date: Date;
  _rssId: Types.ObjectId;
  contentHash: string;
  rssItems: Types.ObjectId[];
}

const dailySummarySchema = new Schema<IDailySummary>(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    _rssId: {
      type: Schema.Types.ObjectId,
      ref: "RssFeed",
      required: true,
    },
    contentHash: {
      type: String,
      required: true,
    },
    rssItems: [
      {
        type: Schema.Types.ObjectId,
        ref: "RssItem",
      },
    ],
  },
  {
    versionKey: false,
  }
);

const DailySummary =
  models.DailySummary || model<IDailySummary>("DailySummary", dailySummarySchema);

export default DailySummary;
