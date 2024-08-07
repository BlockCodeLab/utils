import classNames from 'classnames';
import styles from './button.module.css';

export function Button({ className, vertical, disabled, title, onClick, onMouseDown, onMouseUp, children }) {
  const handleClick = disabled ? () => {} : onClick;
  return (
    <button
      className={classNames(styles.outlined, className, {
        [styles.disabled]: disabled,
      })}
      title={title}
      disabled={disabled}
      onClick={handleClick}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      <div
        className={classNames(styles.content, {
          [styles.verticalContent]: vertical,
        })}
      >
        {children}
      </div>
    </button>
  );
}
