// app/post/model.js
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  website: DS.attr('string'),

  review: DS.attr()
  //review: DS.hasMany('review', {async: true})
});
