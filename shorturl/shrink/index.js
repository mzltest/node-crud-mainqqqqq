let data = require('@begin/data')
function ranstr(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }
exports.handler = async function create(req) {
    let filekey=req.pathParameters.key
  pendingkey=ranstr(4)
  while ((await data.get({  table: 'surls',key:pendingkey}))){
    pendingkey=ranstr(4)
  }

  indexinfo = await data.set({
    table: 'surls',
    dest:filekey,
    key:pendingkey,
    ttl: (Date.now() / 1000) + (60 * 60 * 24 * 1)
  })
  return {
    code:indexinfo.key
    
  }
}
