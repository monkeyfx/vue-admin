const requireComponents = require.context("./custom", false, /\.vue$/);
export default Vue => {
  requireComponents.keys().forEach(filePath => {
    const component = requireComponents(filePath);
    Vue.component(component.default.name, component.default);
  });
};
