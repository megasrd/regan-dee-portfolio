import MagicButton from './MagicButton.vue'

export default {
    title: "Regan's Components/MagicButton",
    component: MagicButton,
    argTypes: {
        label: 'default',
        buttonType: { control: { type: 'select', options: ['default', 'secondary', 'tertiary'] } },
    }
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MagicButton },
    template: '<magic-button v-bind="$props" /> '
})

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'Click me'
}
