module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/checkout",
      handler: "checkout.createPaymentIntent",
    },
  ],
};
