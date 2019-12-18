var makeVDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('vDancer');
  this.$node.prepend('<img id=vDancer src=img/spiderman.gif>')
};

// inherit methods and set constructor properly
makeVDancer.prototype = Object.create(makeDancer.prototype);
makeVDancer.prototype.constructor = makeVDancer;

// update step
makeVDancer.prototype.step = function() {
  // diagonal up right
  this.$node.animate({
    left: this.leftPosition + 50,
    top: this.topPosition - 50
  }, this.timeBetweenSteps);
  // back to original position
  this.$node.animate({
    left: this.leftPosition,
    top: this.topPosition
  }, this.timeBetweenSteps);
  // digonal up left
  this.$node.animate({
    left: this.leftPosition - 50,
    top: this.topPosition - 50
  }, this.timeBetweenSteps);
  // diagonal go up
  this.$node.animate({
    left: this.leftPosition,
    top: this.topPosition
  }, this.timeBetweenSteps);

  makeDancer.prototype.step.call(this);
};