import test from "node:test";
import assert from "node:assert";

import { replaceCommentsWithDash } from "./escapeNestedComments.js";

test("replaceCommentsWithDash", (t) => {
  const srcString = `/**
  * Enforce consistent spacing after the // or -- in a comment
  */`;

  const actual = replaceCommentsWithDash(srcString);

  const expected =
    "/**\n  * Enforce consistent spacing after the // or -- in a comment\n  */";
  assert.strictEqual(actual, expected);
});

test("replaceCommentsWithDash more", (t) => {
  const srcString = `
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
  `;

  const actual = replaceCommentsWithDash(srcString);

  assert.strictEqual(actual, srcString);
});
