module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '54f1d249627f9d42662f51e03b2d9143'),
  },
});
