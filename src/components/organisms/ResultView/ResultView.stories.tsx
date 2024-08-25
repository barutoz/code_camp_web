import type { Meta, StoryObj } from '@storybook/react'
import { ResultView, ResultViewProps } from './ResultView'

const meta: Meta<typeof ResultView> = {
  component: ResultView,
  title: 'organisms/ResultView',
} as Meta<typeof ResultView>

export default meta

type Story = StoryObj<ResultViewProps>

export const Basic: Story = {}

export const Primary: Story = {
  args: {},
}
