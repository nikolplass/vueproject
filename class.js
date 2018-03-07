// Week 16
// Group Discussion Questions

// What does vue-router allow us to do?
// in a spa, allows us to change views

// What new vue-specific HTML element do we use to create a "link" using vue-router?
// <router-link to="/one">Lovey</router-link>

// What new vue-specific HTML element do we use to display new content via a vue-router route?
// <div id = "content">
// <router-view></router-view>

// What new vue-specific HTML element do we use to trigger transition animations?
// <transition mode ="out-in" name="slide-fade"></transition>

// What is the syntax for initiating a Vue-Router instance?
// const router = new VueRouter({})

// What is the syntax for mounting a Vue-Router instance to your Vue instance?
// .$mount

// What new property do we add to our Vue instance in order to enable using Vue-Router?
// router,

// In our components, what is the name of the property in which we store our HTML markup which will be output to our HTML document?
// template: 
// backtips '<div> </div>'

Exercises
Important: Make sure to add comments to your code to help your future self.
In HTML: create a div and give it an ID of "app".
In HTML: create a horizontal navbar of five links in this div. Make sure you use router-link elements to create the links, not anchors.
In HTML: Beneath your navbar, create a router-view element.
In JS: create a new Vue instance with an "el" property, linking your instance to your "#app" div.
In JS: create a new VueRouter instance, stored in a variable called "myRouter".
In JS: inside your VueRouter instance, create a "routes" property containing an array. Inside this array, create one object for each link in your HTML. Each object should have two properties: "path" and "component".
In JS: for each path property of each object in your "routes" array, give each the value of a string containing a "/" followed by a number (e.g. "/one", "/two", "/three", etc.). Each "component" property will remain empty for now.
In JS: create one variable (or constant) for each link in your HTML. Each of these variables will contain one object with one "template" property.
In JS: in each template property, write some HTML markup which includes an h1, an img, and a paragraph. Feel free ot use dummy text, but be sure that each image is different.
In JS: now, in the component property of each object in your routes array in your VueRouter instance, insert the name of one of these variables, until all five component properties each have the value of a different variable (or constant) containing an object with a template property.
In HTML: give each router-link element a "to" attribute with a value of one of the path properties of the objects of your routes array (e.g. "to='/one'").
Now load your page, and test your router-links. Does clicking on each link cause new content to seamlessly display in your router-view element?
Now experiment with applying a transition to your router-view content by wrapping your router-view element in a transition element. Give this transition element a "name" property, with a value of "slide-fade"
In CSS: create ".slide-fade-enter" and ".slide-fade-leave-to" selectors. In these selectors, add opacity properties with values of 0, and a "transform" properter with a value of "translateX(10px)".
In CSS: create ".slide-fade-enter-active" and ".slide-fade-leave-active" selectors and give them transition properties with values of "0.5s ease". Test out your transition animations.
To finish, inside your transition element in your HTML, add a "mode" attribute with a value of "out-in". Now test out your animations again, what's different?
Once you have completed these exercises add them to Github.
