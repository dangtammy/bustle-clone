import Ember from 'ember';

export default Ember.Component.extend({
  modifyForm: false,
  actions: {
    showModify() {
      this.set('modifyForm', true);
    },
    update(bustle) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        caption: this.get('caption'),
        image: this.get('image'),
      };
      this.set('modifyForm', false);
      this.sendAction('update', bustle, params);
    },
    delete(bustle) {
      this.sendAction('delete', bustle)
    }
  }
});
