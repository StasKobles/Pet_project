import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
//
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const aboutPath = '/about';
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Main Page')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={aboutPath}>
                    {t('About page')}
                </AppLink>
            </div>
        </div>
    );
};
