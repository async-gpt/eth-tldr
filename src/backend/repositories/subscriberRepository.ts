import Subscriber from "models/subscriber";

class SubscriberRepository {
  async createSubscriber(email: string) {
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    return subscriber;
  }

  async findSubscribers() {
    const subscribers = await Subscriber.find();
    return subscribers;
  }

  async deleteSubscriber(email: string) {
    const deletedSubscriber = await Subscriber.findOneAndDelete({ email });
    return deletedSubscriber;
  }
}

export default SubscriberRepository;
