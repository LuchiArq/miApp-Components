import Spacer from '../../layout/Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
}

export const Default = () => <Spacer isVisilble zise={10} />
export const Horizontal = () => <Spacer.Horizontal isVisilble zise={10} />
export const Vertical = () => (
  <Spacer.Vertical maxHeight={200} isVisilble zise={10} />
)
