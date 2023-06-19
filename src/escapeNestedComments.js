export function escapeNestedComments(code) {
  const regex = /\/\*\*([\s\S]*?)\*\//g;
  return code.replace(regex, (match, comment) => {
    console.log(comment);
    const escapedComment = comment
      .replace(/\/\*/g, "\\/*")
      .replace(/\*\//g, "*\\/");
    return "/**" + escapedComment + "*/";
  });
}
