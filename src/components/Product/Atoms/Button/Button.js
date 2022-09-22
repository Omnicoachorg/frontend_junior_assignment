import PropTypes from 'prop-types';
import styled from 'styled-components'
import { BrandTheme } from 'components/Product/Atoms/BrandTheme/BrandTheme';
import { colors_product, baseStyle_product, fonts_product } from "config/theme"

export const BUTTON_STYLE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
}

export const BUTTON_ORIENTATION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}

export const BUTTON_SIZE = {
  NORMAL: "normal",
  SMALL: "small",
}

const backgroundStyle = (props) => {
  const background = {
    [BUTTON_STYLE.PRIMARY]: `linear-gradient(90deg, ${props.theme.brandColor} 0%, ${props.theme.textHighlight} 50%, ${props.theme.brandColor} 100%)`,
    [BUTTON_STYLE.SECONDARY]: colors_product.secondaryBackground,
  }
  return background[props.buttonStyle]
}

const colorStyle = (props) => {
  const color = {
    [BUTTON_STYLE.PRIMARY]: props.theme.textColor,
    [BUTTON_STYLE.SECONDARY]: colors_product.secondaryButtonText,
  }
  return color[props.buttonStyle]
}

const shineStyle = (props) => {
  if ((props.buttonStyle === BUTTON_STYLE.SECONDARY)
    && (props.orientation === BUTTON_ORIENTATION.HORIZONTAL)) {
    return `
    position: relative;
    &:before {
      position: absolute;
      content: "";
      background: ${colors_product.secondaryShine};
      width: 100%;
      height: calc(100% + 37px);
      z-index: -1;
      left: 50%;
      transform: translateX(-50%);
      top: -30%;
    }
    `
  }
  return ``
}

const StyledButton = styled.button`
  align-items: center;
  border: 0px solid transparent;
  cursor: pointer;
  display: ${props => props.wide ? `flex` : `table-row`};
  font-family: ${fonts_product.primary};
  font-size: ${fonts_product.small}px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => colorStyle(props)};
  background: ${props => backgroundStyle(props)};
  width: ${props => props.wide ? `100%` : `fit-content`};
  border-radius: ${props => props.orientation === BUTTON_ORIENTATION.VERTICAL ? baseStyle_product.borderRadiusVertical.join("px ") : baseStyle_product.borderRadius.join("px ")}px;
  padding: ${props => (!props.label || (props.label === ""))
    ? baseStyle_product.paddingButtonIcon.join("px ")
    : props.size === BUTTON_SIZE.NORMAL
      ? (props.orientation === BUTTON_ORIENTATION.VERTICAL) ? baseStyle_product.paddingButtonNormalVertical.join("px ") : baseStyle_product.paddingLarge.join("px ")
      : (props.orientation === BUTTON_ORIENTATION.VERTICAL) ? baseStyle_product.paddingButtonSmallVertical.join("px ") : baseStyle_product.paddingLarge.join("px ")
  }px;
  ${props => shineStyle(props)}
  ${props => ((props.orientation !== BUTTON_ORIENTATION.VERTICAL)) ? props.size === BUTTON_SIZE.NORMAL ? `height: ${baseStyle_product.inputHeight}px` : `height: ${baseStyle_product.inputHeightSmall}px` : ``};
  ${props => props.fixed && `
    position: fixed;
    top: 50vh;
    right: 0;
    transform: translate(0, -50%);
  `}

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`

const TextContainer = styled.div`
  display: table-cell;
  vertical-align: middle;

  ${props => (props.orientation === BUTTON_ORIENTATION.VERTICAL)
    ? `writing-mode: vertical-lr; transform: rotate(180deg);` : ``}
`

export default function Button({
  id, label, className,
  onClick,
  ...props
}) {
  return <StyledButton
    id={id}
    label={label ? label : undefined}
    className={className}
    {...props}
    onClick={onClick ? (event) => {
      event.stopPropagation()
      onClick(event)
    } : undefined}
  >
    {(label !== "") && <TextContainer {...props}>{label}</TextContainer>}
  </StyledButton >
}

Button.propTypes = {
  id: PropTypes.string,
  /**
   * Component class name
   */
  className: PropTypes.string,
  /**
   * Component style
   */
  buttonStyle: PropTypes.oneOf(Object.values(BUTTON_STYLE)).isRequired,
  /**
   * Component size
   */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)).isRequired,
  /**
   * Component orientation
   */
  orientation: PropTypes.oneOf(Object.values(BUTTON_ORIENTATION)).isRequired,
  /**
   * Component label
   */
  label: PropTypes.string.isRequired,
  /**
   * Component full width
   */
  wide: PropTypes.bool,
  /**
   * Component brand theme colors
   */
  theme: PropTypes.shape({
    ...BrandTheme.propTypes
  }),
  /**
   * Component click handle event
   */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  id: "",
  className: undefined,
  buttonStyle: BUTTON_STYLE.PRIMARY,
  size: BUTTON_SIZE.NORMAL,
  orientation: BUTTON_ORIENTATION.HORIZONTAL,
  label: "",
  wide: false,
  theme: {
    ...BrandTheme.defaultProps
  },
  onClick: undefined,
}
