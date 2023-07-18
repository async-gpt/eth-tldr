const { ObjectId } = require("mongoose").Types;

module.exports = {
  async up(db) {
    const RSSFeed1 = new ObjectId();
    const RSSFeed2 = new ObjectId();
    await db.collection("rssfeeds").insertMany([
      {
        _id: RSSFeed1,
        name: "news btc",
        link: "https://www.newsbtc.com/news/ethereum/feed/",
        lastFetchedTime: new Date(),
      },
      {
        _id: RSSFeed2,
        name: "hacker news",
        link: "https://feeds.feedburner.com/TheHackersNews",
        lastFetchedTime: new Date(),
      },
    ]);
    const subscriber1 = new ObjectId();
    await db.collection("subscribers").insertMany([
      {
        _id: subscriber1,
        email: "eth.tldr@gmail.com",
        createdTime: new Date(),
        lastUpdatedTime: new Date(),
        isDeleted: false,
        emailStatus: "unsent",
      },
    ]);
    await db.collection("dailyemailcontents").insertMany([
      {
        _id: new ObjectId(),
        date: new Date(),
        _rssIds: [RSSFeed1, RSSFeed2],
        subscribers: [subscriber1],
      },
    ]);
  },
};
