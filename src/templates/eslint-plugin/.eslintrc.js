module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "globals": {},
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "test"
    ],
    "rules": {
        "test/test": 2
    }
};