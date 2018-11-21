/* global PhotoSwipe */
/* global PhotoSwipeUI_Default */


import { merge } from '@ember/polyfills';
import { isPresent } from '@ember/utils';
import Component from '@ember/component';
import { run, scheduleOnce } from '@ember/runloop';
import layout from '../templates/components/photo-swipe';

export default Component.extend({
  layout,

  didInsertElement() {

    scheduleOnce('afterRender', this, function() {
      this.set('pswpEl', this.$('.pswp')[0]);
      this.set('pswpTheme', PhotoSwipeUI_Default);

      this._buildOptions();

      if (this.get('items')) {
        return this._initItemGallery();
      }
    });
  },

  _buildOptions: function(getThumbBoundsFn) {
    var reqOpts = {
      history: false
    };

    if (isPresent(getThumbBoundsFn)) {
      reqOpts.getThumbBoundsFn = getThumbBoundsFn;
    }

    var options = merge(reqOpts, this.get('options') || {});
    this.set('options', options);
  },

  setupGallery(component) {
    var gallery = new PhotoSwipe(
      component.get('pswpEl'),
      component.get('pswpTheme'),
      component.get('items'),
      component.get('options')
    );
    if (component.get('reinit')) {
      component.get('reinit')(gallery);
    }
    component.set('gallery', gallery);
    return gallery;
  },

  _initItemGallery: function() {
    const gallery = this.setupGallery(this);
    this._reInitOnClose(gallery);
  },

  willDestroyElement() {
  },

  _reInitOnClose: function(gallery) {
    var component = this;
    gallery.listen('close', function() {
      run.next(function() {
        component.get('destroy')();
      });
    });
  },


  _getBounds: function(i) {
    const img = this.$('img').get(i);
    const position = this.$(img).position();
    const width = this.$(img).width();
    return {x: position.left, y: position.top, w: width};
  }
});
