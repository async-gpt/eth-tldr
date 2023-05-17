module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "config",
      ],
    ],
  },
};

// "ci" - Continuous Integration: Changes related to the continuous integration system, such as build scripts or configuration files.

// "chore" - Chore: General maintenance-related modifications, such as updating dependencies, formatting code, renaming files, etc.

// "docs" - Documentation: Changes related to documentation, including adding, modifying, or deleting doc comments, README files, help documentation, etc.

// "feat" - Feature: Changes that introduce new functionality or features.

// "fix" - Bug Fix: Fixes for errors, defects, or issues in the code.

// "perf" - Performance Improvement: Changes aimed at improving code performance, such as optimizing algorithms or reducing resource consumption.

// "refactor" - Refactoring: Code changes that improve its structure or design without affecting its functionality.

// "revert" - Revert: Reverses a previous commit or code changes.

// "style" - Style: Changes related to code style and formatting, such as whitespace, indentation, naming conventions, etc.

// "test" - Testing: Changes related to testing, including adding, modifying, or deleting test cases, test frameworks, etc.

// "config" - Configuration: Changes related to configuration files, such as adjusting Jest configuration, ESLint configuration, Prettier configuration, etc.
