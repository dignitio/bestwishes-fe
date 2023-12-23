const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

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
  createCard: path(ROOTS_DASHBOARD, "/create-card"),
  settings: path(ROOTS_DASHBOARD, "/settings"),
  support: path(ROOTS_DASHBOARD, "/support"),
  profile: path(ROOTS_DASHBOARD, "/profile"),
};

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.root;
