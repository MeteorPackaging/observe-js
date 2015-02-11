'use strict';

Tinytest.add('Observe.is', function (test) {
  var observer = new PathObserver({});
  test.instanceOf(observer, PathObserver, 'Instantiation PathObserver OK');

  function getValue(value) { return value * 2 };
  function setValue(value) { return value / 2 };
  var transform = new ObserverTransform(observer, getValue, setValue);
  test.instanceOf(observer, ObserverTransform, 'Instantiation ObserverTransform OK');
  
  var observer = new ArrayObserver([]);
  test.instanceOf(observer, ArrayObserver, 'Instantiation ArrayObserver OK');
  
  var observer = new ArrayObserver([]);
  test.instanceOf(observer, ArrayObserver, 'Instantiation ArrayObserver OK');
  
  var observer = new ObjectObserver({});
  test.instanceOf(observer, ObjectObserver, 'Instantiation ObjectObserver OK');
  
  var observer = new CompoundObserver();
  test.instanceOf(observer, CompoundObserver, 'Instantiation CompoundObserver OK');

});