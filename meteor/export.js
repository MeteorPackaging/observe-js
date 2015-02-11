/*global PathObserver:true*/ 
/*global ArrayObserver:true*/
/*global ObjectObserver:true*/
/*global CompoundObserver:true*/  
/*global ObserverTransform:true*/

// Meteor creates file-scope globals for exporting. These comments prevents a potential JSHint warning.
if (Meteor.isClient) {
  PathObserver = window.PathObserver;
  delete window.PathObserver;

  ArrayObserver = window.ArrayObserver;
  delete window.ArrayObserver;

  ObjectObserver = window.ObjectObserver;
  delete window.ObjectObserver;

  CompoundObserver = window.CompoundObserver;
  delete window.CompoundObserver;

  ObserverTransform = window.ObserverTransform;
  delete window.ObserverTransform;
} else {
  PathObserver = global.PathObserver;
  delete global.PathObserver;

  ArrayObserver = global.ArrayObserver;
  delete global.ArrayObserver;

  ObjectObserver = global.ObjectObserver;
  delete global.ObjectObserver;

  CompoundObserver = global.CompoundObserver;
  delete global.CompoundObserver;

  ObserverTransform = global.ObserverTransform;
  delete global.ObserverTransform;
}