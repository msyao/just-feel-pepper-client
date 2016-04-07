// component/post-snippet/component.js
import Ember from 'ember';

export default Ember.Component.extend({
//  tagName: 'li',

  // need to change to average review rating of hotness
  // numReviews: Ember.computed('post.reviews.@each', function(){
  //   return this.get('post.reviews').get('length');
  // }),
  isEditable: false,
  actions: {
    updatePost: function(){
      console.log('Component Action : updatePost');
      this.sendAction('routeUpdatePost', this.get('post'));
      this.set('isEditable', false);
    },
    destroyPost: function(){
      console.log('Component Action : destroyPost');
      this.sendAction('routeDestroyPost', this.get('post'));
    }
  },
  doubleClick: function(){
    this.toggleProperty('isEditable');
  }
});
