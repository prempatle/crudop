const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');
//req data
app.use(cors());
app.use(express.json());
//routing
app.use('/api', productRoutes);
mongoose.connect('mongodb://localhost:27017/productDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
