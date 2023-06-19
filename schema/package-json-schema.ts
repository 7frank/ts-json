// To parse this data:
//
//   import { Convert, MySchema } from "./file";
//
//   const mySchema = Convert.toMySchema(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MySchema {
    $schema:           string;
    title:             string;
    definitions:       Definitions;
    type:              TypeElement;
    patternProperties: MySchemaPatternProperties;
    properties:        MySchemaProperties;
    anyOf:             AnyOf[];
}

export interface AnyOf {
    type:      TypeElement;
    not:       Not;
    required?: string[];
}

export interface Not {
    required: string[];
}

export enum TypeElement {
    Boolean = "boolean",
    Object = "object",
    String = "string",
}

export interface Definitions {
    person:                        Person;
    dependency:                    Dependency;
    scriptsInstallAfter:           Scripts;
    scriptsPublishAfter:           Scripts;
    scriptsRestart:                Scripts;
    scriptsStart:                  Scripts;
    scriptsStop:                   Scripts;
    scriptsTest:                   Scripts;
    scriptsUninstallBefore:        Scripts;
    scriptsVersionBefore:          Scripts;
    packageExportsEntryPath:       PackageExportsEntryPath;
    packageExportsEntryObject:     PackageExportsEntryObject;
    packageExportsEntry:           PackageExportsEntry;
    packageExportsFallback:        PackageExportsFallback;
    packageExportsEntryOrFallback: PackageExportsEntry;
    fundingUrl:                    FundingURL;
    fundingWay:                    FundingWay;
}

export interface Dependency {
    description:          string;
    type:                 TypeElement;
    additionalProperties: EngineStrict;
}

export interface EngineStrict {
    type: TypeElement;
}

export interface FundingURL {
    type:        TypeElement;
    format:      string;
    description: string;
}

export interface FundingWay {
    type:                 TypeElement;
    description:          string;
    properties:           FundingWayProperties;
    additionalProperties: boolean;
    required:             string[];
}

export interface FundingWayProperties {
    url:  Author;
    type: Description;
}

export interface Description {
    type:        TypeElement;
    description: string;
}

export interface Author {
    $ref: string;
}

export interface PackageExportsEntry {
    oneOf: Author[];
}

export interface PackageExportsEntryObject {
    type:                 TypeElement;
    description:          string;
    properties:           PackageExportsEntryObjectProperties;
    patternProperties:    PackageExportsEntryObjectPatternProperties;
    additionalProperties: boolean;
}

export interface PackageExportsEntryObjectPatternProperties {
    "^(?![\\.0-9]).": The09;
}

export interface The09 {
    $ref:        string;
    description: string;
}

export interface PackageExportsEntryObjectProperties {
    require: The09;
    import:  The09;
    node:    The09;
    default: The09;
    types:   The09;
}

export interface PackageExportsEntryPath {
    type:        string[];
    description: string;
    pattern:     string;
}

export interface PackageExportsFallback {
    type:        string;
    description: string;
    items:       Author;
}

export interface Person {
    description: string;
    type:        TypeElement[];
    required:    string[];
    properties:  PersonProperties;
}

export interface PersonProperties {
    name:  EngineStrict;
    url:   Email;
    email: Email;
}

export interface Email {
    type:   TypeElement;
    format: string;
}

export interface Scripts {
    description:                     string;
    type:                            TypeElement;
    "x-intellij-language-injection": string;
}

export interface MySchemaPatternProperties {
    "^_": Empty;
}

export interface Empty {
    description: string;
    tsType:      string;
}

