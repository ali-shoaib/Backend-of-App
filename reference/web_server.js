const http = require('http');

http.createServer((req,res) => {
    res.write('Hey world :)');
    res.end();
})
.listen(1000,()=>console.log('server is running...'));