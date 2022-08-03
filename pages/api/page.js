// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const access_token = req.query.access_token;
  const data_access_expiration_time = req.query.data_access_expiration_time;
  const expires_in = req.query.expires_in;
  const long_lived_token = req.query.long_lived_token;

  res.redirect(
    `/facebookPage?access_token=${access_token}&data_access_expiration_time=${data_access_expiration_time}&expires_in=${expires_in}&long_lived_token=${long_lived_token}`
  );
}
