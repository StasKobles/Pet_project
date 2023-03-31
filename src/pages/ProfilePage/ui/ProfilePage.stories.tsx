import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import avatar from 'shared/assets/tests/storybookAvatar.png';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            age: 22,
            city: 'Batumi',
            country: Country.Georgia,
            currency: Currency.GEL,
            first: 'Stas',
            lastname: 'Kobles',
            username: 'admin_test',
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            age: 22,
            city: 'Batumi',
            country: Country.Georgia,
            currency: Currency.GEL,
            first: 'Stas',
            lastname: 'Kobles',
            username: 'admin_test',
            avatar,
        },
    },
})];
