'use client';

import React, { ForwardedRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef(
  (
    { label, error, icon, className = '', ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={`${styles.inputContainer} ${className}`}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputWrapper}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            ref={ref}
            className={`${styles.input} ${error ? styles.error : ''} ${
              icon ? styles.withIcon : ''
            }`}
            {...props}
          />
        </div>
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;