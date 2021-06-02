import "styled-components";

export interface ITheme {
  title: string;
  colors: {
    background: string;
    primary: string;
    secondary: string;
    text: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
