const allowedUrls = ['http://localhost:3000', 'https://deepakbarwal.github.io'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedUrls.indexOf(origin) !== -1) {
      callback(null, true);
    }
    else {
      callback(new Error('Not allowed by cors'));
    }
  }
};

module.exports = corsOptions;