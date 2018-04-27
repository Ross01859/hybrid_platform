module.exports = {
    root: false,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        jquery: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard',
        'eslint:recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "key-spacing": [
            "error",
            {
                "afterColon": true
            }
        ],
        "no-console": [

            "error", { allow: ["warn", "error", "debug", "log", "info"] }
        ],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-tabs': 'off',
        '-W099': true,
        'no-undef': 0
    }
};