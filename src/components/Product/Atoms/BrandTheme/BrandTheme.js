import { Component } from 'react'
import PropTypes from 'prop-types'
import { brandTheme } from 'config/theme'

export class BrandTheme extends Component {}

BrandTheme.propTypes = {
  brandColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textHighlight: PropTypes.string.isRequired,
  linkHover: PropTypes.string.isRequired,
  menuBackground: PropTypes.string.isRequired,
  menuActiveShine: PropTypes.string.isRequired,
  pageBackground: PropTypes.string.isRequired,
}

BrandTheme.defaultProps = {
  brandColor: brandTheme.brandColor,
  textColor: brandTheme.textColor,
  textHighlight: brandTheme.textHighlight,
  linkHover: brandTheme.linkHover,
  menuBackground: brandTheme.menuBackground,
  menuActiveShine: brandTheme.menuActiveShine,
  pageBackground: brandTheme.pageBackground,
}
