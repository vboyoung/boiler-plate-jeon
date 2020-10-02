import React from 'react'
import Button from './Button'

export default {

    title: 'Form/control/Button',
    componet: Button

}

export const Primary = () => <Button variant='primary'>primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>


const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})