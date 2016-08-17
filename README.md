# [Phase2](http://phase2technology.com) Brand Stylekit

This has two main use cases:

1. To be installed as a `npm` dependency in other projects and used in scss files via `@import()` to be able to use Phase2 brand colors, typography, etc.
2. Clone this repo, and work on the styles for others to use in option 1. The best way to demonstrate the design system that is available via CSS is with [Pattern Lab](http://patternlab.io) in our opinion, so that is included here (though not in option 1).

# Use as `npm` dependency

## Install

    npm install --save phase2-brand-stylekit

Assuming you have a `scss/` folder next to `node_modules`; in the `scss/style.scss` file you would include:

```scss
@import "../node_modules/phase2-brand-stylekit/scss/core";
```

### Usage

After importing it into your scss, you'll have access to variables and mixins that you can use. This **will not** generate any CSS by simply including; you still need to use the mixins and variables in your desired CSS selectors.

Documentation for use can be found in these two places:

- [Pattern Lab](http://brand.phase2technology.com/patternlab/public)
- [SassDoc](http://brand.phase2technology.com/patternlab/dest/sassdoc)

---

# Using this repo's Pattern Lab

## QuickStart

After cloning the repo and `cd`-ing into it:

    npm install
    npm run setup
    npm start

## Orientation

- `pattern-lanb/source/_patterns/` - contains all Pattern Lab templates and the majority of the Sass files.
- `scss/` - Sass files that aren't really tied to a component, so not in the above location.
- `images/icons/src/` - all SVGs here are combined into font icons and have classes and Sass mixins made for each based on file name. See `atoms/images/icons` in Pattern Lab.

## Commands

Compile everything:

```bash
npm run compile
```

Start up watches and local server after compiling:

```bash
npm run start # or `npm start`
```

## Deploying

Simply pushing to `master` will compile and deploy the site to <http://brand.phase2technology.com/patternlab/public/>
