import { palette } from "config/palette";

const { grey } = palette;

const fonts = {
  big: {
    fontSize: "36px",
    lineHeight: "40px",
  },
  medium: {
    fontSize: "24px",
    lineHeight: "28px",
  },
  small: {
    fontSize: "20px",
    lineHeight: "24px",
  },
  extraSmall: {
    fontSize: "16px",
    lineHeight: "24px",
  },
};

export const getStyles = (isSmallDisplay) => {
  const wrapper = {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    paddingBottom: 2,
    borderBottom: `1px solid ${grey.G300}`,

    a: {
      textDecoration: "none",
    },
  };

  const username = {
    fontWeight: 500,
    ...(isSmallDisplay ? { ...fonts.medium } : { ...fonts.big }),
  };

  const name = {
    fontWeight: 300,
    ...(isSmallDisplay ? { ...fonts.small } : { ...fonts.medium }),
  };

  const email = {
    fontWeight: 300,
    ...(isSmallDisplay ? { ...fonts.extraSmall } : { ...fonts.small }),
  };

  const phone = {
    fontWeight: 400,
    ...(isSmallDisplay ? { ...fonts.extraSmall } : { ...fonts.small }),
  };

  return { wrapper, username, name, email, phone };
};
