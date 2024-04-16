import { palette } from "config/palette";

const { grey } = palette;

export const base = {
  width: "100%",
  ".MuiInputBase-root": {
    background: grey.G50,
    fieldset: {
      borderColor: `${grey.G400} !important`,
    },
  },
};