export interface MySchemaProperties {
    name:                 Name;
    version:              Description;
    description:          Description;
    keywords:             CPU;
    homepage:             Description;
    bugs:                 Bugs;
    license:              Description;
    licenses:             Licenses;
    author:               Author;
    contributors:         PackageExportsFallback;
    maintainers:          PackageExportsFallback;
    files:                CPU;
    main:                 Description;
    exports:              Exports;
    bin:                  Bin;
    type:                 TypeClass;
    types:                Description;
    typings:              Description;
    typesVersions:        TypesVersions;
    man:                  Man;
    directories:          Directories;
    repository:           Repository;
    funding:              Funding;
    scripts:              ScriptsClass;
    config:               Config;
    dependencies:         Author;
    devDependencies:      Author;
    optionalDependencies: Author;
    peerDependencies:     Author;
    peerDependenciesMeta: PeerDependenciesMeta;
    bundledDependencies:  BundleDependencies;
    bundleDependencies:   BundleDependencies;
    resolutions:          Description;
    overrides:            Description;
    packageManager:       PackageManager;
    engines:              Engines;
    engineStrict:         EngineStrict;
    os:                   CPU;
    cpu:                  CPU;
    preferGlobal:         Description;
    private:              Private;
    publishConfig:        PublishConfig;
    dist:                 Dist;
    readme:               EngineStrict;
    module:               Description;
    esnext:               Esnext;
    workspaces:           Workspaces;
    jspm:                 Author;
    eslintConfig:         Author;
    prettier:             Author;
    stylelint:            Author;
    ava:                  Author;
    release:              Author;
    jscpd:                Author;
}

export interface Bin {
    type:                 TypeElement[];
    additionalProperties: EngineStrict;
}

export interface Bugs {
    description: string;
    type:        TypeElement[];
    properties:  BugsProperties;
}

export interface BugsProperties {
    url:   FundingURL;
    email: FundingURL;
}

export interface BundleDependencies {
    description: string;
    oneOf:       BundleDependenciesOneOf[];
}

export interface BundleDependenciesOneOf {
    type:   string;
    items?: EngineStrict;
}

export interface Config {
    description:          string;
    type:                 TypeElement;
    additionalProperties: boolean;
}

export interface CPUProperties {
    packages: CPU;
    nohoist:  CPU;
}

export interface CPU {
    description?: string;
    type:         string;
    items?:       EngineStrict;
    properties?:  CPUProperties;
}

export interface Directories {
    type:       TypeElement;
    properties: DirectoriesProperties;
}

export interface DirectoriesProperties {
    bin:     Description;
    doc:     Description;
    example: Description;
    lib:     Description;
    man:     Description;
    test:    EngineStrict;
}

export interface Dist {
    type:       TypeElement;
    properties: DistProperties;
}

export interface DistProperties {
    shasum:  EngineStrict;
    tarball: EngineStrict;
}

export interface Engines {
    type:                 TypeElement;
    properties:           EnginesProperties;
    additionalProperties: EngineStrict;
}

export interface EnginesProperties {
    node: EngineStrict;
}

export interface Esnext {
    description:          string;
    type:                 TypeElement[];
    properties:           EsnextProperties;
    additionalProperties: EngineStrict;
}

export interface EsnextProperties {
    main:    EngineStrict;
    browser: EngineStrict;
}

export interface Exports {
    description: string;
    oneOf:       ExportsOneOf[];
}

export interface ExportsOneOf {
    $ref?:                 string;
    description?:          string;
    type?:                 TypeElement;
    properties?:           OneOfProperties;
    patternProperties?:    OneOfPatternProperties;
    additionalProperties?: boolean;
}

export interface OneOfPatternProperties {
    "^\\./.+": The09;
}

export interface OneOfProperties {
    ".": The09;
}

export interface Funding {
    oneOf: FundingOneOf[];
}

export interface FundingOneOf {
    $ref?:        string;
    type?:        string;
    items?:       PackageExportsEntry;
    minItems?:    number;
    uniqueItems?: boolean;
}

export interface Licenses {
    description: string;
    type:        string;
    items:       LicensesItems;
}

export interface LicensesItems {
    type:       TypeElement;
    properties: ItemsProperties;
}

export interface ItemsProperties {
    type: EngineStrict;
    url:  Email;
}

export interface Man {
    type:        string[];
    description: string;
    items:       EngineStrict;
}

export interface Name {
    description: string;
    type:        TypeElement;
    maxLength:   number;
    minLength:   number;
    pattern:     string;
}

export interface PackageManager {
    description: string;
    type:        TypeElement;
    pattern:     string;
}

export interface PeerDependenciesMeta {
    description:          string;
    type:                 TypeElement;
    additionalProperties: PeerDependenciesMetaAdditionalProperties;
}

