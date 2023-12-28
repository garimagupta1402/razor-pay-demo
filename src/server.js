const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_8iw3hieJcfKT4O',
  key_secret: '1pTOAUQ2AIAnaBpXoPgOGd4x',
});

app.post('/create-order', async (req, res) => {
  const amount = 1000; // Replace with the actual amount
  const currency = 'INR';

  const options = {
    amount: amount * 100, // Amount in paise
    currency: currency,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ order_id: order.id });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3001; // Replace with your desired port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
