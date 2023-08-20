import { AnimatePresence, m, motion } from 'framer-motion';
import { styled } from 'styled-components';

import { defaultFadeInUpVariants } from '../../constants/motions';
import { useToastStore } from '../../libs/toast';
import Toast from './Toast';

const ToastWrapper = () => {
  const { toast } = useToastStore();
  console.log('toast: ', toast);

  return (
    <div>
      <AnimatePresence mode="wait">
        {toast && (
          <ToastContainer
            key={String(toast.content)}
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Toast.Content content={toast.content} />
          </ToastContainer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToastWrapper;

const ToastContainer = styled(motion.div)`
  position: fixed;
  z-index: 2000;
  bottom: 110px;
  left: 0;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;

  width: 100%;
  height: fit-content;
`;
