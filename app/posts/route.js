// app/posts/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      post: this.store.findAll('post'),
      review: this.store.findAll('review')
    };
  },
  actions: {
    createPost: function(properties){
      console.log('Route Action : createPost');
      this.store.createRecord('post', properties)
        .save().then(()=>console.log('record created'))
        .then(() => {
          this.get('flashMessages')
          .success('You have created a post!');
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('Sorry, you must be admin to create post!.');
        });
    },
    updatePost: function(post) {
      console.log('Route Action : updatePost');
      post.save();
    },
    destroyPost: function(post){
      console.log('Route Action : destroyPost');
      post.destroyRecord();
    }
  }
});
