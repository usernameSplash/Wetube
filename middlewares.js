import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;

  //fake data
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
