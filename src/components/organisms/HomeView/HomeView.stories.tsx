import type { Meta, StoryObj } from '@storybook/react'
import { HomeView, HomeViewProps } from './HomeView'

const meta: Meta<typeof HomeView> = {
  component: HomeView,
  title: 'organisms/HomeView',
} as Meta<typeof HomeView>

export default meta

type Story = StoryObj<HomeViewProps>

export const Basic: Story = {}

export const Primary: Story = {
  args: {},
}
