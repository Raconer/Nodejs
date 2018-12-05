NODE.JS

  Node.js 란?
    확장성 있는 네트워크 애플리케이션(특히 서버 사이드) 개발에 사용되는 소프트웨어 플랫폼이다.
    작성언어로 JavaScript를 활용하며 Non-blocking(멈추지 않는다) I/O와 단일 스레드 이벤트 루프를 통한
    높은 처리 성능을 가지고 있다.
    내장 Http 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프트웨어 없이
    동작 하는것이 가능하며 이를 통한 웹 서버의 동작에 있어 더 많은 통제를 가능케 한다.


  NODE.JS 특징
    1.비동기 I/O 처리, 이벤트 위주
        Node.js 라이브러리의 모든 API는 비동기식이다.
        Node.js 기반 서버는 API가 실행되었을때, 데이터를 반환할때까지 기다리지 않고 다음 API를 실행한다.
        그리고 이전에 실행했던 API가 결과 값을 반환할시, NodeJS의 이벤트 알림 메커니즘을 통해
        결과 값을 받아온다.

        ex)
        // fs = File System
        var fs = require('fs');

        // Sync
        console.log(1);
        var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
        console.log(data);

        // Async
        console.log(2);
        fs.readFile('data.txt', {encoding : 'utf8'}, function(err, data) {
          console.log(3);
          console.log(data);
        });
        console.log(4);

        실행
        1 2 4 3
    2.빠른 속도
        구글 크롬의 V8 JavaScript Engine를 사용하여 빠른 코드 실행 제공
    3.단일 쓰레드/뛰어난 확장성
        Node.js는 이벤트 루프와 함께 단일 쓰레드 모델을 사용한다.
        이벤트 메커니즘은 서버가 멈추지 않고 반응하도록 하여 서버의 확장성을 키워준다.
        반면 일반적인 웹서버(ex: Apache)는 요청을 처리하기 위해 제한된 쓰레드를 생성한다.
        Node.js는 쓰레드를 한개만 사용하고 Apache같은 웹서버 보다 더많은 요청을 처리할수있다.
    4.노 버퍼링
        Node.js는 어플리케이션엔 데이터 버퍼링이 없고, 데이터를 chunk로 출력한다.

  Node.js 기본 웹 서버 셋팅

    1.Node.js 주소
      https://nodejs.org/ko/

    2.서버 생성 코드(Node.js 홈페이 > About menu)

      // Read HTTP
      const http = require('http');

      // Set Hostname, Port Number
      const hostname = '127.0.0.1';
      const port = 3000;

      // Create Server
      const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
      });
      // Start Server
      server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
      });

  Node.JS를 좀더 쉽게 사용하기 위한 NPM(Node Package Manager)

    NPM 주소(https://www.npmjs.com/)

    1. npm 에는 Node를 좀더 간편하게 사용하기 위한 package들이 있다.
      ex) Express, body-parser, Supervisor...
    2. 원하는 package를 확인 할려면 NPM홈페이지에 들어가 Package를 검색한후
        CMD창에서 npm install --save "package name"을 입력하면된다.(Window 기준)

    NPM중 Express를 사용하여 서버 만들기

    1. CMD > Project로 이동

    2. npm init // 현재 폴더를 npm사용 위치로 세팅 하는 명령어 이다.

    3. npm install --save Express // express를 설치한다.

    4. project로 들어와 app.js(서버가 시작될 js 파일)을 생성하고 코드 입력

    // express package 를 요청한다.
    var express = require('express');

    // 관련 함수를 app으로 변수를 지정한다.
    var app = express();

    // listen으로 서버를 셋팅및 설정한다.(3000번째 PORT를 사용한다.)
    app.listen(3000, function(){
      console.log('Connected 3000 port');
    });

    5. cmd 창에서 node app.js를 실행하면 서버가 실행된다.
