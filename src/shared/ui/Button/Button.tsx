import { ButtonHTMLAttributes, FC } from 'react';
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                { [cls.square]: square },
                [className, cls[theme], cls[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
