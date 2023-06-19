export function findTopLevelComments(code) {
  const comments = [];
  const stack = [];
  let commentStart = null;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "/" && code[i + 1] === "*") {
      if (stack.length === 0) {
        commentStart = i;
      }
      stack.push(i);
      i++; // Skip the next character since it's part of the comment start
    } else if (code[i] === "*" && code[i + 1] === "/") {
      const commentEnd = i + 1;
      if (stack.length === 1) {
        const comment = { start: commentStart, end: commentEnd + 1 };
        comments.push(comment);
      }
      stack.pop();
      i++; // Skip the next character since it's part of the comment end
    }
  }

  return comments;
}

/**
 * fiddle-ish top level comment escaping ... but working never the less
 */
export function replaceCommentsWithDash(code) {
  const comments = findTopLevelComments(code);

  // Replace comments with '--'
  for (let i = comments.length - 1; i >= 0; i--) {
    const { start, end } = comments[i];
    const replaced =
      code
        .substring(start + 1, end - 1)
        .replace(/\/\*/g, "--")
        .replace(/\*\//g, "--") + "/";
    code = code.slice(0, start + 1) + replaced + code.slice(end - 1 + 1);
  }

  return code;
}