export interface PeerDependenciesMetaAdditionalProperties {
    type:                 TypeElement;
    additionalProperties: boolean;
    properties:           PurpleProperties;
}

export interface PurpleProperties {
    optional: Description;
}

export interface Private {
    description: string;
    oneOf:       OneOf[];
}

export interface OneOf {
    type?: TypeElement;
    enum?: string[];
}

export interface PublishConfig {
    type:                 TypeElement;
    properties:           PublishConfigProperties;
    additionalProperties: boolean;
}

export interface PublishConfigProperties {
    access:   OneOf;
    tag:      EngineStrict;
    registry: Email;
}

export interface Repository {
    description: string;
    type:        TypeElement[];
    properties:  RepositoryProperties;
}

export interface RepositoryProperties {
    type:      EngineStrict;
    url:       EngineStrict;
    directory: EngineStrict;
}

export interface ScriptsClass {
    description:          string;
    type:                 TypeElement;
    properties:           ScriptsProperties;
    additionalProperties: ScriptsAdditionalProperties;
}

export interface ScriptsAdditionalProperties {
    type:                            TypeElement;
    tsType:                          string;
    "x-intellij-language-injection": string;
}

export interface ScriptsProperties {
    lint:           Description;
    prepublish:     Description;
    prepare:        Description;
    prepublishOnly: Description;
    prepack:        Description;
    postpack:       Description;
    publish:        Description;
    postpublish:    Author;
    preinstall:     Description;
    install:        Author;
    postinstall:    Author;
    preuninstall:   Author;
    uninstall:      Author;
    postuninstall:  Description;
    preversion:     Author;
    version:        Author;
    postversion:    Description;
    pretest:        Author;
    test:           Author;
    posttest:       Author;
    prestop:        Author;
    stop:           Author;
    poststop:       Author;
    prestart:       Author;
    start:          Author;
    poststart:      Author;
    prerestart:     Author;
    restart:        Author;
    postrestart:    Author;
    serve:          Description;
}

export interface TypeClass {
    description: string;
    type:        TypeElement;
    enum:        string[];
    default:     string;
}

export interface TypesVersions {
    description:          string;
    type:                 TypeElement;
    additionalProperties: TypesVersionsAdditionalProperties;
}

export interface TypesVersionsAdditionalProperties {
    description:          string;
    type:                 TypeElement;
    properties:           FluffyProperties;
    patternProperties:    AdditionalPropertiesPatternProperties;
    additionalProperties: boolean;
}

export interface AdditionalPropertiesPatternProperties {
    "^[^*]+$":         CPU;
    "^[^*]*\\*[^*]*$": Class;
}

export interface Class {
    description: string;
    type:        string;
    items:       Items;
}

export interface Items {
    type:    TypeElement;
    pattern: string;
}

export interface FluffyProperties {
    "*": Class;
}

