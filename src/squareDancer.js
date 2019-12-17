var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// inherit methods and set constructor properly
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

// update step
makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    left: '+=50',
  }, this.timeBetweenSteps);
  // go down
  this.$node.animate({
    top: '+=50',
  }, this.timeBetweenSteps);
  // go right
  this.$node.animate({
    left: '-=50',
  }, this.timeBetweenSteps);
  // go up
  this.$node.animate({
    top: '-=50',
  }, this.timeBetweenSteps);
};