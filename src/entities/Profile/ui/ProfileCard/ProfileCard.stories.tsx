import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import React from 'react';
import avatar from 'shared/assets/tests/storybookAvatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        age: 22,
        city: 'Batumi',
        country: Country.Georgia,
        currency: Currency.GEL,
        first: 'Stas',
        lastname: 'Kobles',
        username: 'admin_test',
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
export const Error = Template.bind({});
Error.args = {
    error: 'error',
};
