export const wrapper = (isSmallDisplay) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "24px",
  textAlign: "center",
  whiteSpace: "normal",

  a: {
    fontSize: isSmallDisplay ? "24px" : "36px",
    lineHeight: isSmallDisplay ? "28px" : "40px",
  },
});

export const stack = {
  width: "100%",
  alignItems: "center",
  marginBottom: "200px",
  gap: 2,
};

export const message = {
  wordBreak: "break-word",
};
