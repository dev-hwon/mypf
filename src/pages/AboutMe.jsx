import React from "react";
import pflist from "../db/pf_list.json";
import useAsync from "../hooks/useAsync";
import "../AboutMe.css";

function getLists() {
  return pflist.pflist[0];
}

export default function AboutMe() {
  const lists = getLists();
  console.log(lists);
  return (
    <div className="work_history">
      <ul>
        <li>
          <div className="his_period">2023. 04 ~ 2023. 07</div>
          <div className="his_company_name">메디밸류</div>
          <div className="his_task">프론트엔드</div>
          <div className="his_position">사원</div>
          <div className="his_content">
            <div className="tx_use">
              <p>[사용언어/툴]</p>
              jsp, html, css, javascript, jquery, photoshop, XD, svn,
              react.js(next)
            </div>
            <h3>페이지제작</h3>
            <div className="tx_detail">
              mobile 페이지 제작, 반응형 리뉴얼
              <br />
              react(next.js) - 클리닉관리페이지 제작
            </div>

            <h3>사이트관리 + 신규페이지제작</h3>
            <div className="tx_detail">
              스토어페이지 유지/보수, 프로모션페이지 제작
            </div>
          </div>
        </li>
        <li>
          <div className="his_period">2021. 05 ~ 2023. 04</div>
          <div className="his_company_name">㈜써머스플랫폼(에누리)</div>
          <div className="his_task">퍼블리셔</div>
          <div className="his_position">과장</div>
          <div className="his_content">
            <div className="tx_use">
              <p>[사용언어/툴]</p>
              html, css, javascript, jquery, photoshop, XD, zeplin, figma,
              react.js(next.js), git, github, sourcetree, bitbucket, taskworld,
              redmine, slack
            </div>
            <h3>코어 및 서브페이지 관리</h3>
            <div className="tx_detail">
              페이지 유지/보수, 코드 리팩토링, 레거시 코드제거(클린징), 오류
              점검/수정, 코드리뷰
            </div>
            <h3>팀프로젝트 관리</h3>
            <div className="tx_detail">팀 일정관리, 신입교육</div>

            <h3>개인프로젝트</h3>
            <div className="tx_detail">
              react(next.js) - 관리자 리뉴얼 react - 써머스플랫폼 소개페이지
              리뉴얼
            </div>
          </div>
        </li>
        <li>
          <div className="his_period">2021. 03 ~ 2021. 04</div>
          <div className="his_company_name">퓨즈</div>
          <div className="his_task">퍼블리셔</div>
          <div className="his_position">대리</div>
          <div className="his_content">
            <div className="tx_use">
              <p>[사용언어/툴]</p>
              html, css, javascript, jquery, zeplin, figma
            </div>
            <h3>si프로젝트</h3>
            <div className="tx_detail">페이지구축 + 신입교육</div>
          </div>
        </li>

        <li>
          <div className="his_period">2016. 10 ~ 2021. 03</div>
          <div className="his_company_name">OFF</div>
          <div className="his_task">퍼블리셔</div>
          <div className="his_position">사원</div>
          <div className="his_content">
            <div className="tx_use">
              <p>[사용언어/툴]</p>
              php, html, css, javascript, jquery, photoshop, mySQL, slack, jira
            </div>
            <h3>해외경매, 배송,구매대행 사이트 제작,리뉴얼</h3>
            <div className="tx_detail">
              약 80여개 사이트를 제작,리뉴얼 진행/약 150개 사이트을 관리
            </div>
            <h3>구매/배송대행 솔루션(템플릿) 작업</h3>
            <div className="tx_detail">
              기능 컴포넌트화, 리팩토링 작업), 페이지제작
            </div>
            <h3>하이브리드 앱작업</h3>
            <div className="tx_detail">페이지구축, 동적이벤트 구현</div>
            <h3>해외클라이언트 관리(cs)</h3>
            <div className="tx_detail">cs업무/교육( 내부솔루션 사용교육 )</div>
          </div>
        </li>

        <li>
          <div className="his_period">2014. 10 ~ 2026. 08</div>
          <div className="his_company_name">비주얼다이브</div>
          <div className="his_task">퍼블리셔</div>
          <div className="his_position">사원</div>
          <div className="his_content">
            <div className="tx_use">
              <p>[사용언어/툴]</p>
              wordpress, html, css, jquery, photoshop
            </div>
            <h3>페이지 제작(원페이지스크롤)</h3>
            <div className="tx_detail">
              빅데이터에 기반한 데이터 시각화 작업, 뉴스,보도자료,블로그 등
              다양한 내용을 스토리텔링 형태로 풀어냄 (페이지구축) 회사내
              솔루션인(핑거프레스)를 활용하여 페이지 제작
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
