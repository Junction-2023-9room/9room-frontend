import { styled } from 'styled-components';

import { ToastProps } from '../../libs/toast';

const Content = ({ content }: Pick<ToastProps, 'content'>) => {
  return <Container>{content}</Container>;
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  height: 51px;
  padding: 14px 20px;

  background: #4c35ff;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 3px rgb(0 0 0 / 15%);
`;

const Toast = {
  Content,
  Text,
};

export default Toast;
