import { type Variants, motion } from 'framer-motion';
import { type PropsWithChildren, Children } from 'react';
import { styled } from 'styled-components';

import { defaultEasing, stagger } from '../constants/motions';

interface Props
  extends PropsWithChildren<{
    staggerVariants?: Variants;
  }> {
  /**
   * @description wrapper에 적용될 css 입니다.
   * @default ```css
   *  display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    ```
   */
  /**
   * @description wrapper에 적용될 variants 입니다.
   * @default stagger(0.5)
   */
  staggerVariants?: Variants;
  /**
   * @description paragraph에 적용될 variants 입니다.
   * @default fadeInUpVariants
   */
  paragraphVariants?: Variants;
}

/**
 * @description children 노드 각각을 stagger가 적용된 div로 감싸 줍니다.
 */
const StaggerWrapper = ({
  children,
  staggerVariants = stagger(0.5),
  paragraphVariants = fadeInUpVariants,
}: Props) => {
  return (
    <motion.article
      // css={[wrapperCss, wrapperOverrideCss]}
      variants={staggerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {Children.toArray(children).map((paragraph, index) => (
        <motion.div key={index} variants={paragraphVariants}>
          {paragraph}
        </motion.div>
      ))}
    </motion.article>
  );
};

export default StaggerWrapper;

const WrapperStyled = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const fadeInUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.5, ease: defaultEasing },
  },
};
