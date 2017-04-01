# Creating a Jekyll App on Heroku Cedar

## Setup Jekyll

Install the jekyll gem.

```
gem install jekyll
```

## Create the site structure

```
mkdir jekyll-app
cd jekyll-app
touch index.md
mkdir _posts
mkdir _layouts
touch _layouts/default.html
touch _layouts/posts.html
```

## Hello World Jekyll

Let's create a layout. Open _layouts/default.html and add:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <link href='/css/screen.css' rel='stylesheet' type='text/css' />
  <title>Adrian Statescu - {{ page.title }}</title>
</head>
<body>
  <header>
    <h1><a href='/index.html'>Adrian Statescu</a></h1>
    <nav>
      <a href='/index.html'>blog</a>
      -
      <a href='/projects/index.html'>projects</a>
    </nav>
  </header>
  <div id='content'>
    {{ content }}
  </div>
  <footer>
    <a href='contact.html'>contact</a>
    -
    <a href='https://github.com/thinkphp'>github</a>
    -
    <a href='http://twitter.com/#!/thinkphp'>twitter</a>
    -
    <a href='http://www.linkedin.com/in/statescuadrian'>linked in</a>
    -
    <a href='http://thinkphp.ro/+'>google+</a>
  </footer>
</body>
</html>
```

Let's create another layout. Open _layouts/posts.html and add:

```
---
layout: default
comments: false
---
<article>
  <header>
    <h1>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </h1>
    <time datetime="{{ page.date | date: "%Y-%m-%d" }} pubdate">
      {{ page.date | date: "%B %d, %Y" }}
    </time>
  </header>
  {{ content }}
  <footer>
  </footer>
</article>

```

Posts belong in a folder, called _posts. The file name pattern for posts must be specific as well:
year-month-day-title.ext (in this case is md). Any file in your Jekyll site, really ca be either Markdown or HTML.
So, let's create few posts:

_posts/2013-02-01-Geospoofing-with-the-Raspberry-Pi.md

```
---
layout: posts
title: Geospoofing with the Raspberry Pi
---

Veni Vidi Vici Veni Vidi Vici Veni Vidi Vici Veni Vidi Vici 1

```

_posts/2013-02-02-Geospoofing-with-the-Raspberry-Pi2.md

```
---
layout: posts
title: Geospoofing with the Raspberry Pi 2
---

Veni Vidi Vici Veni Vidi Vici Veni Vidi Vici Veni Vidi Vici 2

```

_posts/2013-02-02-Geospoofing-with-the-Raspberry-Pi3.md

```
---
layout: posts
title: Geospoofing with the Raspberry Pi 3
---

Veni Vidi Vici Veni Vidi Vici Veni Vidi Vici Veni Vidi Vici 3

```

We need an index page. Open index.md and add:

```
---
layout: default
title: home
---

{% for post in site.posts %}
[{{ post.date | date: "%B %d, %Y" }} - {{ post.title }}]({{ post.url }})
{% endfor %}

```

## Deploying to Heroku

First, install the [Heroku Toolbelt] on your local workstation. This ensures that you have access to the Heroku 
command-line client.

Create a git repo and commit

```
   git init
   git add .
   git commit -m 'first commit'
```

Create a Heroku app using

```
   heroku create  
```

Deploy

```
   git push heroku master  
```

Test it!

```
  heroku open
```


[Heroku Toolbelt]: https://toolbelt.heroku.com/


