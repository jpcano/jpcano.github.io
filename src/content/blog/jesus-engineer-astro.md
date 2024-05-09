---
title: "Astro. First impressions"
description: "Experiences and thoughts after refactoring https://jesus.engineer with Astro"
pubDate: "May 07 2024"
heroImage: "./images/jesus-engineer-astro/refactor-astro.png"
---

**Note:** the source code of this website is available on [my github repository](https://github.com/jpcano/jpcano.github.io).

On November 2023, I organised a meetup event at [Javascript & Node.js Cambridge](https://www.meetup.com/JavaScript-Cambridge/) where one of the speakers presented an introduction to [Astro](https://astro.build), a web framework used to build content driven websites. As a result I decided to refactor my personal website (the one you are looking at right now) using this new framework and, at the same time, adding blogging capabilities. The recording of the talk is available here:

<p><iframe style="height:600px;" width="800" height="600" src="https://www.youtube.com/embed/MYP7Iil7xnU?si=nj7zHfwWGW3pv_uV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

## Before Astro

A quick inspect to the [old website code](https://github.com/jpcano/jpcano.github.io/tree/f6602694b42053c9fd15c559011196144c2427d1) shows that, originally, my personal website was built primarly with 3 files that I used to edit and push manually to Github Pages:

- A [HTML file](https://github.com/jpcano/jpcano.github.io/blob/f6602694b42053c9fd15c559011196144c2427d1/index.html) that contains the web layout and content.
- A [CSS file](https://github.com/jpcano/jpcano.github.io/blob/f6602694b42053c9fd15c559011196144c2427d1/css/styles.css) to style the website.
- A [JavaScript file](https://github.com/jpcano/jpcano.github.io/blob/f6602694b42053c9fd15c559011196144c2427d1/js/main.js) to add some dynamism like highligting the current section in the header and showing a navigation menu on mobile devices.

This basic old-school approach was primarly influenced by the simplicity of the website and the design template I used (thanks to [Styleshout](https://www.styleshout.com)).

## Why introducing Astro on my site?

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](./images/blog-placeholder-about.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Output

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark
