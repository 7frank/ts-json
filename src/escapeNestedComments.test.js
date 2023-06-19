import test from "node:test";
import assert from "node:assert";

import { replaceCommentsWithDash } from "./escapeNestedComments.js";

test("buildCommentStructure", (t) => {
  const srcString = `/**
   * foo /* global */ bar
   */
  
   /**
    * foo  bar
    */
  
   `;

  const comments = replaceCommentsWithDash(srcString);

  assert.strictEqual(comments, []);
});
