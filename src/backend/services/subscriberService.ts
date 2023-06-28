import SubscriberRepository from "@/backend/repositories/subscriberRepository";

class SubscriberService {
  private subscriberRepository: SubscriberRepository;

  constructor() {
    this.subscriberRepository = new SubscriberRepository();
  }

  async createNewSubscriber (email: string) {
    return await this.subscriberRepository.createSubscriber(email);  
  }

  async getSubscribers() {
    return await this.subscriberRepository.findSubscribers();
  }

  async deleteSubscriberByEmail (email: string) {
    return await this.subscriberRepository.deleteSubscriber(email);
  }
}

export default SubscriberService;
