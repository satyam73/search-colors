import { ColorCardProps } from './colorCard.types';
import styles from './colorCard.module.css';

function ColorCard({ colorName, colorCode }: ColorCardProps) {
  return (
    <div
      className={styles['color-card']}
      style={{ backgroundColor: colorCode }}
    >
      {colorName}
    </div>
  );
}

export default ColorCard;
