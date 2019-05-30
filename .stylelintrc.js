module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-images"
  ],
  "rules": {
    "at-rule-no-unknown":[ true,{
      "ignoreAtRules": ["/regex/", "extend", "include", "mixin", "content"]
    }],
    "at-rule-empty-line-before":[ "always", {
      "except": "first-nested",
      "ignore": "inside-block"
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always",
    "at-rule-semicolon-space-before": "never",
    "at-rule-semicolon-newline-after": "always",
    "block-no-empty": true,
    "block-closing-brace-empty-line-before": "never",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "color-named": "never",
    "custom-property-pattern": "string|regex",
    "comment-whitespace-inside": "never",
    "comment-empty-line-before": "always",
    "custom-property-empty-line-before": "never",
    "declaration-block-no-duplicate-properties": [true, {
      "ignore":["consecutive-duplicates"]
    }],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-colon-space-after": "always",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-bang-space-after": "never",
    "declaration-empty-line-before": "never",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-single-line-max-declarations": 1,
    "font-family-no-duplicate-names": true,
    "font-family-name-quotes": "always-where-recommended",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "never-multi-line",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "never",
    "function-url-scheme-blacklist": ["/^http/"],
    "function-whitespace-after": "always",
    "indentation": 4|"tab",
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "media-feature-colon-space-after":"always",
    "media-feature-colon-space-before":"never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside":"never",
    "media-feature-name-no-unknown":true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "number-max-precision": 6,
    "property-no-unknown": true,
    "property-case": "lower",
    "rule-empty-line-before":[ "always", {
      "except": "first-nested",
      "ignore": "inside-block"
    }],
    "string-no-newline": true,
    "string-quotes": "double",
    "selector-type-no-unknown": true,
    "selector-max-empty-lines": 0,
    "selector-max-id": 2,
    "selector-max-universal": 2,
    "selector-no-vendor-prefix": true,
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-pseudo-class-no-unknown":[ true,{
      "ignorePseudoClasses": ["/regex/", "global"]
    }],
    "selector-pseudo-element-no-unknown":[ true,{
      "ignorePseudoElements": ["/regex/", "global"]
    }],
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-colon-notation": "single",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "shorthand-property-no-redundant-values": true,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-max-empty-lines": 0,
    "value-list-comma-newline-after": "always",
    "value-list-comma-space-after": "always",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/declaration-nested-properties": "never",
    "scss/declaration-nested-properties-no-divided-groups": true,
    "scss/operator-no-newline-after": true,
    "images/broken": true,
    "images/prefer-data-uri": 100
  }
};