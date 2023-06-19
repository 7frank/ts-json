// To parse this data:
//
//   import { Convert, PackageJSONSchema } from "./file";
//
//   const packageJSONSchema = Convert.toPackageJSONSchema(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PackageJSONSchema {
    author?: PersonObject | string;
    ava?:    AVAConfigSchema;
    bin?:    { [key: string]: string } | string;
    /**
     * The url to your project's issue tracker and / or the email address to which issues should
     * be reported. These are helpful for people who encounter issues with your package.
     */
    bugs?: PurpleBugs | string;
    /**
     * Array of package names that will be bundled when publishing the package.
     */
    bundledDependencies?: string[] | boolean;
    /**
     * DEPRECATED: This field is honored, but "bundledDependencies" is the correct field name.
     */
    bundleDependencies?: string[] | boolean;
    /**
     * A 'config' hash can be used to set configuration parameters used in package scripts that
     * persist across upgrades.
     */
    config?: { [key: string]: any };
    /**
     * A list of people who contributed to this package.
     */
    contributors?: Array<PersonObject | string>;
    /**
     * Specify that your code only runs on certain cpu architectures.
     */
    cpu?:          string[];
    dependencies?: { [key: string]: string };
    /**
     * This helps people discover your package, as it's listed in 'npm search'.
     */
    description?:     string;
    devDependencies?: { [key: string]: string };
    directories?:     PackageJSONSchemaDirectories;
    dist?:            PackageJSONSchemaDist;
    engines?:         PackageJSONSchemaEngines;
    engineStrict?:    boolean;
    eslintConfig?:    JSONSchemaForESLintConfigurationFiles;
    /**
     * A module ID with untranspiled code that is the primary entry point to your program.
     */
    esnext?: PurpleEsnext | string;
    /**
     * The "exports" field is used to restrict external access to non-exported module files,
     * also enables a module to import itself using "name".
     */
    exports?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PurplePackageExportsEntryObject | null | string;
    /**
     * The 'files' field is an array of files to include in your project. If you name a folder
     * in the array, then it will also include the files inside that folder.
     */
    files?:   string[];
    funding?: Array<FundingWay | string> | FundingWay | string;
    /**
     * The url to the project homepage.
     */
    homepage?: string;
    jscpd?:    Jscpd;
    jspm?:     JSONSchemaForNPMPackageJSONFiles;
    /**
     * This helps people discover your package as it's listed in 'npm search'.
     */
    keywords?: string[];
    /**
     * You should specify a license for your package so that people know how they are permitted
     * to use it, and any restrictions you're placing on it.
     */
    license?: string;
    /**
     * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or {
     * "license": "(MIT OR Apache-2.0)" } see:
     * 'https://docs.npmjs.com/files/package.json#license'.
     */
    licenses?: PackageJSONSchemaLicense[];
    /**
     * The main field is a module ID that is the primary entry point to your program.
     */
    main?: string;
    /**
     * A list of people who maintains this package.
     */
    maintainers?: Array<PersonObject | string>;
    /**
     * Specify either a single file or an array of filenames to put in place for the man program
     * to find.
     */
    man?: string[] | string;
    /**
     * An ECMAScript module ID that is the primary entry point to your program.
     */
    module?: string;
    /**
     * The name of the package.
     */
    name?:                 string;
    optionalDependencies?: { [key: string]: string };
    /**
     * Specify which operating systems your module will run on.
     */
    os?: string[];
    /**
     * Overrides is used to support selective version overrides using npm, which lets you define
     * custom package versions or ranges inside your dependencies. For yarn, use resolutions
     * instead. See: https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
     */
    overrides?: { [key: string]: any };
    /**
     * Defines which package manager is expected to be used when working on the current project.
     * This field is currently experimental and needs to be opted-in; see
     * https://nodejs.org/api/corepack.html
     */
    packageManager?:   string;
    peerDependencies?: { [key: string]: string };
    /**
     * When a user installs your package, warnings are emitted if packages specified in
     * "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to
     * provide more information on how your peer dependencies are utilized. Most commonly, it
     * allows peer dependencies to be marked as optional. Metadata for this field is specified
     * with a simple hash of the package name to a metadata object.
     */
    peerDependenciesMeta?: { [key: string]: PackageJSONSchemaPeerDependenciesMeta };
    /**
     * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is
     * purely there for informational purposes. It is now recommended that you install any
     * binaries as local devDependencies wherever possible.
     */
    preferGlobal?: boolean;
    prettier?:     SchemaForPrettierrcObject | string;
    /**
     * If set to true, then npm will refuse to publish it.
     */
    private?:       boolean | PrivateEnum;
    publishConfig?: PackageJSONSchemaPublishConfig;
    readme?:        string;
    release?:       SemanticReleaseSchema;
    /**
     * Specify the place where your code lives. This is helpful for people who want to
     * contribute.
     */
    repository?: FluffyRepository | string;
    /**
     * Resolutions is used to support selective version resolutions using yarn, which lets you
     * define custom package versions or ranges inside your dependencies. For npm, use overrides
     * instead. See: https://classic.yarnpkg.com/en/docs/selective-version-resolutions
     */
    resolutions?: { [key: string]: any };
    /**
     * The 'scripts' member is an object hash of script commands that are run at various times
     * in the lifecycle of your package. The key is the lifecycle event, and the value is the
     * command to run at that point.
     */
    scripts?:   PackageJSONSchemaScripts;
    stylelint?: JSONSchemaForTheStylelintConfigurationFiles;
    /**
     * When set to "module", the type field allows a package to specify all .js files within are
     * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
     * treated as CommonJS.
     */
    type?: Type;
    /**
     * Set the types property to point to your bundled declaration file.
     */
    types?: string;
    /**
     * The "typesVersions" field is used since TypeScript 3.1 to support features that were only
     * made available in newer TypeScript versions.
     */
    typesVersions?: { [key: string]: PackageJSONSchemaTypesVersion };
    /**
     * Note that the "typings" field is synonymous with "types", and could be used as well.
     */
    typings?: string;
    /**
     * Version must be parseable by node-semver, which is bundled with npm as a dependency.
     */
    version?: string;
    /**
     * Allows packages within a directory to depend on one another using direct linking of local
     * files. Additionally, dependencies within a workspace are hoisted to the workspace root
     * when possible to reduce duplication. Note: It's also a good idea to set "private" to true
     * when using this feature.
     */
    workspaces?: string[] | FluffyWorkspaces;
    [property: string]: any;
}

export interface PersonObject {
    email?: string;
    name:   string;
    url?:   string;
    [property: string]: any;
}

/**
 * Configuration Schema for the JavaScript test runner AVA
 */
export interface AVAConfigSchema {
    /**
     * Defaults to `true` to cache compiled files under `node_modules/.cache/ava.` If `false`,
     * files are cached in a temporary directory instead
     */
    cache?: boolean;
    /**
     * Max number of test files running at the same time (default: CPU cores)
     */
    concurrency?: number;
    /**
     * Specifies environment variables to be made available to the tests. The environment
     * variables defined here override the ones from `process.env`
     */
    environmentVariables?: { [key: string]: string };
    /**
     * Extensions of test files. Setting this overrides the default `["cjs", "mjs", "js"]`
     * value, so make sure to include those extensions in the list. Experimentally you can
     * configure how files are loaded
     */
    extensions?: string[] | { [key: string]: Type };
    /**
     * Stop running further tests once a test fails
     */
    failFast?: boolean;
    /**
     * If `false`, does not fail a test if it doesn't run assertions
     */
    failWithoutAssertions?: boolean;
    /**
     * An array of glob patterns to select test files. Files with an underscore prefix are
     * ignored. By default only selects files with `cjs`, `mjs` & `js` extensions, even if the
     * pattern matches other files. Specify `extensions` to allow other file extensions
     */
    files?: string[];
    /**
     * An array of glob patterns to match files that, even if changed, are ignored by the watcher
     */
    ignoredByWatcher?: string[];
    /**
     * Not typically useful in the `package.json` configuration, but equivalent to specifying
     * `--match` on the CLI
     */
    match?: string[];
    /**
     * Configure Node.js arguments used to launch worker processes
     */
    nodeArguments?: string[];
    /**
     * Extra modules to require before tests are run. Modules are required in the worker
     * processes
     */
    require?: string[];
    /**
     * Specifies a fixed location for storing snapshot files. Use this if your snapshots are
     * ending up in the wrong location
     */
    snapshotDir?: string;
    /**
     * If `true`, enables the TAP reporter
     */
    tap?: boolean;
    /**
     * Timeouts in AVA behave differently than in other test frameworks. AVA resets a timer
     * after each test, forcing tests to quit if no new test results were received within the
     * specified timeout. This can be used to handle stalled tests. See our timeout
     * documentation for more options
     */
    timeout?: number | string;
    /**
     * Configures @ava/typescript for projects that precompile TypeScript. Alternatively, you
     * can use `ts-node` to do live testing without transpiling, in which case you shouldn't use
     * the `typescript` property
     */
    typescript?: Configuration;
    /**
     * If `false`, disable parallel builds (default: `true`)
     */
    utilizeParallelBuilds?: boolean;
    /**
     * If `true`, enables verbose output (though currently non-verbose output is not supported)
     */
    verbose?: boolean;
    /**
     * Use worker threads to run tests (enabled by default). If `false`, tests will run in child
     * processes
     */
    workerThreads?: boolean;
}

/**
 * When set to "module", the type field allows a package to specify all .js files within are
 * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
 * treated as CommonJS.
 */
export enum Type {
    Commonjs = "commonjs",
    Module = "module",
}

/**
 * Configures @ava/typescript for projects that precompile TypeScript. Alternatively, you
 * can use `ts-node` to do live testing without transpiling, in which case you shouldn't use
 * the `typescript` property
 */
export interface Configuration {
    /**
     * If `false`, AVA will assume you have already compiled your project. If set to `'tsc'`,
     * AVA will run the TypeScript compiler before running your tests. This can be inefficient
     * when using AVA in watch mode
     */
    compile?: boolean | CompileEnum;
    /**
     * You can configure AVA to recognize additional file extensions as TypeScript (e.g.,
     * `["ts", "tsx"]` to add partial JSX support). Note that the preserve mode for JSX is not
     * (yet) supported. See also AVA's `extensions` object
     */
    extensions?: string[];
    /**
     * AVA searches your entire project for `*.js`, `*.cjs`, `*.mjs` and `*.ts` files (or other
     * extensions you've configured). It will ignore such files found in the `rewritePaths`
     * targets (e.g. `build/`). If you use more specific paths, for instance `build/main/`, you
     * may need to change AVA's `files` configuration to ignore other directories. Paths are
     * relative to your project directory
     */
    rewritePaths?: { [key: string]: any };
    [property: string]: any;
}

export enum CompileEnum {
    Tsc = "tsc",
}

export interface PurpleBugs {
    /**
     * The email address to which issues should be reported.
     */
    email?: string;
    /**
     * The url to your project's issue tracker.
     */
    url?: string;
    [property: string]: any;
}

export interface PackageJSONSchemaDirectories {
    /**
     * If you specify a 'bin' directory, then all the files in that folder will be used as the
     * 'bin' hash.
     */
    bin?: string;
    /**
     * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
     */
    doc?: string;
    /**
     * Put example scripts in here. Someday, it might be exposed in some clever way.
     */
    example?: string;
    /**
     * Tell people where the bulk of your library is. Nothing special is done with the lib
     * folder in any way, but it's useful meta info.
     */
    lib?: string;
    /**
     * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
     */
    man?:  string;
    test?: string;
    [property: string]: any;
}

export interface PackageJSONSchemaDist {
    shasum?:  string;
    tarball?: string;
    [property: string]: any;
}

export interface PackageJSONSchemaEngines {
    node?: string;
    [property: string]: string;
}

export interface JSONSchemaForESLintConfigurationFiles {
    /**
     * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to
     * enable support for ECMAScript 6 as well as JSX by using configuration settings.
     */
    ecmaFeatures?: ECMAFeatures;
    /**
     * An environment defines global variables that are predefined.
     */
    env?: Env;
    /**
     * If you want to extend a specific configuration file, you can use the extends property and
     * specify the path to the file. The path can be either relative or absolute.
     */
    extends?: string[] | string;
    /**
     * Set each global variable name equal to true to allow the variable to be overwritten or
     * false to disallow overwriting.
     */
    globals?: { [key: string]: boolean | GlobalEnum };
    /**
     * Tell ESLint to ignore specific files and directories. Each value uses the same pattern as
     * the `.eslintignore` file.
     */
    ignorePatterns?: string[] | string;
    /**
     * Prevent comments from changing config or rules
     */
    noInlineConfig?: boolean;
    /**
     * Allows to override configuration for files and folders, specified by glob patterns
     */
    overrides?: EslintConfigOverride[];
    parser?:    string;
    /**
     * The JavaScript language options to be supported
     */
    parserOptions?: ParserOptions;
    /**
     * ESLint supports the use of third-party plugins. Before using the plugin, you have to
     * install it using npm.
     */
    plugins?: string[];
    /**
     * By default, ESLint will look for configuration files in all parent folders up to the root
     * directory. This can be useful if you want all of your projects to follow a certain
     * convention, but can sometimes lead to unexpected results. To limit ESLint to a specific
     * project, set this to `true` in a configuration in the root of your project.
     */
    root?: boolean;
    /**
     * ESLint comes with a large number of rules. You can modify which rules your project uses
     * either using configuration comments or configuration files.
     */
    rules?: Rules;
    /**
     * ESLint supports adding shared settings into configuration file. You can add settings
     * object to ESLint configuration file and it will be supplied to every rule that will be
     * executed. This may be useful if you are adding custom rules and want them to have access
     * to the same information and be easily configurable.
     */
    settings?: { [key: string]: any };
    [property: string]: any;
}

/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to
 * enable support for ECMAScript 6 as well as JSX by using configuration settings.
 */
export interface ECMAFeatures {
    arrowFunctions?: boolean;
    binaryLiterals?: boolean;
    blockBindings?:  boolean;
    classes?:        boolean;
    defaultParams?:  boolean;
    destructuring?:  boolean;
    /**
     * Enables support for the experimental object rest/spread properties (IMPORTANT: This is an
     * experimental feature that may change significantly in the future. It's recommended that
     * you do not write rules relying on this functionality unless you are willing to incur
     * maintenance cost when it changes.)
     */
    experimentalObjectRestSpread?: boolean;
    forOf?:                        boolean;
    generators?:                   boolean;
    /**
     * allow return statements in the global scope
     */
    globalReturn?: boolean;
    /**
     * enable global strict mode (if ecmaVersion is 5 or greater)
     */
    impliedStrict?: boolean;
    /**
     * enable JSX
     */
    jsx?:                              boolean;
    modules?:                          boolean;
    objectLiteralComputedProperties?:  boolean;
    objectLiteralDuplicateProperties?: boolean;
    objectLiteralShorthandMethods?:    boolean;
    objectLiteralShorthandProperties?: boolean;
    octalLiterals?:                    boolean;
    regexUFlag?:                       boolean;
    regexYFlag?:                       boolean;
    restParams?:                       boolean;
    spread?:                           boolean;
    superInFunctions?:                 boolean;
    templateStrings?:                  boolean;
    unicodeCodePointEscapes?:          boolean;
    [property: string]: any;
}

/**
 * An environment defines global variables that are predefined.
 */
export interface Env {
    /**
     * defines require() and define() as global variables as per the amd spec
     */
    amd?: boolean;
    /**
     * AppleScript global variables
     */
    applescript?: boolean;
    /**
     * Atom test helper globals
     */
    atomtest?: boolean;
    /**
     * browser global variables
     */
    browser?: boolean;
    /**
     * CommonJS global variables and CommonJS scoping (use this for browser-only code that uses
     * Browserify/WebPack)
     */
    commonjs?: boolean;
    /**
     * Ember test helper globals
     */
    embertest?: boolean;
    /**
     * enable all ECMAScript 6 features except for modules
     */
    es6?: boolean;
    /**
     * GreaseMonkey globals
     */
    greasemonkey?: boolean;
    /**
     * adds all of the Jasmine testing global variables for version 1.3 and 2.0
     */
    jasmine?: boolean;
    /**
     * Jest global variables
     */
    jest?: boolean;
    /**
     * jQuery global variables
     */
    jquery?: boolean;
    /**
     * Meteor global variables
     */
    meteor?: boolean;
    /**
     * adds all of the Mocha test global variables
     */
    mocha?: boolean;
    /**
     * MongoDB global variables
     */
    mongo?: boolean;
    /**
     * Java 8 Nashorn global variables
     */
    nashorn?: boolean;
    /**
     * Node.js global variables and Node.js scoping
     */
    node?: boolean;
    /**
     * PhantomJS global variables
     */
    phantomjs?: boolean;
    /**
     * Prototype.js global variables
     */
    prototypejs?: boolean;
    /**
     * Protractor global variables
     */
    protractor?: boolean;
    /**
     * QUnit global variables
     */
    qunit?: boolean;
    /**
     * Service Worker global variables
     */
    serviceworker?: boolean;
    /**
     * Globals common to both Node and Browser
     */
    "shared-node-browser"?: boolean;
    /**
     * ShellJS global variables
     */
    shelljs?: boolean;
    /**
     * WebExtensions globals
     */
    webextensions?: boolean;
    /**
     * web workers global variables
     */
    worker?: boolean;
    [property: string]: any;
}

export enum GlobalEnum {
    Off = "off",
    Readonly = "readonly",
    Writable = "writable",
}

export interface EslintConfigOverride {
    ecmaFeatures?: ECMAFeatures;
    env?:          Env;
    /**
     * If a file matches any of the 'excludedFiles' glob patterns, the 'overrides' configuration
     * won't apply
     */
    excludedFiles?: string[] | string;
    /**
     * If you want to extend a specific configuration file, you can use the extends property and
     * specify the path to the file. The path can be either relative or absolute.
     */
    extends?: string[] | string;
    /**
     * Glob pattern for files to apply 'overrides' configuration, relative to the directory of
     * the config file
     */
    files:          string[] | string;
    globals?:       { [key: string]: boolean | GlobalEnum };
    overrides?:     EslintConfigOverride[];
    parser?:        string;
    parserOptions?: ParserOptions;
    plugins?:       string[];
    /**
     * To specify a processor, specify the plugin name and processor name joined by a forward
     * slash
     */
    processor?: string;
    rules?:     Rules;
    settings?:  { [key: string]: any };
}

/**
 * The JavaScript language options to be supported
 */
export interface ParserOptions {
    ecmaFeatures?: ECMAFeatures;
    /**
     * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to specify the version
     * of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as
     * 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), 2021 (same
     * as 12), 2022 (same as 13) or 2023 (same as 14) to use the year-based naming. "latest"
     * always enables the latest supported ECMAScript version.
     */
    ecmaVersion?: number | ECMAVersionEnum;
    /**
     * set to "script" (default) or "module" if your code is in ECMAScript modules
     */
    sourceType?: SourceType;
    [property: string]: any;
}

export enum ECMAVersionEnum {
    Latest = "latest",
}

/**
 * set to "script" (default) or "module" if your code is in ECMAScript modules
 */
export enum SourceType {
    Module = "module",
    Script = "script",
}

/**
 * ESLint comes with a large number of rules. You can modify which rules your project uses
 * either using configuration comments or configuration files.
 */
