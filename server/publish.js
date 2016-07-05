Meteor.publish('recipes', function(){
  // only current users recipes will be available to them
  return Recipes.find({author: this.userId})
});