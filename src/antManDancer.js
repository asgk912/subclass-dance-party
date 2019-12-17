var makeAntManDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('antManDancer');
  this.$node.prepend('<img id=antmanDancer src=img/antman.gif>')
};

// inherit methods and set constructor properly
makeAntManDancer.prototype = Object.create(makeDancer.prototype);
makeAntManDancer.prototype.constructor = makeAntManDancer;

// update step
makeAntManDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    height: '100px',
    width: '100px'
  }, this.timeBetweenSteps);
  this.$node.animate({
    height: '10px',
    width: '10px'
  }, this.timeBetweenSteps);
};