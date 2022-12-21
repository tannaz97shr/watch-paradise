interface ITheme {
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
  successColor: string;
  warningColor: string;
  errorColor: string;
  textColor: string;
  disabledColor: string;
  boxShadowBase: string;
}

export const theme: ITheme = {
  firstColor: "#204b5e",
  secondColor: "#426b65",
  thirdColor: "#baab6a",
  fourthColor: "#fbea80",
  fifthColor: "#fdfac7",
  successColor: "#14c3a2",
  warningColor: "#f38630",
  errorColor: "#d31900",
  textColor: "rgba(0, 0, 0, 0.87)",
  disabledColor: "#d5d5d5",
  boxShadowBase: "0px 2px 6px 0 rgba(0, 0, 0, 0.12)",
};

const screenSize = {
  xs: "320px",
  sm: "768px",
  lg: "1200px"
}

export const device = {
  xs: `(min-width: ${screenSize.xs})`,
  sm: `(min-width: ${screenSize.sm})`,
  lg: `(min-width: ${screenSize.lg})`
}