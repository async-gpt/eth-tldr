import { Schema, model, models, Document } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  isDeleted: boolean;
  emailStatus: "sent" | "unsent" | "failed" | "pending";
}

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    emailStatus: {
      type: String,
      enum: ["sent", "unsent", "failed", "pending"],
      default: "unsent",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Subscriber = models.Subscriber || model<ISubscriber>("Subscriber", subscriberSchema);

export default Subscriber;
