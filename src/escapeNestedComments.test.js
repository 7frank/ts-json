import test from "node:test";
import assert from "node:assert";

import {
  escapeNestedComments,
  parseCustomTags,
} from "./escapeNestedComments.js";

// test("escapeNestedComments", (t) => {
//   const actualResult = escapeNestedComments(
//     `/**
//      * foo /* global */ bar
//      */`,
//     (s) => s.replace(new RegExp("/", "g"), "-")
//   );

//   const expectedResult = `/**
//      * foo [* global *] bar
//      */`;

//   assert.strictEqual(actualResult, expectedResult);
// });

// test("escapeNestedComments", (t) => {
//   const actualResult = escapeNestedComments(
//     `/**
//     *
//     */`,
//     (s) => s.replace(new RegExp("/", "g"), "-")
//   );

//   const expectedResult = `/**
//     *
//     */`;

//   assert.strictEqual(actualResult, expectedResult);
// });

test("buildCommentStructure", (t) => {
  const srcString = `/**
   * foo /* global */ bar
   */
  
   /**
    * foo  bar
    */
  
   `;
  const tags = [
    { type: "comment", start: "/*", end: "*/" },
    // { type: "code", start: "Start_Code", end: "End_Code" },
  ];
  const commentStructure = parseCustomTags(srcString, tags);

  assert.strictEqual(commentStructure, {});
});
