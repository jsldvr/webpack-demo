# CHANGELOG.md

## [SANDBOX] - 2023-10-15

### Added

- NOTES.md to document the development process

### Changed

- `_e` function from:

    ```js
    export default function _e(tag, attributes = [], appendChild = [], innerHTML)
    ```

    to:

    ```js
    export function _e(tag, attributes = [], appendChild = [], innerHTML)
    ```

    As the following and similar errors were being thrown:

    ```bash
    WARNING in ./src/example.com/index.js 30:23-25
    export '_e' (imported as '_e') was not found in '../../assets/scripts/utils/createElement' (possible exports: default)
    ```

    (???)This is because the `_e` function is not the default export from `createElement.js`.
