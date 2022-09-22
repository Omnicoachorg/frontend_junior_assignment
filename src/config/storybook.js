export const theme = {
    fontFamily: "Fiba",
    fontSize: "14px",
    primary: "#EA722C",
    secondary: "#17172D",
    text: "#FFFFFF",
    separator: "#585898",
    highlight: "#564298",
    success: "#6FD08C",
    error: "#FF666B"
  }

export const backgrounds = {
  grid: {
    cellSize: 20,
    opacity: 0.5,
    cellAmount: 5,
  },
  values: [
    { name: "light", value: "#F8F8F8" },
    { name: "dark", value: "#333333" },
    { name: "omnicoach", value: theme.secondary },
    { name: "venus", value: "#21293F" },
    { name: "figma", value: "#C2C2C2" },
  ],
  default: "venus",
}
