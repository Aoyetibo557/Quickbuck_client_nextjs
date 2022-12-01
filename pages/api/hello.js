// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// create logic to redirect to a diffrent api route when called
// export default function handler(req, res) {
//   // if a call is made to the login route then redirect to the login api route in .env file
//   if(req.url === '/login') {
//     res.redirect(process.env.BASE_URL + '/users/login/' + req.body.username + '/' + req.body.password);
//   }
// }

export default function handler(req, res) {
  
  res.status(200).json({ name: 'John Doe' })
}

