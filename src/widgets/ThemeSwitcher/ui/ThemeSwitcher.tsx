import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC, memo } from 'react';
import DarkIcon from 'shared/assets/theme-dark.svg';
import LightIcon from 'shared/assets/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }:ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
