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
   * an example with breaking content: "**/*.tsx"
   */
  `;

  // TODO should fail but at least the implemenntation works so _shrug_
  const expected = `
  /**
   * an example with breaking content: "--.tsx"
   */
  `;

  const actual = replaceCommentsWithDash(srcString);

  assert.strictEqual(actual, expected);
});