export interface Rules {
    /**
     * Require or disallow trailing commas
     */
    "comma-dangle"?: any[] | RuleEnum | number;
    /**
     * Enforce "for" loop update clause moving the counter in the right direction
     */
    "for-direction"?: any[] | RuleEnum | number;
    /**
     * Enforce return statements in getters
     */
    "getter-return"?: any[] | RuleEnum | number;
    /**
     * Disallow await inside of loops
     */
    "no-await-in-loop"?: any[] | RuleEnum | number;
    /**
     * Disallow comparing against -0
     */
    "no-compare-neg-zero"?: any[] | RuleEnum | number;
    /**
     * Disallow assignment operators in conditional expressions
     */
    "no-cond-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of console
     */
    "no-console"?: any[] | RuleEnum | number;
    /**
     * Disallow constant expressions in conditions
     */
    "no-constant-condition"?: any[] | RuleEnum | number;
    /**
     * Disallow control characters in regular expressions
     */
    "no-control-regex"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of debugger
     */
    "no-debugger"?: any[] | RuleEnum | number;
    /**
     * Disallow duplicate arguments in function definitions
     */
    "no-dupe-args"?: any[] | RuleEnum | number;
    /**
     * Disallow duplicate keys in object literals
     */
    "no-dupe-keys"?: any[] | RuleEnum | number;
    /**
     * Disallow duplicate case labels
     */
    "no-duplicate-case"?: any[] | RuleEnum | number;
    /**
     * Disallow empty block statements
     */
    "no-empty"?: any[] | RuleEnum | number;
    /**
     * Disallow empty character classes in regular expressions
     */
    "no-empty-character-class"?: any[] | RuleEnum | number;
    /**
     * Disallow reassigning exceptions in catch clauses
     */
    "no-ex-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary boolean casts
     */
    "no-extra-boolean-cast"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary parentheses
     */
    "no-extra-parens"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary semicolons
     */
    "no-extra-semi"?: any[] | RuleEnum | number;
    /**
     * Disallow reassigning function declarations
     */
    "no-func-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow function or var declarations in nested blocks
     */
    "no-inner-declarations"?: any[] | RuleEnum | number;
    /**
     * Disallow invalid regular expression strings in RegExp constructors
     */
    "no-invalid-regexp"?: any[] | RuleEnum | number;
    /**
     * Disallow irregular whitespace outside of strings and comments
     */
    "no-irregular-whitespace"?: any[] | RuleEnum | number;
    /**
     * Disallow negating the left operand in in expressions (deprecated)
     */
    "no-negated-in-lhs"?: any[] | RuleEnum | number;
    /**
     * Disallow calling global object properties as functions
     */
    "no-obj-calls"?: any[] | RuleEnum | number;
    /**
     * Disallow calling some Object.prototype methods directly on objects
     */
    "no-prototype-builtins"?: any[] | RuleEnum | number;
    /**
     * Disallow multiple spaces in regular expressions
     */
    "no-regex-spaces"?: any[] | RuleEnum | number;
    /**
     * Disallow sparse arrays
     */
    "no-sparse-arrays"?: any[] | RuleEnum | number;
    /**
     * Disallow template literal placeholder syntax in regular strings
     */
    "no-template-curly-in-string"?: any[] | RuleEnum | number;
    /**
     * Disallow confusing multiline expressions
     */
    "no-unexpected-multiline"?: any[] | RuleEnum | number;
    /**
     * Disallow unreachable code after return, throw, continue, and break statements
     */
    "no-unreachable"?: any[] | RuleEnum | number;
    /**
     * Disallow control flow statements in finally blocks
     */
    "no-unsafe-finally"?: any[] | RuleEnum | number;
    /**
     * Disallow negating the left operand of relational operators
     */
    "no-unsafe-negation"?: any[] | RuleEnum | number;
    /**
     * Require calls to isNaN() when checking for NaN
     */
    "use-isnan"?: any[] | RuleEnum | number;
    /**
     * Enforce valid JSDoc comments
     */
    "valid-jsdoc"?: any[] | RuleEnum | number;
    /**
     * Enforce comparing typeof expressions against valid strings
     */
    "valid-typeof"?: any[] | RuleEnum | number;
    /**
     * Enforce getter and setter pairs in objects
     */
    "accessor-pairs"?: any[] | RuleEnum | number;
    /**
     * Enforce return statements in callbacks of array methods
     */
    "array-callback-return"?: any[] | RuleEnum | number;
    /**
     * Enforce the use of variables within the scope they are defined
     */
    "block-scoped-var"?: any[] | RuleEnum | number;
    /**
     * Enforce that class methods utilize this
     */
    "class-methods-use-this"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     */
    complexity?: any[] | RuleEnum | number;
    /**
     * Require return statements to either always or never specify values
     */
    "consistent-return"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent brace style for all control statements
     */
    curly?: any[] | RuleEnum | number;
    /**
     * Require default cases in switch statements
     */
    "default-case"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent newlines before and after dots
     */
    "dot-location"?: any[] | RuleEnum | number;
    /**
     * Enforce dot notation whenever possible
     */
    "dot-notation"?: any[] | RuleEnum | number;
    /**
     * Require the use of === and !==
     */
    eqeqeq?: any[] | RuleEnum | number;
    /**
     * Require for-in loops to include an if statement
     */
    "guard-for-in"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of alert, confirm, and prompt
     */
    "no-alert"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of arguments.caller or arguments.callee
     */
    "no-caller"?: any[] | RuleEnum | number;
    /**
     * Disallow lexical declarations in case clauses
     */
    "no-case-declarations"?: any[] | RuleEnum | number;
    /**
     * Disallow division operators explicitly at the beginning of regular expressions
     */
    "no-div-regex"?: any[] | RuleEnum | number;
    /**
     * Disallow else blocks after return statements in if statements
     */
    "no-else-return"?: any[] | RuleEnum | number;
    /**
     * Disallow empty functions
     */
    "no-empty-function"?: any[] | RuleEnum | number;
    /**
     * Disallow empty destructuring patterns
     */
    "no-empty-pattern"?: any[] | RuleEnum | number;
    /**
     * Disallow null comparisons without type-checking operators
     */
    "no-eq-null"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of eval()
     */
    "no-eval"?: any[] | RuleEnum | number;
    /**
     * Disallow extending native types
     */
    "no-extend-native"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary calls to .bind()
     */
    "no-extra-bind"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary labels
     */
    "no-extra-label"?: any[] | RuleEnum | number;
    /**
     * Disallow fallthrough of case statements
     */
    "no-fallthrough"?: any[] | RuleEnum | number;
    /**
     * Disallow leading or trailing decimal points in numeric literals
     */
    "no-floating-decimal"?: any[] | RuleEnum | number;
    /**
     * Disallow assignments to native objects or read-only global variables
     */
    "no-global-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow shorthand type conversions
     */
    "no-implicit-coercion"?: any[] | RuleEnum | number;
    /**
     * Disallow var and named function declarations in the global scope
     */
    "no-implicit-globals"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of eval()-like methods
     */
    "no-implied-eval"?: any[] | RuleEnum | number;
    /**
     * Disallow this keywords outside of classes or class-like objects
     */
    "no-invalid-this"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of the __iterator__ property
     */
    "no-iterator"?: any[] | RuleEnum | number;
    /**
     * Disallow labeled statements
     */
    "no-labels"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary nested blocks
     */
    "no-lone-blocks"?: any[] | RuleEnum | number;
    /**
     * Disallow function declarations and expressions inside loop statements
     */
    "no-loop-func"?: any[] | RuleEnum | number;
    /**
     * Disallow magic numbers
     */
    "no-magic-numbers"?: any[] | RuleEnum | number;
    /**
     * Disallow multiple spaces
     */
    "no-multi-spaces"?: any[] | RuleEnum | number;
    /**
     * Disallow multiline strings
     */
    "no-multi-str"?:       any[] | RuleEnum | number;
    "no-native-reassign"?: any[] | RuleEnum | number;
    /**
     * Disallow new operators outside of assignments or comparisons
     */
    "no-new"?: any[] | RuleEnum | number;
    /**
     * Disallow new operators with the Function object
     */
    "no-new-func"?: any[] | RuleEnum | number;
    /**
     * Disallow new operators with the String, Number, and Boolean objects
     */
    "no-new-wrappers"?: any[] | RuleEnum | number;
    /**
     * Disallow octal literals
     */
    "no-octal"?: any[] | RuleEnum | number;
    /**
     * Disallow octal escape sequences in string literals
     */
    "no-octal-escape"?: any[] | RuleEnum | number;
    /**
     * Disallow reassigning function parameters
     */
    "no-param-reassign"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of the __proto__ property
     */
    "no-proto"?: any[] | RuleEnum | number;
    /**
     * Disallow var redeclaration
     */
    "no-redeclare"?: any[] | RuleEnum | number;
    /**
     * Disallow certain properties on certain objects
     */
    "no-restricted-properties"?: any[] | RuleEnum | number;
    /**
     * Disallow assignment operators in return statements
     */
    "no-return-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary return await
     */
    "no-return-await"?: any[] | RuleEnum | number;
    /**
     * Disallow javascript: urls
     */
    "no-script-url"?: any[] | RuleEnum | number;
    /**
     * Disallow assignments where both sides are exactly the same
     */
    "no-self-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow comparisons where both sides are exactly the same
     */
    "no-self-compare"?: any[] | RuleEnum | number;
    /**
     * Disallow comma operators
     */
    "no-sequences"?: any[] | RuleEnum | number;
    /**
     * Disallow throwing literals as exceptions
     */
    "no-throw-literal"?: any[] | RuleEnum | number;
    /**
     * Disallow unmodified loop conditions
     */
    "no-unmodified-loop-condition"?: any[] | RuleEnum | number;
    /**
     * Disallow unused expressions
     */
    "no-unused-expressions"?: any[] | RuleEnum | number;
    /**
     * Disallow unused labels
     */
    "no-unused-labels"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary calls to .call() and .apply()
     */
    "no-useless-call"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary concatenation of literals or template literals
     */
    "no-useless-concat"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary escape characters
     */
    "no-useless-escape"?: any[] | RuleEnum | number;
    /**
     * Disallow redundant return statements
     */
    "no-useless-return"?: any[] | RuleEnum | number;
    /**
     * Disallow void operators
     */
    "no-void"?: any[] | RuleEnum | number;
    /**
     * Disallow specified warning terms in comments
     */
    "no-warning-comments"?: any[] | RuleEnum | number;
    /**
     * Disallow with statements
     */
    "no-with"?: any[] | RuleEnum | number;
    /**
     * Require using Error objects as Promise rejection reasons
     */
    "prefer-promise-reject-errors"?: any[] | RuleEnum | number;
    /**
     * Enforce the consistent use of the radix argument when using parseInt()
     */
    radix?: any[] | RuleEnum | number;
    /**
     * Disallow async functions which have no await expression
     */
    "require-await"?: any[] | RuleEnum | number;
    /**
     * Require var declarations be placed at the top of their containing scope
     */
    "vars-on-top"?: any[] | RuleEnum | number;
    /**
     * Require parentheses around immediate function invocations
     */
    "wrap-iife"?: any[] | RuleEnum | number;
    /**
     * Require or Disallow "Yoda" conditions
     */
    yoda?: any[] | RuleEnum | number;
    /**
     * require or disallow strict mode directives
     */
    strict?: any[] | RuleEnum | number;
    /**
     * Require or disallow initialization in var declarations
     */
    "init-declarations"?: any[] | RuleEnum | number;
    /**
     * Disallow catch clause parameters from shadowing variables in the outer scope
     */
    "no-catch-shadow"?: any[] | RuleEnum | number;
    /**
     * Disallow deleting variables
     */
    "no-delete-var"?: any[] | RuleEnum | number;
    /**
     * Disallow labels that share a name with a variable
     */
    "no-label-var"?: any[] | RuleEnum | number;
    /**
     * Disallow specified global variables
     */
    "no-restricted-globals"?: any[] | RuleEnum | number;
    /**
     * Disallow var declarations from shadowing variables in the outer scope
     */
    "no-shadow"?: any[] | RuleEnum | number;
    /**
     * Disallow identifiers from shadowing restricted names
     */
    "no-shadow-restricted-names"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of undeclared variables unless mentioned in /*global */ comments
     */
    "no-undef"?: any[] | RuleEnum | number;
    /**
     * Disallow initializing variables to undefined
     */
    "no-undef-init"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of undefined as an identifier
     */
    "no-undefined"?: any[] | RuleEnum | number;
    /**
     * Disallow unused variables
     */
    "no-unused-vars"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of variables before they are defined
     */
    "no-use-before-define"?: any[] | RuleEnum | number;
    /**
     * Require return statements after callbacks
     */
    "callback-return"?: any[] | RuleEnum | number;
    /**
     * Require require() calls to be placed at top-level module scope
     */
    "global-require"?: any[] | RuleEnum | number;
    /**
     * Require error handling in callbacks
     */
    "handle-callback-err"?: any[] | RuleEnum | number;
    /**
     * Disallow use of the Buffer() constructor
     */
    "no-buffer-constructor"?: any[] | RuleEnum | number;
    /**
     * Disallow require calls to be mixed with regular var declarations
     */
    "no-mixed-requires"?: any[] | RuleEnum | number;
    /**
     * Disallow new operators with calls to require
     */
    "no-new-require"?: any[] | RuleEnum | number;
    /**
     * Disallow string concatenation with __dirname and __filename
     */
    "no-path-concat"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of process.env
     */
    "no-process-env"?: any[] | RuleEnum | number;
    /**
     * Disallow the use of process.exit()
     */
    "no-process-exit"?: any[] | RuleEnum | number;
    /**
     * Disallow specified modules when loaded by require
     */
    "no-restricted-modules"?: any[] | RuleEnum | number;
    /**
     * Disallow synchronous methods
     */
    "no-sync"?: any[] | RuleEnum | number;
    /**
     * Enforce line breaks after opening and before closing array brackets
     */
    "array-bracket-newline"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing inside array brackets
     */
    "array-bracket-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce line breaks after each array element
     */
    "array-element-newline"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing inside single-line blocks
     */
    "block-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent brace style for blocks
     */
    "brace-style"?: any[] | RuleEnum | number;
    /**
     * Enforce camelcase naming convention
     */
    camelcase?: any[] | RuleEnum | number;
    /**
     * Enforce or disallow capitalization of the first letter of a comment
     */
    "capitalized-comments"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing before and after commas
     */
    "comma-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent comma style
     */
    "comma-style"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing inside computed property brackets
     */
    "computed-property-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent naming when capturing the current execution context
     */
    "consistent-this"?: any[] | RuleEnum | number;
    /**
     * Enforce at least one newline at the end of files
     */
    "eol-last"?: any[] | RuleEnum | number;
    /**
     * Require or disallow spacing between function identifiers and their invocations
     */
    "func-call-spacing"?: any[] | RuleEnum | number;
    /**
     * Require function names to match the name of the variable or property to which they are
     * assigned
     */
    "func-name-matching"?: any[] | RuleEnum | number;
    /**
     * Require or disallow named function expressions
     */
    "func-names"?: any[] | RuleEnum | number;
    /**
     * Enforce the consistent use of either function declarations or expressions
     */
    "func-style"?: any[] | RuleEnum | number;
    /**
     * Enforce line breaks between arguments of a function call
     */
    "function-call-argument-newline"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent line breaks inside function parentheses
     */
    "function-paren-newline"?: any[] | RuleEnum | number;
    /**
     * Disallow specified identifiers
     */
    "id-blacklist"?: any[] | RuleEnum | number;
    /**
     * Enforce minimum and maximum identifier lengths
     */
    "id-length"?: any[] | RuleEnum | number;
    /**
     * Require identifiers to match a specified regular expression
     */
    "id-match"?: any[] | RuleEnum | number;
    /**
     * Enforce the location of arrow function bodies
     */
    "implicit-arrow-linebreak"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent indentation
     */
    indent?: any[] | RuleEnum | number;
    /**
     * Enforce consistent indentation (legacy, deprecated)
     */
    "indent-legacy"?: any[] | RuleEnum | number;
    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes
     */
    "jsx-quotes"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing between keys and values in object literal properties
     */
    "key-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing before and after keywords
     */
    "keyword-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce position of line comments
     */
    "line-comment-position"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent linebreak style
     */
    "linebreak-style"?: any[] | RuleEnum | number;
    /**
     * Require empty lines around comments
     */
    "lines-around-comment"?: any[] | RuleEnum | number;
    /**
     * Require or disallow newlines around directives
     */
    "lines-around-directive"?: any[] | RuleEnum | number;
    /**
     * Require or disallow an empty line between class members
     */
    "lines-between-class-members"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum depth that blocks can be nested
     */
    "max-depth"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum line length
     */
    "max-len"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum number of lines per file
     */
    "max-lines"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum depth that callbacks can be nested
     */
    "max-nested-callbacks"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum number of parameters in function definitions
     */
    "max-params"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum number of statements allowed in function blocks
     */
    "max-statements"?: any[] | RuleEnum | number;
    /**
     * Enforce a maximum number of statements allowed per line
     */
    "max-statements-per-line"?: any[] | RuleEnum | number;
    /**
     * Enforce a particular style for multiline comments
     */
    "multiline-comment-style"?: any[] | RuleEnum | number;
    /**
     * Enforce newlines between operands of ternary expressions
     */
    "multiline-ternary"?: any[] | RuleEnum | number;
    /**
     * Require constructor function names to begin with a capital letter
     */
    "new-cap"?: any[] | RuleEnum | number;
    /**
     * Require parentheses when invoking a constructor with no arguments
     */
    "new-parens"?: any[] | RuleEnum | number;
    /**
     * Require or disallow an empty line after var declarations
     */
    "newline-after-var"?: any[] | RuleEnum | number;
    /**
     * Require an empty line before return statements
     */
    "newline-before-return"?: any[] | RuleEnum | number;
    /**
     * Require a newline after each call in a method chain
     */
    "newline-per-chained-call"?: any[] | RuleEnum | number;
    /**
     * Disallow Array constructors
     */
    "no-array-constructor"?: any[] | RuleEnum | number;
    /**
     * Disallow bitwise operators
     */
    "no-bitwise"?: any[] | RuleEnum | number;
    /**
     * Disallow continue statements
     */
    "no-continue"?: any[] | RuleEnum | number;
    /**
     * Disallow inline comments after code
     */
    "no-inline-comments"?: any[] | RuleEnum | number;
    /**
     * Disallow if statements as the only statement in else blocks
     */
    "no-lonely-if"?: any[] | RuleEnum | number;
    /**
     * Disallow mixed binary operators
     */
    "no-mixed-operators"?: any[] | RuleEnum | number;
    /**
     * Disallow mixed spaces and tabs for indentation
     */
    "no-mixed-spaces-and-tabs"?: any[] | RuleEnum | number;
    /**
     * Disallow use of chained assignment expressions
     */
    "no-multi-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow multiple empty lines
     */
    "no-multiple-empty-lines"?: any[] | RuleEnum | number;
    /**
     * Disallow negated conditions
     */
    "no-negated-condition"?: any[] | RuleEnum | number;
    /**
     * Disallow nested ternary expressions
     */
    "no-nested-ternary"?: any[] | RuleEnum | number;
    /**
     * Disallow Object constructors
     */
    "no-new-object"?: any[] | RuleEnum | number;
    /**
     * Disallow the unary operators ++ and --
     */
    "no-plusplus"?: any[] | RuleEnum | number;
    /**
     * Disallow specified syntax
     */
    "no-restricted-syntax"?: any[] | RuleEnum | number;
    "no-spaced-func"?:       any[] | RuleEnum | number;
    /**
     * Disallow tabs in file
     */
    "no-tabs"?: any[] | RuleEnum | number;
    /**
     * Disallow ternary operators
     */
    "no-ternary"?: any[] | RuleEnum | number;
    /**
     * Disallow trailing whitespace at the end of lines
     */
    "no-trailing-spaces"?: any[] | RuleEnum | number;
    /**
     * Disallow dangling underscores in identifiers
     */
    "no-underscore-dangle"?: any[] | RuleEnum | number;
    /**
     * Disallow ternary operators when simpler alternatives exist
     */
    "no-unneeded-ternary"?: any[] | RuleEnum | number;
    /**
     * Disallow whitespace before properties
     */
    "no-whitespace-before-property"?: any[] | RuleEnum | number;
    /**
     * Enforce the location of single-line statements
     */
    "nonblock-statement-body-position"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent line breaks inside braces
     */
    "object-curly-newline"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing inside braces
     */
    "object-curly-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce placing object properties on separate lines
     */
    "object-property-newline"?: any[] | RuleEnum | number;
    /**
     * Require or disallow method and property shorthand syntax for object literals
     */
    "object-shorthand"?: any[] | RuleEnum | number;
    /**
     * Enforce variables to be declared either together or separately in functions
     */
    "one-var"?: any[] | RuleEnum | number;
    /**
     * Require or disallow newlines around var declarations
     */
    "one-var-declaration-per-line"?: any[] | RuleEnum | number;
    /**
     * Require or disallow assignment operator shorthand where possible
     */
    "operator-assignment"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent linebreak style for operators
     */
    "operator-linebreak"?: any[] | RuleEnum | number;
    /**
     * Require or disallow padding within blocks
     */
    "padded-blocks"?: any[] | RuleEnum | number;
    /**
     * Require or disallow padding lines between statements
     */
    "padding-line-between-statements"?: any[] | RuleEnum | number;
    /**
     * Require quotes around object literal property names
     */
    "quote-props"?: any[] | RuleEnum | number;
    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     */
    quotes?: any[] | RuleEnum | number;
    /**
     * Require JSDoc comments
     */
    "require-jsdoc"?: any[] | RuleEnum | number;
    /**
     * Require or disallow semicolons instead of ASI
     */
    semi?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing before and after semicolons
     */
    "semi-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce location of semicolons
     */
    "semi-style"?: any[] | RuleEnum | number;
    /**
     * Requires object keys to be sorted
     */
    "sort-keys"?: any[] | RuleEnum | number;
    /**
     * Require variables within the same declaration block to be sorted
     */
    "sort-vars"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing before blocks
     */
    "space-before-blocks"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing before function definition opening parenthesis
     */
    "space-before-function-paren"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing inside parentheses
     */
    "space-in-parens"?: any[] | RuleEnum | number;
    /**
     * Require spacing around operators
     */
    "space-infix-ops"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing before or after unary operators
     */
    "space-unary-ops"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing after the // or /* in a comment
     */
    "spaced-comment"?: any[] | RuleEnum | number;
    /**
     * Enforce spacing around colons of switch statements
     */
    "switch-colon-spacing"?: any[] | RuleEnum | number;
    /**
     * Require or disallow spacing between template tags and their literals
     */
    "template-tag-spacing"?: any[] | RuleEnum | number;
    /**
     * Require or disallow Unicode byte order mark (BOM)
     */
    "unicode-bom"?: any[] | RuleEnum | number;
    /**
     * Require parenthesis around regex literals
     */
    "wrap-regex"?: any[] | RuleEnum | number;
    /**
     * Require braces around arrow function bodies
     */
    "arrow-body-style"?: any[] | RuleEnum | number;
    /**
     * Require parentheses around arrow function arguments
     */
    "arrow-parens"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing before and after the arrow in arrow functions
     */
    "arrow-spacing"?: any[] | RuleEnum | number;
    /**
     * Require super() calls in constructors
     */
    "constructor-super"?: any[] | RuleEnum | number;
    /**
     * Enforce consistent spacing around * operators in generator functions
     */
    "generator-star-spacing"?: any[] | RuleEnum | number;
    /**
     * Disallow reassigning class members
     */
    "no-class-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow arrow functions where they could be confused with comparisons
     */
    "no-confusing-arrow"?: any[] | RuleEnum | number;
    /**
     * Disallow reassigning const variables
     */
    "no-const-assign"?: any[] | RuleEnum | number;
    /**
     * Disallow duplicate class members
     */
    "no-dupe-class-members"?: any[] | RuleEnum | number;
    /**
     * Disallow duplicate module imports
     */
    "no-duplicate-imports"?: any[] | RuleEnum | number;
    /**
     * Disallow new operators with the Symbol object
     */
    "no-new-symbol"?: any[] | RuleEnum | number;
    /**
     * Disallow specified modules when loaded by import
     */
    "no-restricted-imports"?: any[] | RuleEnum | number;
    /**
     * Disallow this/super before calling super() in constructors
     */
    "no-this-before-super"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary computed property keys in object literals
     */
    "no-useless-computed-key"?: any[] | RuleEnum | number;
    /**
     * Disallow unnecessary constructors
     */
    "no-useless-constructor"?: any[] | RuleEnum | number;
    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     */
    "no-useless-rename"?: any[] | RuleEnum | number;
    /**
     * Require let or const instead of var
     */
    "no-var"?: any[] | RuleEnum | number;
    /**
     * Require arrow functions as callbacks
     */
    "prefer-arrow-callback"?: any[] | RuleEnum | number;
    /**
     * Require const declarations for variables that are never reassigned after declared
     */
    "prefer-const"?: any[] | RuleEnum | number;
    /**
     * Require destructuring from arrays and/or objects
     */
    "prefer-destructuring"?: any[] | RuleEnum | number;
    /**
     * Disallow parseInt() in favor of binary, octal, and hexadecimal literals
     */
    "prefer-numeric-literals"?: any[] | RuleEnum | number;
    /**
     * Require Reflect methods where applicable
     */
    "prefer-reflect"?: any[] | RuleEnum | number;
    /**
     * Require rest parameters instead of arguments
     */
    "prefer-rest-params"?: any[] | RuleEnum | number;
    /**
     * Require spread operators instead of .apply()
     */
    "prefer-spread"?: any[] | RuleEnum | number;
    /**
     * Require template literals instead of string concatenation
     */
    "prefer-template"?: any[] | RuleEnum | number;
    /**
     * Require generator functions to contain yield
     */
    "require-yield"?: any[] | RuleEnum | number;
    /**
     * Enforce spacing between rest and spread operators and their expressions
     */
    "rest-spread-spacing"?: any[] | RuleEnum | number;
    /**
     * Enforce sorted import declarations within modules
     */
    "sort-imports"?: any[] | RuleEnum | number;
    /**
     * Require symbol descriptions
     */
    "symbol-description"?: any[] | RuleEnum | number;
    /**
     * Require or disallow spacing around embedded expressions of template strings
     */
    "template-curly-spacing"?: any[] | RuleEnum | number;
    /**
     * Require or disallow spacing around the * in yield* expressions
     */
    "yield-star-spacing"?: any[] | RuleEnum | number;
    [property: string]: any;
}

/**
 * ESLint rule
 *
 * "off" - turns the rule off
 * "warn" - turn the rule on as a warning (doesn't affect exit code)
 * "error" - turn the rule on as an error (exit code is 1 when triggered)
 */
export enum RuleEnum {
    Error = "error",
    Off = "off",
    Warn = "warn",
}

