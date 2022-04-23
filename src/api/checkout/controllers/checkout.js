const stripe = require("stripe")(process.env.STRIPE_PRIVATE);

module.exports = {
  async createPaymentIntent(ctx) {
    const products = await strapi.db.query("api::product.product").findMany({
      select: ["product_price", "product_name_cn"],
      where: { id: 1 },
    });
    const intent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "hkd",
      payment_method_types: ["card"],
    });

    ctx.body = intent.client_secret;
    ctx.send({
      secret: intent.client_secret,
      products: products,
    });
  },
};
