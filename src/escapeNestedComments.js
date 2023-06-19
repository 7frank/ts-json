export function escapeNestedComments(comment, replaceFn = (s) => s) {
  let fixedComment = "";
  let stack = [];
  let nestedComment = "";

  for (let i = 0; i < comment.length; i++) {
    if (comment[i] === "/" && comment[i + 1] === "*") {
      if (comment[i + 2] === "*") {
        stack.push(nestedComment);
        nestedComment = "";
        i += 2;
      } else {
        nestedComment += "/*";
        i++;
      }
    } else if (comment[i] === "*" && comment[i + 1] === "/") {
      if (stack.length > 1) {
        const previousComment = stack.pop();
        nestedComment = replaceFn(previousComment + nestedComment + "*/");
      } else {
        fixedComment += nestedComment + "*/";
        nestedComment = "";
      }
      i++;
    } else {
      nestedComment += comment[i];
    }
  }

  fixedComment += nestedComment;

  return fixedComment;
}
export function parseNestedStructure(inputString, startTag, endTag) {
  const stack = [];
  const tree = [];
  let currentIndex = 0;

  while (currentIndex < inputString.length) {
    const startTagIndex = inputString.indexOf(startTag, currentIndex);
    const endTagIndex = inputString.indexOf(endTag, currentIndex);

    if (startTagIndex === -1 || endTagIndex === -1) {
      break; // No more tags found
    }

    if (startTagIndex < endTagIndex) {
      stack.push(tree.length); // Store the parent index in the stack
      const element = {
        start: startTagIndex,
        end: endTagIndex + endTag.length,
        children: [],
      };
      tree.push(element);
      currentIndex = startTagIndex + startTag.length; // Move the current index past the start tag
    } else {
      const parentIndex = stack.pop();
      tree[parentIndex].end = endTagIndex + endTag.length; // Update the parent's end position
      currentIndex = endTagIndex + endTag.length; // Move the current index past the end tag
    }
  }

  return tree;
}
