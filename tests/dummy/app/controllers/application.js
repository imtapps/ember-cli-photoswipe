import Controller from '@ember/controller';
import { later } from '@ember/runloop';

export default Controller.extend({
  // example 1
  psOpts: { //eslint-disable-line
    index: 1
  },

  items1: [ //eslint-disable-line
    {
      src: 'http://placekitten.com/g/600/400',
      w: 600,
      h: 400,
      title: 'whooa'
    },
    {
      src: 'http://placekitten.com/g/1200/900',
      w: 1200,
      h: 900
    }
  ],

  items2: [ //eslint-disable-line
    {
      src: 'http://placekitten.com/g/60/40',
      w: 60,
      h: 40,
      title: 'kitties'
    }
  ],

  init() {
    this._super(...arguments);
    this.set('items', this.get('items1'));
  },

  // actions
  actions: {
    initGallery() {
      this.set('photoSwipe', true);
      later(() => {
        this.get('myGallery').init();
      });
    },

    destroyPhotoswipe() {
      this.set('photoSwipe', '');
    },

    changeItems() {
      if (this.get('items') === this.get('items1')) {
        console.log('changing to 2'); //eslint-disable-line
        this.set('items', this.get('items2'));
      } else {
        console.log('changing to 1'); //eslint-disable-line
        this.set('items', this.get('items1'));
      }
    }
  },

  psTwoOpts: { //eslint-disable-line
    hideShare: true
  }
});
