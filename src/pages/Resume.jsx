import React from "react";
import img_im from "../images/imgMe.jpg";
import "../AboutMe.css";

export default function Resume() {
  return (
    <>
      <div className="resume">
        <div className="resume_layout">
          <div className="left">
            <h3>기본정보</h3>
            <div className="info_box info_default">
              <div className="tx_name">이름 : 박현원</div>
              <div className="tx_birth">생년월일 : 1985.12.26</div>
              <div className="tx_callnumber">전화번호 : 010-8738-7473</div>
              <div className="tx_mail">
                이메일 : <a href="mailto:thehyun11@google.com">thehyun11@google.com</a>
              </div>
              <div className="tx_address">주소 : 인천 부평구 삼산동</div>
            </div>
            <h3>학력</h3>
            <div className="info_box info_edu">
              <ul>
                <li>고등학교 : 선인고등학교 졸업년도 : 2004 졸업상태 : 졸업</li>
                <li>대학교 : 순천향대(4년제) 입학년월 : 2005.03 졸업년월 : 2011.02 졸업상태 : 졸업 전공명 : 행정학과 학점 : 3.01 / 4.5</li>
              </ul>
            </div>
            <h3>희망직무</h3>
            <div className="info_box info_want">웹퍼블리셔, 프론드엔드 개발자</div>
            <h3>포트폴리오</h3>
            <div className="info_box info_pf">
              <a href="https://dev-hwon.github.io/mypf/">https://dev-hwon.github.io/mypf/</a>
            </div>
            <h3>병역</h3>
            <div className="info_box info_soldier">육군 병장 만기전역 / 복무일 : 2007.01 ~ 2008.12</div>
            <h3>사용언어/툴</h3>
            <div className="info_box info_use_language">
              프레임워크 : react.js, next.js
              <br />
              언어 : html, css, sass, jquery, javascript
              <br />
              디자인툴 : adobe photoshop, XD, figma, zeplin
              <br />
              협업툴 : git, github
            </div>
            <h3>자기소개서</h3>
          </div>
          <div className="right">
            <div className="img_im">
              <img src={img_im} alt="" />
            </div>
          </div>
          <div className="full">
            <div className="info_box info_intro_myself">
              안녕하세요. 저는 8년차 경력을 가진 퍼블리셔겸 프론트엔드 개발자 박현원입니다. 다양한 프로젝트를 통해 풍부한 경험과 노하우를 쌓았으며, 사용자
              중심의 직관적이고 효율적인 웹 애플리케이션을 구축하는 데에 열정을 가지고 있습니다.
              <br />
              <br />
              제 경력은 다양한 규모와 업종의 프로젝트를 포괄하고 있습니다. 큰 프로젝트는 아니었지만 웹 애플리케이션의 전체 프론트엔드 아키텍처를 설계하고
              개발하는 업무를 수행한 경험이 있습니다. 이 과정에서 React와 같은 프론트엔드 프레임워크를 활용하여 모듈화된 컴포넌트 아키텍처를 구축하고, API와의
              효율적인 통신을 구현했습니다. 또한, 웹 애플리케이션의 성능 최적화와 사용자 경험 개선을 위해 웹 표준, 접근성, SEO 등을 고려한 작업을 진행했습니다.
              <br />
              <br />
              작은 규모의 스타트업에서는 기획부터 UI/UX 디자인과 개발까지 전반적인 역할을 맡아왔습니다. 제 경험을 바탕으로 디자이너와의 원활한 협업을 통해
              사용자 경험에 중점을 둔 직관적이고 매력적인 인터페이스를 구현했습니다. 또한, 사용자 행동 분석과 A/B 테스트를 통해 데이터에 기반한 의사결정을
              내리고, 웹 애플리케이션의 지속적인 개선을 이끌었습니다.
              <br />
              <br />
              저는 항상 새로운 기술과 동향을 주시하고, 지속적인 학습과 개발에 힘쓰는 개발자입니다. 최근에는 Next.js, Sql, Docker를 학습하고 있으며, 이를 통해 웹
              애플리케이션의 성능과 확장성을 향상시키는 방법을 연구하고 있습니다. 또한, 팀원들과의 협업과 지식 공유를 통해 서로의 성장을 도모하는 문화를
              중요시하며, 효율적인 개발 프로세스를 구축하는 데에도 주력하고 있습니다.
              <br />
              <br />
              저는 프론트엔드 개발자로서의 역량과 경험을 통해 사용자들에게 직관적이고 쾌적한 웹 경험을 제공하기 위해 최선을 다할 것입니다. 새로운 도전에 두려움
              없이 접근하며, 항상 성장과 혁신을 추구하는 개발자로서 기여하고 싶습니다. 함께할 기회를 주신다면, 저의 열정과 경험을 통해 팀의 성공에 기여하고,
              사용자들에게 가치 있는 제품을 제공하는데 최선을 다할 것입니다. 감사합니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
