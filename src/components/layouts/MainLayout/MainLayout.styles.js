import { palette } from "config/palette";

const { grey } = palette;

export const wrapper = {
  background: grey.G200,
  padding: "16px 24px",
  minHeight: "calc(100vh - 32px)",

  "*": {
    boxSizing: "border-box",
  },
  "*:hover": {
    transition: "0.2s ease-in-out",
  },

  "*::-webkit-scrollbar": {
    width: "0.5em",
  },
  "*::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(119, 136, 153, 0.6)",
    borderRadius: "4px",
    boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
  },
};

export const header = {
  maxWidth: "900px",
  width: "100%",
  margin: "0 auto 24px auto",
};

export const paper = {
  padding: "16px 24px",
  maxWidth: "900px",
  width: "100%",
  background: grey.G50,
  margin: "0 auto",
  overflowY: "auto",
  maxHeight: "75vh",
};

export const title = {
  fontSize: "54px",
  lineHeight: "60px",
  fontWeight: 300,
  marginBottom: "8px",
};
