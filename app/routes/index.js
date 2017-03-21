import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('bustle');
  },
  actions: {
    saveBustle(params) {
      var newBustle = this.store.createRecord('bustle', params);
      newBustle.save();
      this.transitionTo('index'); 
    }
  }
});
