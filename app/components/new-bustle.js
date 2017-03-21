import Ember from 'ember';

export default Ember.Component.extend({
  formShow: false,
  actions: {
    saveBustle() {
      var params= {
        title: this.get('title'),
        author: this.get('author'),
        caption: this.get('caption'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('formShow', false);
      this.sendAction('saveBustle', params);
    },
      showBustleForm() {
        this.set('formShow', true);
      }
  }
});
