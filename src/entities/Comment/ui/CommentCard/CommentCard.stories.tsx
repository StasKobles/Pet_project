import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'test 1',
        user: {
            id: '1',
            username: 'text',
            avatar: 'https://i.redd.it/89pllwdgm5f41.jpg',
        },
    },
};
export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'test 1',
        user: {
            id: '1',
            username: 'text',
            avatar: 'https://i.redd.it/89pllwdgm5f41.jpg',
        },
    },
    isLoading: true,
};
