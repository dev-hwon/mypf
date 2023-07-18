import React from "react";
import "../Dic.css";

export default function Dictionary() {
  return (
    <>
      <dl className="info_dictionary">
        <dt>SPA MPA</dt>
        <dd>
          <div className="tx_dic_name">SPA (single page applicatioin)</div>
          <div className="tx_dexc">
            한 개(Single)의 Page로 구성된 Application이다. 웹 에플리케이션에
            필요한 모든 정적 리소스를 최초 한 번에 다운로드한다. 그 이후 새로운
            페이지 요청이 있을 때, 페이지 갱신에 필요한 데이터만 전달 받아서
            페이지를 갱신한다.
          </div>
          <div className="tx_good">
            [장점]
            <ul>
              <li>컴포넌트별 개발 용이 (생산성)</li>
              <li>
                모바일 앱 개발을 염두에 둔다면 동일한 API를 사용하도록 설계 가능
                (생산성)
              </li>
              <li>필요한 리소스만 부분적으로 로딩 (성능)</li>
              <li>
                필요한 부분만 갱신하기 때문에 네이티브 앱에 가까운 자연스러운
                페이지 이동과 사용자 경험(UX)을 제공할 수 있다.
              </li>
            </ul>
          </div>
          <div className="tx_bad">
            [단점]
            <ul>
              <li>
                JavaScript 파일을 번들링해서 한 번에 받기 때문에 초기 구동
                속도가 느리다. (Webpack의 code splitting으로 해결 가능)
              </li>
              <li>
                CSR 방식으로 만든 SPA 앱은 검색엔진최적화(SEO)가 어렵다 (SSR로
                해결 가능)
              </li>
              <li>보안 이슈 (프론트엔드에 비즈니스 로직 최소화) </li>
              <li>
                SSR에서는 사용자에 대한 정보를 서버측에서 세션으로 관리를 하지만
                CSR 방식에서는 클라이언트측의 쿠키말고는 사용자에 대한 정보를
                저장할 공간이 마땅치 않다.
              </li>
            </ul>
          </div>
          <ul>
            <li>spa</li>
            <li>
              mpa (multi page application) 여러 개(Single)의 Page로 구성된
              Application이다 MPA는 새로운 페이지를 요청할 때마다 정적 리소스가
              다운로드된다. 매번 전체 페이지가 다시 렌더링 된다. [장점] - SEO
              관점에서 유리하다. - 첫 로딩 매우 짧다. [단점] - 매 페이지
              요청마다 리로딩(새로고침) 발생. - 페이지 이동시 불필요한 템플릿도
              중복해서 로딩 (성능) - 서버 렌더링에 따른 부하 - 모바일 앱 개발시
              추가적인 백엔드 작업 필요 (생산성)개발이 복잡해질 수 있다
            </li>
          </ul>
        </dd>
        <dt>ssr csr 차이</dt>
        <dd>
          <ul>
            <li>
              ssr (server side rendering) 서버단에서 연산하여 완성된 페이지
              형태로 제공하는걸 서버사이드 렌더링이라고 함 (기존에 전통적인
              웹페이지 대부분임)
            </li>
            <li>
              csr (client side rendering) 최초에 전체페이지를 보여준뒤
              사용자요청이있을때마다 리소스를 서버에서 제공하고 클라이언트가
              해석하고 렌더링하는방식 SEO 처리에 어려움이있음
              (단일페이지이기때문에) (url path가 변경될떄 해당정보를 보내도록
              처리해봤는데 안됨. 결국 ssr식으로 처리하는방법밖에없음)
            </li>
          </ul>
        </dd>
        <dt>전역 변수와 지역변수 대해 설명</dt>
        <dd>
          <ul>
            <li>
              전역변수 : 함수밖에서 선언하여 전체에 사용가능한 변수 -
              인스턴스변수 : 클래스영역에서 선언되어 객체가 생성될때마다
              만들어지고 생성되었을때만 호출하여 사용할수 있음 - 클래스 변수 :
              객체를 따로 생성하지 않아도 사용가능 / 남발시 프로그램 실행속도에
              악영향
            </li>
            <li>지역변수 : 특정 스콥내에서 생성되어 그 안에서만 사용</li>
          </ul>
        </dd>
        <dt> event capture, event bubbling에 대해서 설명</dt>
        <dd>
          <ul>
            <li>
              캡쳐 : 버블링과 반대 방향으로 진행되는 이벤트 전파 방식 / 이벤트
              진행시 최상위요소에서 탐색을통해 타켓요소까지{" "}
            </li>
            <li>target : - </li>
            <li>
              버블링 :이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로
              전달되어 가는 특성을 의미 - event.stopPropagation() 상위요소로의
              전달을 막음 - Event Delegation 상위의 화면 요소란? HTML 요소는
              기본적으로 트리 구조를 갖습니다. 여기서는 트리 구조상으로 한 단계
              위에 있는 요소를 상위 요소라고 하며 body 태그를 최상위 요소라고
              부르겠습니다.
            </li>
          </ul>
        </dd>
        <dt>서버와 클라이언트 구조에 대한 설명</dt>
        <dl>
          <ul>
            <li>
              클라이언트 : 네트워크를 이용하여 서버측에 서비스요청을하는 컴퓨터
            </li>
            <li>
              서버 : 네트워크에서 다른컴표터나 소프트웨어와 같은 클라이언트에게
              서비스를 제공하는 컴퓨터
            </li>
          </ul>
          1. 클라이언트가 서버에 어떤서비스를 요청 2. 서버는 요청에 응답하여
          처리수행 3. 서버는 처리결과를 클라이언트에게 전달 4. 클라이언트는
          처리결과를 받는다 - 네트워크 : 클라이언트와 서버가 정보를 주고받을수
          있게 다리역활을 하는기술 - LAN : 로컬영역 네트워크 (Local Area
          Network)
        </dl>
        <dt>렌더링</dt>
        <dd>
          1. 브라우저는 서버가 보내준 HTML 파일 을 해석(Parsing)하여 DOM 트리 를
          만든다. 2. 브라우저는 서버가 보내준 CSS 파일 을 해석(Parsing)하여
          CSSOM 트리 도 만든다. 3. DOM 트리 + CSSOM 트리 를 결합해 렌더트리 를
          만든다. 4. 렌더트리로 각 노드의 위치와 크기를 계산한 레이아웃 을
          만든다. 뷰포트(Viewport) 내에서 각 노드들의 위치와 크기를 계산한다 5.
          Layout 계산이 완료되면 이제 요소들을 실제 화면을 그리는 페인트(Paint)
          를 한다.
        </dd>
        <dt>가상돔(Virtual Dom)</dt>
        <dd>
          우선 DOM에대해 설명을 해야할것같습니다. DOM(Document Object Model)은
          웹 페이지를 이루는 태그들을 자바스크립트가 이용할 수 있게끔 브라우저가
          트리구조로 만든 객체 모델을 말합니다. 문제점은 기존의 전통적인
          웹모델인 MPA경우엔 DOM에 변화가 일어났을경우 브라우저가 css를 다시
          연산하고 레이아웃을 구성하고 리페인트가 일어나는 과정 반복되어
          렌더링할 양이 많을경우 속도가 느려질수밖에없습니다. 이부분을
          개선하기위해 나온게 가상돔인데 실제 DOM의 변경 사항을 빠르게 파악하고
          반영하기 위해서 내부적으로 가상 DOM을 만들어서 관리한다. 쉽게 말해서,
          Virtual DOM은 DOM의 요약본이라고 볼 수 있으며 데이터가 업데이트 되었을
          때, 가상돔에서 재계산되고, 해당가상돔과 기존의 DOM과 비교하여
          변경된부분만을 적용시킵니다. 만약 규모가 작고 정적인 페이지라면 일반
          DOM이 성능 이 더 좋다. 상황에 따라 어느 쪽이 좋은지 다를 수 있다는
          것이고 그래서 페이지의 성향에 맞춰 작업하는게 중요하다고
          할수있겠습니다.
        </dd>

        <dt>useMemo useCallback 사용한 최적화</dt>
        <dd>
          useMemo : 모두 메모이제이션된값을 반환하는 리액트훅입니다. 직전에
          연산된 값이 있다면 다시 연산하지 않고 해당값을 반환합니다. 의존성
          배열을 함께 넣어주는데 해당 의존성이 변경되었을경우에만
          메모이제이션된값을 재계산합니다. 값을 재활용하기 위해 따로 메모리를
          사용하기 때문에 불필요한 값까지 메모이제이션 해버리면 오히려 메모리를
          낭비할 수 있어, 자주변경되는곳에 사용하는건 적합하지않습니다. 이럴경우
          성능상의 이점 보다는 오히려 코드를 복잡하게 만들어 유지보수를 어렵게
          할 위험도 있다. useCallback : useCallback 동작 코드는 useMemo 함수를
          그대로 이용하기에 내용이 거의 유사하나 연산된 값을보다는 함수를
          비교한다는점에서 약간 차이가 있습니다. 자바스크립트에서 함수는 객체로
          취급이 되기때문에, 함수를 동일하게 만들어도 메모리 주소가 다르면 다른
          함수로 간주됩니다. 리액트에서 함수동등하지 않다고 판다하면 상황에따라
          무한루프에 빠질수도 있습니다. 그래서 어떤특정조건이 변경되지않는이상
          재생성하지 못하게 제한하여 함수동등성을 보장하기위해 사용됩니다.
          자제해야할경우? 연산이 복잡하지 않은 함수에 useCallback을 사용하는
          것은 메모리 낭비이므로, 간단한 일반 함수들에는 useCallback을 사용하지
          않는게 좋다. 의도적으로 매번 새로운 함수나 값을 계산해야 한다면 굳이
          useCallback이나 useMemo를 사용할 필요가 없다. 사용시 주의할점?
          useCallback, useMemo의 의존성 배열에 완전히 새로운 객체나 배열을
          전달해서는 안된다. 만약 useCallback 내부 함수나 useMemo 내부 값에서
          사용하지 않는 props를 전달한다면 메모이제이션을 하는데 소용이 없다.
        </dd>

        <dt>리렌더링조건</dt>
        <dd>
          - state 변경이 있을 때 - 새로운 props이 들어올 때 -
          shouldComponentUpdate에서 true가 반환될 때 (false처리시 리렌더링을
          막을수있음) - forceUpdate가 실행될 때 ( props 나 state 가 아닌 다른
          값이 변경되었을 때 리렌더링을 하고 싶다면 그때 사용할수 있는 메서드 )
          리렌더링을 필요할 때만 작동하게 함으로써 최적화 작업을 함
        </dd>

        <dt>실행컨텍스트관한것</dt>
        <dd>
          실행할 코드에 제공할 환경 정보들을 모아놓은 객체로, 자바스크립트
          엔진이 스크립트를 처음 마주할 때 전역 컨텍스트를 생성하고, 콜 스택에
          push합니다. 여기서 실행컨텍스트는 함수가 실행될때 만들어진다라고
          알고있습니다.
        </dd>

        <dt>this가 결정되는것</dt>
        <dd>
          전역 공간에서 this 는 전역 객체를 가리킨다. 브라우저 환경에서의
          전역객체는 window 이고 Node.js 환경에서는 global 이다. 메서드
          내부에서의 this는 함수명(프로퍼티명) 앞의 객체 함수 내부에서의 this
          전역 객체를 바라본다.
        </dd>

        <dt>웹브라우저에 구글치고 엔터치면 일어나는일</dt>
        <dd>
          1. 사용자가 웹브라우저 검색창에 www.google.com 입력 2. 웹브라우저는
          캐싱된 DNS 기록들을 통해 해당 도메인주소와 대응하는 IP주소를 확인 이
          단계에서 캐싱된 기록에 없을 경우, 다음단계로 넘어간다. 3. 웹브라우저가
          HTTP를 사용하여 DNS에게 입력된 도메인 주소를 요청 4. DNS가
          웹브라우저에게 찾는 사이트의 IP주소를 응답 5. 웹브라우저가 웹서버에게
          IP주소를 이용하여 html문서를 요청 6. 웹어플리케이션서버(WAS)와
          데이터베이스에서 우선 웹페이지 작업을 처리 7. 위의 작업처리 결과를
          웹서버로 전송 8. 웹서버는 웹브라우저에게 html 문서결과를 응답 9.
          웹브라우저는 화면에 웹페이지 내용물 출력
        </dd>
        <dd>
          치면 구글서버에서 index.html을 get요청으로 가져와야하는데
          가져오기위해서는 구글ip주소가 필요합니다. google.com이라는
          도메인네임을 dns서버를 통해 ip주소를 반환받아 그걸로 index.html 을
          가져와서 브라우저에 렌더링함.
        </dd>
      </dl>
      <div>
        ● 자기 소개 (지원하게 된 계기) 안녕하세요 요번에 잡플래닛 프론트엔드에
        지원하게된 박현원이라도합니다. 제가 처음부터 프론트엔드를
        준비한건아닙니다. 처음엔 퍼블리셔로 시작하게되었고 퍼블리셔로써 업무를
        할때마다 좀더 깊은 이해를 바탕으로 작업된 작업물이 좋은 결과로
        연결되었고 이에 지속적인 학습을 통해 자연스럽게 프론트엔드영역까지
        스펙트럼을 넓히게되었습니다. 제가 공부했던 기술들을 사용한 페이지가
        배포되어 유저들이 이용할때 오는 기분이 매우 좋았고 혼자서 처리할수있는
        범위가 조금씩 넓어지면서 다양한부분을 고려한 작업물을
        보여줄수있다라는것에 희열을 느꼈습니다. ● 지원동기와 성격의 장단점
        나중에 어떻게될지 모르겠지만 저는 아직 제가 좋아하는 일을 하고 싶습니다.
        그중에 하나가 프론트엔드라는 직업이고 현재 잡플래닛에서 요구하는
        기술스택과 제가 가지고있는 기술들이 겹치는부분이 많아
        지원하게되었습니다. 성격은 제가 정말 좋아하는영역일 경우에는 정말
        적극적인 태도를 취하지만 아니면 중간적인 입장을 취하는 성격입니다.
        선넘지않는걸 좋아하고 조화롭게 잘지내는걸 좋아하는입장이다보니 엄청
        이슈가 될만한 사건이 없는거같습니다. 근데 분위가.상황등이 문제가되면
        제가 좀 불편해하는성격이라 직접 나서서 빠르게 환기시키려고
        노력하는편입니다. 학습하는부분에서는 굉장히 적극적으로 배우고있습니다.
        예를들면 이전회사에서 리액트관련하여 교육지원이있었는데 한아이디로
        여러명이 사용하고 있었습니다. 이계정을 접속할떄 이력이 관련담당자에게
        보내지게되는데 이걸 확인한 담당자가 이거 주말까지 계속하는사람 누구냐고
        했을때 접니다라고 했습니다. ● 회사에 대해 얼마나 알고 있는지 (회사에
        대해 얼마나 알고 있는지, 잡플래닛이 어떤 회사라고 생각하는지 ) 입사전에
        해당회사의 분위기나 정보등을 미리알수있기때문에 엄청나게 좋은
        페이지라고생각합니다. 특히나 누구나 경력이라는걸 중요하게 생각하게
        될텐데 잘못들어가서 시간적인 낭비를 줄일수있다는건 엄청난 매리트가
        있다고생각합니다. 최초에 이런생각을 한분이 대단하다고 생각하고 왜
        난이런생각을안했을까...ㅋㅋ생각도해봅니다. ● 협업 시 의견 충돌이 있을 때
        대처방식 ( 상사와 미스커뮤니케이션시 어떻게 대처) 처음에는 가장 근본적인
        원인이 어디있나를 찾아볼것같습니다. 원인을 알아야 해결할수있는 방안이
        보인다고 생각합니다. 하지만 해결한다고 모두가 만족할수있는건 아니기에 더
        좋은방법.대안을 선배에게 조언을 구하거나 그래도 안되면 통상적으로 어떻게
        처리되었는지 회사의 방침을 따르는게 가장 좋을것같습니다. ● 전직장 퇴사
        이유와 어떤 일을 했는지 ● 참여한 프로젝트에서 기술적으로 가장 어려웠던
        부분 ● 잡플래닛에 대해서 궁금한 제가 퍼블리셔부터 시작해서 프론트엔드에
        대한 경력은 사실 남들보다 부족할수가 있는 혹시 이점이 감점요인이 될수
        있을까요?? 실제 프론트엔드 경력은 3,4년정도됩니다. ● 내가 제출한
        포트폴리오 사이트에 대한 기술적 설명 일단 그렇게 재출한이유는 각각
        장단점이 명확해 어떤걸 중요하게 생각하느냐에 따라 적용방법이 달라질꺼라
        생각했기 때문에 처음보자마자 두가지타입으로 만들어야겠다 생각했습니다.
        일단 작업을 하다보면 웹접근성이란부분을 배제할수가 없는데요. 이부분을
        고려한다면 사실 아직까지는 intersection obserber api 를 사용하기가
        어렵습니다. ie 지원이 안되기때문인데요 작년 6월에 마이크로소프트사가
        ie지원을 중단했다고는 하지만 실제로 저희나라 사용자 점유율이 40%이상으로
        가장많은 비율을 차지하고 있어서 고민을 많이 했던부분입니다. 이건 올초에
        제가 에누리에 근무할때 확인했던 지수로 구글애널리틱스에서 접속자별
        브라우저체크시 확인해볼수있었습니다. 그래서 우선적으로 스크롤이벤트를
        통해 작업을 했는데 사실 CPU랑 메모리리소스적인부분에서 너무 비효율적이라
        과연 이게 리액트에 맞는건가 고민을 했습니다. 이부분은 회사 내부에서
        어떤걸 중요하게 생각하는지 확인해서 진행하는게 좋겠다 싶어서
        두가지타입을 준비하게되었습니다.
        ---------------------------------------------- 안녕하세요. 저는 9년차
        경력을 가진 프론트엔드 개발자 박현원입니다. 다양한 프로젝트를 통해
        풍부한 경험과 노하우를 쌓았으며, 사용자 중심의 직관적이고 효율적인 웹
        애플리케이션을 구축하는 데에 열정을 가지고 있습니다. 제 경력은 다양한
        규모와 업종의 프로젝트를 포괄하고 있습니다. 대규모 기업에서는 웹
        애플리케이션의 전체 프론트엔드 아키텍처를 설계하고 개발하는 업무를
        수행했습니다. 이 과정에서 React와 같은 프론트엔드 프레임워크를 활용하여
        모듈화된 컴포넌트 아키텍처를 구축하고, API와의 효율적인 통신을
        구현했습니다. 또한, 웹 애플리케이션의 성능 최적화와 사용자 경험 개선을
        위해 웹 표준, 접근성, SEO 등을 고려한 작업을 진행했습니다. 작은 규모의
        스타트업에서는 기획부터 UI/UX 디자인과 개발까지 전반적인 역할을
        맡아왔습니다. 제 경험을 바탕으로 디자이너와의 원활한 협업을 통해 사용자
        경험에 중점을 둔 직관적이고 매력적인 인터페이스를 구현했습니다. 또한,
        사용자 행동 분석과 A/B 테스트를 통해 데이터에 기반한 의사결정을 내리고,
        웹 애플리케이션의 지속적인 개선을 이끌었습니다. 저는 항상 새로운 기술과
        동향을 주시하고, 지속적인 학습과 개발에 힘쓰는 개발자입니다. 최근에는
        Docker를 학습하고 있으며, 이를 통해 웹 애플리케이션의 버전관리와
        확장성을 향상시키는 방법을 연구하고 있습니다. 또한, 팀원들과의 협업과
        지식 공유를 통해 서로의 성장을 도모하는 문화를 중요시하며, 효율적인 개발
        프로세스를 구축하는 데에도 주력하고 있습니다. 저는 프론트엔드
        개발자로서의 역량과 경험을 통해 사용자들에게 직관적이고 쾌적한 웹 경험을
        제공하기 위해 최선을 다할 것입니다. 새로운 도전에 두려움 없이 접근하며,
        항상 성장과 혁신을 추구하는 개발자로서 기여하고 싶습니다. 함께할 기회를
        주신다면, 저의 열정과 경험을 통해 팀의 성공에 기여하고, 사용자들에게
        가치 있는 제품을 제공하는데 최선을 다할 것입니다. 감사합니다.
      </div>
    </>
  );
}
