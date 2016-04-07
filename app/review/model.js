// app/review/model.js

import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  comment: DS.attr('string'),

  post: DS.attr()
  //post: DS.belongsTo('post', {async: true})
});
