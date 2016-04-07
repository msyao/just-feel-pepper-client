// review-snippet/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  doubleClick: function(){
    this.toggleProperty('isEditable');
  },
  newPostTitle: '',
  actions: {
    updateReview: function(){
      console.log('Component Action : updateReview');
      this.sendAction('routeUpdateReview', this.get('review'), this.get('newPostTitle'));
      this.set('isEditable', false);
    },
    destroyReview: function(){
      console.log('Component Action : destroyReview');
      this.sendAction('routeDestroyReview', this.get('review'));
    }
  }
});
