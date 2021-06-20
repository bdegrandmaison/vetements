module.exports = {
 presets: [['module:@babel/preset-env', {
useBuiltIns: 'usage',
corejs: 3
 }], 'module:@babel/preset-react','module:@babel/preset-typescript'],
};