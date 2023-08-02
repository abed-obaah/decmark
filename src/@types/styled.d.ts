import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    mode: "dark" | "light";
    PRIMARY_BACKGROUND_COLOR: string;
    SECONDARY_BACKGROUND_COLOR: string;
    RARE_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    SECONDARY_TEXT_COLOR: string;
    GOLDEN_TEXT: string;
    PRIMARY_BORDER_COLOR: string;
    INPUT_BACKGROUND_COLOR: string;
    NAVBAR_BUTTON_COLOR: "dark" | "light";
    NAVBAR_BACKGROUND_COLOR: string;
    STATUS_BAR_STYLE: "dark" | "light";
    HEADER_BACKGROUND_COLOR: string;
  }
}
