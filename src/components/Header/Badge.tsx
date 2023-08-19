import { styled } from 'styled-components';

import { BADGE } from '../../constants/badge';

interface Props {
  type: string;
}

const Badge = ({ type }: Props) => {
  const { src, title, color, background } = BADGE[type];

  return (
    <BadgeStyled $color={color} $background={background}>
      <img src={src} alt={type} /> <span>{title}</span>
    </BadgeStyled>
  );
};

export default Badge;

const BadgeStyled = styled.span<{ $color: string; $background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 14px;
  left: 14px;
  margin-top: 27px;
  margin-left: 20px;
  padding: 6px 10px;
  width: fit-content;
  border-radius: 6px;
  background-color: ${({ $background }) => $background};
  gap: 8px;

  & > span {
    color: ${({ $color }) => $color};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 50%;
  }
`;
