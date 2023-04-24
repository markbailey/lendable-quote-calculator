import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../assets/stylesheets/button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  primary?: boolean;
}

function Button(props: ButtonProps) {
  const { children, className: classNameProp, block, primary, ...otherProps } = props;
  const className = classNames(
    styles.button,
    block && styles.block,
    primary && styles.primary,
    classNameProp
  );

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  );
}

export default Button;
