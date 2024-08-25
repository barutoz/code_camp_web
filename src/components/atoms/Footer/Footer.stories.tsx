import type { Meta, StoryObj } from '@storybook/react'
import { Footer, FooterProps } from './Footer'

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'atoms/Footer',
} as Meta<typeof Footer>

export default meta

type Story = StoryObj<FooterProps>

export const Basic: Story = {}

export const Primary: Story = {
  args: {},
}
