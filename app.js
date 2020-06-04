const http = require('http')
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')

let user={
    admin:123456
}
http.createServer((req,res)=>{
    // 获取数据
    let path,get,post
    if(req.method=='GET'){
        let {pathname, query} = url.parse(req.url,true)
        path=pathname,
        get=query
        complete()
    }else if(req.method=='POST'){
        let arr=[]
        path=req.url
        req.on('data',buffer=>{
            arr.push(buffer)
        })
        req.on('end',()=>{
            post=querystring.parse(Buffer.concat(arr).toString())

            complete()
        })
    }

    function complete(){
        
        if(path=='/login'){
            res.writeHead(200,{
                "Content-Type":"text/plain;charset=utf-8"
            })
    
            let {username,password}=get
            
            if(!user[username]){
                
                res.end(JSON.stringify({
                        err:1,
                        msg:"用户名不存在"
                    })
                )
            }else if(user[username]!=password){
                
                res.end(JSON.stringify({
                        err:1,
                        msg:"密码错误"
                    })
                )
            }else{
                res.end(JSON.stringify({
                        err:0,
                        msg:"登录成功"
                    })
                )
            }
        }else if(path=='/reg'){
            res.writeHead(200,{
                "Content-Type":"text/plain;charset=utf-8"
            })
    
            let {username,password}=post

            if(user[username]){
                res.end(JSON.stringify({
                        err:1,
                        msg:"账户已经存在"
                    })
                )
            }else{
                console.log(user);
                user[username]=password
                res.end(JSON.stringify({
                        err:0,
                        msg:"注册成功"
                    })
                )
            }
        }else if (path == "/") {
            fs.readFile("./src/index.html", (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        }else{
            fs.readFile(`src${path}`,(err,data)=>{
                if(err){
                    res.end('404')
                }else{
                    res.end(data)
                }
            })
        }
    }

}).listen(8888)