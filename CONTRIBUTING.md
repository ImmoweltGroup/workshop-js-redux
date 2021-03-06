# Contributing
We are open and grateful for any contributions made by you!

## Reporting Issues
Before opening an issue, please make sure that your issue hasn't been already reported by using the search functionality of the [issue tracker](https://github.com/ImmoweltGroup/workshop-js-redux/issues).

## Development
Visit the [issue tracker](https://github.com/ImmoweltGroup/workshop-js-redux/issues) to find a list of open issues that are easy to pick up or need some love.

Fork, then clone the repo:
```
git clone https://github.com/your-username/workshop-js-redux.git
```

### Testing, Type-Checking with Flow and Linting
To run the tests:
```
yarn run test
```

To perform linting with `eslint`, run the following:
```
yarn run lint
```

To perform a single check of the types with `flow`, run the following:
```
yarn run flow
```

### New Features
Please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

## Commit guidelines and semantic release
Our repositories make great use of [semantic-release](https://github.com/semantic-release/semantic-release). This tool automatically creates releases once the code is pushed to our `master` branch and the commits signal a release-worthy CI run.

All commits must contain a prefix of one of the following values, e.g.

| Prefix        | Description     | Release type  |
| ------------- | --------------- | ------------- |
| `!!!`         | Breaking change | Major         |
| `FEATURE`     | Feature         | Minor         |
| `BUGFIX`      | Bugfix          | Patch         |
| `SECURITY`    | Security change | Patch         |
| `TASK`        | Other changes   | No release    |

So in case you want to submit a bugfix, you should execute `git commit -m "BUGFIX: A short description of what this commit solves - solves #21"` where `21` is the issue number of the bug you fix.

## Submitting Changes

* Open a new issue in the [issue tracker](https://github.com/ImmoweltGroup/workshop-js-redux/issues).
* Fork the repo.
* Create a new feature branch based off the `master` branch.
* Make sure all tests pass and there are no linting errors.
* Make sure to commit your changes with the guidelines written above.
* Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or improvements.

Thank you for contributing! :-) :heart:
