import { palette } from "config/palette";

const { grey } = palette;

export const wrapper = {
  height: "100%",

  "&:hover": {
    transform: "scale(1.02)",
  },
  "> .MuiBox-root": {
    height: "inherit",
  },
  a: {
    height: "inherit",
    display: "inline-block",
    textDecoration: "none",
  },
};

export const title = {
  padding: "0 8px 8px 8px",
  fontSize: "16px",
  lineHeight: "20px",
};

export const paper = {
  height: "100%",
  padding: "8px 8px 12px 8px",
  background: grey.G200,

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
};
