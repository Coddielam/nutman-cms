"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", () => ({
  async create(ctx) {
    await super.create(ctx);
  },
}));
