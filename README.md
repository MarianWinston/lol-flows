# ⚡️ Lol - Flows 💛 React edition

## Pre-reqs
* Node.js ^10.x.x
* Yarn ^1.17.x

**A note about yarn:** Yarn is a package manager for node. It uses the same registry as npm, but it's quicker and more secure. Yarn is recommended for use over npm.
To learn more about Yarn, [visit the docs](https://yarnpkg.com/en/docs/install)

1. Checkout a clean version of the project
```zsh
~ $ git clone https://github.com/MarianWinston/lol-flows.git
```

2. Install dependencies
```zsh
~/$projectname $ yarn
```
3. Develop!
```zsh
~/$projectname $ yarn dev
```

## Configuration
All configuration should be managed via `.env` per the 12 factor app. a `.env-sample` file is included.

#### `master`, `feature/*`, `cleanup/*` and `fix/*`
* Lint code (according to the Airbnb style guide)
* Test code (according to unit tests defined in `test/`)
* Audit packages (via `yarn audit`)
* Perform static source code analysis. Find all vulnerabilities within the codebase
* Check for any committed keys

#### `develop` and `staging`
* Lint code
* Test code

## Contributing

This template (should be) is open source to everybody that has interest in adding good quality code. This means that if you want a feature, or want to fix a bug - submit a pull request!

Just ensure that:
* This is an easily maintainabile feature
