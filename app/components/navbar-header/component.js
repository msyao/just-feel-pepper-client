// components/navbar-header/component.js
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['navbar-header'],
  auth: Ember.inject.service(),

  isAuthenticated: Ember.computed.alias('auth.isAuthenticated')
});
