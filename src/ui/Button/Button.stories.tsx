// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
    variant: 'filled',
    size: 'm',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const AnimatedGradient: Story = {
  args: {
    variant: 'animatedGradient',
  },
};

export const Small: Story = {
  args: {
    size: 's',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
  },
};