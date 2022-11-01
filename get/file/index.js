
let data = require('@begin/data')
successed=''
exports.handler = async function create(req) {

  let filekey=req.queryStringParameters.key
  todo=await data.get({table:'indexes',key:filekey})
  fname=todo.name
  todo=todo.hashes

  
  todo.forEach(elem=> {
    
    data.get({
      table: 'chunks',
      key: elem
    }).then(chunk=>{
successed+=chunk.data
if(successed.length>6*1000*1000){
  return {status:413,body:'file larger than 6*1000*1000 can not direct download'}
}

    }, ()=>{

      return{status:404}
    })

  })

  return {
    status:200,
    isBase64Encoded: true,
    headers:{'Content-Disposition':'attachment; filename="'+fname+'"'},
    body:successed
  }
}