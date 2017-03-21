import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  author: DS.attr(),
  caption: DS.attr(),
  content: DS.attr(),
  feature:DS.attr(),
  image: DS.attr(),
  title: DS.attr(),
  isFeature: Ember.computed.equal('feature', 'yes'),
});
