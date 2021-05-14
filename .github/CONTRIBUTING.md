# Contributing

## Our contribution model

The Carbon Design System is an **open source** project at IBM. We pride
ourselves in open and inclusive design and development. If you're wondering more
about our contribution process, you're in the right place. First off, thank you
for your interest! This project is made possible not just by the core Carbon
team, but also by several community members who have invested their own time to
give back to the Carbon community.

## Code of conduct

We value all of our community members, and thus want to foster a positive
contributing environment. Please take a look at our
[code of conduct](./CODE_OF_CONDUCT.md) before engaging in our workspaces.

## Prerequisites

Before contributing to Carbon, you should make sure you have the following tools
installed:

- [Node.js](https://nodejs.org/en/download/) v14 or above here or follow their
  installation through a package manager
  [here](https://nodejs.org/en/download/package-manager/))
  - If you're on macOS, we recommend using
    [`nvm`](https://github.com/nvm-sh/nvm) to help manage different versions of
    Node.js [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) as your
    version manager for Node.
- Git
- [Yarn](https://yarnpkg.com/en/docs/install)

You'll also need a code editor to make changes to Carbon. There are many to
choose from but some popular options are
[VSCode](https://code.visualstudio.com/), [Atom](https://atom.io), and
[Sublime](https://www.sublimetext.com/).

With that all in place, you're ready to start contributing to Carbon!

## Start contributing

### 1. Fork the repo:

Visit the
[repository on GitHub](https://github.com/carbon-design-system/tailwind-preset-carbon)
and click the `Fork` button in the top-right corner. This will create a copy
repo of Carbon associated with your account.

### 2. Clone your fork:

1.  Go to your [GitHub Repositories](https://github.com/settings/repositories).
1.  Click on `[your_github_username]/tailwind-preset-carbon`.
1.  Click on the `Clone or Download` button and copy the URL from the
    `Clone with SSH` option. It should start with `git@github.com...`

In your terminal:

```sh
git clone git@github.com:[your_github_username]/tailwind-preset-carbon.git
cd carbon
```

See [GitHub docs](https://help.github.com/articles/fork-a-repo/) for more
details.

### 3. Add upstream remotes

When you clone your forked repo, running `git remote -v` will show that the
`origin` is pointing to your forked repo by default.

Now you need to add the `carbon-design-system/tailwind-preset-carbon` repo as
your upstream remote branch:

```sh
# Add the upstream remote to your repo
git remote add upstream git@github.com:carbon-design-system/tailwind-preset-carbon.git

# Verify the remote was added
git remote -v
```

Your terminal should output something like this:

```sh
origin  [your forked repo] (fetch)
origin  [your forked repo] (push)
upstream    git@github.com:carbon-design-system/tailwind-preset-carbon.git (fetch)
upstream    git@github.com:carbon-design-system/tailwind-preset-carbon.git (push)
```

### 4. Work in a branch

When contributing to Carbon, your work should always be done in a branch off of
your repo, this is also how you will submit your pull request when your work is
done.

To create a new branch, ensure you are in your forked branch in your terminal
and run:

```sh
git pull origin main
git checkout -b {your-branch-name}
```
