const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_ADMIN = "/admin";
const ROOTS_HOME = "/";

function path(root, sublink) {
  return `${root}${sublink}`;
}

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  tribute: path(ROOTS_DASHBOARD, "/tribute"),
  wallet: path(ROOTS_DASHBOARD, "/wallet"),
  wishlist: path(ROOTS_DASHBOARD, "/wishlist"),
  wishcard: path(ROOTS_DASHBOARD, "/wishcard"),
  wishcardLibrary: path(ROOTS_DASHBOARD, "/wishcard/library"),
  settings: path(ROOTS_DASHBOARD, "/settings"),
  support: path(ROOTS_DASHBOARD, "/support"),
  profile: path(ROOTS_DASHBOARD, "/profile"),
  bank: path(ROOTS_DASHBOARD, "/bank"),
  security: path(ROOTS_DASHBOARD, "/security"),
};

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  tribute: path(ROOTS_ADMIN, "/tribute"),
  users: path(ROOTS_ADMIN, "/users"),
  wishcard: path(ROOTS_ADMIN, "/wishcard"),
  wishlist: path(ROOTS_ADMIN, "/wishlist"),
  transactions: path(ROOTS_ADMIN, "/transactions"),
  settings: path(ROOTS_ADMIN, "/settings"),
};

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.root;

export const PATH_HOME = {
  root: ROOTS_HOME,
  about: path(ROOTS_HOME, "about"),
 features: path(ROOTS_HOME, "features"),
}
