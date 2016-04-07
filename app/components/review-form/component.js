// component/review-form/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  reviewForm: {},
  pokemonName: '',
  actions: {
    createReview: function(){
      console.log('Component Action : createReview');
      this.sendAction('routeCreateReview',
        this.get('reviewForm'),
        this.get('pokemonName'));
      this.set('reviewForm', {});
      this.set('pokemonName', '');
    }
  }
});
