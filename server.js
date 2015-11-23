var http = require('http');
var fs = require('fs');
var url = require('url');


// ����������
http.createServer( function (request, response) {  
   // �������󣬰����ļ���
   var pathname = url.parse(request.url).pathname;
   var arg = url.parse(request.url).query;
 
	
   console.log("arg for " + arg );
   
   var arg1 = url.parse(request.url, true).query;
   console.log("arg1 for " + arg1 );
    console.log("arg1.name for " + arg1.name );
  
   
   // ���������ļ���
   console.log("Request for " + pathname + " received.");
   
   // ���ļ�ϵͳ�ж�ȡ������ļ�����
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP ״̬��: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	         
         // HTTP ״̬��: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
           response.write("Hello World");
         // ��Ӧ�ļ�����
         response.write(data.toString());		
      }
	  
	  if (pathname=="/user"){ 
	  
	  
	  jsontext = '{"firstname":"'+arg1.name+'","surname":"Aaberg","phone":["555-0100","555-0120"]}';
	   response.writeHead(200, {"Content-Type": "text/json"});
    
	    response.write(jsontext);	
	  
	  }
	     
     
	  
      //  ������Ӧ����
      response.end();
   });   
}).listen(8081);

// ����̨�����������Ϣ
console.log('Server running at http://127.0.0.1:8081/');