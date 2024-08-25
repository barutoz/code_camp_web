import type { Meta, StoryObj } from '@storybook/react'
import { SelectionForm, SelectionFormProps } from './SelectionForm'

const meta: Meta<typeof SelectionForm> = {
  component: SelectionForm,
  title: 'organisms/SelectionForm',
} as Meta<typeof SelectionForm>

export default meta

type Story = StoryObj<SelectionFormProps>

export const Basic: Story = {}

export const Primary: Story = {
  args: {},
}
