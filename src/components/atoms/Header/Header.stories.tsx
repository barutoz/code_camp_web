import type { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'atoms/Header',
} as Meta<typeof Header>

export default meta

type Story = StoryObj<HeaderProps>

export const Basic: Story = {}

export const Primary: Story = {
  args: {},
}
