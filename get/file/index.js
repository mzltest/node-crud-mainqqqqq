
let data = require('@begin/data')

exports.handler = async function create(req) {
  successed=''
  let filekey=req.queryStringParameters.key
  todo=await data.get({table:'indexes',key:filekey})
  fname=todo.name
  todo=todo.hashes
  
for(i=0;i<todo.length;i++){
  elem=todo[i]
   res=await data.get({
      table: 'indexes',
      key: elem
    })
    
successed=successed.concat(res.data)
console.log(successed.length)
if(successed.length>5800000){
  return {status:413,body:'file larger than 5,800,000 bytes can not direct download'}
}

    }

 

  return {
    statusCode:200,
    isBase64Encoded: true,
    headers:{'Content-Disposition':'attachment; filename="'+fname+'"'},
    body:successed
  }
}
