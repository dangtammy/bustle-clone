import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bustle', params.bustle_id);
  },
  actions: {
    update(bustle, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          bustle.set(key,params[key]);
        }
      });
      bustle.save();
      this.transitionTo('index');
    },
    delete(bustle) {
      bustle.destroyRecord();
      this.transitionTo('index');
    }
  }
});
