import db from '../../config/database.js';
import formatDate from '../../utils/date.js';

const resolvers = {
  Query: { 
    async getImages(_, __, context) {
      let collection = await db.collection("images");
      const images = await collection.find({}).toArray();
      return images;
    },
  },
  Mutation: {
    async createImage(_, { height, width, isGrayScale, isYoung }, context) {
      const collection = await db.collection("images");
      
        const imageUrl = `https://placekeanu.com/${width}/${height}/${isGrayScale ? 'g': ''}${isYoung ? 'y': ''}`;
        const createdAt = formatDate(new Date())

        const insert = await collection.insertOne({ imageUrl, createdAt});
        if (insert.acknowledged)
          return { imageUrl };
        return null;
      }
    }
};

export default resolvers;