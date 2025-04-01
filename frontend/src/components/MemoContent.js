// components/MemoContent.jsx
import React from "react";
import styles from "../styles/Memo/MemoContent.module.css";

const MemoContent = ({ memo }) => {
  return (
    <div className={styles.memoContent}>
      <div className={styles.header}>
        <p className={styles.title}>{memo.content}</p>
        <p className={styles.date}>{memo.date}</p>
      </div>
      <div className={styles.content}>
        <p>1. 면접 전 준비</p>
        <p>(1) 회사와 직무에 대한 철저한 조사</p>
        <ul>
          <li>회사 분석: 회사의 비전, 미션, 주요 사업, 최근 뉴스 등을 파악하세요.</li>
          <li>직무 분석: 공고에 나온 직무 요건을 숙지하고, 자신이 해당 직무에 적합한 이유를 준비하세요.</li>
          <li>산업 트렌드 이해: 해당 산업의 최신 동향이나 경쟁 상황에 대해 알아두면 플러스 요인이 됩니다.</li>
        </ul>
        <p>(2) 예상 질문 준비</p>
        <ul>
          <li>자기소개: 1~2분 정도로 간결하고 명확하게 준비하세요. 자신을 알리면서 지원 동기와 연결되도록 합니다.</li>
          <li>지원 동기 및 포부: 왜 이 회사와 직무를 선택했는지 구체적으로 설명하세요.</li>
          <li>강점과 약점: 강점은 직무와 연관되게, 약점은 극복 방안을 포함해 답변합니다.</li>
          <li>STAR 기법 활용: 상황(Situation), 과제(Task), 행동(Action), 결과(Result) 중심으로 답변을 구성하세요.</li>
        </ul>

        <p>(3) 면접 복장과 매너</p>
        <ul>
          <li>복장:회사 분위기에 맞는 단정한 정장을 준비하세요.</li>
          <li>첫인상: 면접장에 들어갈 때 밝은 미소와 함께 적당한 음성 톤으로 인사하세요.</li>
        </ul>

        <p>2. 면접 중 주의사항</p>
        <p>(1) 긍정적인 태도</p>
        <ul>
          <li>긴장하지 않고 차분히 말하며, 긍정적인 태도를 유지하세요.</li>
          <li>가벼운 미소와 적극적인 경청은 신뢰감을 줍니다.</li>
        </ul>

        <p>(2) 명확하고 간결한 답변</p>
        <ul>
          <li>질문에 대한 답변은 간결하게, 그러나 핵심 내용을 놓치지 않도록 준비하세요.</li>
        </ul>
      </div>
    </div>
  );
};

export default MemoContent;
