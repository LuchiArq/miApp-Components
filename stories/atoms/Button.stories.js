import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

export default {
    title : 'Atoms/Button',
    component: Button,
};

export const Primary = () => <Button type="primary">Button Primary</Button>
export const Secundary = () => <Button type="secondary">Button Secundary</Button>
export const WithIcon = () => <Button type="secondary">Button Secundary<Icon type ="right-arrow"></Icon></Button>
export const Tertiary = () => <Button type="tertiary">Button Tertiary</Button>

