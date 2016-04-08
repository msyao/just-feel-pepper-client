// component/post-form/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  form: {},
  actions: {
    createPost: function(){
      console.log('Component Action : createPost');
      this.sendAction('routeCreatePost', this.get('form'));
      this.set('form', {});
    }
  },
  doubleClick: function(){
    this.toggleProperty('isEditable');
  }
});
