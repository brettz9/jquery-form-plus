'use strict';

const degreeOfComplexity = 20;

module.exports = {
	env : {
		amd     : true,
		browser : true,
		jquery  : true,
		node    : true
	},
	extends   : 'eslint:recommended',
	overrides : [{
		files : ['.eslintrc.js', 'Gruntfile.js'],
		rules : {
			strict : [
				'warn',
				'safe'
			]
		}
	}],
	parserOptions : {
		ecmaVersion : 2015,
		sourceType  : 'script'
	},
	rules : {
		'array-bracket-spacing' : [
			'warn',
			'never'
		],
		'array-callback-return' : 'warn',
		'arrow-body-style'      : 'error',
		'arrow-parens'          : 'error',
		'arrow-spacing'         : 'error',
		'block-scoped-var'      : 'warn',
		'block-spacing'         : [
			'warn',
			'always'
		],
		'brace-style' : [
			'error',
			'1tbs'
		],
		'callback-return' : 'error',
		'camelcase'       : [
			'warn',
			{allow: ['clk_x', 'clk_y'], properties: 'always'}
		],
		'class-methods-use-this' : 'error',
		'comma-dangle'           : [
			'error',
			'never'
		],
		'comma-spacing' : 'error',
		'comma-style'   : 'error',
		'complexity'    : [
			'warn',
			degreeOfComplexity
		],
		'computed-property-spacing' : 'error',
		'consistent-return'         : 'error',
		'consistent-this'           : [
			'error',
			'that',
			'outerThis',
			'self'
		],
		'curly' : [
			'error',
			'all'
		],
		'default-case' : 'error',
		'dot-location' : [
			'error',
			'property'
		],
		'dot-notation'       : 'error',
		'eol-last'           : 'error',
		'eqeqeq'             : 'error',
		'func-call-spacing'  : 'error',
		'func-name-matching' : 'error',
		'id-length'          : [
			'warn',
			{exceptions: ['$', 'e', 'i', 'j'] }
		],
		'indent' : [
			'error',
			'tab'
		],
		'key-spacing' : [
			'warn', {
				multiLine : {
					afterColon  : true,
					align       : 'colon',
					beforeColon : true
				},
				singleLine : {
					afterColon  : true,
					beforeColon : false
				}
			}
		],
		'keyword-spacing' : 'error',
		'linebreak-style' : [
			'warn',
			'unix'
		],
		'max-depth'            : 'warn',
		'max-nested-callbacks' : 'error',
		'max-params'           : [
			'warn',
			{max: 4}
		],
		'max-statements' : [
			'warn',
			{max: 20}
		],
		'max-statements-per-line' : [
			'error',
			{max: 2}
		],
		'multiline-ternary' : [
			'error',
			'never'
		],
		'new-parens'               : 'error',
		'newline-per-chained-call' : [
			'warn',
			{ignoreChainWithDepth: 3}
		],
		'no-alert'             : 'error',
		'no-array-constructor' : 'error',
		'no-await-in-loop'     : 'error',
		'no-bitwise'           : 'error',
		'no-caller'            : 'error',
		'no-compare-neg-zero'  : 'error',
		'no-confusing-arrow'   : 'error',
		'no-continue'          : 'warn',
		'no-div-regex'         : 'error',
		'no-duplicate-imports' : 'error',
		'no-else-return'       : [
			'error',
			{allowElseIf: false}
		],
		'no-empty' : [
			'error',
			{allowEmptyCatch: true}
		],
		'no-empty-function' : [
			'error',
			{allow: ['functions'] }
		],
		'no-eq-null' : 'error',
		'no-eval'    : [
			'error',
			{allowIndirect: true}
		],
		'no-extend-native' : 'error',
		'no-extra-bind'    : 'error',
		'no-extra-label'   : 'error',
		'no-extra-parens'  : [
			'warn',
			'all',
			{
				nestedBinaryExpressions : false,
				returnAssign            : false
			}
		],
		'no-floating-decimal'   : 'error',
		'no-global-assign'      : 'error',
		'no-implicit-globals'   : 'error',
		'no-implied-eval'       : 'error',
		'no-inner-declarations' : [
			'warn',
			'both'
		],
		// 'no-invalid-this'  : 'warn', // Not practical for jQuery
		'no-iterator'      : 'error',
		'no-label-var'     : 'error',
		'no-labels'        : 'error',
		'no-lone-blocks'   : 'error',
		'no-lonely-if'     : 'error',
		'no-loop-func'     : 'error',
		'no-magic-numbers' : [
			'warn',
			{
				ignore             : [0, 1],
				ignoreArrayIndexes : true
			}
		],
		'no-mixed-operators'      : 'error',
		'no-mixed-requires'       : 'error',
		'no-multi-assign'         : 'warn',
		'no-multi-spaces'         : 'error',
		'no-multi-str'            : 'error',
		'no-multiple-empty-lines' : [
			'error',
			{
				max    : 2,
				maxBOF : 0,
				maxEOF : 1
			}
		],
		'no-negated-condition'         : 'warn',
		'no-nested-ternary'            : 'error',
		'no-new'                       : 'error',
		'no-new-func'                  : 'error',
		'no-new-object'                : 'error',
		'no-new-require'               : 'error',
		'no-new-wrappers'              : 'error',
		'no-octal-escape'              : 'error',
		'no-path-concat'               : 'error',
		'no-process-env'               : 'error',
		'no-process-exit'              : 'error',
		'no-proto'                     : 'error',
		'no-prototype-builtins'        : 'warn',
		'no-restricted-globals'        : 'error',
		'no-restricted-imports'        : 'error',
		'no-restricted-modules'        : 'error',
		'no-restricted-properties'     : 'error',
		'no-restricted-syntax'         : 'error',
		'no-return-assign'             : 'error',
		'no-return-await'              : 'error',
		'no-script-url'                : 'error',
		'no-self-compare'              : 'error',
		'no-sequences'                 : 'error',
		'no-shadow'                    : 'warn',
		'no-shadow-restricted-names'   : 'error',
		'no-sync'                      : 'warn',
		'no-template-curly-in-string'  : 'error',
		// 'no-ternary'                   : 'warn',
		'no-throw-literal'             : 'warn',
		'no-trailing-spaces'           : 'error',
		'no-undef-init'                : 'error',
		'no-underscore-dangle'         : 'error',
		'no-unmodified-loop-condition' : 'error',
		'no-unneeded-ternary'          : 'error',
		'no-unsafe-negation'           : 'error',
		'no-unused-expressions'        : 'error',
		'no-unused-vars'               : [
			'warn',
			{
				args : 'none',
				vars : 'local'
			}
		],
		'no-use-before-define' : [
			'error',
			{
				functions : false
			}
		],
		'no-useless-call'                  : 'error',
		'no-useless-computed-key'          : 'error',
		'no-useless-concat'                : 'error',
		'no-useless-constructor'           : 'error',
		'no-useless-escape'                : 'error',
		'no-useless-rename'                : 'error',
		'no-useless-return'                : 'error',
		'no-var'                           : 'warn',
		'no-void'                          : 'error',
		'no-warning-comments'              : 'warn',
		'no-whitespace-before-property'    : 'error',
		'no-with'                          : 'error',
		'nonblock-statement-body-position' : 'error',
		'object-curly-newline'             : 'error',
		'object-curly-spacing'             : [
			'error',
			'never',
			{
				arraysInObjects  : true,
				objectsInObjects : true
			}
		],
		'object-property-newline' : [
			'error',
			{
				allowMultiplePropertiesPerLine : true
			}
		],
		'object-shorthand' : [
			'warn',
			'consistent'
		],
		'operator-assignment' : [
			'error',
			'always'
		],
		'operator-linebreak'              : 'error',
		'padding-line-between-statements' : [
			'warn',
			{blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
			{blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
			{blankLine: 'always', next: '*', prev: 'directive'},
			{blankLine: 'any', next: 'directive', prev: 'directive'},
			{blankLine: 'always', next: 'return', prev: '*'}
		],
		'prefer-const'                 : 'error',
		'prefer-promise-reject-errors' : 'error',
		'quote-props'                  : [
			'warn',
			'consistent-as-needed'
		],
		'quotes' : [
			'error',
			'single',
			{
				allowTemplateLiterals : true,
				avoidEscape           : true
			}
		],
		'radix'               : 'error',
		'require-await'       : 'error',
		'rest-spread-spacing' : 'error',
		'semi'                : [
			'error',
			'always'
		],
		'semi-spacing'                : 'error',
		'sort-imports'                : 'error',
		'sort-keys'                   : 'warn',
		'sort-vars'                   : 'warn',
		'space-before-blocks'         : 'warn',
		'space-before-function-paren' : [
			'warn',
			{
				anonymous  : 'ignore',
				asyncArrow : 'ignore',
				named      : 'never'
			}
		],
		'space-in-parens' : 'warn',
		'space-infix-ops' : 'error',
		'space-unary-ops' : 'error',
		'spaced-comment'  : ['error', 'always', {
			block : {
				balanced   : true,
				exceptions : ['*'],
				markers    : ['!']
			},
			line : {
				exceptions : ['-', '+'],
				markers    : ['/']
			}
		}],
		'strict' : [
			'warn',
			'function'
		],
		'template-curly-spacing' : 'error',
		'template-tag-spacing'   : 'error',
		'unicode-bom'            : 'error',
		'vars-on-top'            : 'warn',
		'wrap-iife'              : 'error',
		'yield-star-spacing'     : 'error',
		'yoda'                   : 'error'
	}
};
