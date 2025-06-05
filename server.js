const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_URL).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => {
  console.error('DB connection error:', err);
});
