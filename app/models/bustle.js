import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  caption: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
});
