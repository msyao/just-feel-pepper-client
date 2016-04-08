// app/post/model.js
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  website: DS.attr('string'),

  // reviews: DS.attr()
  reviews: DS.hasMany('review', {async: true})
});
