/* eslint-disable max-len */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(
        () => {
            setIsAuthModal((prev) => !prev);
        },
        [],
    );

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Log in')}
            </Button>
            {/* eslint-disable-next-line */ }
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quisquam delectus rem ipsam iusto omnis. Illo, repellendus esse doloribus nihil voluptates eligendi officiis molestiae dicta consequuntur, consectetur, totam excepturi blanditiis aut? Voluptates ratione officia temporibus, voluptatum rerum eum ut quidem quas perferendis reiciendis quia sapiente, eligendi facere enim, corporis officiis aut eius dignissimos fugit esse. Nulla dicta soluta deleniti incidunt sint repellat animi! Deserunt ducimus tempora mollitia? Nesciunt veritatis accusamus eos magnam dolorum rerum, aliquam consequuntur omnis? Nobis nesciunt temporibus tenetur autem veniam numquam a et dolores omnis unde aliquid cumque quos vero nihil voluptates soluta iure eaque, esse dolor.
            </Modal>
        </div>
    );
};
