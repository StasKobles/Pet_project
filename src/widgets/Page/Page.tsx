import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollSaveByPath, scrollActions } from 'features/ScrollSave';
import {
    MutableRefObject, ReactNode, UIEvent, memo, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void;
}

export const Page = memo((props:PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state:StateSchema) => getScrollSaveByPath(state, pathname));

    useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        console.log('scroll');
        dispatch(scrollActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section ref={wrapperRef} className={classNames(cls.page, {}, [className])} onScroll={onScroll}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
