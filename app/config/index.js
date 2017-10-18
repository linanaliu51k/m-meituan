import developConfig from './develop.js';
import productionConfig from './production.js';

let Config = {};

if (__DEV__ === 'dev') {
    Config = developConfig;
} else if (__DEV__ === 'production') {
    Config = productionConfig;
} else {
    throw new Error('请设置代码运行环境');
}
export default Config;
