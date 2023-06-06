import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Review = ({ rating, content, author }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-100 rounded-lg shadow-lg p-8 mb-4"
    >
      <div className="flex items-center mb-4">
        <div className="mr-2 flex items-center">{renderStars()}</div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white px-4 py-2 rounded-lg"
        >
          <span className="text-2xl font-bold text-gray-800">{author}</span>
        </motion.div>
      </div>
      <p className="text-gray-700">{content}</p>
    </motion.div>
  );
};

const ClientReviews = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Client Reviews
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Review
            rating={5}
            content="Luke did wonderful with our dog, Atlas. He knows basic commands but struggled with always listening to them. After a few sessions with Luke, we already saw improvement! We were given helpful tips to continue working on our own and so much encouragement during our sessions that I feel confident in my ability to continue training my dog."
            author="Lauren Swift"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Review
            rating={5}
            content="Luke did a great job working with Rocky. She would have a lot of problems trying to stay and not run off, but after working with Luke she has been behaving much better. Luke taught her how to stay and not jump on us anymore. It’s amazing to see Rocky listen to us when we use the correct words and corrections. I loved that I was able to learn how to continue training her at home! Overall an amazing experience and I’m very grateful!"
            author="Ella Moore"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Review
            rating={5}
            content="Luke has done wonders with both of my dachshunds. We have had a total attitude change with our older dachshund, who was out of control before. He also set our puppy up for success, and she is the most well behaved puppy we’ve had. Thank you Luke!"
            author="Melissa Stevens"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ClientReviews;
