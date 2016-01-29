# Sunblast

Sunblast is a port of Snowman to AngularJS. Instead of a new syntax, you use HTML with special elements, predefined and 
user-defined.

## FAQ

*What features will be included?*

I'm writing the engine for a friend and possibly for a project of my own. These features will get priority. Highest priority 
after getting basic functionality down will be conditional choices based on "qualities".

*I just get `Could not bootstrap sunblast, did you create a sunblastUserModule in code?`*

You need to create a new Angular module in your custom JS. This is mostly because loading things into Angular post-bootstrap 
is a pain in the ass. If you don't know what to do, just add this line to your custom JS.

    angular.module("sunblastUserModule", []);
