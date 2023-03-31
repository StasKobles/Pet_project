import React from 'react';
import AboutIcon from 'shared/assets/icons/AboutPageLogo.svg';
import MainIcon from 'shared/assets/icons/MainPageLogo.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import ProfileIcon from 'shared/assets/icons/ProfilePageLogo.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;

}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main Page',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About page',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile page',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Articles page',
        authOnly: true,
    },

];
