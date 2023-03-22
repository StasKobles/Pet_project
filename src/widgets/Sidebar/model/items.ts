import React from 'react';
import AboutIcon from 'shared/assets/AboutPageLogo.svg';
import MainIcon from 'shared/assets/MainPageLogo.svg';
import ProfileIcon from 'shared/assets/ProfilePageLogo.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;

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
    },
];
