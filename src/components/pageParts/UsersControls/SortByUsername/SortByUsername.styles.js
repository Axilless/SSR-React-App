import { palette } from "config/palette";

const { grey } = palette;

export const button = {
  background: grey.G500,
  whiteSpace: "nowrap",
  textTransform: "none",
  height: "100%",
  "&:hover": {
    background: grey.G600,
  },
};
