export const TOKEN_KEY = "token";

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token) => {
  if (!token || token.length === 0 || typeof token !== "string") return;

  window.localStorage.setItem(TOKEN_KEY, token);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem("rootId");
  window.localStorage.removeItem("email");
  window.localStorage.removeItem("refreshToken");
};

export default { TOKEN_KEY, getToken, setToken, deleteToken };
