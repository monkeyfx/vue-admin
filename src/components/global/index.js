import Vue from "vue";

const requireComponents = require.context("./custom", false, /\.vue$/);

export default () => {
  requireComponents.keys().forEach(fileName => {
    const component = requireComponents(fileName);
    Vue.component(component.default.name, component.default);
  });
};
