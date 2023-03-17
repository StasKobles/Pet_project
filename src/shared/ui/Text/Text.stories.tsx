import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'text lorem1',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'text lorem1',
    theme: TextTheme.ERROR,
};
export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title',
    text: 'text lorem1',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',

};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text lorem1',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'text lorem1',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',

};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'text lorem1',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
