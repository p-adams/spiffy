import { parseRepoName } from "./parseRepoName";

test("Correctly parses react-redux from Redux repo URL", () => {
  expect(parseRepoName("https://github.com/reduxjs/react-redux")).toBe(
    "react-redux"
  );
});

test("Correctly parse vue-class-component from Vue repo URL", () => {
  expect(parseRepoName("https://github.com/vuejs/vue-class-component")).toBe(
    "vue-class-component"
  );
});
