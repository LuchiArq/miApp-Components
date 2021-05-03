import Picture from '../../atoms/Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture,
}

export const Default = () => (
  <Picture
    src="https://mdn.github.io/css-examples/learn/images/balloons.jpg"
    width={300}
  />
)
