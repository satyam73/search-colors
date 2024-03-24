import { useEffect, useState } from 'react';
import { ColorCardProps } from './colorCard.types';
import styles from './colorCard.module.css';

const COPY_CLIPBOARD_ICON_TIMEOUT_TIME = 1000;

function ColorCard({ colorName, colorCode }: ColorCardProps) {
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
  const [isCopiedSuccessfully, setIsCopiedSuccessfully] =
    useState<boolean>(false);

  let timeout: NodeJS.Timeout;

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  function copyColorHandler() {
    window.navigator.clipboard.writeText(colorCode).then(() => {
      setIsCopiedSuccessfully(true);
      timeout = setTimeout(() => {
        setIsCopiedSuccessfully(false);
      }, COPY_CLIPBOARD_ICON_TIMEOUT_TIME);
    });
  }

  function onHoverOnCard() {
    setIsCardHovered(true);
  }

  function onMouseOutOnCard() {
    setIsCardHovered(false);
  }
  
  return (
    <div
      className={styles['color-card']}
      style={{ backgroundColor: colorCode }}
      onMouseOver={onHoverOnCard}
      onMouseOut={onMouseOutOnCard}
    >
      {colorName}
      {isCardHovered && (
        <button
          onClick={copyColorHandler}
          className={styles['color-card__copy-button']}
        >
          {isCopiedSuccessfully ? (
            <img src='/copy-tick-icon.svg' alt='copy successful icon' />
          ) : (
            <img src='/copy-icon.svg' alt='copy icon' />
          )}
        </button>
      )}
    </div>
  );
}

export default ColorCard;
