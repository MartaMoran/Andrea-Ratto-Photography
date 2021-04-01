const overrides = {};
const rawOverrides = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (theme) => {
  Object.keys(rawOverrides).forEach((key) => {
    overrides[key] = typeof rawOverrides[key] === 'function' ? rawOverrides[key](theme) : rawOverrides[key];
  });
  return overrides;
};
