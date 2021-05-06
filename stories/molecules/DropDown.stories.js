import DropDown from '../../molecules/DropDown'

export default {
  title: 'Molecules/DropDown',
  component: DropDown,
}

export const Default = () => (
  <DropDown
    options={[
      {
        text: '8:00 AM',
        value: '800',
      },
      {
        text: '9:00 AM',
        value: '900',
      },
      {
        text: '10:00 AM',
        value: '1000',
      },
    ]}
    onChange={() => {}}
  />
)
