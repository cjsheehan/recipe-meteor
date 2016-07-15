Meteor.publish('recipes', function(){
  // only current users recipes will be available to them
  return Recipes.find({author: this.userId})
});

Meteor.publish('singleRecipe', function(id){
  // only current users recipes will be available to them
  check(id, String);
  return Recipes.find({_id: id})
});