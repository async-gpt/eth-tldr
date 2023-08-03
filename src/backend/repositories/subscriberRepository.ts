import Subscriber, { ISubscriber } from "models/subscriber";

class SubscriberRepository {
  async createSubscriber(email: string): Promise<ISubscriber> {
    const subscriber = new Subscriber({ email });
    return subscriber.save();
  }

  async findSubscriberByEmail(email: string): Promise<ISubscriber | null> {
    return Subscriber.findOne({ email, isDeleted: false });
  }

  async findSubscribersByEmailStatus(
    emailStatus: ISubscriber["emailStatus"]
  ): Promise<ISubscriber[]> {
    return Subscriber.find({ emailStatus, isDeleted: false });
  }

  async deleteSubscriberByEmail(email: string): Promise<ISubscriber | null> {
    return Subscriber.findOneAndUpdate(
      { email, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
  }
}

export default new SubscriberRepository();
