# Ember-cli-photoswipe [![Build Status](https://travis-ci.org/poetic/ember-cli-photoswipe.svg)](https://travis-ci.org/poetic/ember-cli-photoswipe)

Ember-cli Addon adaptation of the popular photo gallery library
[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe).

## Usage

```html
{{#photo-swipe items=model as |img|}}
  <img class="thumb" src={{img.src}} alt={{img.title}}>
{{/photo-swipe}}
```

By wrapping your gallery in the component, the addon will take care of
instantiating PhotoSwipe for you and for calculating the thumbnail bounds so
you get the nice zoom in/out animations right out of the box. Easy, right?

See `tests/dummy/app/templates/application.hbs` as an example of this.

The `items` property is required and an array of objects should be
passed to it. PhotoSwipe expects these items to have the following structure:

```javascript
[
  {
    src: 'http://placekitten.com/g/600/400',
    w: 600,
    h: 400,
    title: 'whooa',
    msrc: '(optional) larger image'
  }
]
```

If you want to instantiate a PhotoSwipe gallery from an action instead of a
thumbnail, you can also do the following:

```javascript
{{photo-swipe gallery=myGallery options=psOpts items=items}}
```

And then you can initialize it through an action in your controller like this:

``` javascript
actions: {
  initGallery: function() {
    this.get('myGallery').init();
  }
}
```

Any property bound to `gallery` will become the actual gallery object.
This is used to instantiate PhotoSwipe and to interact with the live instance.

Any PhotoSwipe options can be passed to the `options` property of the component.
For now the history module is disabled since it breaks ember routing.

More functionality is on the way, this is a work in progress. You can find
PhotoSwipe documentation [here](http://photoswipe.com/).

## More Options

You can pass the following extra options to the options property in the
PhotoSwipe component to hide PhotoSwipe buttons (default to false):

1. `hideClose`
2. `hideShare`
3. `hideToggleFullScreen`
4. `hideZoomInOut`

## Contributing

If you have ideas or feature needs that could be implemented, just submit an issue
or pull request.
=======
my-addon
==============================================================================

[Short description of the addon.]
>>>>>>> 210d16d... message

Installation
------------------------------------------------------------------------------

<<<<<<< HEAD
###### Ember-cli >= 0.1.5
As easy as running `ember install:addon ember-cli-photoswipe`, which will also
run the generator.

###### Ember-cli < 0.1.5
For versions under 0.1.5 you need to run `npm install ember-cli-photoswipe
--save-dev`.
=======
```
ember install my-addon
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`
>>>>>>> 210d16d... message

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

To run the dummy app:

* `git clone https://github.com/poetic/ember-cli-photoswipe.git`
* `ember server`
* Visit your app at http://localhost:4200.

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
