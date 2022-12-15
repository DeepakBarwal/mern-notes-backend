const allowedUrls = ['http://localhost:3000', undefined];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedUrls.indexOf(origin) !== -1) {
      callback(null, true);
    }
    else {
      callback(new Error('Not allowed ny cors'));
    }
  }
};

module.exports = corsOptions;
