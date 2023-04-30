import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext, useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./Arrow.module.scss";

export const ArrowLeft = () => {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <div
      className={classnames(styles.arrowHolder, styles.arrowLeft)}
      style={{
        opacity: disabled ? "0" : "1",
      }}
    >
      <button onClick={() => scrollPrev()} className={styles.arrowBtn}>
        <MdKeyboardArrowLeft size={20} className={styles.arrowIcon} />
      </button>
    </div>
  );
};

export const ArrowRight = () => {
  const { isLastItemVisible, scrollNext, visibleElements } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleElements.length && isLastItemVisible
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <div
      className={classnames(styles.arrowHolder, styles.arrowRight)}
      style={{
        opacity: disabled ? "0" : "1",
      }}
    >
      <button onClick={() => scrollNext()} className={styles.arrowBtn}>
        <MdKeyboardArrowRight size={20} className={styles.arrowIcon} />
      </button>
    </div>
  );
};
