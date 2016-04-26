// application/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('posts'))
      .then(() => this.get('flashMessages').success('Thanks for signing in!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
    signOut () {
      this.get('auth').signOut()
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      }).then(() => {
        this.store.unloadAll();
      }).catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Are you sure you\'re signed-in?');
      });
    },

    error (reason) {
      let unauthorized = reason.errors.some((error) => {
        return error.status === "401";
      });

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },
});
