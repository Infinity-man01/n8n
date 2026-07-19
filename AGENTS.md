# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a clean project scaffold. Keep application code in a clearly named top-level directory such as `src/`, tests in `tests/` (or beside the code as `*.test.*`), and static files in `assets/` or `public/`. Group files by feature rather than by broad technical type once the project grows. Avoid placing generated output, local caches, or secrets under version control.

## Build, Test, and Development Commands

No build system is configured yet. When adding one, document the canonical commands here and in `README.md`. Prefer predictable scripts, for example:

- `npm run dev` - start local development.
- `npm run build` - create a production build.
- `npm test` - run the full automated test suite.
- `npm run lint` - check formatting and static-analysis rules.

Run the relevant checks before opening a pull request.

## Coding Style & Naming Conventions

Follow the formatter and linter chosen for the project; do not hand-format around them. Use two spaces for JSON, YAML, and JavaScript/TypeScript unless the chosen formatter specifies otherwise. Use descriptive, lowercase, hyphenated names for files where the ecosystem permits (for example, `user-profile.ts`), `PascalCase` for components/classes, and `camelCase` for functions and variables. Keep modules focused and avoid unexplained abbreviations.

## Testing Guidelines

Add or update tests for every behavior change and bug fix. Name tests after the behavior being verified, such as `user-profile.test.ts` or `test_user_profile.py`, according to the selected framework. Keep tests deterministic: do not depend on live services, local machine state, or execution order. Add coverage reporting when test tooling is introduced and investigate any meaningful coverage reduction.

## Commit & Pull Request Guidelines

There is no commit history yet, so use concise imperative commit subjects, optionally scoped: `feat: add workflow importer` or `fix(api): reject invalid tokens`. Keep each commit focused. Pull requests should explain the change, list validation run, link relevant issues, and include screenshots for visible UI changes. Request review only when the branch is ready to merge.

## Security & Configuration

Store secrets only in local environment files such as `.env`, never in committed source. Provide safe placeholder values in `.env.example` and document required configuration without exposing credentials.
