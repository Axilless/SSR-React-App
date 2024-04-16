import { palette } from "config/palette";

const { grey } = palette;

export const title = {
  padding: "0 8px",
  fontSize: "28px",
  lineHeight: "32px",
};

export const paper = {
  padding: "16px 8px",
  maxHeight: "400px",
  height: "100%",
  overflow: "auto",
  background: grey.G200,
  "&:hover": {
    transform: "scale(1.02)",
  },
};
