import { styled } from 'styled-components';

import TrackOrderList from './TrackOrderList';

const TrackOrder = ({ stage }: { stage: number }) => {
  return (
    <TrackOrderContainer>
      <h1>Track order</h1>
      <div>
        <ProgressWrapper>
          <PathSvg $percent={stage === 3 ? 100 : stage * 33.33} />
        </ProgressWrapper>
        <TrackOrderList stage={stage} />
      </div>
    </TrackOrderContainer>
  );
};

export default TrackOrder;

const TrackOrderContainer = styled.div`
  padding: 18px 18px 24px;
  border-radius: 12px;
  background-color: #fff;
  margin-top: 24px;

  & > h1 {
    margin: 0;
    margin-bottom: 24px;
    padding: 0;
    color: #323232;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  & > div {
    display: flex;
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 50px;
  height: 250px;
`;

const PathSvg = ({ $percent }: { $percent: number }) => {
  const start = (250 / 100) * $percent;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="239"
      viewBox="0 0 17 239"
      fill="none"
    >
      <mask
        id="mask0_86_311"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="239"
      >
        <path
          d="M6 5.5C6 4.11929 7.11929 3 8.5 3C9.88071 3 11 4.11929 11 5.5V232.5C11 233.881 9.88071 235 8.5 235C7.11929 235 6 233.881 6 232.5V5.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 82.5C17 87.1944 13.1944 91 8.5 91C3.80558 91 0 87.1944 0 82.5C0 77.8056 3.80558 74 8.5 74C13.1944 74 17 77.8056 17 82.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 156.5C17 161.194 13.1944 165 8.5 165C3.80558 165 0 161.194 0 156.5C0 151.806 3.80558 148 8.5 148C13.1944 148 17 151.806 17 156.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 230.5C17 235.194 13.1944 239 8.5 239C3.80558 239 0 235.194 0 230.5C0 225.806 3.80558 222 8.5 222C13.1944 222 17 225.806 17 230.5Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_86_311)">
        <path
          d="M6 5.5C6 4.11929 7.11929 3 8.5 3C9.88071 3 11 4.11929 11 5.5V232.5C11 233.881 9.88071 235 8.5 235C7.11929 235 6 233.881 6 232.5V5.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 82.5C17 87.1944 13.1944 91 8.5 91C3.80558 91 0 87.1944 0 82.5C0 77.8056 3.80558 74 8.5 74C13.1944 74 17 77.8056 17 82.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 156.5C17 161.194 13.1944 165 8.5 165C3.80558 165 0 161.194 0 156.5C0 151.806 3.80558 148 8.5 148C13.1944 148 17 151.806 17 156.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M17 230.5C17 235.194 13.1944 239 8.5 239C3.80558 239 0 235.194 0 230.5C0 225.806 3.80558 222 8.5 222C13.1944 222 17 225.806 17 230.5Z"
          fill="#D9D9D9"
        />
        <rect x="-22" y="-18" width="48" height="269" fill="url(#paint0_linear_86_311)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_86_311"
          x1="2"
          y1={start}
          y2={start + 62}
          x2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4C35FF" />
          <stop offset="1" stopColor="#4C35FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
