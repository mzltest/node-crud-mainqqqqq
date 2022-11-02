let data = require('@begin/data')

exports.handler = async function create(req) {
    let filekey=req.pathParameters.code
    if (filekey){
res= await data.get({  table: 'surls',key:filekey.toLowerCase()})
   return{
    statusCode: 302,
    headers: {
      'Location': '/?'+res.dest,
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
   }
  }}
