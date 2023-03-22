import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED= 'clearInverted',
  OUTLINE='outline',
  BACKGROUND='background',
  BACKGROUND_INVERTED='backgroundInverted'
}

export enum ButtonSize {
    XL = 'size_xl',
    L = 'size_l',
    M = 'size_m',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props:ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                { [cls.square]: square, [cls.disabled]: disabled },
                [className, cls[theme], cls[size]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
