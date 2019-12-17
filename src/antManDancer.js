var makeAntManDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// inherit methods and set constructor properly
makeAntManDancer.prototype = Object.create(makeDancer.prototype);
makeAntManDancer.prototype.constructor = makeAntManDancer;

// update step
makeAntManDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    height: '30px',
    width: '30px'
  }, this.timeBetweenSteps);
  this.$node.animate({
    height: '10px',
    width: '10px'
  }, this.timeBetweenSteps);
};