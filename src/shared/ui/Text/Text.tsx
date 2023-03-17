import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL='primary',
    ERROR='error'
}

interface TextProps {
    className?: string;
    title?:string;
    text?:string;
    theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
    const {
        className, text, title, theme = TextTheme.NORMAL,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
