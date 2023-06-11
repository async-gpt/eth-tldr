import { Schema, model, models, Document } from "mongoose";

interface ISubscriber extends Document {
  email: string;
  createdTime: Date;
  lastUpdatedTime: Date;
}

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    createdTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
    lastUpdatedTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const Subscriber = models.Subscriber || model<ISubscriber>("Subscriber", subscriberSchema);

export default Subscriber;
