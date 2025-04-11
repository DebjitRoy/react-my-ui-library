import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: 'Click Me',
    variant: 'solid',
    size: 'md',
    colorscheme: 'primary',
  },
};
export const Outline: Story = {
  args: {
    children: 'Click Me',
    variant: 'outline',
    size: 'lg',
    colorscheme: 'primary',
  },
};
export const Ghost: Story = {
  args: {
    children: 'Click Me',
    variant: 'ghost',
    size: 'sm',
    colorscheme: 'primary',
  },
};
