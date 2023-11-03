* nodejs: javascript런타임이다 -> nodejs는 다른버전의 javascript라고 할 수 있다 -> 즉 자바스크립트를 다른환경에서 구현한것
* 자바스크립트 기반으로 반들어졌으며 몇몇 기능을 더하고 기존 자바스크립트로 브라우저에서 가능했던 기능중 일부가 빠짐
* 이론적으로 서버 뿐만아니라 어떤 기기에서도 실행 할 수 있다
* v8 js엔진을 사용중인데 js코드를 머신코드로 컴파일 한다
* 브라우저는 항상 속일 수 있기 때문에 백엔드가 필요하다
* nodejs는 단지 유틸리티 스크립트를 작성하는데 훌륭한도구 -> vue, react, express
* 아 nodejs는 v8 엔진이 내장되어 있으니까 브라우저가 아닌 컴퓨터 안에서도 실행이 되는거네 
* heap: 
  * 동적으로 할당된 데이터, 객체, 배열 및 함수와 같은 자료구조의 인스턴스를 저장하는것
  * 참조로 연결되어 있음
  * 힙에 저장된 데이터에 대한 참조가 stack 내에서 사용
* nodejs 
    * javascript engine(stack + heap) + webapis + callback queue + enent loop = nodejs = javascript runtime
    * Stack -> WebAPIs -> callback queue -> event loop
    * Stack: 코드의 실행이 주로 callStack 을 통해 시작, 함수 호출 및 실행은 여기서 관리
    * Web Apis: 비동기작업을 여기서 처리, 작업이 완료되면 콜백 함수를 호출하거나 이벤트를 생성
    * callback queue(task queue): 비동기 작업이 완료되면 콜백 함수가 callback queue or tackqueue에 추가. 여기에 대기중인 작업들이 들어옴
    * event loop: call stack 과 callback queue 간의 상호작용을 관리
      * 이벤트 루프가 주기적으로 call stack이 비어 있는지 확인하고 비어 있을때 callback queue에서 대기 중인 작업을 가져와 call stack으로 이동 -> 비동기 작업의 결과 또는 콜백함수가 실행
* nodejs는 요청을 처리하는것이 매우 빠르고 배후에서는 운영체제의 영향력에 따라 약간의 다중 스레드를 사용한다? 이게 웹 api인가
* 
