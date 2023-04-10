import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/AboutPageLogo.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import MainIcon from 'shared/assets/icons/MainPageLogo.svg';
import ProfileIcon from 'shared/assets/icons/ProfilePageLogo.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }
        return sidebarItemsList;
    },
);
