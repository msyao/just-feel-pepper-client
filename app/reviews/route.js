// app/review/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      post: this.store.findAll('post'),
      review: this.store.findAll('review')
    };
  },
  actions: {
    createReview: function(properties, postTitle){
      console.log('Route Action : createReview');
      let observedPost = this.store.peekAll('post').find(function(post){
        return post.get('title') === postTitle;
      });
      let newReview = this.store.createRecord('review', properties);
      observedPost.get('review').pushObject(newReview);
      newReview.save().then(()=>console.log('record created'));

    },
    updateReview: function(review, newPostTitle) {
      console.log('Route Action : updateReview');
      if(newPostTitle) {
        let newPost = this.store.peekAll('post').find((post)=>{
          return post.get('title') === newPostTitle;
        });
        if (newPost){
          newPost.get('review').pushObject(review);
        }
      }
      review.save();
    },
    destroyReview: function(review){
      console.log('Route Action : destroyReview');
      review.destroyRecord();
    }
  }
});
