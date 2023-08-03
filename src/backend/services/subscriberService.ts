import SubscriberRepository from "../repositories/subscriberRepository";
import { ISubscriber } from "models/subscriber";

class SubscriberService {
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async createSubscriber(email: string): Promise<ISubscriber> {
    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email address");
    }

    const existingSubscriber = await SubscriberRepository.findSubscriberByEmail(email);
    if (existingSubscriber && !existingSubscriber.isDeleted) {
      throw new Error("Subscriber already exists");
    }

    return await SubscriberRepository.createSubscriber(email);
  }

  async findSubscriberByEmail(email: string): Promise<ISubscriber | null> {
    return SubscriberRepository.findSubscriberByEmail(email);
  }

  async findSubscribersByEmailStatus(
    emailStatus: ISubscriber["emailStatus"]
  ): Promise<ISubscriber[]> {
    return await SubscriberRepository.findSubscribersByEmailStatus(emailStatus);
  }

  async deleteSubscriberByEmail(email: string): Promise<ISubscriber | null> {
    return await SubscriberRepository.deleteSubscriberByEmail(email);
  }
}

export default new SubscriberService();
