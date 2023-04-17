import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci veniam suscipit dolores pariatur placeat sint error illo vitae labore quidem, illum excepturi odit voluptatum voluptatibus aliquid, doloremque eligendi unde obcaecati est! Obcaecati maxime, delectus porro facere cupiditate, accusantium consequatur ab sint officia assumenda deleniti dolorum quae eveniet pariatur magnam laborum odio accusamus repellendus voluptatem, laudantium voluptas fugiat eius velit ipsum? Incidunt dolorem ad nemo placeat accusamus laudantium praesentium et culpa quibusdam cumque perferendis esse impedit, officia ratione officiis. Dolorum officia molestiae facilis est cum aspernatur qui iusto laboriosam, laudantium id quaerat, blanditiis culpa deleniti! Dolor veritatis corporis aliquam inventore voluptate!',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci veniam suscipit dolores pariatur placeat sint error illo vitae labore quidem, illum excepturi odit voluptatum voluptatibus aliquid, doloremque eligendi unde obcaecati est! Obcaecati maxime, delectus porro facere cupiditate, accusantium consequatur ab sint officia assumenda deleniti dolorum quae eveniet pariatur magnam laborum odio accusamus repellendus voluptatem, laudantium voluptas fugiat eius velit ipsum? Incidunt dolorem ad nemo placeat accusamus laudantium praesentium et culpa quibusdam cumque perferendis esse impedit, officia ratione officiis. Dolorum officia molestiae facilis est cum aspernatur qui iusto laboriosam, laudantium id quaerat, blanditiis culpa deleniti! Dolor veritatis corporis aliquam inventore voluptate!',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
