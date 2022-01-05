module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '983ec394c8ffdbbec7457a37b2f58987'),
  },
});
