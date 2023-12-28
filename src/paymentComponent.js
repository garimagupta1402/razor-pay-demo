import React, { useEffect } from 'react';
import { loadScript } from './utils'; // Create a utility function to load external scripts

const PaymentComponent = () => {
  useEffect(() => {
    const loadRazorpay = async () => {
      const scriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (scriptLoaded) {
        const razorpay = new window.Razorpay({
        });
      } else {
        console.error('Failed to load Razorpay script');
      }
    };

    loadRazorpay();
  }, []);
  const handlePayment = async () => {
    const razorpay = new window.Razorpay({
      key_id: 'rzp_test_8iw3hieJcfKT4O', 
      amount: 1000,
      currency: 'INR',
      name: 'Appinventiv',
      description: 'Payment for your product/service',
      image: 'URL to your logo',
      order_id: 'order_NHibPl7tMe5fCi', 
      handler: async (response) => {
        console.log(response);   
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '7838534494',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    });

    razorpay.open();
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentComponent;
