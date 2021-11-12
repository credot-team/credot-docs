---
title: 常用語法
sidebar_position: 2
---

## grid

```html
<div className="grid grid-cols-1 md:grid-cols-6"></div>
```

## flex

```html
<div className="flex justify-center items-center"></div>
```

## text

```html
<span className="text-red-600"> {post.title}</span>
```

## response

```html
<div className="lg:w-1/3 md:w-1/2 sm:w-2/3 w-full grid grid-cols-1"></div>
```

## full

```html
<div className="flex-1" />
```

## youtube iframe

```html
<div className="relative" style={{ paddingTop: '56.25%' }}>
    <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${post.youtubeID}`}
        frameBorder="0"
        allowFullScreen
    />
</div>
```
