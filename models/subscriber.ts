import { Schema, model, models, Document } from "mongoose";

interface ISubscriber extends Document {
  email: string;
}

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Subscriber = models.Subscriber || model<ISubscriber>("Subscriber", subscriberSchema);

export default Subscriber;
