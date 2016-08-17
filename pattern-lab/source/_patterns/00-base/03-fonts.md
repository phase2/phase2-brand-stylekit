Fonts can be imported using either of the below Sass mixins. That will create the `@import()` statements to pull in the 
font files from Google Fonts and bring in some sensible defaults for variants.

```scss
@include phase2-font-oswald-import();
@include phase2-font-source-sans-import();
```

To customize, pass in a list
of variants (weights for bold and italic indicator). Each one is the weight, and if you want italic add the `i`.
So to get weight 300 italicized, use `300i`. To get 300, 400, 400 italicized, and 700 of Source Sans Pro, use:

```scss
@include phase2-font-source-sans-import(("300", "400", "400i", "700"));
```

To apply to some html, add:

```scss
.source-sans {
  font-family: $phase2-font--source-sans;
}

.oswald {
    font-family: $phase2-font--oswald;
}
```

[Edit this](https://github.com/phase2/phase2-brand-stylekit/blob/master/pattern-lab/source/_patterns/00-base/03-fonts.md)
