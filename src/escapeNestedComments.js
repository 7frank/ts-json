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
export function parseCustomTags(inputString, tags) {
  const stack = [];
  const tree = [];
  let currentIndex = 0;

  while (currentIndex < inputString.length) {
    let foundTag = null;
    let foundTagIndex = inputString.length;

    for (const tag of tags) {
      const startTagIndex = inputString.indexOf(tag.start, currentIndex);
      if (startTagIndex !== -1 && startTagIndex < foundTagIndex) {
        foundTag = tag;
        foundTagIndex = startTagIndex;
      }
    }

    if (!foundTag) {
      break; // No more tags found
    }

    const startTagIndex = foundTagIndex;
    const endTagIndex = inputString.indexOf(foundTag.end, currentIndex);

    if (endTagIndex === -1) {
      break; // Invalid structure, end tag not found
    }

    if (startTagIndex < endTagIndex) {
      const element = {
        type: foundTag.type,
        start: startTagIndex,
        end: endTagIndex + foundTag.end.length,
        children: [],
      };

      if (stack.length > 0) {
        const parent = stack[stack.length - 1];
        parent.children.push(element);
      } else {
        tree.push(element);
      }

      stack.push(element);
      currentIndex = startTagIndex + foundTag.start.length; // Move the current index past the start tag
    } else {
      stack.pop();
      currentIndex = endTagIndex + foundTag.end.length; // Move the current index past the end tag
    }
  }

  return tree;
}