export interface Workspaces {
    description: string;
    anyOf:       CPU[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMySchema(json: string): MySchema {
        return cast(JSON.parse(json), r("MySchema"));
    }

    public static mySchemaToJson(value: MySchema): string {
        return JSON.stringify(uncast(value, r("MySchema")), null, 2);
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
    "MySchema": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "definitions", js: "definitions", typ: r("Definitions") },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "patternProperties", js: "patternProperties", typ: r("MySchemaPatternProperties") },
        { json: "properties", js: "properties", typ: r("MySchemaProperties") },
        { json: "anyOf", js: "anyOf", typ: a(r("AnyOf")) },
    ], false),
    "AnyOf": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "not", js: "not", typ: r("Not") },
        { json: "required", js: "required", typ: u(undefined, a("")) },
    ], false),
    "Not": o([
        { json: "required", js: "required", typ: a("") },
    ], false),
    "Definitions": o([
        { json: "person", js: "person", typ: r("Person") },
        { json: "dependency", js: "dependency", typ: r("Dependency") },
        { json: "scriptsInstallAfter", js: "scriptsInstallAfter", typ: r("Scripts") },
        { json: "scriptsPublishAfter", js: "scriptsPublishAfter", typ: r("Scripts") },
        { json: "scriptsRestart", js: "scriptsRestart", typ: r("Scripts") },
        { json: "scriptsStart", js: "scriptsStart", typ: r("Scripts") },
        { json: "scriptsStop", js: "scriptsStop", typ: r("Scripts") },
        { json: "scriptsTest", js: "scriptsTest", typ: r("Scripts") },
        { json: "scriptsUninstallBefore", js: "scriptsUninstallBefore", typ: r("Scripts") },
        { json: "scriptsVersionBefore", js: "scriptsVersionBefore", typ: r("Scripts") },
        { json: "packageExportsEntryPath", js: "packageExportsEntryPath", typ: r("PackageExportsEntryPath") },
        { json: "packageExportsEntryObject", js: "packageExportsEntryObject", typ: r("PackageExportsEntryObject") },
        { json: "packageExportsEntry", js: "packageExportsEntry", typ: r("PackageExportsEntry") },
        { json: "packageExportsFallback", js: "packageExportsFallback", typ: r("PackageExportsFallback") },
        { json: "packageExportsEntryOrFallback", js: "packageExportsEntryOrFallback", typ: r("PackageExportsEntry") },
        { json: "fundingUrl", js: "fundingUrl", typ: r("FundingURL") },
        { json: "fundingWay", js: "fundingWay", typ: r("FundingWay") },
    ], false),
    "Dependency": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("EngineStrict") },
    ], false),
    "EngineStrict": o([
        { json: "type", js: "type", typ: r("TypeElement") },
    ], false),
    "FundingURL": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "format", js: "format", typ: "" },
        { json: "description", js: "description", typ: "" },
    ], false),
    "FundingWay": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: r("FundingWayProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "FundingWayProperties": o([
        { json: "url", js: "url", typ: r("Author") },
        { json: "type", js: "type", typ: r("Description") },
    ], false),
    "Description": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "description", js: "description", typ: "" },
    ], false),
    "Author": o([
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "PackageExportsEntry": o([
        { json: "oneOf", js: "oneOf", typ: a(r("Author")) },
    ], false),
    "PackageExportsEntryObject": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: r("PackageExportsEntryObjectProperties") },
        { json: "patternProperties", js: "patternProperties", typ: r("PackageExportsEntryObjectPatternProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "PackageExportsEntryObjectPatternProperties": o([
        { json: "^(?![\\.0-9]).", js: "^(?![\\.0-9]).", typ: r("The09") },
    ], false),
    "The09": o([
        { json: "$ref", js: "$ref", typ: "" },
        { json: "description", js: "description", typ: "" },
    ], false),
    "PackageExportsEntryObjectProperties": o([
        { json: "require", js: "require", typ: r("The09") },
        { json: "import", js: "import", typ: r("The09") },
        { json: "node", js: "node", typ: r("The09") },
        { json: "default", js: "default", typ: r("The09") },
        { json: "types", js: "types", typ: r("The09") },
    ], false),
    "PackageExportsEntryPath": o([
        { json: "type", js: "type", typ: a("") },
        { json: "description", js: "description", typ: "" },
        { json: "pattern", js: "pattern", typ: "" },
    ], false),
    "PackageExportsFallback": o([
        { json: "type", js: "type", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("Author") },
    ], false),
    "Person": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "required", js: "required", typ: a("") },
        { json: "properties", js: "properties", typ: r("PersonProperties") },
    ], false),
    "PersonProperties": o([
        { json: "name", js: "name", typ: r("EngineStrict") },
        { json: "url", js: "url", typ: r("Email") },
        { json: "email", js: "email", typ: r("Email") },
    ], false),
    "Email": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "format", js: "format", typ: "" },
    ], false),
    "Scripts": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "x-intellij-language-injection", js: "x-intellij-language-injection", typ: "" },
    ], false),
    "MySchemaPatternProperties": o([
        { json: "^_", js: "^_", typ: r("Empty") },
    ], false),
    "Empty": o([
        { json: "description", js: "description", typ: "" },
        { json: "tsType", js: "tsType", typ: "" },
    ], false),
    "MySchemaProperties": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "version", js: "version", typ: r("Description") },
        { json: "description", js: "description", typ: r("Description") },
        { json: "keywords", js: "keywords", typ: r("CPU") },
        { json: "homepage", js: "homepage", typ: r("Description") },
        { json: "bugs", js: "bugs", typ: r("Bugs") },
        { json: "license", js: "license", typ: r("Description") },
        { json: "licenses", js: "licenses", typ: r("Licenses") },
        { json: "author", js: "author", typ: r("Author") },
        { json: "contributors", js: "contributors", typ: r("PackageExportsFallback") },
        { json: "maintainers", js: "maintainers", typ: r("PackageExportsFallback") },
        { json: "files", js: "files", typ: r("CPU") },
        { json: "main", js: "main", typ: r("Description") },
        { json: "exports", js: "exports", typ: r("Exports") },
        { json: "bin", js: "bin", typ: r("Bin") },
        { json: "type", js: "type", typ: r("TypeClass") },
        { json: "types", js: "types", typ: r("Description") },
        { json: "typings", js: "typings", typ: r("Description") },
        { json: "typesVersions", js: "typesVersions", typ: r("TypesVersions") },
        { json: "man", js: "man", typ: r("Man") },
        { json: "directories", js: "directories", typ: r("Directories") },
        { json: "repository", js: "repository", typ: r("Repository") },
        { json: "funding", js: "funding", typ: r("Funding") },
        { json: "scripts", js: "scripts", typ: r("ScriptsClass") },
        { json: "config", js: "config", typ: r("Config") },
        { json: "dependencies", js: "dependencies", typ: r("Author") },
        { json: "devDependencies", js: "devDependencies", typ: r("Author") },
        { json: "optionalDependencies", js: "optionalDependencies", typ: r("Author") },
        { json: "peerDependencies", js: "peerDependencies", typ: r("Author") },
        { json: "peerDependenciesMeta", js: "peerDependenciesMeta", typ: r("PeerDependenciesMeta") },
        { json: "bundledDependencies", js: "bundledDependencies", typ: r("BundleDependencies") },
        { json: "bundleDependencies", js: "bundleDependencies", typ: r("BundleDependencies") },
        { json: "resolutions", js: "resolutions", typ: r("Description") },
        { json: "overrides", js: "overrides", typ: r("Description") },
        { json: "packageManager", js: "packageManager", typ: r("PackageManager") },
        { json: "engines", js: "engines", typ: r("Engines") },
        { json: "engineStrict", js: "engineStrict", typ: r("EngineStrict") },
        { json: "os", js: "os", typ: r("CPU") },
        { json: "cpu", js: "cpu", typ: r("CPU") },
        { json: "preferGlobal", js: "preferGlobal", typ: r("Description") },
        { json: "private", js: "private", typ: r("Private") },
        { json: "publishConfig", js: "publishConfig", typ: r("PublishConfig") },
        { json: "dist", js: "dist", typ: r("Dist") },
        { json: "readme", js: "readme", typ: r("EngineStrict") },
        { json: "module", js: "module", typ: r("Description") },
        { json: "esnext", js: "esnext", typ: r("Esnext") },
        { json: "workspaces", js: "workspaces", typ: r("Workspaces") },
        { json: "jspm", js: "jspm", typ: r("Author") },
        { json: "eslintConfig", js: "eslintConfig", typ: r("Author") },
        { json: "prettier", js: "prettier", typ: r("Author") },
        { json: "stylelint", js: "stylelint", typ: r("Author") },
        { json: "ava", js: "ava", typ: r("Author") },
        { json: "release", js: "release", typ: r("Author") },
        { json: "jscpd", js: "jscpd", typ: r("Author") },
    ], false),
    "Bin": o([
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "additionalProperties", js: "additionalProperties", typ: r("EngineStrict") },
    ], false),
    "Bugs": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "properties", js: "properties", typ: r("BugsProperties") },
    ], false),
    "BugsProperties": o([
        { json: "url", js: "url", typ: r("FundingURL") },
        { json: "email", js: "email", typ: r("FundingURL") },
    ], false),
    "BundleDependencies": o([
        { json: "description", js: "description", typ: "" },
        { json: "oneOf", js: "oneOf", typ: a(r("BundleDependenciesOneOf")) },
    ], false),
    "BundleDependenciesOneOf": o([
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: u(undefined, r("EngineStrict")) },
    ], false),
    "Config": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "CPUProperties": o([
        { json: "packages", js: "packages", typ: r("CPU") },
        { json: "nohoist", js: "nohoist", typ: r("CPU") },
    ], false),
    "CPU": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: u(undefined, r("EngineStrict")) },
        { json: "properties", js: "properties", typ: u(undefined, r("CPUProperties")) },
    ], false),
    "Directories": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("DirectoriesProperties") },
    ], false),
    "DirectoriesProperties": o([
        { json: "bin", js: "bin", typ: r("Description") },
        { json: "doc", js: "doc", typ: r("Description") },
        { json: "example", js: "example", typ: r("Description") },
        { json: "lib", js: "lib", typ: r("Description") },
        { json: "man", js: "man", typ: r("Description") },
        { json: "test", js: "test", typ: r("EngineStrict") },
    ], false),
    "Dist": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("DistProperties") },
    ], false),
    "DistProperties": o([
        { json: "shasum", js: "shasum", typ: r("EngineStrict") },
        { json: "tarball", js: "tarball", typ: r("EngineStrict") },
    ], false),
    "Engines": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("EnginesProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("EngineStrict") },
    ], false),
    "EnginesProperties": o([
        { json: "node", js: "node", typ: r("EngineStrict") },
    ], false),
    "Esnext": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "properties", js: "properties", typ: r("EsnextProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("EngineStrict") },
    ], false),
    "EsnextProperties": o([
        { json: "main", js: "main", typ: r("EngineStrict") },
        { json: "browser", js: "browser", typ: r("EngineStrict") },
    ], false),
    "Exports": o([
        { json: "description", js: "description", typ: "" },
        { json: "oneOf", js: "oneOf", typ: a(r("ExportsOneOf")) },
    ], false),
    "ExportsOneOf": o([
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, r("TypeElement")) },
        { json: "properties", js: "properties", typ: u(undefined, r("OneOfProperties")) },
        { json: "patternProperties", js: "patternProperties", typ: u(undefined, r("OneOfPatternProperties")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
    ], false),
    "OneOfPatternProperties": o([
        { json: "^\\./.+", js: "^\\./.+", typ: r("The09") },
    ], false),
    "OneOfProperties": o([
        { json: ".", js: ".", typ: r("The09") },
    ], false),
    "Funding": o([
        { json: "oneOf", js: "oneOf", typ: a(r("FundingOneOf")) },
    ], false),
    "FundingOneOf": o([
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, r("PackageExportsEntry")) },
        { json: "minItems", js: "minItems", typ: u(undefined, 0) },
        { json: "uniqueItems", js: "uniqueItems", typ: u(undefined, true) },
    ], false),
    "Licenses": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("LicensesItems") },
    ], false),
    "LicensesItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ItemsProperties") },
    ], false),
    "ItemsProperties": o([
        { json: "type", js: "type", typ: r("EngineStrict") },
        { json: "url", js: "url", typ: r("Email") },
    ], false),
    "Man": o([
        { json: "type", js: "type", typ: a("") },
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("EngineStrict") },
    ], false),
    "Name": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "maxLength", js: "maxLength", typ: 0 },
        { json: "minLength", js: "minLength", typ: 0 },
        { json: "pattern", js: "pattern", typ: "" },
    ], false),
    "PackageManager": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "pattern", js: "pattern", typ: "" },
    ], false),
    "PeerDependenciesMeta": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("PeerDependenciesMetaAdditionalProperties") },
    ], false),
    "PeerDependenciesMetaAdditionalProperties": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("PurpleProperties") },
    ], false),
    "PurpleProperties": o([
        { json: "optional", js: "optional", typ: r("Description") },
    ], false),
    "Private": o([
        { json: "description", js: "description", typ: "" },
        { json: "oneOf", js: "oneOf", typ: a(r("OneOf")) },
    ], false),
    "OneOf": o([
        { json: "type", js: "type", typ: u(undefined, r("TypeElement")) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
    ], false),
    "PublishConfig": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("PublishConfigProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "PublishConfigProperties": o([
        { json: "access", js: "access", typ: r("OneOf") },
        { json: "tag", js: "tag", typ: r("EngineStrict") },
        { json: "registry", js: "registry", typ: r("Email") },
    ], false),
    "Repository": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "properties", js: "properties", typ: r("RepositoryProperties") },
    ], false),
    "RepositoryProperties": o([
        { json: "type", js: "type", typ: r("EngineStrict") },
        { json: "url", js: "url", typ: r("EngineStrict") },
        { json: "directory", js: "directory", typ: r("EngineStrict") },
    ], false),
    "ScriptsClass": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ScriptsProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("ScriptsAdditionalProperties") },
    ], false),
    "ScriptsAdditionalProperties": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "tsType", js: "tsType", typ: "" },
        { json: "x-intellij-language-injection", js: "x-intellij-language-injection", typ: "" },
    ], false),
    "ScriptsProperties": o([
        { json: "lint", js: "lint", typ: r("Description") },
        { json: "prepublish", js: "prepublish", typ: r("Description") },
        { json: "prepare", js: "prepare", typ: r("Description") },
        { json: "prepublishOnly", js: "prepublishOnly", typ: r("Description") },
        { json: "prepack", js: "prepack", typ: r("Description") },
        { json: "postpack", js: "postpack", typ: r("Description") },
        { json: "publish", js: "publish", typ: r("Description") },
        { json: "postpublish", js: "postpublish", typ: r("Author") },
        { json: "preinstall", js: "preinstall", typ: r("Description") },
        { json: "install", js: "install", typ: r("Author") },
        { json: "postinstall", js: "postinstall", typ: r("Author") },
        { json: "preuninstall", js: "preuninstall", typ: r("Author") },
        { json: "uninstall", js: "uninstall", typ: r("Author") },
        { json: "postuninstall", js: "postuninstall", typ: r("Description") },
        { json: "preversion", js: "preversion", typ: r("Author") },
        { json: "version", js: "version", typ: r("Author") },
        { json: "postversion", js: "postversion", typ: r("Description") },
        { json: "pretest", js: "pretest", typ: r("Author") },
        { json: "test", js: "test", typ: r("Author") },
        { json: "posttest", js: "posttest", typ: r("Author") },
        { json: "prestop", js: "prestop", typ: r("Author") },
        { json: "stop", js: "stop", typ: r("Author") },
        { json: "poststop", js: "poststop", typ: r("Author") },
        { json: "prestart", js: "prestart", typ: r("Author") },
        { json: "start", js: "start", typ: r("Author") },
        { json: "poststart", js: "poststart", typ: r("Author") },
        { json: "prerestart", js: "prerestart", typ: r("Author") },
        { json: "restart", js: "restart", typ: r("Author") },
        { json: "postrestart", js: "postrestart", typ: r("Author") },
        { json: "serve", js: "serve", typ: r("Description") },
    ], false),
    "TypeClass": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "default", js: "default", typ: "" },
    ], false),
    "TypesVersions": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "additionalProperties", js: "additionalProperties", typ: r("TypesVersionsAdditionalProperties") },
    ], false),
    "TypesVersionsAdditionalProperties": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("FluffyProperties") },
        { json: "patternProperties", js: "patternProperties", typ: r("AdditionalPropertiesPatternProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
    ], false),
    "AdditionalPropertiesPatternProperties": o([
        { json: "^[^*]+$", js: "^[^*]+$", typ: r("CPU") },
        { json: "^[^*]*\\*[^*]*$", js: "^[^*]*\\*[^*]*$", typ: r("Class") },
    ], false),
    "Class": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "items", js: "items", typ: r("Items") },
    ], false),
    "Items": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "pattern", js: "pattern", typ: "" },
    ], false),
    "FluffyProperties": o([
        { json: "*", js: "*", typ: r("Class") },
    ], false),
    "Workspaces": o([
        { json: "description", js: "description", typ: "" },
        { json: "anyOf", js: "anyOf", typ: a(r("CPU")) },
    ], false),
    "TypeElement": [
        "boolean",
        "object",
        "string",
    ],
};
