import Button from '../../atoms/Button'

export default {
    title : 'Atoms/Button',
    component: Button,
};

export const Primary = () => <Button type="primary">Button Primary</Button>
export const Secundary = () => <Button type="secondary">Button Secundary</Button>
export const Tertiary = () => <Button type="tertiary">Button Tertiary</Button>

