
程序需在node.js环境下运行
Web前后端分离开发思路

开发一个Web应用的时候我们一般都会简单地分为前端工程师和后端工程师（注：在一些比较复杂的系统中，前端可以细分为外观和逻辑，后端可以分为CGI和Server）。前端工程师负责浏览器端用户交互界面和逻辑等，后端负责数据的处理和存储等。前后端的关系可以浅显地概括为：后端提供数据，前端负责显示数据。

在这种前后端的分工下，会经常有一些疑惑：既然前端数据是由后端提供，那么后端数据接口还没有完成，前端是否就无法进行编码？怎么样才能做到前后端独立开发？


server.js模拟后端返回JSON数据
点击server.bat运行；
浏览器访问http://localhost:8081/