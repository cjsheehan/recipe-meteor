FlowRouter.route('/', {
  name: 'home',
  action() {
    // Note: this would require valid GA credentials
    // GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    // Note: this would require valid GA credentials
    // GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe-book',
  action() {
    // Note: this would require valid GA credentials
    // GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});
