module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};  
// This configuration file tells Babel to use the preset-env preset,
// jest uses this to transpile modern JavaScript features to a version compatible with the current Node.js environment.
/**
 * Jest runs tests inside a Node.js environment, not the browser.
 * Modern JavaScript features (ES6+) like import/export, async/await, classes,
 * optional chaining, etc. may not be fully supported by the current Node version.
 *
 * Babel is used to transpile (convert) modern JavaScript into older syntax 
 * that Node.js can execute without errors.
 *
 * The "@babel/preset-env" preset automatically determines which transformations 
 * are needed based on the environment. In this case, Jest uses it to ensure 
 * all test files are converted into Node-compatible JavaScript before running.
 *
 * In short: This configuration allows Jest to understand modern JS syntax
 * by having Babel compile it down to a version that Node.js supports.
 */
