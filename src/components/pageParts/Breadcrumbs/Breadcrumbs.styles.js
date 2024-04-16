import { palette } from "config/palette";

const { grey } = palette;

const text = {
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: 400,
  letterSpacing: "-0.00833em",
};

export const wrapper = {
  ".MuiTypography-root": {
    ...text,
    color: grey.G600,
  },
  a: {
    ...text,
    color: grey.G900,
    "&:hover": {
      color: grey.G500,
    },
  },
};
