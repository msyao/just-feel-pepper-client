// component/review-form/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  reviewForm: {},
  postTitle: '',
  actions: {
    createReview: function(){
      console.log('Component Action : createReview');
      this.sendAction('routeCreateReview',
        this.get('reviewForm'),
        this.get('postTitle'));
      this.set('reviewForm', {});
      this.set('postTitle', '');
    }
  }
});
