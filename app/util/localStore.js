export default {
    getItem: function (key) {
        let value;
        try {
            value = localStorage.getItem(key);
        } catch (ex) {
            //开发环境下提示error
            if (__DEV__) {
                console.error('localStorage.getItem报错', ex.message);
            }
        } finally {
            return value;
        }
    },
    setItem: function (key, value) {
        try {
            //ios 无痕模式下， 直接使用localStorage.setItem会报错.
            localStorage.setItem(key, value);
        } catch (ex) {
            if (__DEV__) {
                console.error('localStorage.setItem报错', ex.message);
            }
        }
    }
}
