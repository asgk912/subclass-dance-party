var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('squareDancer');
  this.$node.prepend('<img id=squareDancer src=img/spiderman.gif>')
};

// inherit methods and set constructor properly
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

// update step
makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    left: '+=50',
    top: '+=50',
  }, this.timeBetweenSteps);
  // go down
  this.$node.animate({
    left: '+=50',
    top: '-=50',
  }, this.timeBetweenSteps);
  // go right
  this.$node.animate({
    left: '-=50',
    top: '+=50',
  }, this.timeBetweenSteps);
  // go up
  this.$node.animate({
    left: '-=50',
    top: '-=50',
  }, this.timeBetweenSteps);
};