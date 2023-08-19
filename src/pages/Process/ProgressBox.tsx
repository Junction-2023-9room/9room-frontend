import { motion } from 'framer-motion';
import styled from 'styled-components';

import { IMAGES_PATH, WASTE_LIST_LABEL } from '../../constants/waste';

interface Props {
  waste: string;
  date: number;
  stage: number;
}

const STEP_LABEL = ['Booked', 'In Transit', 'Awaiting', 'Completed'];

const ProgressBox = ({ waste, stage }: Props) => {
  const thisStep = stage;

  return (
    <Container>
      <section>
        <img src={IMAGES_PATH[waste]} alt={waste} />
        <div>
          <h1>{WASTE_LIST_LABEL[waste]}</h1>
          <span>Initially accepted on August 20, 2023</span>
        </div>
      </section>
      <hr />
      <ProgressContainer step={thisStep}>
        <div>
          {STEP_LABEL.map((label, index) => (
            <span key={label}>
              {thisStep === index ? <strong>{label}</strong> : label}
            </span>
          ))}
        </div>
        <div className="progress-bar">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${thisStep === 3 ? 100 : thisStep * 25 + 12.5}%` }}
          />
        </div>
      </ProgressContainer>
    </Container>
  );
};
export default ProgressBox;

const Container = styled.article`
  background: #fff;
  padding: 18px 14px;
  border-radius: 12px;

  & > section {
    display: grid;
    gap: 14px;
    grid-template-columns: 34px 1fr;

    h1 {
      margin: 0;
      color: #323232;
      font-size: 14px;
      font-weight: 700;
    }
    span {
      color: #b5b5b5;
      font-size: 12px;
      font-weight: 400;
    }
  }
  hr {
    margin: 18px 0 14px;
    border-color: #e4e4e4;
    border: none;
    height: 1px;
    background-color: #e4e4e4;
  }
`;

const ProgressContainer = styled.div<{
  step: number;
}>`
  div:first-child {
    padding: 0 0 14px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;

    color: #666;
    font-size: 12.561px;
    font-weight: 500;

    strong {
      color: #4c35ff;
      font-size: 12.561px;
      font-weight: 700;
    }
  }

  .progress-bar {
    border-radius: 5.383px;
    background: #d9d9d9;
    height: 11.029px;
    width: 100%;

    position: relative;
    border-radius: 5.383px;
    overflow: hidden;

    & > div {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 11.029px;
      width: ${(props) => props.step * 25}%;
      background-color: #4c35ff;

      transition: all 0.3s ease-in-out;
    }
  }
`;