export interface PurpleEsnext {
    browser?: string;
    main?:    string;
    [property: string]: string;
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface PackageExportsEntryPackageExportsEntryObject {
    /**
     * The module path that is resolved when no other export type matches.
     */
    default?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this specifier is imported as an ECMAScript module
     * using an `import` declaration or the dynamic `import(...)` function.
     */
    import?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this environment is Node.js.
     */
    node?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this specifier is imported as a CommonJS module
     * using the `require(...)` function.
     */
    require?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved for TypeScript types when this specifier is imported.
     * Should be listed before other conditions.
     */
    types?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface PurplePackageExportsEntryObject {
    /**
     * The module path that is resolved when the module specifier matches "name", shadows the
     * "main" field.
     */
    "."?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when no other export type matches.
     */
    default?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this specifier is imported as an ECMAScript module
     * using an `import` declaration or the dynamic `import(...)` function.
     */
    import?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this environment is Node.js.
     */
    node?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this specifier is imported as a CommonJS module
     * using the `require(...)` function.
     */
    require?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved for TypeScript types when this specifier is imported.
     * Should be listed before other conditions.
     */
    types?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
}

/**
 * Used to inform about ways to help fund development of the package.
 */
export interface FundingWay {
    /**
     * The type of funding or the platform through which funding can be provided, e.g. patreon,
     * opencollective, tidelift or github.
     */
    type?: string;
    url:   string;
}

export interface Jscpd {
    /**
     * use absolute paths in reports
     */
    absolute?: boolean;
    /**
     * get information about authors and dates of duplicated blocks from Git
     */
    blame?: boolean;
    /**
     * exit code to use when at least one duplicate code block is detected but threshold is not
     * exceeded
     */
    exitCode?: number;
    /**
     * list of formats for which to detect duplication (default: all); see
     * https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
     */
    format?: Format[];
    /**
     * custom mapping from formats to file extensions (default:
     * https://github.com/kucherenko/jscpd/blob/master/packages/tokenizer/src/formats.ts); see
     * https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
     */
    formatsExts?: { [key: string]: string[] };
    /**
     * ignore all files from .gitignore file
     */
    gitignore?: boolean;
    /**
     * glob pattern for files that should be excluded from duplicate detection
     */
    ignore?: string[];
    /**
     * ignore case of symbols in code (experimental)
     */
    ignoreCase?: boolean;
    /**
     * ignore code blocks matching these regular expressions
     */
    ignorePattern?: string[];
    /**
     * maximum size of source file in lines to check for duplication
     */
    maxLines?: number;
    /**
     * maximum size of source file in bytes to check for duplication (e.g.,: 1kb, 1mb, 120kb)
     */
    maxSize?: number | string;
    /**
     * minimum size of code block in lines to check for duplication
     */
    minLines?: number;
    /**
     * minimum size of code block in tokens to check for duplication
     */
    minTokens?: number;
    /**
     * mode of detection quality; see
     * https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
     */
    mode?: Mode;
    /**
     * do not follow symlinks
     */
    noSymLinks?: boolean;
    /**
     * path to directory for non-console reports
     */
    output?: string;
    /**
     * paths that should be included in duplicate detection (default: [process.cwd()])
     */
    path?: string[];
    /**
     * glob pattern for files that should be included in duplicate detection (e.g., **/*.txt);
     * only used to filter directories configured via path option
     */
    pattern?: string;
    /**
     * a list of reporters to use to output information about duplication; see
     * https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
     */
    reporters?:        Reporter[];
    reportersOptions?: ReportersOptions;
    /**
     * do not write duplicate detection progress and result to console
     */
    silent?: boolean;
    /**
     * skip duplicates within folders; just detect cross-folder duplicates
     */
    skipLocal?: boolean;
    /**
     * store used to collect information about code (default: in-memory store); install
     * @jscpd/leveldb-store and use leveldb for big repositories
     */
    store?: Store;
    /**
     * maximum allowed duplicate lines expressed as a percentage; exit with error and exit code
     * 1 when threshold exceeded
     */
    threshold?: number;
    /**
     * show full information during duplicate detection
     */
    verbose?: boolean;
}

export enum Format {
    APL = "apl",
    Abap = "abap",
    Actionscript = "actionscript",
    Ada = "ada",
    Apacheconf = "apacheconf",
    Applescript = "applescript",
    Arduino = "arduino",
    Arff = "arff",
    Asciidoc = "asciidoc",
    Asm6502 = "asm6502",
    Aspnet = "aspnet",
    Autohotkey = "autohotkey",
    Autoit = "autoit",
    Bash = "bash",
    Basic = "basic",
    Batch = "batch",
    Bison = "bison",
    Brainfuck = "brainfuck",
    Bro = "bro",
    C = "c",
    CHeader = "c-header",
    CSP = "csp",
    CSS = "css",
    CSSExtras = "css-extras",
    Clike = "clike",
    Clojure = "clojure",
    Coffeescript = "coffeescript",
    Comments = "comments",
    Cpp = "cpp",
    CppHeader = "cpp-header",
    Crystal = "crystal",
    Csharp = "csharp",
    D = "d",
    Dart = "dart",
    Diff = "diff",
    Django = "django",
    Docker = "docker",
    Eiffel = "eiffel",
    Elixir = "elixir",
    Elm = "elm",
    Erb = "erb",
    Erlang = "erlang",
    Flow = "flow",
    Fortran = "fortran",
    Fsharp = "fsharp",
    Gedcom = "gedcom",
    Gherkin = "gherkin",
    Git = "git",
    Glsl = "glsl",
    Go = "go",
    Graphql = "graphql",
    Groovy = "groovy",
    HTTP = "http",
    Haml = "haml",
    Handlebars = "handlebars",
    Haskell = "haskell",
    Haxe = "haxe",
    Hpkp = "hpkp",
    Hsts = "hsts",
    Ichigojam = "ichigojam",
    Icon = "icon",
    Inform7 = "inform7",
    Ini = "ini",
    Io = "io",
    J = "j",
    JSON = "json",
    Java = "java",
    Javascript = "javascript",
    Jolie = "jolie",
    Jsx = "jsx",
    Julia = "julia",
    Keymap = "keymap",
    Kotlin = "kotlin",
    LISP = "lisp",
    Latex = "latex",
    Less = "less",
    Liquid = "liquid",
    Livescript = "livescript",
    Lolcode = "lolcode",
    Lua = "lua",
    Makefile = "makefile",
    Markdown = "markdown",
    Markup = "markup",
    Matlab = "matlab",
    Mel = "mel",
    Mizar = "mizar",
    Monkey = "monkey",
    N4JS = "n4js",
    NASM = "nasm",
    NIM = "nim",
    Nginx = "nginx",
    Nix = "nix",
    Nsis = "nsis",
    Objectivec = "objectivec",
    Ocaml = "ocaml",
    Opencl = "opencl",
    Oz = "oz",
    PERL = "perl",
    PHP = "php",
    Parigp = "parigp",
    Pascal = "pascal",
    Plsql = "plsql",
    Powershell = "powershell",
    Processing = "processing",
    Prolog = "prolog",
    Properties = "properties",
    Protobuf = "protobuf",
    Pug = "pug",
    Puppet = "puppet",
    Pure = "pure",
    Python = "python",
    Q = "q",
    Qore = "qore",
    R = "r",
    REST = "rest",
    RIP = "rip",
    Reason = "reason",
    Renpy = "renpy",
    Roboconf = "roboconf",
    Ruby = "ruby",
    Rust = "rust",
    SAS = "sas",
    SQL = "sql",
    Sass = "sass",
    Scala = "scala",
    Scheme = "scheme",
    Scss = "scss",
    Smalltalk = "smalltalk",
    Smarty = "smarty",
    Soy = "soy",
    Stylus = "stylus",
    Swift = "swift",
    Tap = "tap",
    Tcl = "tcl",
    Textile = "textile",
    Tsx = "tsx",
    Tt2 = "tt2",
    Twig = "twig",
    Typescript = "typescript",
    URL = "url",
    Vbnet = "vbnet",
    Velocity = "velocity",
    Verilog = "verilog",
    Vhdl = "vhdl",
    Vim = "vim",
    VisualBasic = "visual-basic",
    WASM = "wasm",
    Wiki = "wiki",
    Xeora = "xeora",
    Xojo = "xojo",
    Xquery = "xquery",
    YAML = "yaml",
}

/**
 * mode of detection quality; see
 * https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
 */
export enum Mode {
    Mild = "mild",
    Strict = "strict",
    Weak = "weak",
}

export enum Reporter {
    CSV = "csv",
    Console = "console",
    ConsoleFull = "consoleFull",
    HTML = "html",
    JSON = "json",
    Markdown = "markdown",
    Silent = "silent",
    Threshold = "threshold",
    XML = "xml",
    Xcode = "xcode",
}

export interface ReportersOptions {
    badge?: Badge;
}

export interface Badge {
    /**
     * badge color (name or RGB code without #, default: green if beneath threshold, red if
     * above threshold, grey if threshold not set); see
     * https://github.com/badgen/badgen/blob/master/src/color-presets.ts
     */
    color?: string;
    /**
     * URL for icon to display in front of badge subject text (e.g.,
     * data:image/svg+xml;base64,...)
     */
    icon?: string;
    /**
     * SVG width of icon to display in front of badge subject text; set this if icon is not
     * square
     */
    iconWidth?: number;
    /**
     * badge subject text (URL-encoding needed for spaces or special characters)
     */
    label?: string;
    /**
     * badge label color (name or RGB code without #); see
     * https://github.com/badgen/badgen/blob/master/src/color-presets.ts
     */
    labelColor?: string;
    /**
     * output path for duplication level badge (default: path.join(output, 'jscpd-badge.svg'))
     */
    path?: string;
    /**
     * size of badge relative to default of 1
     */
    scale?: number;
    /**
     * badge value text (URL-encoding needed for spaces or special characters, default:
     * duplication %)
     */
    status?: string;
    /**
     * badge look: flat or classic
     */
    style?: Style;
}

/**
 * badge look: flat or classic
 */
export enum Style {
    Classic = "classic",
    Flat = "flat",
}

/**
 * store used to collect information about code (default: in-memory store); install
 * @jscpd/leveldb-store and use leveldb for big repositories
 */
export enum Store {
    Leveldb = "leveldb",
    Redis = "redis",
}

export interface JSONSchemaForNPMPackageJSONFiles {
    author?: PersonObject | string;
    ava?:    AVAConfigSchema;
    bin?:    { [key: string]: string } | string;
    /**
     * The url to your project's issue tracker and / or the email address to which issues should
     * be reported. These are helpful for people who encounter issues with your package.
     */
    bugs?: FluffyBugs | string;
    /**
     * Array of package names that will be bundled when publishing the package.
     */
    bundledDependencies?: string[] | boolean;
    /**
     * DEPRECATED: This field is honored, but "bundledDependencies" is the correct field name.
     */
    bundleDependencies?: string[] | boolean;
    /**
     * A 'config' hash can be used to set configuration parameters used in package scripts that
     * persist across upgrades.
     */
    config?: { [key: string]: any };
    /**
     * A list of people who contributed to this package.
     */
    contributors?: Array<PersonObject | string>;
    /**
     * Specify that your code only runs on certain cpu architectures.
     */
    cpu?:          string[];
    dependencies?: { [key: string]: string };
    /**
     * This helps people discover your package, as it's listed in 'npm search'.
     */
    description?:     string;
    devDependencies?: { [key: string]: string };
    directories?:     JSONSchemaForNPMPackageJSONFilesDirectories;
    dist?:            JSONSchemaForNPMPackageJSONFilesDist;
    engines?:         JSONSchemaForNPMPackageJSONFilesEngines;
    engineStrict?:    boolean;
    eslintConfig?:    JSONSchemaForESLintConfigurationFiles;
    /**
     * A module ID with untranspiled code that is the primary entry point to your program.
     */
    esnext?: FluffyEsnext | string;
    /**
     * The "exports" field is used to restrict external access to non-exported module files,
     * also enables a module to import itself using "name".
     */
    exports?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | FluffyPackageExportsEntryObject | null | string;
    /**
     * The 'files' field is an array of files to include in your project. If you name a folder
     * in the array, then it will also include the files inside that folder.
     */
    files?:   string[];
    funding?: Array<FundingWay | string> | FundingWay | string;
    /**
     * The url to the project homepage.
     */
    homepage?: string;
    jscpd?:    Jscpd;
    jspm?:     JSONSchemaForNPMPackageJSONFiles;
    /**
     * This helps people discover your package as it's listed in 'npm search'.
     */
    keywords?: string[];
    /**
     * You should specify a license for your package so that people know how they are permitted
     * to use it, and any restrictions you're placing on it.
     */
    license?: string;
    /**
     * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or {
     * "license": "(MIT OR Apache-2.0)" } see:
     * 'https://docs.npmjs.com/files/package.json#license'.
     */
    licenses?: JSONSchemaForNPMPackageJSONFilesLicense[];
    /**
     * The main field is a module ID that is the primary entry point to your program.
     */
    main?: string;
    /**
     * A list of people who maintains this package.
     */
    maintainers?: Array<PersonObject | string>;
    /**
     * Specify either a single file or an array of filenames to put in place for the man program
     * to find.
     */
    man?: string[] | string;
    /**
     * An ECMAScript module ID that is the primary entry point to your program.
     */
    module?: string;
    /**
     * The name of the package.
     */
    name?:                 string;
    optionalDependencies?: { [key: string]: string };
    /**
     * Specify which operating systems your module will run on.
     */
    os?: string[];
    /**
     * Overrides is used to support selective version overrides using npm, which lets you define
     * custom package versions or ranges inside your dependencies. For yarn, use resolutions
     * instead. See: https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
     */
    overrides?: { [key: string]: any };
    /**
     * Defines which package manager is expected to be used when working on the current project.
     * This field is currently experimental and needs to be opted-in; see
     * https://nodejs.org/api/corepack.html
     */
    packageManager?:   string;
    peerDependencies?: { [key: string]: string };
    /**
     * When a user installs your package, warnings are emitted if packages specified in
     * "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to
     * provide more information on how your peer dependencies are utilized. Most commonly, it
     * allows peer dependencies to be marked as optional. Metadata for this field is specified
     * with a simple hash of the package name to a metadata object.
     */
    peerDependenciesMeta?: { [key: string]: JSONSchemaForNPMPackageJSONFilesPeerDependenciesMeta };
    /**
     * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is
     * purely there for informational purposes. It is now recommended that you install any
     * binaries as local devDependencies wherever possible.
     */
    preferGlobal?: boolean;
    prettier?:     SchemaForPrettierrcObject | string;
    /**
     * If set to true, then npm will refuse to publish it.
     */
    private?:       boolean | PrivateEnum;
    publishConfig?: JSONSchemaForNPMPackageJSONFilesPublishConfig;
    readme?:        string;
    release?:       SemanticReleaseSchema;
    /**
     * Specify the place where your code lives. This is helpful for people who want to
     * contribute.
     */
    repository?: PurpleRepository | string;
    /**
     * Resolutions is used to support selective version resolutions using yarn, which lets you
     * define custom package versions or ranges inside your dependencies. For npm, use overrides
     * instead. See: https://classic.yarnpkg.com/en/docs/selective-version-resolutions
     */
    resolutions?: { [key: string]: any };
    /**
     * The 'scripts' member is an object hash of script commands that are run at various times
     * in the lifecycle of your package. The key is the lifecycle event, and the value is the
     * command to run at that point.
     */
    scripts?:   JSONSchemaForNPMPackageJSONFilesScripts;
    stylelint?: JSONSchemaForTheStylelintConfigurationFiles;
    /**
     * When set to "module", the type field allows a package to specify all .js files within are
     * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
     * treated as CommonJS.
     */
    type?: Type;
    /**
     * Set the types property to point to your bundled declaration file.
     */
    types?: string;
    /**
     * The "typesVersions" field is used since TypeScript 3.1 to support features that were only
     * made available in newer TypeScript versions.
     */
    typesVersions?: { [key: string]: JSONSchemaForNPMPackageJSONFilesTypesVersion };
    /**
     * Note that the "typings" field is synonymous with "types", and could be used as well.
     */
    typings?: string;
    /**
     * Version must be parseable by node-semver, which is bundled with npm as a dependency.
     */
    version?: string;
    /**
     * Allows packages within a directory to depend on one another using direct linking of local
     * files. Additionally, dependencies within a workspace are hoisted to the workspace root
     * when possible to reduce duplication. Note: It's also a good idea to set "private" to true
     * when using this feature.
     */
    workspaces?: string[] | PurpleWorkspaces;
    [property: string]: any;
}

export interface FluffyBugs {
    /**
     * The email address to which issues should be reported.
     */
    email?: string;
    /**
     * The url to your project's issue tracker.
     */
    url?: string;
    [property: string]: any;
}

export interface JSONSchemaForNPMPackageJSONFilesDirectories {
    /**
     * If you specify a 'bin' directory, then all the files in that folder will be used as the
     * 'bin' hash.
     */
    bin?: string;
    /**
     * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
     */
    doc?: string;
    /**
     * Put example scripts in here. Someday, it might be exposed in some clever way.
     */
    example?: string;
    /**
     * Tell people where the bulk of your library is. Nothing special is done with the lib
     * folder in any way, but it's useful meta info.
     */
    lib?: string;
    /**
     * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
     */
    man?:  string;
    test?: string;
    [property: string]: any;
}

export interface JSONSchemaForNPMPackageJSONFilesDist {
    shasum?:  string;
    tarball?: string;
    [property: string]: any;
}

export interface JSONSchemaForNPMPackageJSONFilesEngines {
    node?: string;
    [property: string]: string;
}

export interface FluffyEsnext {
    browser?: string;
    main?:    string;
    [property: string]: string;
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface FluffyPackageExportsEntryObject {
    /**
     * The module path that is resolved when the module specifier matches "name", shadows the
     * "main" field.
     */
    "."?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when no other export type matches.
     */
    default?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this specifier is imported as an ECMAScript module
     * using an `import` declaration or the dynamic `import(...)` function.
     */
    import?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this environment is Node.js.
     */
    node?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved when this specifier is imported as a CommonJS module
     * using the `require(...)` function.
     */
    require?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
    /**
     * The module path that is resolved for TypeScript types when this specifier is imported.
     * Should be listed before other conditions.
     */
    types?: Array<PackageExportsEntryPackageExportsEntryObject | null | string> | PackageExportsEntryPackageExportsEntryObject | null | string;
}

export interface JSONSchemaForNPMPackageJSONFilesLicense {
    type?: string;
    url?:  string;
    [property: string]: any;
}

export interface JSONSchemaForNPMPackageJSONFilesPeerDependenciesMeta {
    /**
     * Specifies that this peer dependency is optional and should not be installed automatically.
     */
    optional?: boolean;
    [property: string]: any;
}

export interface SchemaForPrettierrcObject {
    /**
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens?: ArrowParens;
    /**
     * Put > of opening tags on the last line instead of on a new line.
     */
    bracketSameLine?: boolean;
    /**
     * Print spaces between brackets.
     */
    bracketSpacing?: boolean;
    /**
     * Print (to stderr) where a cursor at the given position would move to after formatting.
     * This option cannot be used with --range-start and --range-end.
     */
    cursorOffset?: number;
    /**
     * Whether parse the .editorconfig file in your project and convert its properties to the
     * corresponding Prettier configuration. This configuration will be overridden by
     * .prettierrc, etc.
     */
    editorconfig?: boolean;
    /**
     * Control how Prettier formats quoted code embedded in the file.
     */
    embeddedLanguageFormatting?: EmbeddedLanguageFormatting;
    /**
     * Which end of line characters to apply.
     */
    endOfLine?: EndOfLine;
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    filepath?: string;
    /**
     * How to handle whitespaces in HTML.
     */
    htmlWhitespaceSensitivity?: HTMLWhitespaceSensitivity;
    /**
     * Insert @format pragma into file's first docblock comment.
     */
    insertPragma?: boolean;
    /**
     * Use single quotes in JSX.
     */
    jsxSingleQuote?: boolean;
    /**
     * Which parser to use.
     */
    parser?: string;
    /**
     * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
     */
    plugins?: string[];
    /**
     * Custom directory that contains prettier plugins in node_modules subdirectory.
     * Overrides default behavior when plugins are searched relatively to the location of
     * Prettier.
     * Multiple values are accepted.
     */
    pluginSearchDirs?: string[] | boolean;
    /**
     * The line length where Prettier will try wrap.
     */
    printWidth?: number;
    /**
     * How to wrap prose.
     */
    proseWrap?: ProseWrap;
    /**
     * Change when properties in objects are quoted.
     */
    quoteProps?: QuoteProps;
    /**
     * Format code ending at a given character offset (exclusive).
     * The range will extend forwards to the end of the selected statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeEnd?: number;
    /**
     * Format code starting at a given character offset.
     * The range will extend backwards to the start of the first line containing the selected
     * statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeStart?: number;
    /**
     * Require either '@prettier' or '@format' to be present in the file's first docblock
     * comment
     * in order for it to be formatted.
     */
    requirePragma?: boolean;
    /**
     * Print semicolons.
     */
    semi?: boolean;
    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     */
    singleAttributePerLine?: boolean;
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote?: boolean;
    /**
     * Number of spaces per indentation level.
     */
    tabWidth?: number;
    /**
     * Print trailing commas wherever possible when multi-line.
     */
    trailingComma?: TrailingComma;
    /**
     * Indent with tabs instead of spaces.
     */
    useTabs?: boolean;
    /**
     * Indent script and style tags in Vue files.
     */
    vueIndentScriptAndStyle?: boolean;
    /**
     * Provide a list of patterns to override prettier configuration.
     */
    overrides?: SchemaForPrettierrcOverride[];
    [property: string]: any;
}

/**
 * Include parentheses around a sole arrow function parameter.
 *
 * Always include parens. Example: `(x) => x`
 *
 * Omit parens when possible. Example: `x => x`
 */
export enum ArrowParens {
    Always = "always",
    Avoid = "avoid",
}

/**
 * Control how Prettier formats quoted code embedded in the file.
 *
 * Format embedded code if Prettier can automatically identify it.
 *
 * Never automatically format embedded code.
 */
export enum EmbeddedLanguageFormatting {
    Auto = "auto",
    Off = "off",
}

/**
 * Which end of line characters to apply.
 *
 * Line Feed only (\n), common on Linux and macOS as well as inside git repos
 *
 * Carriage Return + Line Feed characters (\r\n), common on Windows
 *
 * Carriage Return character only (\r), used very rarely
 *
 * Maintain existing
 * (mixed values within one file are normalised by looking at what's used after the first
 * line)
 */
export enum EndOfLine {
    Auto = "auto",
    CR = "cr",
    CRLF = "crlf",
    LF = "lf",
}

/**
 * How to handle whitespaces in HTML.
 *
 * Respect the default value of CSS display property.
 *
 * Whitespaces are considered sensitive.
 *
 * Whitespaces are considered insensitive.
 */
export enum HTMLWhitespaceSensitivity {
    CSS = "css",
    Ignore = "ignore",
    Strict = "strict",
}

export interface SchemaForPrettierrcOverride {
    /**
     * Exclude these files from this override.
     */
    excludeFiles?: string[] | string;
    /**
     * Include these files in this override.
     */
    files: string[] | string;
    /**
     * The options to apply for this override.
     */
    options?: Options;
}

/**
 * The options to apply for this override.
 */
export interface Options {
    /**
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens?: ArrowParens;
    /**
     * Put > of opening tags on the last line instead of on a new line.
     */
    bracketSameLine?: boolean;
    /**
     * Print spaces between brackets.
     */
    bracketSpacing?: boolean;
    /**
     * Print (to stderr) where a cursor at the given position would move to after formatting.
     * This option cannot be used with --range-start and --range-end.
     */
    cursorOffset?: number;
    /**
     * Whether parse the .editorconfig file in your project and convert its properties to the
     * corresponding Prettier configuration. This configuration will be overridden by
     * .prettierrc, etc.
     */
    editorconfig?: boolean;
    /**
     * Control how Prettier formats quoted code embedded in the file.
     */
    embeddedLanguageFormatting?: EmbeddedLanguageFormatting;
    /**
     * Which end of line characters to apply.
     */
    endOfLine?: EndOfLine;
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    filepath?: string;
    /**
     * How to handle whitespaces in HTML.
     */
    htmlWhitespaceSensitivity?: HTMLWhitespaceSensitivity;
    /**
     * Insert @format pragma into file's first docblock comment.
     */
    insertPragma?: boolean;
    /**
     * Use single quotes in JSX.
     */
    jsxSingleQuote?: boolean;
    /**
     * Which parser to use.
     */
    parser?: string;
    /**
     * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
     */
    plugins?: string[];
    /**
     * Custom directory that contains prettier plugins in node_modules subdirectory.
     * Overrides default behavior when plugins are searched relatively to the location of
     * Prettier.
     * Multiple values are accepted.
     */
    pluginSearchDirs?: string[] | boolean;
    /**
     * The line length where Prettier will try wrap.
     */
    printWidth?: number;
    /**
     * How to wrap prose.
     */
    proseWrap?: ProseWrap;
    /**
     * Change when properties in objects are quoted.
     */
    quoteProps?: QuoteProps;
    /**
     * Format code ending at a given character offset (exclusive).
     * The range will extend forwards to the end of the selected statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeEnd?: number;
    /**
     * Format code starting at a given character offset.
     * The range will extend backwards to the start of the first line containing the selected
     * statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeStart?: number;
    /**
     * Require either '@prettier' or '@format' to be present in the file's first docblock
     * comment
     * in order for it to be formatted.
     */
    requirePragma?: boolean;
    /**
     * Print semicolons.
     */
    semi?: boolean;
    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     */
    singleAttributePerLine?: boolean;
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote?: boolean;
    /**
     * Number of spaces per indentation level.
     */
    tabWidth?: number;
    /**
     * Print trailing commas wherever possible when multi-line.
     */
    trailingComma?: TrailingComma;
    /**
     * Indent with tabs instead of spaces.
     */
    useTabs?: boolean;
    /**
     * Indent script and style tags in Vue files.
     */
    vueIndentScriptAndStyle?: boolean;
    [property: string]: any;
}

/**
 * How to wrap prose.
 *
 * Wrap prose if it exceeds the print width.
 *
 * Do not wrap prose.
 *
 * Wrap prose as-is.
 */
export enum ProseWrap {
    Always = "always",
    Never = "never",
    Preserve = "preserve",
}

/**
 * Change when properties in objects are quoted.
 *
 * Only add quotes around object properties where required.
 *
 * If at least one property in an object requires quotes, quote all properties.
 *
 * Respect the input use of quotes in object properties.
 */
export enum QuoteProps {
    AsNeeded = "as-needed",
    Consistent = "consistent",
    Preserve = "preserve",
}

/**
 * Print trailing commas wherever possible when multi-line.
 *
 * Trailing commas where valid in ES5 (objects, arrays, etc.)
 *
 * No trailing commas.
 *
 * Trailing commas wherever possible (including function arguments).
 */
export enum TrailingComma {
    All = "all",
    Es5 = "es5",
    None = "none",
}

export enum PrivateEnum {
    False = "false",
    True = "true",
}

export interface JSONSchemaForNPMPackageJSONFilesPublishConfig {
    access?:   Access;
    registry?: string;
    tag?:      string;
    [property: string]: any;
}

export enum Access {
    Public = "public",
    Restricted = "restricted",
}

export interface SemanticReleaseSchema {
    /**
     * The branches on which releases should happen.
     */
    branches?: Array<BranchObject | string> | BranchObject | string;
    /**
     * Set to false to skip Continuous Integration environment verifications. This allows for
     * making releases from a local machine
     */
    ci?: boolean;
    /**
     * The objective of the dry-run mode is to get a preview of the pending release. Dry-run
     * mode skips the following steps: prepare, publish, success and fail. In addition to this
     * it prints the next version and release notes to the console
     */
    dryRun?: boolean;
    /**
     * List of modules or file paths containing a shareable configuration. If multiple shareable
     * configurations are set, they will be imported in the order defined with each
     * configuration option taking precedence over the options defined in a previous shareable
     * configuration
     */
    extends?: string[] | string;
    /**
     * Define the list of plugins to use. Plugins will run in series, in the order defined
     */
    plugins?: Array<any[] | string>;
    /**
     * The git repository URL
     */
    repositoryUrl?: string;
    /**
     * The Git tag format used by semantic-release to identify releases. The tag name is
     * generated with Lodash template and will be compiled with the version variable.
     */
    tagFormat?: string;
    [property: string]: any;
}

export interface BranchObject {
    channel?:    string;
    name:        string;
    prerelease?: boolean | string;
    range?:      string;
}

export interface PurpleRepository {
    directory?: string;
    type?:      string;
    url?:       string;
    [property: string]: any;
}

/**
 * The 'scripts' member is an object hash of script commands that are run at various times
 * in the lifecycle of your package. The key is the lifecycle event, and the value is the
 * command to run at that point.
 */
export interface JSONSchemaForNPMPackageJSONFilesScripts {
    install?: string;
    /**
     * Run code quality tools, e.g. ESLint, TSLint, etc.
     */
    lint?:        string;
    postinstall?: string;
    /**
     * Run AFTER the tarball has been generated and moved to its final destination.
     */
    postpack?:    string;
    postpublish?: string;
    postrestart?: string;
    poststart?:   string;
    poststop?:    string;
    posttest?:    string;
    /**
     * Run AFTER the package is uninstalled.
     */
    postuninstall?: string;
    /**
     * Run AFTER bump the package version.
     */
    postversion?: string;
    /**
     * Run BEFORE the package is installed.
     */
    preinstall?: string;
    /**
     * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git
     * dependencies).
     */
    prepack?: string;
    /**
     * Run both BEFORE the package is packed and published, and on local npm install without any
     * arguments. This is run AFTER prepublish, but BEFORE prepublishOnly.
     */
    prepare?: string;
    /**
     * Run BEFORE the package is published (Also run on local npm install without any arguments).
     */
    prepublish?: string;
    /**
     * Run BEFORE the package is prepared and packed, ONLY on npm publish.
     */
    prepublishOnly?: string;
    prerestart?:     string;
    prestart?:       string;
    prestop?:        string;
    pretest?:        string;
    preuninstall?:   string;
    preversion?:     string;
    /**
     * Publishes a package to the registry so that it can be installed by name. See
     * https://docs.npmjs.com/cli/v8/commands/npm-publish
     */
    publish?: string;
    restart?: string;
    /**
     * Start dev server to serve application files
     */
    serve?:     string;
    start?:     string;
    stop?:      string;
    test?:      string;
    uninstall?: string;
    version?:   string;
    [property: string]: string;
}

export interface JSONSchemaForTheStylelintConfigurationFiles {
    /**
     * Specify a custom syntax to use on your code.
     */
    customSyntax?: string;
    /**
     * The default severity level for all rules that do not have a severity specified in their
     * secondary options
     */
    defaultSeverity?: Severity;
    /**
     * Your configuration can extend an existing configuration(s) (whether your own or a
     * third-party config)
     */
    extends?: string[] | string;
    /**
     * Ignore stylelint-disable (e.g. /* stylelint-disable block-no-empty */) comments.
     */
    ignoreDisables?: boolean;
    /**
     * Provide a glob or array of globs to ignore specific files
     */
    ignoreFiles?: string[] | string;
    /**
     * Provide rule and behavior overrides for files that match particular glob patterns.
     */
    overrides?: OverrideObject[];
    /**
     * Plugins are rules or sets of rules built by the community that support methodologies,
     * toolsets, non-standard CSS features, or very specific use cases
     */
    plugins?: string[];
    /**
     * Processors are functions that hook into stylelint's pipeline, modifying code on its way
     * into stylelint and modifying results on their way out
     */
    processors?: Array<string[] | string>;
    /**
     * Report stylelint-disable comments without a description.
     */
    reportDescriptionlessDisables?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Report stylelint-disable comments that don't match rules that are specified in the
     * configuration object.
     */
    reportInvalidScopeDisables?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Report stylelint-disable comments that don't actually match any lints that need to be
     * disabled
     */
    reportNeedlessDisables?: Array<boolean | BooleanRuleObject> | boolean | null;
    rules?:                  AllRules;
    [property: string]: any;
}

/**
 * The default severity level for all rules that do not have a severity specified in their
 * secondary options
 *
 * Message status
 */
export enum Severity {
    Error = "error",
    Warning = "warning",
}

export interface OverrideObject {
    customSyntax?: string;
    files?:        string[];
    rules?:        AllRules;
    [property: string]: any;
}

export interface AllRules {
    /**
     * Specify a blacklist of disallowed at-rules
     */
    "at-rule-blacklist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Require or disallow an empty line before at-rules
     */
    "at-rule-empty-line-before"?: Array<AtRuleEmptyLineBeforeFundingURL | AtRuleEmptyLineBeforeObject> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify lowercase or uppercase for at-rules names
     */
    "at-rule-name-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Require a newline after at-rule names
     */
    "at-rule-name-newline-after"?: Array<AlwaysMultiLineRuleObject | string> | AlwaysMultiLineRuleFundingURL | null;
    /**
     * Require a single space after at-rule names
     */
    "at-rule-name-space-after"?: Array<AtRuleNameSpaceAfterObject | string> | AtRuleNameSpaceAfterFundingURL | null;
    /**
     * Disallow unknown at-rules
     */
    "at-rule-no-unknown"?: Array<boolean | AtRuleNoUnknownObject> | boolean | null;
    /**
     * Disallow vendor prefixes for at-rules
     */
    "at-rule-no-vendor-prefix"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require a newline after the semicolon of at-rules
     */
    "at-rule-semicolon-newline-after"?: Array<AtRuleSemicolonNewlineAfterObject | string> | AtRuleSemicolonNewlineAfterFundingURL | null;
    /**
     * Specify a whitelist of allowed at-rules
     */
    "at-rule-whitelist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Require or disallow an empty line before the closing brace of blocks
     */
    "block-closing-brace-empty-line-before"?: Array<BlockClosingBraceEmptyLineBeforeObject | string> | BlockClosingBraceEmptyLineBeforeFundingURL | null;
    /**
     * Require a newline or disallow whitespace after the closing brace of blocks
     */
    "block-closing-brace-newline-after"?: Array<BlockOpeningBraceNewlineBeforeFundingURL | NewlineSpaceWithIgnoreRuleObject> | NewlineSpaceRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace before the closing brace of blocks
     */
    "block-closing-brace-newline-before"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the closing brace of blocks
     */
    "block-closing-brace-space-after"?: Array<NewlineSpaceRuleObject | string> | NewlineSpaceRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the closing brace of blocks
     */
    "block-closing-brace-space-before"?: Array<NewlineSpaceRuleObject | string> | NewlineSpaceRuleFundingURL | null;
    /**
     * Disallow empty blocks
     */
    "block-no-empty"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow single-line blocks
     */
    "block-no-single-line"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require a newline after the opening brace of blocks
     */
    "block-opening-brace-newline-after"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace before the opening brace of blocks
     */
    "block-opening-brace-newline-before"?: Array<BlockOpeningBraceNewlineBeforeObject | string> | BlockOpeningBraceNewlineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the opening brace of blocks
     */
    "block-opening-brace-space-after"?: Array<NewlineSpaceRuleObject | string> | NewlineSpaceRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the opening brace of blocks
     */
    "block-opening-brace-space-before"?: Array<BlockOpeningBraceNewlineBeforeFundingURL | NewlineSpaceWithIgnoreRuleObject> | NewlineSpaceRuleFundingURL | null;
    /**
     * Specify lowercase or uppercase for hex colors
     */
    "color-hex-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Specify short or long notation for hex colors
     */
    "color-hex-length"?: Array<ColorHexLengthObject | string> | ColorHexLengthFundingURL | null;
    /**
     * Require (where possible) or disallow named colors
     */
    "color-named"?: Array<ColorNamedFundingURL | ColorNamedObject> | ColorNamedFundingURL | null;
    /**
     * Disallow hex colors
     */
    "color-no-hex"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow invalid hex colors
     */
    "color-no-invalid-hex"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require or disallow an empty line before comments
     */
    "comment-empty-line-before"?: Array<AtRuleEmptyLineBeforeFundingURL | CommentEmptyLineBeforeObject> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Disallow empty comments
     */
    "comment-no-empty"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require or disallow whitespace on the inside of comment markers
     */
    "comment-whitespace-inside"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify a blacklist of disallowed words within comments
     */
    "comment-word-blacklist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Specify a pattern for custom media query names
     */
    "custom-media-pattern"?: Array<StringRuleObject | string> | null | string;
    /**
     * Require or disallow an empty line before custom properties
     */
    "custom-property-empty-line-before"?: Array<AtRuleEmptyLineBeforeFundingURL | CustomPropertyEmptyLineBeforeObject> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Disallow custom properties outside of `:root` rules
     */
    "custom-property-no-outside-root"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify a pattern for custom properties
     */
    "custom-property-pattern"?: Array<StringRuleObject | string> | null | string;
    /**
     * Require a single space or disallow whitespace after the bang of declarations
     */
    "declaration-bang-space-after"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the bang of declarations
     */
    "declaration-bang-space-before"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a newline or disallow whitespace after the colon of declarations
     */
    "declaration-colon-newline-after"?: Array<AlwaysMultiLineRuleObject | string> | AlwaysMultiLineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the colon of declarations
     */
    "declaration-colon-space-after"?: Array<DeclarationColonSpaceAfterObject | string> | DeclarationColonSpaceAfterFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the colon of declarations
     */
    "declaration-colon-space-before"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require or disallow an empty line before declarations
     */
    "declaration-empty-line-before"?: Array<AtRuleEmptyLineBeforeFundingURL | DeclarationEmptyLineBeforeObject> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Disallow `!important` within declarations
     */
    "declaration-no-important"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify a blacklist of disallowed property and unit pairs within declarations
     */
    "declaration-property-unit-blacklist"?: ObjectRuleElement[] | { [key: string]: string[] } | null;
    /**
     * Specify a whitelist of allowed property and unit pairs within declarations
     */
    "declaration-property-unit-whitelist"?: ObjectRuleElement[] | { [key: string]: string[] } | null;
    /**
     * Specify a blacklist of disallowed property and value pairs within declarations
     */
    "declaration-property-value-blacklist"?: ObjectRuleElement[] | { [key: string]: string[] } | null;
    /**
     * Specify a whitelist of allowed property and value pairs within declarations
     */
    "declaration-property-value-whitelist"?: ObjectRuleElement[] | { [key: string]: string[] } | null;
    /**
     * Disallow duplicate properties within declaration blocks
     */
    "declaration-block-no-duplicate-properties"?: Array<boolean | DeclarationBlockNoDuplicatePropertyObject> | boolean | null;
    /**
     * Disallow property values that are ignored due to another property value in the same rule
     */
    "declaration-block-no-ignored-properties"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow longhand properties that can be combined into one shorthand property
     */
    "declaration-block-no-redundant-longhand-properties"?: Array<boolean | DeclarationBlockNoRedundantLonghandPropertyObject> | boolean | null;
    /**
     * Disallow shorthand properties that override related longhand properties
     */
    "declaration-block-no-shorthand-property-overrides"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify the order of properties within declaration blocks
     */
    "declaration-block-properties-order"?: Array<string[] | DeclarationBlockPropertiesOrderObject | string> | DeclarationBlockPropertiesOrderFundingURL | null;
    /**
     * Require a newline or disallow whitespace after the semicolons of declaration blocks
     */
    "declaration-block-semicolon-newline-after"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace before the semicolons of declaration blocks
     */
    "declaration-block-semicolon-newline-before"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the semicolons of declaration blocks
     */
    "declaration-block-semicolon-space-after"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the semicolons of declaration blocks
     */
    "declaration-block-semicolon-space-before"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Limit the number of declaration within a single line declaration block
     */
    "declaration-block-single-line-max-declarations"?: Array<number | IntegerRuleObject> | number | null;
    /**
     * Require or disallow a trailing semicolon within declaration blocks
     */
    "declaration-block-trailing-semicolon"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify whether or not quotation marks should be used around font family names
     */
    "font-family-name-quotes"?: Array<FontFamilyNameQuoteObject | string> | FontFamilyNameQuotesFundingURL | null;
    /**
     * Require numeric or named (where possible) `font-weight` values. Also, when named values
     * are expected, require only valid names
     */
    "font-weight-notation"?: Array<FontWeightNotationFundingURL | FontWeightNotationObject> | FontWeightNotationFundingURL | null;
    /**
     * Specify a blacklist of disallowed functions
     */
    "function-blacklist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Disallow an unspaced operator within `calc` functions
     */
    "function-calc-no-unspaced-operator"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require a newline or disallow whitespace after the commas of functions
     */
    "function-comma-newline-after"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace before the commas of functions
     */
    "function-comma-newline-before"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the commas of functions
     */
    "function-comma-space-after"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the commas of functions
     */
    "function-comma-space-before"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Disallow direction values in `linear-gradient()` calls that are not valid according to
     * the standard syntax
     */
    "function-linear-gradient-no-nonstandard-direction"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Limit the number of adjacent empty lines within functions
     */
    "function-max-empty-lines"?: Array<number | IntegerRuleObject> | number | null;
    /**
     * Specify lowercase or uppercase for function names
     */
    "function-name-case"?: Array<LowerUpperRuleFundingURL | FunctionNameCaseObject> | LowerUpperRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace on the inside of the parentheses of functions
     */
    "function-parentheses-newline-inside"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace on the inside of the parentheses of
     * functions
     */
    "function-parentheses-space-inside"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Require or disallow data URIs for urls
     */
    "function-url-data-uris"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Disallow scheme-relative urls
     */
    "function-url-no-scheme-relative"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require or disallow quotes for urls
     */
    "function-url-quotes"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify a whitelist of allowed url schemes
     */
    "function-url-scheme-whitelist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Specify a whitelist of allowed functions
     */
    "function-whitelist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Require or disallow whitespace after functions
     */
    "function-whitespace-after"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify indentation
     */
    indentation?: Array<IndentationFundingURL | number | IndentationObject> | IndentationFundingURL | number | null;
    /**
     * Limit the number of adjacent empty lines
     */
    "max-empty-lines"?: Array<number | IntegerRuleObject> | number | null;
    /**
     * Limit the length of a line
     */
    "max-line-length"?: Array<number | MaxLineLengthObject> | number | null;
    /**
     * Limit the allowed nesting depth
     */
    "max-nesting-depth"?: Array<number | MaxNestingDepthObject> | number | null;
    /**
     * Disallow browser hacks that are irrelevant to the browsers you are targeting
     */
    "no-browser-hacks"?: Array<boolean | NoBrowserHackObject> | boolean | null;
    /**
     * Disallow selectors of lower specificity from coming after overriding selectors of higher
     * specificity
     */
    "no-descending-specificity"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow duplicate selectors within a stylesheet
     */
    "no-duplicate-selectors"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow empty sources
     */
    "no-empty-source"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow end-of-line whitespace
     */
    "no-eol-whitespace"?: Array<boolean | NoEOLWhitespaceObject> | boolean | null;
    /**
     * Disallow extra semicolons
     */
    "no-extra-semicolons"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow colors that are suspiciously close to being identical
     */
    "no-indistinguishable-colors"?: Array<boolean | NoIndistinguishableColorObject> | boolean | null;
    /**
     * Disallow double-slash comments `(//...)` which are not supported by CSS and could lead to
     * unexpected results
     */
    "no-invalid-double-slash-comments"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow missing end-of-source newlines
     */
    "no-missing-end-of-source-newline"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow animation names that do not correspond to a `@keyframes` declaration
     */
    "no-unknown-animations"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow features that are unsupported by the browsers that you are targeting
     */
    "no-unsupported-browser-features"?: Array<boolean | NoUnsupportedBrowserFeatureObject> | boolean | null;
    /**
     * Require or disallow Unicode BOM
     */
    "unicode-bom"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Disallow !important within keyframe declarations
     */
    "keyframe-declaration-no-important"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow units for zero lengths
     */
    "length-zero-no-unit"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require a single space or disallow whitespace after the colon in media features
     */
    "media-feature-colon-space-after"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the colon in media features
     */
    "media-feature-colon-space-before"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify lowercase or uppercase for media feature names
     */
    "media-feature-name-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Disallow unknown media feature names
     */
    "media-feature-name-no-unknown"?: Array<boolean | MediaFeatureNameNoUnknownObject> | boolean | null;
    /**
     * Disallow vendor prefixes for media feature names
     */
    "media-feature-name-no-vendor-prefix"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow missing punctuation for non-boolean media features
     */
    "media-feature-no-missing-punctuation"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require a single space or disallow whitespace on the inside of the parentheses within
     * media features
     */
    "media-feature-parentheses-space-inside"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the range operator in media features
     */
    "media-feature-range-operator-space-after"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the range operator in media features
     */
    "media-feature-range-operator-space-before"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a newline or disallow whitespace after the commas of media query lists
     */
    "media-query-list-comma-newline-after"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace before the commas of media query lists
     */
    "media-query-list-comma-newline-before"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the commas of media query lists
     */
    "media-query-list-comma-space-after"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the commas of media query lists
     */
    "media-query-list-comma-space-before"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Require or disallow a leading zero for fractional numbers less than 1
     */
    "number-leading-zero"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Limit the number of decimal places allowed in numbers
     */
    "number-max-precision"?: Array<number | IntegerRuleObject> | number | null;
    /**
     * Disallow trailing zeros in numbers
     */
    "number-no-trailing-zeros"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify a blacklist of disallowed properties
     */
    "property-blacklist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Specify lowercase or uppercase for properties
     */
    "property-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Disallow unknown properties
     */
    "property-no-unknown"?: Array<boolean | PropertyNoUnknownObject> | boolean | null;
    /**
     * Disallow vendor prefixes for properties
     */
    "property-no-vendor-prefix"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify a whitelist of allowed properties
     */
    "property-whitelist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Disallow standard properties inside `:root` rules
     */
    "root-no-standard-properties"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require or disallow an empty line before nested rules
     */
    "rule-nested-empty-line-before"?: Array<RuleNestedEmptyLineBeforeFundingURL | RuleNestedEmptyLineBeforeObject> | RuleNestedEmptyLineBeforeFundingURL | null;
    /**
     * Require or disallow an empty line before non-nested rules
     */
    "rule-non-nested-empty-line-before"?: Array<RuleNestedEmptyLineBeforeFundingURL | RuleNonNestedEmptyLineBeforeObject> | RuleNestedEmptyLineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace on the inside of the brackets within
     * attribute selector
     */
    "selector-attribute-brackets-space-inside"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify a blacklist of disallowed attribute operators
     */
    "selector-attribute-operator-blacklist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Require a single space or disallow whitespace after operators within attribute selectors
     */
    "selector-attribute-operator-space-after"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace before operators within attribute selectors
     */
    "selector-attribute-operator-space-before"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify a whitelist of allowed attribute operators
     */
    "selector-attribute-operator-whitelist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Require or disallow quotes for attribute values
     */
    "selector-attribute-quotes"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify a pattern for class selectors
     */
    "selector-class-pattern"?: Array<SelectorClassPatternObject | string> | null | string;
    /**
     * Require a single space or disallow whitespace after the combinators of selectors
     */
    "selector-combinator-space-after"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the combinators of selectors
     */
    "selector-combinator-space-before"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Disallow non-space characters for descendant combinators of selectors
     */
    "selector-descendant-combinator-no-non-space"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify a pattern for id selectors
     */
    "selector-id-pattern"?: Array<StringRuleObject | string> | null | string;
    /**
     * Limit the number of compound selectors in a selector
     */
    "selector-max-compound-selectors"?: Array<number | IntegerRuleObject> | number | null;
    /**
     * Limit the number of adjacent empty lines within selectors
     */
    "selector-max-empty-lines"?: Array<number | IntegerRuleObject> | number | null;
    /**
     * Limit the specificity of selectors
     */
    "selector-max-specificity"?: Array<StringRuleObject | string> | null | string;
    /**
     * Specify a pattern for the selectors of rules nested within rules
     */
    "selector-nested-pattern"?: Array<StringRuleObject | string> | null | string;
    /**
     * Disallow attribute selectors
     */
    "selector-no-attribute"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow combinators in selectors
     */
    "selector-no-combinator"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow id selectors
     */
    "selector-no-id"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow qualifying a selector by type
     */
    "selector-no-qualifying-type"?: Array<boolean | SelectorNoQualifyingTypeObject> | boolean | null;
    /**
     * Disallow type selectors
     */
    "selector-no-type"?: Array<boolean | SelectorNoTypeObject> | boolean | null;
    /**
     * Disallow the universal selector
     */
    "selector-no-universal"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow vendor prefixes for selectors
     */
    "selector-no-vendor-prefix"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify lowercase or uppercase for pseudo-class selectors
     */
    "selector-pseudo-class-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Disallow unknown pseudo-class selectors
     */
    "selector-pseudo-class-no-unknown"?: Array<boolean | SelectorPseudoClassNoUnknownObject> | boolean | null;
    /**
     * Require a single space or disallow whitespace on the inside of the parentheses within
     * pseudo-class selectors
     */
    "selector-pseudo-class-parentheses-space-inside"?: Array<AlwaysNeverRuleObject | string> | AtRuleEmptyLineBeforeFundingURL | null;
    /**
     * Specify a whitelist of allowed pseudo-class selectors
     */
    "selector-pseudo-class-whitelist"?: Array<any[] | ArrayStringRuleObject | string> | null | string;
    /**
     * Specify lowercase or uppercase for pseudo-element selectors
     */
    "selector-pseudo-element-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Specify single or double colon notation for applicable pseudo-elements
     */
    "selector-pseudo-element-colon-notation"?: Array<SingleDoubleRuleObject | string> | SingleDoubleRuleFundingURL | null;
    /**
     * Disallow unknown pseudo-element selectors
     */
    "selector-pseudo-element-no-unknown"?: Array<boolean | SelectorPseudoElementNoUnknownObject> | boolean | null;
    /**
     * Disallow the composition of :root in selectors
     */
    "selector-root-no-composition"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify lowercase or uppercase for type selectors
     */
    "selector-type-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Disallow unknown type selectors
     */
    "selector-type-no-unknown"?: Array<boolean | SelectorTypeNoUnknownObject> | boolean | null;
    /**
     * Require a newline or disallow whitespace after the commas of selector lists
     */
    "selector-list-comma-newline-after"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace before the commas of selector lists
     */
    "selector-list-comma-newline-before"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the commas of selector lists
     */
    "selector-list-comma-space-after"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the commas of selector lists
     */
    "selector-list-comma-space-before"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Disallow redundant values in shorthand properties
     */
    "shorthand-property-no-redundant-values"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Disallow (unescaped) newlines in strings
     */
    "string-no-newline"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify single or double quotes around strings
     */
    "string-quotes"?: Array<SingleDoubleRuleObject | string> | SingleDoubleRuleFundingURL | null;
    /**
     * Require a reason comment before or after `stylelint-disable` comments
     */
    "stylelint-disable-reason"?: Array<StylelintDisableReasonObject | string> | StylelintDisableReasonFundingURL | null;
    /**
     * Disallow `animation` and `transition` less than or equal to 100ms
     */
    "time-no-imperceptible"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Specify a blacklist of disallowed units
     */
    "unit-blacklist"?: Array<UnitRuleFundingURL[] | UnitRuleFundingURL | UnitRuleObject> | UnitRuleFundingURL | null;
    /**
     * Specify lowercase or uppercase for units
     */
    "unit-case"?: Array<LowerUpperRuleObject | string> | LowerUpperRuleFundingURL | null;
    /**
     * Disallow unknown units
     */
    "unit-no-unknown"?: Array<boolean | UnitNoUnknownObject> | boolean | null;
    /**
     * Specify a whitelist of allowed units
     */
    "unit-whitelist"?: Array<UnitRuleFundingURL[] | UnitRuleFundingURL | UnitRuleObject> | UnitRuleFundingURL | null;
    /**
     * Specify lowercase or uppercase for keywords values
     */
    "value-keyword-case"?: Array<LowerUpperRuleFundingURL | ValueKeywordCaseObject> | LowerUpperRuleFundingURL | null;
    /**
     * Disallow vendor prefixes for values
     */
    "value-no-vendor-prefix"?: Array<boolean | BooleanRuleObject> | boolean | null;
    /**
     * Require a newline or disallow whitespace after the commas of value lists
     */
    "value-list-comma-newline-after"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a newline or disallow whitespace before the commas of value lists
     */
    "value-list-comma-newline-before"?: Array<NewlineRuleObject | string> | NewlineRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace after the commas of value lists
     */
    "value-list-comma-space-after"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Require a single space or disallow whitespace before the commas of value lists
     */
    "value-list-comma-space-before"?: Array<SpaceRuleObject | string> | SpaceRuleFundingURL | null;
    /**
     * Limit the number of adjacent empty lines within value lists
     */
    "value-list-max-empty-lines"?: Array<number | IntegerRuleObject> | number | null;
    [property: string]: any;
}

export interface ArrayStringRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum AtRuleEmptyLineBeforeFundingURL {
    Always = "always",
    Never = "never",
}

export interface AtRuleEmptyLineBeforeObject {
    except?:        AtRuleEmptyLineBeforeExcept[];
    ignore?:        AtRuleEmptyLineBeforeIgnore[];
    ignoreAtRules?: string[] | string;
    disableFix?:    boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum AtRuleEmptyLineBeforeExcept {
    AfterSameName = "after-same-name",
    BlocklessAfterBlockless = "blockless-after-blockless",
    BlocklessAfterSameNameBlockless = "blockless-after-same-name-blockless",
    FirstNested = "first-nested",
    InsideBlock = "inside-block",
}

export enum AtRuleEmptyLineBeforeIgnore {
    AfterComment = "after-comment",
    BlocklessAfterBlockless = "blockless-after-blockless",
    BlocklessAfterSameNameBlockless = "blockless-after-same-name-blockless",
    FirstNested = "first-nested",
    InsideBlock = "inside-block",
}

export interface LowerUpperRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum LowerUpperRuleFundingURL {
    Lower = "lower",
    Upper = "upper",
}

export interface AlwaysMultiLineRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum AlwaysMultiLineRuleFundingURL {
    Always = "always",
    AlwaysMultiLine = "always-multi-line",
}

export interface AtRuleNameSpaceAfterObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum AtRuleNameSpaceAfterFundingURL {
    Always = "always",
    AlwaysSingleLine = "always-single-line",
}

export interface AtRuleNoUnknownObject {
    ignoreAtRules?: string[];
    disableFix?:    boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface BooleanRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface AtRuleSemicolonNewlineAfterObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum AtRuleSemicolonNewlineAfterFundingURL {
    Always = "always",
}

export interface BlockClosingBraceEmptyLineBeforeObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum BlockClosingBraceEmptyLineBeforeFundingURL {
    AlwaysMultiLine = "always-multi-line",
    Never = "never",
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum BlockOpeningBraceNewlineBeforeFundingURL {
    Always = "always",
    AlwaysMultiLine = "always-multi-line",
    AlwaysSingleLine = "always-single-line",
    NeverMultiLine = "never-multi-line",
    NeverSingleLine = "never-single-line",
}

export interface NewlineSpaceWithIgnoreRuleObject {
    ignoreAtRules?: string[] | string;
    disableFix?:    boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum NewlineSpaceRuleFundingURL {
    Always = "always",
    AlwaysMultiLine = "always-multi-line",
    AlwaysSingleLine = "always-single-line",
    Never = "never",
    NeverMultiLine = "never-multi-line",
    NeverSingleLine = "never-single-line",
}

export interface NewlineRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum NewlineRuleFundingURL {
    Always = "always",
    AlwaysMultiLine = "always-multi-line",
    NeverMultiLine = "never-multi-line",
}

export interface NewlineSpaceRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface BlockOpeningBraceNewlineBeforeObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface ColorHexLengthObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum ColorHexLengthFundingURL {
    Long = "long",
    Short = "short",
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum ColorNamedFundingURL {
    AlwaysWherePossible = "always-where-possible",
    Never = "never",
}

export interface ColorNamedObject {
    ignore?:     string[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface CommentEmptyLineBeforeObject {
    /**
     * Reverse the primary option for comments that are nested and the first child of their
     * parent node
     */
    except?: CommentEmptyLineBeforeExcept[];
    /**
     * Don't require an empty line between comments
     */
    ignore?:     CommentEmptyLineBeforeIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum CommentEmptyLineBeforeExcept {
    FirstNested = "first-nested",
}

export enum CommentEmptyLineBeforeIgnore {
    AfterComment = "after-comment",
    BetweenComments = "between-comments",
    StylelintCommands = "stylelint-commands",
}

export interface AlwaysNeverRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface StringRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface CustomPropertyEmptyLineBeforeObject {
    /**
     * Reverse the primary option for custom properties that come after a comment, custom
     * property or first child of their parent node
     */
    except?: CustomPropertyEmptyLineBeforeExcept[];
    /**
     * Ignore custom properties that are preceded by comments or inside single-line blocks
     */
    ignore?:     CustomPropertyEmptyLineBeforeIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum CustomPropertyEmptyLineBeforeExcept {
    AfterComment = "after-comment",
    AfterCustomProperty = "after-custom-property",
    FirstNested = "first-nested",
}

export enum CustomPropertyEmptyLineBeforeIgnore {
    AfterComment = "after-comment",
    InsideSingleLineBlock = "inside-single-line-block",
}

export interface DeclarationBlockNoDuplicatePropertyObject {
    ignore?:           DeclarationBlockNoDuplicatePropertyIgnore[];
    ignoreProperties?: string[];
    disableFix?:       boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum DeclarationBlockNoDuplicatePropertyIgnore {
    ConsecutiveDuplicates = "consecutive-duplicates",
    ConsecutiveDuplicatesWithDifferentValues = "consecutive-duplicates-with-different-values",
}

export interface DeclarationBlockNoRedundantLonghandPropertyObject {
    ignoreShorthands?: string[];
    disableFix?:       boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface DeclarationBlockPropertiesOrderObject {
    order?:      Order;
    properties?: string[];
    /**
     * These options only apply if you've defined your own array of properties
     */
    unspecified?: Unspecified;
    disableFix?:  boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum Order {
    Flexible = "flexible",
    Strict = "strict",
}

/**
 * These options only apply if you've defined your own array of properties
 */
export enum Unspecified {
    Bottom = "bottom",
    BottomAlphabetical = "bottomAlphabetical",
    Ignore = "ignore",
    Top = "top",
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum DeclarationBlockPropertiesOrderFundingURL {
    Alphabetical = "alphabetical",
}

export interface SpaceRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum SpaceRuleFundingURL {
    Always = "always",
    AlwaysSingleLine = "always-single-line",
    Never = "never",
    NeverSingleLine = "never-single-line",
}

export interface IntegerRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface DeclarationColonSpaceAfterObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum DeclarationColonSpaceAfterFundingURL {
    Always = "always",
    AlwaysSingleLine = "always-single-line",
    Never = "never",
}

export interface DeclarationEmptyLineBeforeObject {
    except?:     DeclarationEmptyLineBeforeExcept[];
    ignore?:     DeclarationEmptyLineBeforeIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum DeclarationEmptyLineBeforeExcept {
    AfterComment = "after-comment",
    AfterDeclaration = "after-declaration",
    FirstNested = "first-nested",
}

export enum DeclarationEmptyLineBeforeIgnore {
    AfterComment = "after-comment",
    AfterDeclaration = "after-declaration",
    InsideSingleLineBlock = "inside-single-line-block",
}

export interface ObjectRuleElement {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface FontFamilyNameQuoteObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum FontFamilyNameQuotesFundingURL {
    AlwaysUnlessKeyword = "always-unless-keyword",
    AlwaysWhereRecommended = "always-where-recommended",
    AlwaysWhereRequired = "always-where-required",
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum FontWeightNotationFundingURL {
    NamedWherePossible = "named-where-possible",
    Numeric = "numeric",
}

export interface FontWeightNotationObject {
    ignore?:     FontWeightNotationIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum FontWeightNotationIgnore {
    Relative = "relative",
}

/**
 * Ignore case of function names
 */
export interface FunctionNameCaseObject {
    ignoreFunctions?: string[];
    disableFix?:      boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum IndentationFundingURL {
    Tab = "tab",
}

export interface IndentationObject {
    /**
     * Do not indent for these things
     */
    except?: IndentationExcept[];
    /**
     * Ignore the indentation inside parentheses
     */
    ignore?: IndentationIgnore[];
    /**
     * If `true`, the closing brace of a block (rule or at-rule) will be expected at the same
     * indentation level as the block's inner nodes
     */
    indentInsideParens?: IndentInsideParens;
    disableFix?:         boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum IndentationExcept {
    Block = "block",
    Param = "param",
    Value = "value",
}

export enum IndentationIgnore {
    InsideParens = "inside-parens",
    Param = "param",
    Value = "value",
}

/**
 * If `true`, the closing brace of a block (rule or at-rule) will be expected at the same
 * indentation level as the block's inner nodes
 */
export enum IndentInsideParens {
    OnceAtRootTwiceInBlock = "once-at-root-twice-in-block",
    Twice = "twice",
}

export interface MaxLineLengthObject {
    ignore?:     IgnoreFundingURL[] | IgnoreFundingURL;
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum IgnoreFundingURL {
    Comments = "comments",
    NonComments = "non-comments",
}

export interface MaxNestingDepthObject {
    ignore?:        MaxNestingDepthIgnore[];
    ignoreAtRules?: string[];
    disableFix?:    boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum MaxNestingDepthIgnore {
    BlocklessAtRules = "blockless-at-rules",
    PseudoClasses = "pseudo-classes",
}

export interface MediaFeatureNameNoUnknownObject {
    ignoreMediaFeatureNames?: string[];
    disableFix?:              boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface NoBrowserHackObject {
    browsers?:   string[] | string;
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface NoEOLWhitespaceObject {
    ignore?:     NoEOLWhitespaceIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum NoEOLWhitespaceIgnore {
    EmptyLines = "empty-lines",
}

export interface NoIndistinguishableColorObject {
    ignore?:    string[];
    threshold?: number;
    /**
     * An array of color pairs to ignore. Each pair is an array with two items
     */
    whitelist?:  Array<string[]>;
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface NoUnsupportedBrowserFeatureObject {
    browsers?:   string;
    ignore?:     string[] | string;
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface PropertyNoUnknownObject {
    /**
     * If `true`, this rule will check vendor-prefixed properties
     */
    checkPrefixed?:    boolean;
    ignoreProperties?: string[];
    disableFix?:       boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum RuleNestedEmptyLineBeforeFundingURL {
    Always = "always",
    AlwaysMultiLine = "always-multi-line",
    Never = "never",
    NeverMultiLine = "never-multi-line",
}

export interface RuleNestedEmptyLineBeforeObject {
    /**
     * Reverse the primary option if the rule is the first in a block
     */
    except?: CommentEmptyLineBeforeExcept[];
    /**
     * Ignore rules that come after a comment
     */
    ignore?:     RuleNestedEmptyLineBeforeIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum RuleNestedEmptyLineBeforeIgnore {
    AfterComment = "after-comment",
}

export interface RuleNonNestedEmptyLineBeforeObject {
    /**
     * Reverse the primary option if the rule is the first in a block
     */
    except?: RuleNonNestedEmptyLineBeforeExcept[];
    /**
     * Ignore rules that come after a comment
     */
    ignore?:     RuleNestedEmptyLineBeforeIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum RuleNonNestedEmptyLineBeforeExcept {
    AfterSingleLineComment = "after-single-line-comment",
}

export interface SelectorClassPatternObject {
    /**
     * This option will resolve nested selectors with `&` interpolation
     */
    resolveNestedSelectors?: boolean;
    disableFix?:             boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface SelectorNoQualifyingTypeObject {
    ignore?:     SelectorNoQualifyingTypeIgnore[];
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum SelectorNoQualifyingTypeIgnore {
    Attribute = "attribute",
    Class = "class",
    ID = "id",
}

export interface SelectorNoTypeObject {
    ignore?:      SelectorNoTypeIgnore[];
    ignoreTypes?: string[];
    disableFix?:  boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export enum SelectorNoTypeIgnore {
    Compounded = "compounded",
    Descendant = "descendant",
}

export interface SelectorPseudoClassNoUnknownObject {
    ignorePseudoClasses?: string[];
    disableFix?:          boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface SingleDoubleRuleObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum SingleDoubleRuleFundingURL {
    Double = "double",
    Single = "single",
}

export interface SelectorPseudoElementNoUnknownObject {
    ignorePseudoElements?: string[];
    disableFix?:           boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface SelectorTypeNoUnknownObject {
    ignoreTypes?: string[];
    disableFix?:  boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface StylelintDisableReasonObject {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum StylelintDisableReasonFundingURL {
    AlwaysAfter = "always-after",
    AlwaysBefore = "always-before",
}

/**
 * URL to a website with details about how to fund the package.
 *
 * Specify either a single file or an array of filenames to put in place for the man program
 * to find.
 *
 * Custom parser
 *
 * Run AFTER the package is installed.
 *
 * Run AFTER the package is published.
 *
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts
 * if no restart script is provided.
 *
 * Run by the 'npm start' command.
 *
 * Run by the 'npm stop' command.
 *
 * Run by the 'npm test' command.
 *
 * Run BEFORE the package is uninstalled.
 *
 * Run BEFORE bump the package version.
 *
 * Workspace package paths. Glob patterns are supported.
 *
 * Which parser to use.
 *
 * Flow
 *
 * JavaScript
 *
 * TypeScript
 *
 * CSS
 *
 * Less
 *
 * SCSS
 *
 * JSON
 *
 * JSON5
 *
 * JSON.stringify
 *
 * GraphQL
 *
 * Markdown
 *
 * MDX
 *
 * Vue
 *
 * YAML
 *
 * Ember / Handlebars
 *
 * HTML
 *
 * Angular
 *
 * Lightning Web Components
 */
export enum UnitRuleFundingURL {
    CM = "cm",
    Ch = "ch",
    DPI = "dpi",
    Deg = "deg",
    Dpcm = "dpcm",
    Dppx = "dppx",
    Em = "em",
    Empty = "%",
    Ex = "ex",
    Fr = "fr",
    Grad = "grad",
    Hz = "Hz",
    In = "in",
    KHz = "kHz",
    MS = "ms",
    Mm = "mm",
    PC = "pc",
    Pt = "pt",
    Px = "px",
    Q = "q",
    RAD = "rad",
    Rem = "rem",
    S = "s",
    Turn = "turn",
    VM = "vm",
    Vh = "vh",
    Vmax = "vmax",
    Vmin = "vmin",
    Vw = "vw",
}

export interface UnitRuleObject {
    /**
     * Ignore units in the values of declarations with the specified properties
     */
    ignoreProperties?: { [key: string]: any };
    disableFix?:       boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface UnitNoUnknownObject {
    ignoreUnits?: string[];
    disableFix?:  boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

export interface ValueKeywordCaseObject {
    /**
     * Ignore case of keywords values
     */
    ignoreKeywords?: string[];
    disableFix?:     boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?:        string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: Severity;
    [property: string]: any;
}

/**
 * Contains overrides for the TypeScript version that matches the version range matching the
 * property key.
 */
export interface JSONSchemaForNPMPackageJSONFilesTypesVersion {
    /**
     * Maps all file paths to the file paths specified in the array.
     */
    "*"?: string[];
}

export interface PurpleWorkspaces {
    /**
     * Packages to block from hoisting to the workspace root. Currently only supported in Yarn
     * only.
     */
    nohoist?: string[];
    /**
     * Workspace package paths. Glob patterns are supported.
     */
    packages?: string[];
    [property: string]: any;
}

export interface PackageJSONSchemaLicense {
    type?: string;
    url?:  string;
    [property: string]: any;
}

export interface PackageJSONSchemaPeerDependenciesMeta {
    /**
     * Specifies that this peer dependency is optional and should not be installed automatically.
     */
    optional?: boolean;
    [property: string]: any;
}

export interface PackageJSONSchemaPublishConfig {
    access?:   Access;
    registry?: string;
    tag?:      string;
    [property: string]: any;
}

export interface FluffyRepository {
    directory?: string;
    type?:      string;
    url?:       string;
    [property: string]: any;
}

/**
 * The 'scripts' member is an object hash of script commands that are run at various times
 * in the lifecycle of your package. The key is the lifecycle event, and the value is the
 * command to run at that point.
 */
export interface PackageJSONSchemaScripts {
    install?: string;
    /**
     * Run code quality tools, e.g. ESLint, TSLint, etc.
     */
    lint?:        string;
    postinstall?: string;
    /**
     * Run AFTER the tarball has been generated and moved to its final destination.
     */
    postpack?:    string;
    postpublish?: string;
    postrestart?: string;
    poststart?:   string;
    poststop?:    string;
    posttest?:    string;
    /**
     * Run AFTER the package is uninstalled.
     */
    postuninstall?: string;
    /**
     * Run AFTER bump the package version.
     */
    postversion?: string;
    /**
     * Run BEFORE the package is installed.
     */
    preinstall?: string;
    /**
     * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git
     * dependencies).
     */
    prepack?: string;
    /**
     * Run both BEFORE the package is packed and published, and on local npm install without any
     * arguments. This is run AFTER prepublish, but BEFORE prepublishOnly.
     */
    prepare?: string;
    /**
     * Run BEFORE the package is published (Also run on local npm install without any arguments).
     */
    prepublish?: string;
    /**
     * Run BEFORE the package is prepared and packed, ONLY on npm publish.
     */
    prepublishOnly?: string;
    prerestart?:     string;
    prestart?:       string;
    prestop?:        string;
    pretest?:        string;
    preuninstall?:   string;
    preversion?:     string;
    /**
     * Publishes a package to the registry so that it can be installed by name. See
     * https://docs.npmjs.com/cli/v8/commands/npm-publish
     */
    publish?: string;
    restart?: string;
    /**
     * Start dev server to serve application files
     */
    serve?:     string;
    start?:     string;
    stop?:      string;
    test?:      string;
    uninstall?: string;
    version?:   string;
    [property: string]: string;
}

/**
 * Contains overrides for the TypeScript version that matches the version range matching the
 * property key.
 */
export interface PackageJSONSchemaTypesVersion {
    /**
     * Maps all file paths to the file paths specified in the array.
     */
    "*"?: string[];
}

export interface FluffyWorkspaces {
    /**
     * Packages to block from hoisting to the workspace root. Currently only supported in Yarn
     * only.
     */
    nohoist?: string[];
    /**
     * Workspace package paths. Glob patterns are supported.
     */
    packages?: string[];
    [property: string]: any;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPackageJSONSchema(json: string): PackageJSONSchema {
        return cast(JSON.parse(json), r("PackageJSONSchema"));
    }

    public static packageJSONSchemaToJson(value: PackageJSONSchema): string {
        return JSON.stringify(uncast(value, r("PackageJSONSchema")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "PackageJSONSchema": o([
        { json: "author", js: "author", typ: u(undefined, u(r("PersonObject"), "")) },
        { json: "ava", js: "ava", typ: u(undefined, r("AVAConfigSchema")) },
        { json: "bin", js: "bin", typ: u(undefined, u(m(""), "")) },
        { json: "bugs", js: "bugs", typ: u(undefined, u(r("PurpleBugs"), "")) },
        { json: "bundledDependencies", js: "bundledDependencies", typ: u(undefined, u(a(""), true)) },
        { json: "bundleDependencies", js: "bundleDependencies", typ: u(undefined, u(a(""), true)) },
        { json: "config", js: "config", typ: u(undefined, m("any")) },
        { json: "contributors", js: "contributors", typ: u(undefined, a(u(r("PersonObject"), ""))) },
        { json: "cpu", js: "cpu", typ: u(undefined, a("")) },
        { json: "dependencies", js: "dependencies", typ: u(undefined, m("")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "devDependencies", js: "devDependencies", typ: u(undefined, m("")) },
        { json: "directories", js: "directories", typ: u(undefined, r("PackageJSONSchemaDirectories")) },
        { json: "dist", js: "dist", typ: u(undefined, r("PackageJSONSchemaDist")) },
        { json: "engines", js: "engines", typ: u(undefined, r("PackageJSONSchemaEngines")) },
        { json: "engineStrict", js: "engineStrict", typ: u(undefined, true) },
        { json: "eslintConfig", js: "eslintConfig", typ: u(undefined, r("JSONSchemaForESLintConfigurationFiles")) },
        { json: "esnext", js: "esnext", typ: u(undefined, u(r("PurpleEsnext"), "")) },
        { json: "exports", js: "exports", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PurplePackageExportsEntryObject"), null, "")) },
        { json: "files", js: "files", typ: u(undefined, a("")) },
        { json: "funding", js: "funding", typ: u(undefined, u(a(u(r("FundingWay"), "")), r("FundingWay"), "")) },
        { json: "homepage", js: "homepage", typ: u(undefined, "") },
        { json: "jscpd", js: "jscpd", typ: u(undefined, r("Jscpd")) },
        { json: "jspm", js: "jspm", typ: u(undefined, r("JSONSchemaForNPMPackageJSONFiles")) },
        { json: "keywords", js: "keywords", typ: u(undefined, a("")) },
        { json: "license", js: "license", typ: u(undefined, "") },
        { json: "licenses", js: "licenses", typ: u(undefined, a(r("PackageJSONSchemaLicense"))) },
        { json: "main", js: "main", typ: u(undefined, "") },
        { json: "maintainers", js: "maintainers", typ: u(undefined, a(u(r("PersonObject"), ""))) },
        { json: "man", js: "man", typ: u(undefined, u(a(""), "")) },
        { json: "module", js: "module", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "optionalDependencies", js: "optionalDependencies", typ: u(undefined, m("")) },
        { json: "os", js: "os", typ: u(undefined, a("")) },
        { json: "overrides", js: "overrides", typ: u(undefined, m("any")) },
        { json: "packageManager", js: "packageManager", typ: u(undefined, "") },
        { json: "peerDependencies", js: "peerDependencies", typ: u(undefined, m("")) },
        { json: "peerDependenciesMeta", js: "peerDependenciesMeta", typ: u(undefined, m(r("PackageJSONSchemaPeerDependenciesMeta"))) },
        { json: "preferGlobal", js: "preferGlobal", typ: u(undefined, true) },
        { json: "prettier", js: "prettier", typ: u(undefined, u(r("SchemaForPrettierrcObject"), "")) },
        { json: "private", js: "private", typ: u(undefined, u(true, r("PrivateEnum"))) },
        { json: "publishConfig", js: "publishConfig", typ: u(undefined, r("PackageJSONSchemaPublishConfig")) },
        { json: "readme", js: "readme", typ: u(undefined, "") },
        { json: "release", js: "release", typ: u(undefined, r("SemanticReleaseSchema")) },
        { json: "repository", js: "repository", typ: u(undefined, u(r("FluffyRepository"), "")) },
        { json: "resolutions", js: "resolutions", typ: u(undefined, m("any")) },
        { json: "scripts", js: "scripts", typ: u(undefined, r("PackageJSONSchemaScripts")) },
        { json: "stylelint", js: "stylelint", typ: u(undefined, r("JSONSchemaForTheStylelintConfigurationFiles")) },
        { json: "type", js: "type", typ: u(undefined, r("Type")) },
        { json: "types", js: "types", typ: u(undefined, "") },
        { json: "typesVersions", js: "typesVersions", typ: u(undefined, m(r("PackageJSONSchemaTypesVersion"))) },
        { json: "typings", js: "typings", typ: u(undefined, "") },
        { json: "version", js: "version", typ: u(undefined, "") },
        { json: "workspaces", js: "workspaces", typ: u(undefined, u(a(""), r("FluffyWorkspaces"))) },
    ], "any"),
    "PersonObject": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "AVAConfigSchema": o([
        { json: "cache", js: "cache", typ: u(undefined, true) },
        { json: "concurrency", js: "concurrency", typ: u(undefined, 3.14) },
        { json: "environmentVariables", js: "environmentVariables", typ: u(undefined, m("")) },
        { json: "extensions", js: "extensions", typ: u(undefined, u(a(""), m(r("Type")))) },
        { json: "failFast", js: "failFast", typ: u(undefined, true) },
        { json: "failWithoutAssertions", js: "failWithoutAssertions", typ: u(undefined, true) },
        { json: "files", js: "files", typ: u(undefined, a("")) },
        { json: "ignoredByWatcher", js: "ignoredByWatcher", typ: u(undefined, a("")) },
        { json: "match", js: "match", typ: u(undefined, a("")) },
        { json: "nodeArguments", js: "nodeArguments", typ: u(undefined, a("")) },
        { json: "require", js: "require", typ: u(undefined, a("")) },
        { json: "snapshotDir", js: "snapshotDir", typ: u(undefined, "") },
        { json: "tap", js: "tap", typ: u(undefined, true) },
        { json: "timeout", js: "timeout", typ: u(undefined, u(3.14, "")) },
        { json: "typescript", js: "typescript", typ: u(undefined, r("Configuration")) },
        { json: "utilizeParallelBuilds", js: "utilizeParallelBuilds", typ: u(undefined, true) },
        { json: "verbose", js: "verbose", typ: u(undefined, true) },
        { json: "workerThreads", js: "workerThreads", typ: u(undefined, true) },
    ], false),
    "Configuration": o([
        { json: "compile", js: "compile", typ: u(undefined, u(true, r("CompileEnum"))) },
        { json: "extensions", js: "extensions", typ: u(undefined, a("")) },
        { json: "rewritePaths", js: "rewritePaths", typ: u(undefined, m("any")) },
    ], "any"),
    "PurpleBugs": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "PackageJSONSchemaDirectories": o([
        { json: "bin", js: "bin", typ: u(undefined, "") },
        { json: "doc", js: "doc", typ: u(undefined, "") },
        { json: "example", js: "example", typ: u(undefined, "") },
        { json: "lib", js: "lib", typ: u(undefined, "") },
        { json: "man", js: "man", typ: u(undefined, "") },
        { json: "test", js: "test", typ: u(undefined, "") },
    ], "any"),
    "PackageJSONSchemaDist": o([
        { json: "shasum", js: "shasum", typ: u(undefined, "") },
        { json: "tarball", js: "tarball", typ: u(undefined, "") },
    ], "any"),
    "PackageJSONSchemaEngines": o([
        { json: "node", js: "node", typ: u(undefined, "") },
    ], ""),
    "JSONSchemaForESLintConfigurationFiles": o([
        { json: "ecmaFeatures", js: "ecmaFeatures", typ: u(undefined, r("ECMAFeatures")) },
        { json: "env", js: "env", typ: u(undefined, r("Env")) },
        { json: "extends", js: "extends", typ: u(undefined, u(a(""), "")) },
        { json: "globals", js: "globals", typ: u(undefined, m(u(true, r("GlobalEnum")))) },
        { json: "ignorePatterns", js: "ignorePatterns", typ: u(undefined, u(a(""), "")) },
        { json: "noInlineConfig", js: "noInlineConfig", typ: u(undefined, true) },
        { json: "overrides", js: "overrides", typ: u(undefined, a(r("EslintConfigOverride"))) },
        { json: "parser", js: "parser", typ: u(undefined, "") },
        { json: "parserOptions", js: "parserOptions", typ: u(undefined, r("ParserOptions")) },
        { json: "plugins", js: "plugins", typ: u(undefined, a("")) },
        { json: "root", js: "root", typ: u(undefined, true) },
        { json: "rules", js: "rules", typ: u(undefined, r("Rules")) },
        { json: "settings", js: "settings", typ: u(undefined, m("any")) },
    ], "any"),
    "ECMAFeatures": o([
        { json: "arrowFunctions", js: "arrowFunctions", typ: u(undefined, true) },
        { json: "binaryLiterals", js: "binaryLiterals", typ: u(undefined, true) },
        { json: "blockBindings", js: "blockBindings", typ: u(undefined, true) },
        { json: "classes", js: "classes", typ: u(undefined, true) },
        { json: "defaultParams", js: "defaultParams", typ: u(undefined, true) },
        { json: "destructuring", js: "destructuring", typ: u(undefined, true) },
        { json: "experimentalObjectRestSpread", js: "experimentalObjectRestSpread", typ: u(undefined, true) },
        { json: "forOf", js: "forOf", typ: u(undefined, true) },
        { json: "generators", js: "generators", typ: u(undefined, true) },
        { json: "globalReturn", js: "globalReturn", typ: u(undefined, true) },
        { json: "impliedStrict", js: "impliedStrict", typ: u(undefined, true) },
        { json: "jsx", js: "jsx", typ: u(undefined, true) },
        { json: "modules", js: "modules", typ: u(undefined, true) },
        { json: "objectLiteralComputedProperties", js: "objectLiteralComputedProperties", typ: u(undefined, true) },
        { json: "objectLiteralDuplicateProperties", js: "objectLiteralDuplicateProperties", typ: u(undefined, true) },
        { json: "objectLiteralShorthandMethods", js: "objectLiteralShorthandMethods", typ: u(undefined, true) },
        { json: "objectLiteralShorthandProperties", js: "objectLiteralShorthandProperties", typ: u(undefined, true) },
        { json: "octalLiterals", js: "octalLiterals", typ: u(undefined, true) },
        { json: "regexUFlag", js: "regexUFlag", typ: u(undefined, true) },
        { json: "regexYFlag", js: "regexYFlag", typ: u(undefined, true) },
        { json: "restParams", js: "restParams", typ: u(undefined, true) },
        { json: "spread", js: "spread", typ: u(undefined, true) },
        { json: "superInFunctions", js: "superInFunctions", typ: u(undefined, true) },
        { json: "templateStrings", js: "templateStrings", typ: u(undefined, true) },
        { json: "unicodeCodePointEscapes", js: "unicodeCodePointEscapes", typ: u(undefined, true) },
    ], "any"),
    "Env": o([
        { json: "amd", js: "amd", typ: u(undefined, true) },
        { json: "applescript", js: "applescript", typ: u(undefined, true) },
        { json: "atomtest", js: "atomtest", typ: u(undefined, true) },
        { json: "browser", js: "browser", typ: u(undefined, true) },
        { json: "commonjs", js: "commonjs", typ: u(undefined, true) },
        { json: "embertest", js: "embertest", typ: u(undefined, true) },
        { json: "es6", js: "es6", typ: u(undefined, true) },
        { json: "greasemonkey", js: "greasemonkey", typ: u(undefined, true) },
        { json: "jasmine", js: "jasmine", typ: u(undefined, true) },
        { json: "jest", js: "jest", typ: u(undefined, true) },
        { json: "jquery", js: "jquery", typ: u(undefined, true) },
        { json: "meteor", js: "meteor", typ: u(undefined, true) },
        { json: "mocha", js: "mocha", typ: u(undefined, true) },
        { json: "mongo", js: "mongo", typ: u(undefined, true) },
        { json: "nashorn", js: "nashorn", typ: u(undefined, true) },
        { json: "node", js: "node", typ: u(undefined, true) },
        { json: "phantomjs", js: "phantomjs", typ: u(undefined, true) },
        { json: "prototypejs", js: "prototypejs", typ: u(undefined, true) },
        { json: "protractor", js: "protractor", typ: u(undefined, true) },
        { json: "qunit", js: "qunit", typ: u(undefined, true) },
        { json: "serviceworker", js: "serviceworker", typ: u(undefined, true) },
        { json: "shared-node-browser", js: "shared-node-browser", typ: u(undefined, true) },
        { json: "shelljs", js: "shelljs", typ: u(undefined, true) },
        { json: "webextensions", js: "webextensions", typ: u(undefined, true) },
        { json: "worker", js: "worker", typ: u(undefined, true) },
    ], "any"),
    "EslintConfigOverride": o([
        { json: "ecmaFeatures", js: "ecmaFeatures", typ: u(undefined, r("ECMAFeatures")) },
        { json: "env", js: "env", typ: u(undefined, r("Env")) },
        { json: "excludedFiles", js: "excludedFiles", typ: u(undefined, u(a(""), "")) },
        { json: "extends", js: "extends", typ: u(undefined, u(a(""), "")) },
        { json: "files", js: "files", typ: u(a(""), "") },
        { json: "globals", js: "globals", typ: u(undefined, m(u(true, r("GlobalEnum")))) },
        { json: "overrides", js: "overrides", typ: u(undefined, a(r("EslintConfigOverride"))) },
        { json: "parser", js: "parser", typ: u(undefined, "") },
        { json: "parserOptions", js: "parserOptions", typ: u(undefined, r("ParserOptions")) },
        { json: "plugins", js: "plugins", typ: u(undefined, a("")) },
        { json: "processor", js: "processor", typ: u(undefined, "") },
        { json: "rules", js: "rules", typ: u(undefined, r("Rules")) },
        { json: "settings", js: "settings", typ: u(undefined, m("any")) },
    ], false),
    "ParserOptions": o([
        { json: "ecmaFeatures", js: "ecmaFeatures", typ: u(undefined, r("ECMAFeatures")) },
        { json: "ecmaVersion", js: "ecmaVersion", typ: u(undefined, u(3.14, r("ECMAVersionEnum"))) },
        { json: "sourceType", js: "sourceType", typ: u(undefined, r("SourceType")) },
    ], "any"),
    "Rules": o([
        { json: "comma-dangle", js: "comma-dangle", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "for-direction", js: "for-direction", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "getter-return", js: "getter-return", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-await-in-loop", js: "no-await-in-loop", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-compare-neg-zero", js: "no-compare-neg-zero", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-cond-assign", js: "no-cond-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-console", js: "no-console", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-constant-condition", js: "no-constant-condition", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-control-regex", js: "no-control-regex", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-debugger", js: "no-debugger", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-dupe-args", js: "no-dupe-args", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-dupe-keys", js: "no-dupe-keys", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-duplicate-case", js: "no-duplicate-case", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-empty", js: "no-empty", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-empty-character-class", js: "no-empty-character-class", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-ex-assign", js: "no-ex-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-extra-boolean-cast", js: "no-extra-boolean-cast", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-extra-parens", js: "no-extra-parens", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-extra-semi", js: "no-extra-semi", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-func-assign", js: "no-func-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-inner-declarations", js: "no-inner-declarations", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-invalid-regexp", js: "no-invalid-regexp", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-irregular-whitespace", js: "no-irregular-whitespace", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-negated-in-lhs", js: "no-negated-in-lhs", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-obj-calls", js: "no-obj-calls", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-prototype-builtins", js: "no-prototype-builtins", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-regex-spaces", js: "no-regex-spaces", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-sparse-arrays", js: "no-sparse-arrays", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-template-curly-in-string", js: "no-template-curly-in-string", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unexpected-multiline", js: "no-unexpected-multiline", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unreachable", js: "no-unreachable", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unsafe-finally", js: "no-unsafe-finally", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unsafe-negation", js: "no-unsafe-negation", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "use-isnan", js: "use-isnan", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "valid-jsdoc", js: "valid-jsdoc", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "valid-typeof", js: "valid-typeof", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "accessor-pairs", js: "accessor-pairs", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "array-callback-return", js: "array-callback-return", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "block-scoped-var", js: "block-scoped-var", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "class-methods-use-this", js: "class-methods-use-this", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "complexity", js: "complexity", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "consistent-return", js: "consistent-return", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "curly", js: "curly", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "default-case", js: "default-case", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "dot-location", js: "dot-location", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "dot-notation", js: "dot-notation", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "eqeqeq", js: "eqeqeq", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "guard-for-in", js: "guard-for-in", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-alert", js: "no-alert", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-caller", js: "no-caller", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-case-declarations", js: "no-case-declarations", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-div-regex", js: "no-div-regex", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-else-return", js: "no-else-return", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-empty-function", js: "no-empty-function", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-empty-pattern", js: "no-empty-pattern", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-eq-null", js: "no-eq-null", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-eval", js: "no-eval", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-extend-native", js: "no-extend-native", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-extra-bind", js: "no-extra-bind", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-extra-label", js: "no-extra-label", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-fallthrough", js: "no-fallthrough", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-floating-decimal", js: "no-floating-decimal", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-global-assign", js: "no-global-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-implicit-coercion", js: "no-implicit-coercion", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-implicit-globals", js: "no-implicit-globals", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-implied-eval", js: "no-implied-eval", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-invalid-this", js: "no-invalid-this", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-iterator", js: "no-iterator", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-labels", js: "no-labels", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-lone-blocks", js: "no-lone-blocks", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-loop-func", js: "no-loop-func", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-magic-numbers", js: "no-magic-numbers", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-multi-spaces", js: "no-multi-spaces", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-multi-str", js: "no-multi-str", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-native-reassign", js: "no-native-reassign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-new", js: "no-new", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-new-func", js: "no-new-func", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-new-wrappers", js: "no-new-wrappers", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-octal", js: "no-octal", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-octal-escape", js: "no-octal-escape", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-param-reassign", js: "no-param-reassign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-proto", js: "no-proto", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-redeclare", js: "no-redeclare", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-restricted-properties", js: "no-restricted-properties", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-return-assign", js: "no-return-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-return-await", js: "no-return-await", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-script-url", js: "no-script-url", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-self-assign", js: "no-self-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-self-compare", js: "no-self-compare", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-sequences", js: "no-sequences", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-throw-literal", js: "no-throw-literal", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unmodified-loop-condition", js: "no-unmodified-loop-condition", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unused-expressions", js: "no-unused-expressions", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unused-labels", js: "no-unused-labels", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-useless-call", js: "no-useless-call", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-useless-concat", js: "no-useless-concat", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-useless-escape", js: "no-useless-escape", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-useless-return", js: "no-useless-return", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-void", js: "no-void", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-warning-comments", js: "no-warning-comments", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-with", js: "no-with", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-promise-reject-errors", js: "prefer-promise-reject-errors", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "radix", js: "radix", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "require-await", js: "require-await", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "vars-on-top", js: "vars-on-top", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "wrap-iife", js: "wrap-iife", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "yoda", js: "yoda", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "strict", js: "strict", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "init-declarations", js: "init-declarations", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-catch-shadow", js: "no-catch-shadow", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-delete-var", js: "no-delete-var", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-label-var", js: "no-label-var", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-restricted-globals", js: "no-restricted-globals", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-shadow", js: "no-shadow", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-shadow-restricted-names", js: "no-shadow-restricted-names", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-undef", js: "no-undef", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-undef-init", js: "no-undef-init", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-undefined", js: "no-undefined", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unused-vars", js: "no-unused-vars", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-use-before-define", js: "no-use-before-define", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "callback-return", js: "callback-return", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "global-require", js: "global-require", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "handle-callback-err", js: "handle-callback-err", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-buffer-constructor", js: "no-buffer-constructor", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-mixed-requires", js: "no-mixed-requires", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-new-require", js: "no-new-require", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-path-concat", js: "no-path-concat", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-process-env", js: "no-process-env", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-process-exit", js: "no-process-exit", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-restricted-modules", js: "no-restricted-modules", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-sync", js: "no-sync", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "array-bracket-newline", js: "array-bracket-newline", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "array-bracket-spacing", js: "array-bracket-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "array-element-newline", js: "array-element-newline", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "block-spacing", js: "block-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "brace-style", js: "brace-style", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "camelcase", js: "camelcase", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "capitalized-comments", js: "capitalized-comments", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "comma-spacing", js: "comma-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "comma-style", js: "comma-style", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "computed-property-spacing", js: "computed-property-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "consistent-this", js: "consistent-this", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "eol-last", js: "eol-last", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "func-call-spacing", js: "func-call-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "func-name-matching", js: "func-name-matching", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "func-names", js: "func-names", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "func-style", js: "func-style", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "function-call-argument-newline", js: "function-call-argument-newline", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "function-paren-newline", js: "function-paren-newline", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "id-blacklist", js: "id-blacklist", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "id-length", js: "id-length", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "id-match", js: "id-match", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "implicit-arrow-linebreak", js: "implicit-arrow-linebreak", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "indent", js: "indent", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "indent-legacy", js: "indent-legacy", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "jsx-quotes", js: "jsx-quotes", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "key-spacing", js: "key-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "keyword-spacing", js: "keyword-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "line-comment-position", js: "line-comment-position", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "linebreak-style", js: "linebreak-style", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "lines-around-comment", js: "lines-around-comment", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "lines-around-directive", js: "lines-around-directive", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "lines-between-class-members", js: "lines-between-class-members", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "max-depth", js: "max-depth", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "max-len", js: "max-len", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "max-lines", js: "max-lines", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "max-nested-callbacks", js: "max-nested-callbacks", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "max-params", js: "max-params", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "max-statements", js: "max-statements", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "max-statements-per-line", js: "max-statements-per-line", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "multiline-comment-style", js: "multiline-comment-style", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "multiline-ternary", js: "multiline-ternary", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "new-cap", js: "new-cap", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "new-parens", js: "new-parens", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "newline-after-var", js: "newline-after-var", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "newline-before-return", js: "newline-before-return", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "newline-per-chained-call", js: "newline-per-chained-call", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-array-constructor", js: "no-array-constructor", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-bitwise", js: "no-bitwise", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-continue", js: "no-continue", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-inline-comments", js: "no-inline-comments", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-lonely-if", js: "no-lonely-if", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-mixed-operators", js: "no-mixed-operators", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-mixed-spaces-and-tabs", js: "no-mixed-spaces-and-tabs", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-multi-assign", js: "no-multi-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-multiple-empty-lines", js: "no-multiple-empty-lines", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-negated-condition", js: "no-negated-condition", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-nested-ternary", js: "no-nested-ternary", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-new-object", js: "no-new-object", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-plusplus", js: "no-plusplus", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-restricted-syntax", js: "no-restricted-syntax", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-spaced-func", js: "no-spaced-func", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-tabs", js: "no-tabs", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-ternary", js: "no-ternary", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-trailing-spaces", js: "no-trailing-spaces", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-underscore-dangle", js: "no-underscore-dangle", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-unneeded-ternary", js: "no-unneeded-ternary", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-whitespace-before-property", js: "no-whitespace-before-property", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "nonblock-statement-body-position", js: "nonblock-statement-body-position", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "object-curly-newline", js: "object-curly-newline", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "object-curly-spacing", js: "object-curly-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "object-property-newline", js: "object-property-newline", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "object-shorthand", js: "object-shorthand", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "one-var", js: "one-var", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "one-var-declaration-per-line", js: "one-var-declaration-per-line", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "operator-assignment", js: "operator-assignment", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "operator-linebreak", js: "operator-linebreak", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "padded-blocks", js: "padded-blocks", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "padding-line-between-statements", js: "padding-line-between-statements", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "quote-props", js: "quote-props", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "quotes", js: "quotes", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "require-jsdoc", js: "require-jsdoc", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "semi", js: "semi", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "semi-spacing", js: "semi-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "semi-style", js: "semi-style", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "sort-keys", js: "sort-keys", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "sort-vars", js: "sort-vars", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "space-before-blocks", js: "space-before-blocks", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "space-before-function-paren", js: "space-before-function-paren", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "space-in-parens", js: "space-in-parens", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "space-infix-ops", js: "space-infix-ops", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "space-unary-ops", js: "space-unary-ops", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "spaced-comment", js: "spaced-comment", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "switch-colon-spacing", js: "switch-colon-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "template-tag-spacing", js: "template-tag-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "unicode-bom", js: "unicode-bom", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "wrap-regex", js: "wrap-regex", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "arrow-body-style", js: "arrow-body-style", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "arrow-parens", js: "arrow-parens", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "arrow-spacing", js: "arrow-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "constructor-super", js: "constructor-super", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "generator-star-spacing", js: "generator-star-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-class-assign", js: "no-class-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-confusing-arrow", js: "no-confusing-arrow", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-const-assign", js: "no-const-assign", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-dupe-class-members", js: "no-dupe-class-members", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-duplicate-imports", js: "no-duplicate-imports", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-new-symbol", js: "no-new-symbol", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-restricted-imports", js: "no-restricted-imports", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-this-before-super", js: "no-this-before-super", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-useless-computed-key", js: "no-useless-computed-key", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-useless-constructor", js: "no-useless-constructor", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-useless-rename", js: "no-useless-rename", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "no-var", js: "no-var", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-arrow-callback", js: "prefer-arrow-callback", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-const", js: "prefer-const", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-destructuring", js: "prefer-destructuring", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-numeric-literals", js: "prefer-numeric-literals", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-reflect", js: "prefer-reflect", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-rest-params", js: "prefer-rest-params", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-spread", js: "prefer-spread", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "prefer-template", js: "prefer-template", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "require-yield", js: "require-yield", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "rest-spread-spacing", js: "rest-spread-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "sort-imports", js: "sort-imports", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "symbol-description", js: "symbol-description", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "template-curly-spacing", js: "template-curly-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
        { json: "yield-star-spacing", js: "yield-star-spacing", typ: u(undefined, u(a("any"), r("RuleEnum"), 0)) },
    ], "any"),
    "PurpleEsnext": o([
        { json: "browser", js: "browser", typ: u(undefined, "") },
        { json: "main", js: "main", typ: u(undefined, "") },
    ], ""),
    "PackageExportsEntryPackageExportsEntryObject": o([
        { json: "default", js: "default", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "import", js: "import", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "node", js: "node", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "require", js: "require", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "types", js: "types", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
    ], false),
    "PurplePackageExportsEntryObject": o([
        { json: ".", js: ".", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "default", js: "default", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "import", js: "import", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "node", js: "node", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "require", js: "require", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "types", js: "types", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
    ], false),
    "FundingWay": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: "" },
    ], false),
    "Jscpd": o([
        { json: "absolute", js: "absolute", typ: u(undefined, true) },
        { json: "blame", js: "blame", typ: u(undefined, true) },
        { json: "exitCode", js: "exitCode", typ: u(undefined, 0) },
        { json: "format", js: "format", typ: u(undefined, a(r("Format"))) },
        { json: "formatsExts", js: "formatsExts", typ: u(undefined, m(a(""))) },
        { json: "gitignore", js: "gitignore", typ: u(undefined, true) },
        { json: "ignore", js: "ignore", typ: u(undefined, a("")) },
        { json: "ignoreCase", js: "ignoreCase", typ: u(undefined, true) },
        { json: "ignorePattern", js: "ignorePattern", typ: u(undefined, a("")) },
        { json: "maxLines", js: "maxLines", typ: u(undefined, 0) },
        { json: "maxSize", js: "maxSize", typ: u(undefined, u(0, "")) },
        { json: "minLines", js: "minLines", typ: u(undefined, 0) },
        { json: "minTokens", js: "minTokens", typ: u(undefined, 0) },
        { json: "mode", js: "mode", typ: u(undefined, r("Mode")) },
        { json: "noSymLinks", js: "noSymLinks", typ: u(undefined, true) },
        { json: "output", js: "output", typ: u(undefined, "") },
        { json: "path", js: "path", typ: u(undefined, a("")) },
        { json: "pattern", js: "pattern", typ: u(undefined, "") },
        { json: "reporters", js: "reporters", typ: u(undefined, a(r("Reporter"))) },
        { json: "reportersOptions", js: "reportersOptions", typ: u(undefined, r("ReportersOptions")) },
        { json: "silent", js: "silent", typ: u(undefined, true) },
        { json: "skipLocal", js: "skipLocal", typ: u(undefined, true) },
        { json: "store", js: "store", typ: u(undefined, r("Store")) },
        { json: "threshold", js: "threshold", typ: u(undefined, 3.14) },
        { json: "verbose", js: "verbose", typ: u(undefined, true) },
    ], false),
    "ReportersOptions": o([
        { json: "badge", js: "badge", typ: u(undefined, r("Badge")) },
    ], false),
    "Badge": o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "icon", js: "icon", typ: u(undefined, "") },
        { json: "iconWidth", js: "iconWidth", typ: u(undefined, 3.14) },
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "labelColor", js: "labelColor", typ: u(undefined, "") },
        { json: "path", js: "path", typ: u(undefined, "") },
        { json: "scale", js: "scale", typ: u(undefined, 3.14) },
        { json: "status", js: "status", typ: u(undefined, "") },
        { json: "style", js: "style", typ: u(undefined, r("Style")) },
    ], false),
    "JSONSchemaForNPMPackageJSONFiles": o([
        { json: "author", js: "author", typ: u(undefined, u(r("PersonObject"), "")) },
        { json: "ava", js: "ava", typ: u(undefined, r("AVAConfigSchema")) },
        { json: "bin", js: "bin", typ: u(undefined, u(m(""), "")) },
        { json: "bugs", js: "bugs", typ: u(undefined, u(r("FluffyBugs"), "")) },
        { json: "bundledDependencies", js: "bundledDependencies", typ: u(undefined, u(a(""), true)) },
        { json: "bundleDependencies", js: "bundleDependencies", typ: u(undefined, u(a(""), true)) },
        { json: "config", js: "config", typ: u(undefined, m("any")) },
        { json: "contributors", js: "contributors", typ: u(undefined, a(u(r("PersonObject"), ""))) },
        { json: "cpu", js: "cpu", typ: u(undefined, a("")) },
        { json: "dependencies", js: "dependencies", typ: u(undefined, m("")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "devDependencies", js: "devDependencies", typ: u(undefined, m("")) },
        { json: "directories", js: "directories", typ: u(undefined, r("JSONSchemaForNPMPackageJSONFilesDirectories")) },
        { json: "dist", js: "dist", typ: u(undefined, r("JSONSchemaForNPMPackageJSONFilesDist")) },
        { json: "engines", js: "engines", typ: u(undefined, r("JSONSchemaForNPMPackageJSONFilesEngines")) },
        { json: "engineStrict", js: "engineStrict", typ: u(undefined, true) },
        { json: "eslintConfig", js: "eslintConfig", typ: u(undefined, r("JSONSchemaForESLintConfigurationFiles")) },
        { json: "esnext", js: "esnext", typ: u(undefined, u(r("FluffyEsnext"), "")) },
        { json: "exports", js: "exports", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("FluffyPackageExportsEntryObject"), null, "")) },
        { json: "files", js: "files", typ: u(undefined, a("")) },
        { json: "funding", js: "funding", typ: u(undefined, u(a(u(r("FundingWay"), "")), r("FundingWay"), "")) },
        { json: "homepage", js: "homepage", typ: u(undefined, "") },
        { json: "jscpd", js: "jscpd", typ: u(undefined, r("Jscpd")) },
        { json: "jspm", js: "jspm", typ: u(undefined, r("JSONSchemaForNPMPackageJSONFiles")) },
        { json: "keywords", js: "keywords", typ: u(undefined, a("")) },
        { json: "license", js: "license", typ: u(undefined, "") },
        { json: "licenses", js: "licenses", typ: u(undefined, a(r("JSONSchemaForNPMPackageJSONFilesLicense"))) },
        { json: "main", js: "main", typ: u(undefined, "") },
        { json: "maintainers", js: "maintainers", typ: u(undefined, a(u(r("PersonObject"), ""))) },
        { json: "man", js: "man", typ: u(undefined, u(a(""), "")) },
        { json: "module", js: "module", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "optionalDependencies", js: "optionalDependencies", typ: u(undefined, m("")) },
        { json: "os", js: "os", typ: u(undefined, a("")) },
        { json: "overrides", js: "overrides", typ: u(undefined, m("any")) },
        { json: "packageManager", js: "packageManager", typ: u(undefined, "") },
        { json: "peerDependencies", js: "peerDependencies", typ: u(undefined, m("")) },
        { json: "peerDependenciesMeta", js: "peerDependenciesMeta", typ: u(undefined, m(r("JSONSchemaForNPMPackageJSONFilesPeerDependenciesMeta"))) },
        { json: "preferGlobal", js: "preferGlobal", typ: u(undefined, true) },
        { json: "prettier", js: "prettier", typ: u(undefined, u(r("SchemaForPrettierrcObject"), "")) },
        { json: "private", js: "private", typ: u(undefined, u(true, r("PrivateEnum"))) },
        { json: "publishConfig", js: "publishConfig", typ: u(undefined, r("JSONSchemaForNPMPackageJSONFilesPublishConfig")) },
        { json: "readme", js: "readme", typ: u(undefined, "") },
        { json: "release", js: "release", typ: u(undefined, r("SemanticReleaseSchema")) },
        { json: "repository", js: "repository", typ: u(undefined, u(r("PurpleRepository"), "")) },
        { json: "resolutions", js: "resolutions", typ: u(undefined, m("any")) },
        { json: "scripts", js: "scripts", typ: u(undefined, r("JSONSchemaForNPMPackageJSONFilesScripts")) },
        { json: "stylelint", js: "stylelint", typ: u(undefined, r("JSONSchemaForTheStylelintConfigurationFiles")) },
        { json: "type", js: "type", typ: u(undefined, r("Type")) },
        { json: "types", js: "types", typ: u(undefined, "") },
        { json: "typesVersions", js: "typesVersions", typ: u(undefined, m(r("JSONSchemaForNPMPackageJSONFilesTypesVersion"))) },
        { json: "typings", js: "typings", typ: u(undefined, "") },
        { json: "version", js: "version", typ: u(undefined, "") },
        { json: "workspaces", js: "workspaces", typ: u(undefined, u(a(""), r("PurpleWorkspaces"))) },
    ], "any"),
    "FluffyBugs": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "JSONSchemaForNPMPackageJSONFilesDirectories": o([
        { json: "bin", js: "bin", typ: u(undefined, "") },
        { json: "doc", js: "doc", typ: u(undefined, "") },
        { json: "example", js: "example", typ: u(undefined, "") },
        { json: "lib", js: "lib", typ: u(undefined, "") },
        { json: "man", js: "man", typ: u(undefined, "") },
        { json: "test", js: "test", typ: u(undefined, "") },
    ], "any"),
    "JSONSchemaForNPMPackageJSONFilesDist": o([
        { json: "shasum", js: "shasum", typ: u(undefined, "") },
        { json: "tarball", js: "tarball", typ: u(undefined, "") },
    ], "any"),
    "JSONSchemaForNPMPackageJSONFilesEngines": o([
        { json: "node", js: "node", typ: u(undefined, "") },
    ], ""),
    "FluffyEsnext": o([
        { json: "browser", js: "browser", typ: u(undefined, "") },
        { json: "main", js: "main", typ: u(undefined, "") },
    ], ""),
    "FluffyPackageExportsEntryObject": o([
        { json: ".", js: ".", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "default", js: "default", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "import", js: "import", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "node", js: "node", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "require", js: "require", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
        { json: "types", js: "types", typ: u(undefined, u(a(u(r("PackageExportsEntryPackageExportsEntryObject"), null, "")), r("PackageExportsEntryPackageExportsEntryObject"), null, "")) },
    ], false),
    "JSONSchemaForNPMPackageJSONFilesLicense": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "JSONSchemaForNPMPackageJSONFilesPeerDependenciesMeta": o([
        { json: "optional", js: "optional", typ: u(undefined, true) },
    ], "any"),
    "SchemaForPrettierrcObject": o([
        { json: "arrowParens", js: "arrowParens", typ: u(undefined, r("ArrowParens")) },
        { json: "bracketSameLine", js: "bracketSameLine", typ: u(undefined, true) },
        { json: "bracketSpacing", js: "bracketSpacing", typ: u(undefined, true) },
        { json: "cursorOffset", js: "cursorOffset", typ: u(undefined, 0) },
        { json: "editorconfig", js: "editorconfig", typ: u(undefined, true) },
        { json: "embeddedLanguageFormatting", js: "embeddedLanguageFormatting", typ: u(undefined, r("EmbeddedLanguageFormatting")) },
        { json: "endOfLine", js: "endOfLine", typ: u(undefined, r("EndOfLine")) },
        { json: "filepath", js: "filepath", typ: u(undefined, "") },
        { json: "htmlWhitespaceSensitivity", js: "htmlWhitespaceSensitivity", typ: u(undefined, r("HTMLWhitespaceSensitivity")) },
        { json: "insertPragma", js: "insertPragma", typ: u(undefined, true) },
        { json: "jsxSingleQuote", js: "jsxSingleQuote", typ: u(undefined, true) },
        { json: "parser", js: "parser", typ: u(undefined, "") },
        { json: "plugins", js: "plugins", typ: u(undefined, a("")) },
        { json: "pluginSearchDirs", js: "pluginSearchDirs", typ: u(undefined, u(a(""), true)) },
        { json: "printWidth", js: "printWidth", typ: u(undefined, 0) },
        { json: "proseWrap", js: "proseWrap", typ: u(undefined, r("ProseWrap")) },
        { json: "quoteProps", js: "quoteProps", typ: u(undefined, r("QuoteProps")) },
        { json: "rangeEnd", js: "rangeEnd", typ: u(undefined, 0) },
        { json: "rangeStart", js: "rangeStart", typ: u(undefined, 0) },
        { json: "requirePragma", js: "requirePragma", typ: u(undefined, true) },
        { json: "semi", js: "semi", typ: u(undefined, true) },
        { json: "singleAttributePerLine", js: "singleAttributePerLine", typ: u(undefined, true) },
        { json: "singleQuote", js: "singleQuote", typ: u(undefined, true) },
        { json: "tabWidth", js: "tabWidth", typ: u(undefined, 0) },
        { json: "trailingComma", js: "trailingComma", typ: u(undefined, r("TrailingComma")) },
        { json: "useTabs", js: "useTabs", typ: u(undefined, true) },
        { json: "vueIndentScriptAndStyle", js: "vueIndentScriptAndStyle", typ: u(undefined, true) },
        { json: "overrides", js: "overrides", typ: u(undefined, a(r("SchemaForPrettierrcOverride"))) },
    ], "any"),
    "SchemaForPrettierrcOverride": o([
        { json: "excludeFiles", js: "excludeFiles", typ: u(undefined, u(a(""), "")) },
        { json: "files", js: "files", typ: u(a(""), "") },
        { json: "options", js: "options", typ: u(undefined, r("Options")) },
    ], false),
    "Options": o([
        { json: "arrowParens", js: "arrowParens", typ: u(undefined, r("ArrowParens")) },
        { json: "bracketSameLine", js: "bracketSameLine", typ: u(undefined, true) },
        { json: "bracketSpacing", js: "bracketSpacing", typ: u(undefined, true) },
        { json: "cursorOffset", js: "cursorOffset", typ: u(undefined, 0) },
        { json: "editorconfig", js: "editorconfig", typ: u(undefined, true) },
        { json: "embeddedLanguageFormatting", js: "embeddedLanguageFormatting", typ: u(undefined, r("EmbeddedLanguageFormatting")) },
        { json: "endOfLine", js: "endOfLine", typ: u(undefined, r("EndOfLine")) },
        { json: "filepath", js: "filepath", typ: u(undefined, "") },
        { json: "htmlWhitespaceSensitivity", js: "htmlWhitespaceSensitivity", typ: u(undefined, r("HTMLWhitespaceSensitivity")) },
        { json: "insertPragma", js: "insertPragma", typ: u(undefined, true) },
        { json: "jsxSingleQuote", js: "jsxSingleQuote", typ: u(undefined, true) },
        { json: "parser", js: "parser", typ: u(undefined, "") },
        { json: "plugins", js: "plugins", typ: u(undefined, a("")) },
        { json: "pluginSearchDirs", js: "pluginSearchDirs", typ: u(undefined, u(a(""), true)) },
        { json: "printWidth", js: "printWidth", typ: u(undefined, 0) },
        { json: "proseWrap", js: "proseWrap", typ: u(undefined, r("ProseWrap")) },
        { json: "quoteProps", js: "quoteProps", typ: u(undefined, r("QuoteProps")) },
        { json: "rangeEnd", js: "rangeEnd", typ: u(undefined, 0) },
        { json: "rangeStart", js: "rangeStart", typ: u(undefined, 0) },
        { json: "requirePragma", js: "requirePragma", typ: u(undefined, true) },
        { json: "semi", js: "semi", typ: u(undefined, true) },
        { json: "singleAttributePerLine", js: "singleAttributePerLine", typ: u(undefined, true) },
        { json: "singleQuote", js: "singleQuote", typ: u(undefined, true) },
        { json: "tabWidth", js: "tabWidth", typ: u(undefined, 0) },
        { json: "trailingComma", js: "trailingComma", typ: u(undefined, r("TrailingComma")) },
        { json: "useTabs", js: "useTabs", typ: u(undefined, true) },
        { json: "vueIndentScriptAndStyle", js: "vueIndentScriptAndStyle", typ: u(undefined, true) },
    ], "any"),
    "JSONSchemaForNPMPackageJSONFilesPublishConfig": o([
        { json: "access", js: "access", typ: u(undefined, r("Access")) },
        { json: "registry", js: "registry", typ: u(undefined, "") },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "SemanticReleaseSchema": o([
        { json: "branches", js: "branches", typ: u(undefined, u(a(u(r("BranchObject"), "")), r("BranchObject"), "")) },
        { json: "ci", js: "ci", typ: u(undefined, true) },
        { json: "dryRun", js: "dryRun", typ: u(undefined, true) },
        { json: "extends", js: "extends", typ: u(undefined, u(a(""), "")) },
        { json: "plugins", js: "plugins", typ: u(undefined, a(u(a("any"), ""))) },
        { json: "repositoryUrl", js: "repositoryUrl", typ: u(undefined, "") },
        { json: "tagFormat", js: "tagFormat", typ: u(undefined, "") },
    ], "any"),
    "BranchObject": o([
        { json: "channel", js: "channel", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "prerelease", js: "prerelease", typ: u(undefined, u(true, "")) },
        { json: "range", js: "range", typ: u(undefined, "") },
    ], false),
    "PurpleRepository": o([
        { json: "directory", js: "directory", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "JSONSchemaForNPMPackageJSONFilesScripts": o([
        { json: "install", js: "install", typ: u(undefined, "") },
        { json: "lint", js: "lint", typ: u(undefined, "") },
        { json: "postinstall", js: "postinstall", typ: u(undefined, "") },
        { json: "postpack", js: "postpack", typ: u(undefined, "") },
        { json: "postpublish", js: "postpublish", typ: u(undefined, "") },
        { json: "postrestart", js: "postrestart", typ: u(undefined, "") },
        { json: "poststart", js: "poststart", typ: u(undefined, "") },
        { json: "poststop", js: "poststop", typ: u(undefined, "") },
        { json: "posttest", js: "posttest", typ: u(undefined, "") },
        { json: "postuninstall", js: "postuninstall", typ: u(undefined, "") },
        { json: "postversion", js: "postversion", typ: u(undefined, "") },
        { json: "preinstall", js: "preinstall", typ: u(undefined, "") },
        { json: "prepack", js: "prepack", typ: u(undefined, "") },
        { json: "prepare", js: "prepare", typ: u(undefined, "") },
        { json: "prepublish", js: "prepublish", typ: u(undefined, "") },
        { json: "prepublishOnly", js: "prepublishOnly", typ: u(undefined, "") },
        { json: "prerestart", js: "prerestart", typ: u(undefined, "") },
        { json: "prestart", js: "prestart", typ: u(undefined, "") },
        { json: "prestop", js: "prestop", typ: u(undefined, "") },
        { json: "pretest", js: "pretest", typ: u(undefined, "") },
        { json: "preuninstall", js: "preuninstall", typ: u(undefined, "") },
        { json: "preversion", js: "preversion", typ: u(undefined, "") },
        { json: "publish", js: "publish", typ: u(undefined, "") },
        { json: "restart", js: "restart", typ: u(undefined, "") },
        { json: "serve", js: "serve", typ: u(undefined, "") },
        { json: "start", js: "start", typ: u(undefined, "") },
        { json: "stop", js: "stop", typ: u(undefined, "") },
        { json: "test", js: "test", typ: u(undefined, "") },
        { json: "uninstall", js: "uninstall", typ: u(undefined, "") },
        { json: "version", js: "version", typ: u(undefined, "") },
    ], ""),
    "JSONSchemaForTheStylelintConfigurationFiles": o([
        { json: "customSyntax", js: "customSyntax", typ: u(undefined, "") },
        { json: "defaultSeverity", js: "defaultSeverity", typ: u(undefined, r("Severity")) },
        { json: "extends", js: "extends", typ: u(undefined, u(a(""), "")) },
        { json: "ignoreDisables", js: "ignoreDisables", typ: u(undefined, true) },
        { json: "ignoreFiles", js: "ignoreFiles", typ: u(undefined, u(a(""), "")) },
        { json: "overrides", js: "overrides", typ: u(undefined, a(r("OverrideObject"))) },
        { json: "plugins", js: "plugins", typ: u(undefined, a("")) },
        { json: "processors", js: "processors", typ: u(undefined, a(u(a(""), ""))) },
        { json: "reportDescriptionlessDisables", js: "reportDescriptionlessDisables", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "reportInvalidScopeDisables", js: "reportInvalidScopeDisables", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "reportNeedlessDisables", js: "reportNeedlessDisables", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "rules", js: "rules", typ: u(undefined, r("AllRules")) },
    ], "any"),
    "OverrideObject": o([
        { json: "customSyntax", js: "customSyntax", typ: u(undefined, "") },
        { json: "files", js: "files", typ: u(undefined, a("")) },
        { json: "rules", js: "rules", typ: u(undefined, r("AllRules")) },
    ], "any"),
    "AllRules": o([
        { json: "at-rule-blacklist", js: "at-rule-blacklist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "at-rule-empty-line-before", js: "at-rule-empty-line-before", typ: u(undefined, u(a(u(r("AtRuleEmptyLineBeforeFundingURL"), r("AtRuleEmptyLineBeforeObject"))), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "at-rule-name-case", js: "at-rule-name-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "at-rule-name-newline-after", js: "at-rule-name-newline-after", typ: u(undefined, u(a(u(r("AlwaysMultiLineRuleObject"), "")), r("AlwaysMultiLineRuleFundingURL"), null)) },
        { json: "at-rule-name-space-after", js: "at-rule-name-space-after", typ: u(undefined, u(a(u(r("AtRuleNameSpaceAfterObject"), "")), r("AtRuleNameSpaceAfterFundingURL"), null)) },
        { json: "at-rule-no-unknown", js: "at-rule-no-unknown", typ: u(undefined, u(a(u(true, r("AtRuleNoUnknownObject"))), true, null)) },
        { json: "at-rule-no-vendor-prefix", js: "at-rule-no-vendor-prefix", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "at-rule-semicolon-newline-after", js: "at-rule-semicolon-newline-after", typ: u(undefined, u(a(u(r("AtRuleSemicolonNewlineAfterObject"), "")), r("AtRuleSemicolonNewlineAfterFundingURL"), null)) },
        { json: "at-rule-whitelist", js: "at-rule-whitelist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "block-closing-brace-empty-line-before", js: "block-closing-brace-empty-line-before", typ: u(undefined, u(a(u(r("BlockClosingBraceEmptyLineBeforeObject"), "")), r("BlockClosingBraceEmptyLineBeforeFundingURL"), null)) },
        { json: "block-closing-brace-newline-after", js: "block-closing-brace-newline-after", typ: u(undefined, u(a(u(r("BlockOpeningBraceNewlineBeforeFundingURL"), r("NewlineSpaceWithIgnoreRuleObject"))), r("NewlineSpaceRuleFundingURL"), null)) },
        { json: "block-closing-brace-newline-before", js: "block-closing-brace-newline-before", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "block-closing-brace-space-after", js: "block-closing-brace-space-after", typ: u(undefined, u(a(u(r("NewlineSpaceRuleObject"), "")), r("NewlineSpaceRuleFundingURL"), null)) },
        { json: "block-closing-brace-space-before", js: "block-closing-brace-space-before", typ: u(undefined, u(a(u(r("NewlineSpaceRuleObject"), "")), r("NewlineSpaceRuleFundingURL"), null)) },
        { json: "block-no-empty", js: "block-no-empty", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "block-no-single-line", js: "block-no-single-line", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "block-opening-brace-newline-after", js: "block-opening-brace-newline-after", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "block-opening-brace-newline-before", js: "block-opening-brace-newline-before", typ: u(undefined, u(a(u(r("BlockOpeningBraceNewlineBeforeObject"), "")), r("BlockOpeningBraceNewlineBeforeFundingURL"), null)) },
        { json: "block-opening-brace-space-after", js: "block-opening-brace-space-after", typ: u(undefined, u(a(u(r("NewlineSpaceRuleObject"), "")), r("NewlineSpaceRuleFundingURL"), null)) },
        { json: "block-opening-brace-space-before", js: "block-opening-brace-space-before", typ: u(undefined, u(a(u(r("BlockOpeningBraceNewlineBeforeFundingURL"), r("NewlineSpaceWithIgnoreRuleObject"))), r("NewlineSpaceRuleFundingURL"), null)) },
        { json: "color-hex-case", js: "color-hex-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "color-hex-length", js: "color-hex-length", typ: u(undefined, u(a(u(r("ColorHexLengthObject"), "")), r("ColorHexLengthFundingURL"), null)) },
        { json: "color-named", js: "color-named", typ: u(undefined, u(a(u(r("ColorNamedFundingURL"), r("ColorNamedObject"))), r("ColorNamedFundingURL"), null)) },
        { json: "color-no-hex", js: "color-no-hex", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "color-no-invalid-hex", js: "color-no-invalid-hex", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "comment-empty-line-before", js: "comment-empty-line-before", typ: u(undefined, u(a(u(r("AtRuleEmptyLineBeforeFundingURL"), r("CommentEmptyLineBeforeObject"))), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "comment-no-empty", js: "comment-no-empty", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "comment-whitespace-inside", js: "comment-whitespace-inside", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "comment-word-blacklist", js: "comment-word-blacklist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "custom-media-pattern", js: "custom-media-pattern", typ: u(undefined, u(a(u(r("StringRuleObject"), "")), null, "")) },
        { json: "custom-property-empty-line-before", js: "custom-property-empty-line-before", typ: u(undefined, u(a(u(r("AtRuleEmptyLineBeforeFundingURL"), r("CustomPropertyEmptyLineBeforeObject"))), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "custom-property-no-outside-root", js: "custom-property-no-outside-root", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "custom-property-pattern", js: "custom-property-pattern", typ: u(undefined, u(a(u(r("StringRuleObject"), "")), null, "")) },
        { json: "declaration-bang-space-after", js: "declaration-bang-space-after", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "declaration-bang-space-before", js: "declaration-bang-space-before", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "declaration-colon-newline-after", js: "declaration-colon-newline-after", typ: u(undefined, u(a(u(r("AlwaysMultiLineRuleObject"), "")), r("AlwaysMultiLineRuleFundingURL"), null)) },
        { json: "declaration-colon-space-after", js: "declaration-colon-space-after", typ: u(undefined, u(a(u(r("DeclarationColonSpaceAfterObject"), "")), r("DeclarationColonSpaceAfterFundingURL"), null)) },
        { json: "declaration-colon-space-before", js: "declaration-colon-space-before", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "declaration-empty-line-before", js: "declaration-empty-line-before", typ: u(undefined, u(a(u(r("AtRuleEmptyLineBeforeFundingURL"), r("DeclarationEmptyLineBeforeObject"))), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "declaration-no-important", js: "declaration-no-important", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "declaration-property-unit-blacklist", js: "declaration-property-unit-blacklist", typ: u(undefined, u(a(r("ObjectRuleElement")), m(a("")), null)) },
        { json: "declaration-property-unit-whitelist", js: "declaration-property-unit-whitelist", typ: u(undefined, u(a(r("ObjectRuleElement")), m(a("")), null)) },
        { json: "declaration-property-value-blacklist", js: "declaration-property-value-blacklist", typ: u(undefined, u(a(r("ObjectRuleElement")), m(a("")), null)) },
        { json: "declaration-property-value-whitelist", js: "declaration-property-value-whitelist", typ: u(undefined, u(a(r("ObjectRuleElement")), m(a("")), null)) },
        { json: "declaration-block-no-duplicate-properties", js: "declaration-block-no-duplicate-properties", typ: u(undefined, u(a(u(true, r("DeclarationBlockNoDuplicatePropertyObject"))), true, null)) },
        { json: "declaration-block-no-ignored-properties", js: "declaration-block-no-ignored-properties", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "declaration-block-no-redundant-longhand-properties", js: "declaration-block-no-redundant-longhand-properties", typ: u(undefined, u(a(u(true, r("DeclarationBlockNoRedundantLonghandPropertyObject"))), true, null)) },
        { json: "declaration-block-no-shorthand-property-overrides", js: "declaration-block-no-shorthand-property-overrides", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "declaration-block-properties-order", js: "declaration-block-properties-order", typ: u(undefined, u(a(u(a(""), r("DeclarationBlockPropertiesOrderObject"), "")), r("DeclarationBlockPropertiesOrderFundingURL"), null)) },
        { json: "declaration-block-semicolon-newline-after", js: "declaration-block-semicolon-newline-after", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "declaration-block-semicolon-newline-before", js: "declaration-block-semicolon-newline-before", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "declaration-block-semicolon-space-after", js: "declaration-block-semicolon-space-after", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "declaration-block-semicolon-space-before", js: "declaration-block-semicolon-space-before", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "declaration-block-single-line-max-declarations", js: "declaration-block-single-line-max-declarations", typ: u(undefined, u(a(u(0, r("IntegerRuleObject"))), 0, null)) },
        { json: "declaration-block-trailing-semicolon", js: "declaration-block-trailing-semicolon", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "font-family-name-quotes", js: "font-family-name-quotes", typ: u(undefined, u(a(u(r("FontFamilyNameQuoteObject"), "")), r("FontFamilyNameQuotesFundingURL"), null)) },
        { json: "font-weight-notation", js: "font-weight-notation", typ: u(undefined, u(a(u(r("FontWeightNotationFundingURL"), r("FontWeightNotationObject"))), r("FontWeightNotationFundingURL"), null)) },
        { json: "function-blacklist", js: "function-blacklist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "function-calc-no-unspaced-operator", js: "function-calc-no-unspaced-operator", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "function-comma-newline-after", js: "function-comma-newline-after", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "function-comma-newline-before", js: "function-comma-newline-before", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "function-comma-space-after", js: "function-comma-space-after", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "function-comma-space-before", js: "function-comma-space-before", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "function-linear-gradient-no-nonstandard-direction", js: "function-linear-gradient-no-nonstandard-direction", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "function-max-empty-lines", js: "function-max-empty-lines", typ: u(undefined, u(a(u(0, r("IntegerRuleObject"))), 0, null)) },
        { json: "function-name-case", js: "function-name-case", typ: u(undefined, u(a(u(r("LowerUpperRuleFundingURL"), r("FunctionNameCaseObject"))), r("LowerUpperRuleFundingURL"), null)) },
        { json: "function-parentheses-newline-inside", js: "function-parentheses-newline-inside", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "function-parentheses-space-inside", js: "function-parentheses-space-inside", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "function-url-data-uris", js: "function-url-data-uris", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "function-url-no-scheme-relative", js: "function-url-no-scheme-relative", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "function-url-quotes", js: "function-url-quotes", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "function-url-scheme-whitelist", js: "function-url-scheme-whitelist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "function-whitelist", js: "function-whitelist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "function-whitespace-after", js: "function-whitespace-after", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "indentation", js: "indentation", typ: u(undefined, u(a(u(r("IndentationFundingURL"), 0, r("IndentationObject"))), r("IndentationFundingURL"), 0, null)) },
        { json: "max-empty-lines", js: "max-empty-lines", typ: u(undefined, u(a(u(0, r("IntegerRuleObject"))), 0, null)) },
        { json: "max-line-length", js: "max-line-length", typ: u(undefined, u(a(u(0, r("MaxLineLengthObject"))), 0, null)) },
        { json: "max-nesting-depth", js: "max-nesting-depth", typ: u(undefined, u(a(u(0, r("MaxNestingDepthObject"))), 0, null)) },
        { json: "no-browser-hacks", js: "no-browser-hacks", typ: u(undefined, u(a(u(true, r("NoBrowserHackObject"))), true, null)) },
        { json: "no-descending-specificity", js: "no-descending-specificity", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "no-duplicate-selectors", js: "no-duplicate-selectors", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "no-empty-source", js: "no-empty-source", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "no-eol-whitespace", js: "no-eol-whitespace", typ: u(undefined, u(a(u(true, r("NoEOLWhitespaceObject"))), true, null)) },
        { json: "no-extra-semicolons", js: "no-extra-semicolons", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "no-indistinguishable-colors", js: "no-indistinguishable-colors", typ: u(undefined, u(a(u(true, r("NoIndistinguishableColorObject"))), true, null)) },
        { json: "no-invalid-double-slash-comments", js: "no-invalid-double-slash-comments", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "no-missing-end-of-source-newline", js: "no-missing-end-of-source-newline", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "no-unknown-animations", js: "no-unknown-animations", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "no-unsupported-browser-features", js: "no-unsupported-browser-features", typ: u(undefined, u(a(u(true, r("NoUnsupportedBrowserFeatureObject"))), true, null)) },
        { json: "unicode-bom", js: "unicode-bom", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "keyframe-declaration-no-important", js: "keyframe-declaration-no-important", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "length-zero-no-unit", js: "length-zero-no-unit", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "media-feature-colon-space-after", js: "media-feature-colon-space-after", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "media-feature-colon-space-before", js: "media-feature-colon-space-before", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "media-feature-name-case", js: "media-feature-name-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "media-feature-name-no-unknown", js: "media-feature-name-no-unknown", typ: u(undefined, u(a(u(true, r("MediaFeatureNameNoUnknownObject"))), true, null)) },
        { json: "media-feature-name-no-vendor-prefix", js: "media-feature-name-no-vendor-prefix", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "media-feature-no-missing-punctuation", js: "media-feature-no-missing-punctuation", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "media-feature-parentheses-space-inside", js: "media-feature-parentheses-space-inside", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "media-feature-range-operator-space-after", js: "media-feature-range-operator-space-after", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "media-feature-range-operator-space-before", js: "media-feature-range-operator-space-before", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "media-query-list-comma-newline-after", js: "media-query-list-comma-newline-after", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "media-query-list-comma-newline-before", js: "media-query-list-comma-newline-before", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "media-query-list-comma-space-after", js: "media-query-list-comma-space-after", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "media-query-list-comma-space-before", js: "media-query-list-comma-space-before", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "number-leading-zero", js: "number-leading-zero", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "number-max-precision", js: "number-max-precision", typ: u(undefined, u(a(u(0, r("IntegerRuleObject"))), 0, null)) },
        { json: "number-no-trailing-zeros", js: "number-no-trailing-zeros", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "property-blacklist", js: "property-blacklist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "property-case", js: "property-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "property-no-unknown", js: "property-no-unknown", typ: u(undefined, u(a(u(true, r("PropertyNoUnknownObject"))), true, null)) },
        { json: "property-no-vendor-prefix", js: "property-no-vendor-prefix", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "property-whitelist", js: "property-whitelist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "root-no-standard-properties", js: "root-no-standard-properties", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "rule-nested-empty-line-before", js: "rule-nested-empty-line-before", typ: u(undefined, u(a(u(r("RuleNestedEmptyLineBeforeFundingURL"), r("RuleNestedEmptyLineBeforeObject"))), r("RuleNestedEmptyLineBeforeFundingURL"), null)) },
        { json: "rule-non-nested-empty-line-before", js: "rule-non-nested-empty-line-before", typ: u(undefined, u(a(u(r("RuleNestedEmptyLineBeforeFundingURL"), r("RuleNonNestedEmptyLineBeforeObject"))), r("RuleNestedEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-attribute-brackets-space-inside", js: "selector-attribute-brackets-space-inside", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-attribute-operator-blacklist", js: "selector-attribute-operator-blacklist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "selector-attribute-operator-space-after", js: "selector-attribute-operator-space-after", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-attribute-operator-space-before", js: "selector-attribute-operator-space-before", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-attribute-operator-whitelist", js: "selector-attribute-operator-whitelist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "selector-attribute-quotes", js: "selector-attribute-quotes", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-class-pattern", js: "selector-class-pattern", typ: u(undefined, u(a(u(r("SelectorClassPatternObject"), "")), null, "")) },
        { json: "selector-combinator-space-after", js: "selector-combinator-space-after", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-combinator-space-before", js: "selector-combinator-space-before", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-descendant-combinator-no-non-space", js: "selector-descendant-combinator-no-non-space", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "selector-id-pattern", js: "selector-id-pattern", typ: u(undefined, u(a(u(r("StringRuleObject"), "")), null, "")) },
        { json: "selector-max-compound-selectors", js: "selector-max-compound-selectors", typ: u(undefined, u(a(u(0, r("IntegerRuleObject"))), 0, null)) },
        { json: "selector-max-empty-lines", js: "selector-max-empty-lines", typ: u(undefined, u(a(u(0, r("IntegerRuleObject"))), 0, null)) },
        { json: "selector-max-specificity", js: "selector-max-specificity", typ: u(undefined, u(a(u(r("StringRuleObject"), "")), null, "")) },
        { json: "selector-nested-pattern", js: "selector-nested-pattern", typ: u(undefined, u(a(u(r("StringRuleObject"), "")), null, "")) },
        { json: "selector-no-attribute", js: "selector-no-attribute", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "selector-no-combinator", js: "selector-no-combinator", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "selector-no-id", js: "selector-no-id", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "selector-no-qualifying-type", js: "selector-no-qualifying-type", typ: u(undefined, u(a(u(true, r("SelectorNoQualifyingTypeObject"))), true, null)) },
        { json: "selector-no-type", js: "selector-no-type", typ: u(undefined, u(a(u(true, r("SelectorNoTypeObject"))), true, null)) },
        { json: "selector-no-universal", js: "selector-no-universal", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "selector-no-vendor-prefix", js: "selector-no-vendor-prefix", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "selector-pseudo-class-case", js: "selector-pseudo-class-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "selector-pseudo-class-no-unknown", js: "selector-pseudo-class-no-unknown", typ: u(undefined, u(a(u(true, r("SelectorPseudoClassNoUnknownObject"))), true, null)) },
        { json: "selector-pseudo-class-parentheses-space-inside", js: "selector-pseudo-class-parentheses-space-inside", typ: u(undefined, u(a(u(r("AlwaysNeverRuleObject"), "")), r("AtRuleEmptyLineBeforeFundingURL"), null)) },
        { json: "selector-pseudo-class-whitelist", js: "selector-pseudo-class-whitelist", typ: u(undefined, u(a(u(a("any"), r("ArrayStringRuleObject"), "")), null, "")) },
        { json: "selector-pseudo-element-case", js: "selector-pseudo-element-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "selector-pseudo-element-colon-notation", js: "selector-pseudo-element-colon-notation", typ: u(undefined, u(a(u(r("SingleDoubleRuleObject"), "")), r("SingleDoubleRuleFundingURL"), null)) },
        { json: "selector-pseudo-element-no-unknown", js: "selector-pseudo-element-no-unknown", typ: u(undefined, u(a(u(true, r("SelectorPseudoElementNoUnknownObject"))), true, null)) },
        { json: "selector-root-no-composition", js: "selector-root-no-composition", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "selector-type-case", js: "selector-type-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "selector-type-no-unknown", js: "selector-type-no-unknown", typ: u(undefined, u(a(u(true, r("SelectorTypeNoUnknownObject"))), true, null)) },
        { json: "selector-list-comma-newline-after", js: "selector-list-comma-newline-after", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "selector-list-comma-newline-before", js: "selector-list-comma-newline-before", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "selector-list-comma-space-after", js: "selector-list-comma-space-after", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "selector-list-comma-space-before", js: "selector-list-comma-space-before", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "shorthand-property-no-redundant-values", js: "shorthand-property-no-redundant-values", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "string-no-newline", js: "string-no-newline", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "string-quotes", js: "string-quotes", typ: u(undefined, u(a(u(r("SingleDoubleRuleObject"), "")), r("SingleDoubleRuleFundingURL"), null)) },
        { json: "stylelint-disable-reason", js: "stylelint-disable-reason", typ: u(undefined, u(a(u(r("StylelintDisableReasonObject"), "")), r("StylelintDisableReasonFundingURL"), null)) },
        { json: "time-no-imperceptible", js: "time-no-imperceptible", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "unit-blacklist", js: "unit-blacklist", typ: u(undefined, u(a(u(a(r("UnitRuleFundingURL")), r("UnitRuleFundingURL"), r("UnitRuleObject"))), r("UnitRuleFundingURL"), null)) },
        { json: "unit-case", js: "unit-case", typ: u(undefined, u(a(u(r("LowerUpperRuleObject"), "")), r("LowerUpperRuleFundingURL"), null)) },
        { json: "unit-no-unknown", js: "unit-no-unknown", typ: u(undefined, u(a(u(true, r("UnitNoUnknownObject"))), true, null)) },
        { json: "unit-whitelist", js: "unit-whitelist", typ: u(undefined, u(a(u(a(r("UnitRuleFundingURL")), r("UnitRuleFundingURL"), r("UnitRuleObject"))), r("UnitRuleFundingURL"), null)) },
        { json: "value-keyword-case", js: "value-keyword-case", typ: u(undefined, u(a(u(r("LowerUpperRuleFundingURL"), r("ValueKeywordCaseObject"))), r("LowerUpperRuleFundingURL"), null)) },
        { json: "value-no-vendor-prefix", js: "value-no-vendor-prefix", typ: u(undefined, u(a(u(true, r("BooleanRuleObject"))), true, null)) },
        { json: "value-list-comma-newline-after", js: "value-list-comma-newline-after", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "value-list-comma-newline-before", js: "value-list-comma-newline-before", typ: u(undefined, u(a(u(r("NewlineRuleObject"), "")), r("NewlineRuleFundingURL"), null)) },
        { json: "value-list-comma-space-after", js: "value-list-comma-space-after", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "value-list-comma-space-before", js: "value-list-comma-space-before", typ: u(undefined, u(a(u(r("SpaceRuleObject"), "")), r("SpaceRuleFundingURL"), null)) },
        { json: "value-list-max-empty-lines", js: "value-list-max-empty-lines", typ: u(undefined, u(a(u(0, r("IntegerRuleObject"))), 0, null)) },
    ], "any"),
    "ArrayStringRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "AtRuleEmptyLineBeforeObject": o([
        { json: "except", js: "except", typ: u(undefined, a(r("AtRuleEmptyLineBeforeExcept"))) },
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("AtRuleEmptyLineBeforeIgnore"))) },
        { json: "ignoreAtRules", js: "ignoreAtRules", typ: u(undefined, u(a(""), "")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "LowerUpperRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "AlwaysMultiLineRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "AtRuleNameSpaceAfterObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "AtRuleNoUnknownObject": o([
        { json: "ignoreAtRules", js: "ignoreAtRules", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "BooleanRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "AtRuleSemicolonNewlineAfterObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "BlockClosingBraceEmptyLineBeforeObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "NewlineSpaceWithIgnoreRuleObject": o([
        { json: "ignoreAtRules", js: "ignoreAtRules", typ: u(undefined, u(a(""), "")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "NewlineRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "NewlineSpaceRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "BlockOpeningBraceNewlineBeforeObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "ColorHexLengthObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "ColorNamedObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "CommentEmptyLineBeforeObject": o([
        { json: "except", js: "except", typ: u(undefined, a(r("CommentEmptyLineBeforeExcept"))) },
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("CommentEmptyLineBeforeIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "AlwaysNeverRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "StringRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "CustomPropertyEmptyLineBeforeObject": o([
        { json: "except", js: "except", typ: u(undefined, a(r("CustomPropertyEmptyLineBeforeExcept"))) },
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("CustomPropertyEmptyLineBeforeIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "DeclarationBlockNoDuplicatePropertyObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("DeclarationBlockNoDuplicatePropertyIgnore"))) },
        { json: "ignoreProperties", js: "ignoreProperties", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "DeclarationBlockNoRedundantLonghandPropertyObject": o([
        { json: "ignoreShorthands", js: "ignoreShorthands", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "DeclarationBlockPropertiesOrderObject": o([
        { json: "order", js: "order", typ: u(undefined, r("Order")) },
        { json: "properties", js: "properties", typ: u(undefined, a("")) },
        { json: "unspecified", js: "unspecified", typ: u(undefined, r("Unspecified")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SpaceRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "IntegerRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "DeclarationColonSpaceAfterObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "DeclarationEmptyLineBeforeObject": o([
        { json: "except", js: "except", typ: u(undefined, a(r("DeclarationEmptyLineBeforeExcept"))) },
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("DeclarationEmptyLineBeforeIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "ObjectRuleElement": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "FontFamilyNameQuoteObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "FontWeightNotationObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("FontWeightNotationIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "FunctionNameCaseObject": o([
        { json: "ignoreFunctions", js: "ignoreFunctions", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "IndentationObject": o([
        { json: "except", js: "except", typ: u(undefined, a(r("IndentationExcept"))) },
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("IndentationIgnore"))) },
        { json: "indentInsideParens", js: "indentInsideParens", typ: u(undefined, r("IndentInsideParens")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "MaxLineLengthObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, u(a(r("IgnoreFundingURL")), r("IgnoreFundingURL"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "MaxNestingDepthObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("MaxNestingDepthIgnore"))) },
        { json: "ignoreAtRules", js: "ignoreAtRules", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "MediaFeatureNameNoUnknownObject": o([
        { json: "ignoreMediaFeatureNames", js: "ignoreMediaFeatureNames", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "NoBrowserHackObject": o([
        { json: "browsers", js: "browsers", typ: u(undefined, u(a(""), "")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "NoEOLWhitespaceObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("NoEOLWhitespaceIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "NoIndistinguishableColorObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a("")) },
        { json: "threshold", js: "threshold", typ: u(undefined, 0) },
        { json: "whitelist", js: "whitelist", typ: u(undefined, a(a(""))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "NoUnsupportedBrowserFeatureObject": o([
        { json: "browsers", js: "browsers", typ: u(undefined, "") },
        { json: "ignore", js: "ignore", typ: u(undefined, u(a(""), "")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "PropertyNoUnknownObject": o([
        { json: "checkPrefixed", js: "checkPrefixed", typ: u(undefined, true) },
        { json: "ignoreProperties", js: "ignoreProperties", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "RuleNestedEmptyLineBeforeObject": o([
        { json: "except", js: "except", typ: u(undefined, a(r("CommentEmptyLineBeforeExcept"))) },
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("RuleNestedEmptyLineBeforeIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "RuleNonNestedEmptyLineBeforeObject": o([
        { json: "except", js: "except", typ: u(undefined, a(r("RuleNonNestedEmptyLineBeforeExcept"))) },
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("RuleNestedEmptyLineBeforeIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SelectorClassPatternObject": o([
        { json: "resolveNestedSelectors", js: "resolveNestedSelectors", typ: u(undefined, true) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SelectorNoQualifyingTypeObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("SelectorNoQualifyingTypeIgnore"))) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SelectorNoTypeObject": o([
        { json: "ignore", js: "ignore", typ: u(undefined, a(r("SelectorNoTypeIgnore"))) },
        { json: "ignoreTypes", js: "ignoreTypes", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SelectorPseudoClassNoUnknownObject": o([
        { json: "ignorePseudoClasses", js: "ignorePseudoClasses", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SingleDoubleRuleObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SelectorPseudoElementNoUnknownObject": o([
        { json: "ignorePseudoElements", js: "ignorePseudoElements", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "SelectorTypeNoUnknownObject": o([
        { json: "ignoreTypes", js: "ignoreTypes", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "StylelintDisableReasonObject": o([
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "UnitRuleObject": o([
        { json: "ignoreProperties", js: "ignoreProperties", typ: u(undefined, m("any")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "UnitNoUnknownObject": o([
        { json: "ignoreUnits", js: "ignoreUnits", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "ValueKeywordCaseObject": o([
        { json: "ignoreKeywords", js: "ignoreKeywords", typ: u(undefined, a("")) },
        { json: "disableFix", js: "disableFix", typ: u(undefined, true) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "reportDisables", js: "reportDisables", typ: u(undefined, true) },
        { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
    ], "any"),
    "JSONSchemaForNPMPackageJSONFilesTypesVersion": o([
        { json: "*", js: "*", typ: u(undefined, a("")) },
    ], false),
    "PurpleWorkspaces": o([
        { json: "nohoist", js: "nohoist", typ: u(undefined, a("")) },
        { json: "packages", js: "packages", typ: u(undefined, a("")) },
    ], "any"),
    "PackageJSONSchemaLicense": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "PackageJSONSchemaPeerDependenciesMeta": o([
        { json: "optional", js: "optional", typ: u(undefined, true) },
    ], "any"),
    "PackageJSONSchemaPublishConfig": o([
        { json: "access", js: "access", typ: u(undefined, r("Access")) },
        { json: "registry", js: "registry", typ: u(undefined, "") },
        { json: "tag", js: "tag", typ: u(undefined, "") },
    ], "any"),
    "FluffyRepository": o([
        { json: "directory", js: "directory", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "PackageJSONSchemaScripts": o([
        { json: "install", js: "install", typ: u(undefined, "") },
        { json: "lint", js: "lint", typ: u(undefined, "") },
        { json: "postinstall", js: "postinstall", typ: u(undefined, "") },
        { json: "postpack", js: "postpack", typ: u(undefined, "") },
        { json: "postpublish", js: "postpublish", typ: u(undefined, "") },
        { json: "postrestart", js: "postrestart", typ: u(undefined, "") },
        { json: "poststart", js: "poststart", typ: u(undefined, "") },
        { json: "poststop", js: "poststop", typ: u(undefined, "") },
        { json: "posttest", js: "posttest", typ: u(undefined, "") },
        { json: "postuninstall", js: "postuninstall", typ: u(undefined, "") },
        { json: "postversion", js: "postversion", typ: u(undefined, "") },
        { json: "preinstall", js: "preinstall", typ: u(undefined, "") },
        { json: "prepack", js: "prepack", typ: u(undefined, "") },
        { json: "prepare", js: "prepare", typ: u(undefined, "") },
        { json: "prepublish", js: "prepublish", typ: u(undefined, "") },
        { json: "prepublishOnly", js: "prepublishOnly", typ: u(undefined, "") },
        { json: "prerestart", js: "prerestart", typ: u(undefined, "") },
        { json: "prestart", js: "prestart", typ: u(undefined, "") },
        { json: "prestop", js: "prestop", typ: u(undefined, "") },
        { json: "pretest", js: "pretest", typ: u(undefined, "") },
        { json: "preuninstall", js: "preuninstall", typ: u(undefined, "") },
        { json: "preversion", js: "preversion", typ: u(undefined, "") },
        { json: "publish", js: "publish", typ: u(undefined, "") },
        { json: "restart", js: "restart", typ: u(undefined, "") },
        { json: "serve", js: "serve", typ: u(undefined, "") },
        { json: "start", js: "start", typ: u(undefined, "") },
        { json: "stop", js: "stop", typ: u(undefined, "") },
        { json: "test", js: "test", typ: u(undefined, "") },
        { json: "uninstall", js: "uninstall", typ: u(undefined, "") },
        { json: "version", js: "version", typ: u(undefined, "") },
    ], ""),
    "PackageJSONSchemaTypesVersion": o([
        { json: "*", js: "*", typ: u(undefined, a("")) },
    ], false),
    "FluffyWorkspaces": o([
        { json: "nohoist", js: "nohoist", typ: u(undefined, a("")) },
        { json: "packages", js: "packages", typ: u(undefined, a("")) },
    ], "any"),
    "Type": [
        "commonjs",
        "module",
    ],
    "CompileEnum": [
        "tsc",
    ],
    "GlobalEnum": [
        "off",
        "readonly",
        "writable",
    ],
    "ECMAVersionEnum": [
        "latest",
    ],
    "SourceType": [
        "module",
        "script",
    ],
    "RuleEnum": [
        "error",
        "off",
        "warn",
    ],
    "Format": [
        "apl",
        "abap",
        "actionscript",
        "ada",
        "apacheconf",
        "applescript",
        "arduino",
        "arff",
        "asciidoc",
        "asm6502",
        "aspnet",
        "autohotkey",
        "autoit",
        "bash",
        "basic",
        "batch",
        "bison",
        "brainfuck",
        "bro",
        "c",
        "c-header",
        "csp",
        "css",
        "css-extras",
        "clike",
        "clojure",
        "coffeescript",
        "comments",
        "cpp",
        "cpp-header",
        "crystal",
        "csharp",
        "d",
        "dart",
        "diff",
        "django",
        "docker",
        "eiffel",
        "elixir",
        "elm",
        "erb",
        "erlang",
        "flow",
        "fortran",
        "fsharp",
        "gedcom",
        "gherkin",
        "git",
        "glsl",
        "go",
        "graphql",
        "groovy",
        "http",
        "haml",
        "handlebars",
        "haskell",
        "haxe",
        "hpkp",
        "hsts",
        "ichigojam",
        "icon",
        "inform7",
        "ini",
        "io",
        "j",
        "json",
        "java",
        "javascript",
        "jolie",
        "jsx",
        "julia",
        "keymap",
        "kotlin",
        "lisp",
        "latex",
        "less",
        "liquid",
        "livescript",
        "lolcode",
        "lua",
        "makefile",
        "markdown",
        "markup",
        "matlab",
        "mel",
        "mizar",
        "monkey",
        "n4js",
        "nasm",
        "nim",
        "nginx",
        "nix",
        "nsis",
        "objectivec",
        "ocaml",
        "opencl",
        "oz",
        "perl",
        "php",
        "parigp",
        "pascal",
        "plsql",
        "powershell",
        "processing",
        "prolog",
        "properties",
        "protobuf",
        "pug",
        "puppet",
        "pure",
        "python",
        "q",
        "qore",
        "r",
        "rest",
        "rip",
        "reason",
        "renpy",
        "roboconf",
        "ruby",
        "rust",
        "sas",
        "sql",
        "sass",
        "scala",
        "scheme",
        "scss",
        "smalltalk",
        "smarty",
        "soy",
        "stylus",
        "swift",
        "tap",
        "tcl",
        "textile",
        "tsx",
        "tt2",
        "twig",
        "typescript",
        "url",
        "vbnet",
        "velocity",
        "verilog",
        "vhdl",
        "vim",
        "visual-basic",
        "wasm",
        "wiki",
        "xeora",
        "xojo",
        "xquery",
        "yaml",
    ],
    "Mode": [
        "mild",
        "strict",
        "weak",
    ],
    "Reporter": [
        "csv",
        "console",
        "consoleFull",
        "html",
        "json",
        "markdown",
        "silent",
        "threshold",
        "xml",
        "xcode",
    ],
    "Style": [
        "classic",
        "flat",
    ],
    "Store": [
        "leveldb",
        "redis",
    ],
    "ArrowParens": [
        "always",
        "avoid",
    ],
    "EmbeddedLanguageFormatting": [
        "auto",
        "off",
    ],
    "EndOfLine": [
        "auto",
        "cr",
        "crlf",
        "lf",
    ],
    "HTMLWhitespaceSensitivity": [
        "css",
        "ignore",
        "strict",
    ],
    "ProseWrap": [
        "always",
        "never",
        "preserve",
    ],
    "QuoteProps": [
        "as-needed",
        "consistent",
        "preserve",
    ],
    "TrailingComma": [
        "all",
        "es5",
        "none",
    ],
    "PrivateEnum": [
        "false",
        "true",
    ],
    "Access": [
        "public",
        "restricted",
    ],
    "Severity": [
        "error",
        "warning",
    ],
    "AtRuleEmptyLineBeforeFundingURL": [
        "always",
        "never",
    ],
    "AtRuleEmptyLineBeforeExcept": [
        "after-same-name",
        "blockless-after-blockless",
        "blockless-after-same-name-blockless",
        "first-nested",
        "inside-block",
    ],
    "AtRuleEmptyLineBeforeIgnore": [
        "after-comment",
        "blockless-after-blockless",
        "blockless-after-same-name-blockless",
        "first-nested",
        "inside-block",
    ],
    "LowerUpperRuleFundingURL": [
        "lower",
        "upper",
    ],
    "AlwaysMultiLineRuleFundingURL": [
        "always",
        "always-multi-line",
    ],
    "AtRuleNameSpaceAfterFundingURL": [
        "always",
        "always-single-line",
    ],
    "AtRuleSemicolonNewlineAfterFundingURL": [
        "always",
    ],
    "BlockClosingBraceEmptyLineBeforeFundingURL": [
        "always-multi-line",
        "never",
    ],
    "BlockOpeningBraceNewlineBeforeFundingURL": [
        "always",
        "always-multi-line",
        "always-single-line",
        "never-multi-line",
        "never-single-line",
    ],
    "NewlineSpaceRuleFundingURL": [
        "always",
        "always-multi-line",
        "always-single-line",
        "never",
        "never-multi-line",
        "never-single-line",
    ],
    "NewlineRuleFundingURL": [
        "always",
        "always-multi-line",
        "never-multi-line",
    ],
    "ColorHexLengthFundingURL": [
        "long",
        "short",
    ],
    "ColorNamedFundingURL": [
        "always-where-possible",
        "never",
    ],
    "CommentEmptyLineBeforeExcept": [
        "first-nested",
    ],
    "CommentEmptyLineBeforeIgnore": [
        "after-comment",
        "between-comments",
        "stylelint-commands",
    ],
    "CustomPropertyEmptyLineBeforeExcept": [
        "after-comment",
        "after-custom-property",
        "first-nested",
    ],
    "CustomPropertyEmptyLineBeforeIgnore": [
        "after-comment",
        "inside-single-line-block",
    ],
    "DeclarationBlockNoDuplicatePropertyIgnore": [
        "consecutive-duplicates",
        "consecutive-duplicates-with-different-values",
    ],
    "Order": [
        "flexible",
        "strict",
    ],
    "Unspecified": [
        "bottom",
        "bottomAlphabetical",
        "ignore",
        "top",
    ],
    "DeclarationBlockPropertiesOrderFundingURL": [
        "alphabetical",
    ],
    "SpaceRuleFundingURL": [
        "always",
        "always-single-line",
        "never",
        "never-single-line",
    ],
    "DeclarationColonSpaceAfterFundingURL": [
        "always",
        "always-single-line",
        "never",
    ],
    "DeclarationEmptyLineBeforeExcept": [
        "after-comment",
        "after-declaration",
        "first-nested",
    ],
    "DeclarationEmptyLineBeforeIgnore": [
        "after-comment",
        "after-declaration",
        "inside-single-line-block",
    ],
    "FontFamilyNameQuotesFundingURL": [
        "always-unless-keyword",
        "always-where-recommended",
        "always-where-required",
    ],
    "FontWeightNotationFundingURL": [
        "named-where-possible",
        "numeric",
    ],
    "FontWeightNotationIgnore": [
        "relative",
    ],
    "IndentationFundingURL": [
        "tab",
    ],
    "IndentationExcept": [
        "block",
        "param",
        "value",
    ],
    "IndentationIgnore": [
        "inside-parens",
        "param",
        "value",
    ],
    "IndentInsideParens": [
        "once-at-root-twice-in-block",
        "twice",
    ],
    "IgnoreFundingURL": [
        "comments",
        "non-comments",
    ],
    "MaxNestingDepthIgnore": [
        "blockless-at-rules",
        "pseudo-classes",
    ],
    "NoEOLWhitespaceIgnore": [
        "empty-lines",
    ],
    "RuleNestedEmptyLineBeforeFundingURL": [
        "always",
        "always-multi-line",
        "never",
        "never-multi-line",
    ],
    "RuleNestedEmptyLineBeforeIgnore": [
        "after-comment",
    ],
    "RuleNonNestedEmptyLineBeforeExcept": [
        "after-single-line-comment",
    ],
    "SelectorNoQualifyingTypeIgnore": [
        "attribute",
        "class",
        "id",
    ],
    "SelectorNoTypeIgnore": [
        "compounded",
        "descendant",
    ],
    "SingleDoubleRuleFundingURL": [
        "double",
        "single",
    ],
    "StylelintDisableReasonFundingURL": [
        "always-after",
        "always-before",
    ],
    "UnitRuleFundingURL": [
        "cm",
        "ch",
        "dpi",
        "deg",
        "dpcm",
        "dppx",
        "em",
        "%",
        "ex",
        "fr",
        "grad",
        "Hz",
        "in",
        "kHz",
        "ms",
        "mm",
        "pc",
        "pt",
        "px",
        "q",
        "rad",
        "rem",
        "s",
        "turn",
        "vm",
        "vh",
        "vmax",
        "vmin",
        "vw",
    ],
};
