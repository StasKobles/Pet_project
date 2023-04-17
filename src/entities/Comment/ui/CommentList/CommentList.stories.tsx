import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [{
        id: '1',
        text: 'text 1',
        user: { id: '1', username: 'Ivan', avatar: 'https://i.redd.it/89pllwdgm5f41.jpg' },

    },
    {
        id: '2',
        text: 'text 2',
        user: { id: '2', username: 'Sergey', avatar: 'https://i.redd.it/89pllwdgm5f41.jpg' },

    }],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
