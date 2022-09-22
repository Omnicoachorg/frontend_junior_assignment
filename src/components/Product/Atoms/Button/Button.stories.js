import Button, { BUTTON_STYLE, BUTTON_ORIENTATION, BUTTON_SIZE } from "./Button";
import { BrandTheme } from 'components/Product/Atoms/BrandTheme/BrandTheme';

export default {
  title: "Product/Atoms/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  id: "test_btn",
  buttonStyle: BUTTON_STYLE.PRIMARY,
  size: BUTTON_SIZE.NORMAL,
  orientation: BUTTON_ORIENTATION.HORIZONTAL,
  showIcon: false,
  icon: undefined,
  label: "Primary button",
}

export const DefaultWide = Template.bind({});
DefaultWide.args = {
  ...Default.args,
  wide: true,
}
export const DefaultSmallVertical = Template.bind({});
DefaultSmallVertical.args = {
  id: "test_btn",
  buttonStyle: BUTTON_STYLE.PRIMARY,
  size: BUTTON_SIZE.SMALL,
  orientation: BUTTON_ORIENTATION.VERTICAL,
  showIcon: false,
  icon: undefined,
  label: "Primary button",
}


export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  ...Default.args,
  buttonStyle: BUTTON_STYLE.SECONDARY,
  orientation: BUTTON_ORIENTATION.HORIZONTAL,
  size: BUTTON_SIZE.SMALL,
  label: "Secondary button"
}

export const SecondaryVertical = Template.bind({});
SecondaryVertical.args = {
  ...Default.args,
  buttonStyle: BUTTON_STYLE.SECONDARY,
  orientation: BUTTON_ORIENTATION.VERTICAL,
  size: BUTTON_SIZE.SMALL,
  showIcon: true,
  icon: "Bars",
  label: "Secondary button"
}

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  ...Default.args,
  buttonStyle: BUTTON_STYLE.PRIMARY,
  showIcon: true,
  icon: "Bars",
  label: "Brand button",
  theme: {
    ...BrandTheme.defaultProps,
    brandColor: "red",
    textHighlight: "orange",
    textColor: "yellow",
  }
}


export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  label: "",
}

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
}

export const Fixed = Template.bind({});
Fixed.args = {
  ...Default.args,
  buttonStyle: BUTTON_STYLE.SECONDARY,
  showIcon: true,
  icon: "Info",
  orientation: BUTTON_ORIENTATION.VERTICAL,
  label: "Help",
  fixed: true,
}