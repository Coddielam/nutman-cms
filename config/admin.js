module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07e62ee88b7c7f6554babce8d7d91f9f'),
  },
});
