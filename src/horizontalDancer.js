var makeHorizontalDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('horizontalDancer');
  this.$node.prepend('<img id=horizontalDancer src=img/spiderman.gif>')
};

// inherit methods and set constructor properly
makeHorizontalDancer.prototype = Object.create(makeDancer.prototype);
makeHorizontalDancer.prototype.constructor = makeHorizontalDancer;

// update step
makeHorizontalDancer.prototype.step = function() {
  var horizontalDancer = this;

  // move horizontally
  this.$node.animate({
    left: this.leftPosition + 50
    // top: this.topPosition - 50
  }, {
    duration: this.timeBetweenSteps,
    complete: function() {
      horizontalDancer.$node.animate({
        left: horizontalDancer.leftPosition - 50
        // top: horizontalDancer.topPosition
      }, {
        duration: horizontalDancer.timeBetweenSteps,
      });
    }
  });

  // // diagonal up right
  // this.$node.animate({
  //   left: this.leftPosition + 50,
  //   top: this.topPosition - 50
  // }, this.timeBetweenSteps / 2);
  // // back to original position
  // this.$node.animate({
  //   left: this.leftPosition,
  //   top: this.topPosition
  // }, this.timeBetweenSteps / 2);
  // // digonal up left
  // this.$node.animate({
  //   left: this.leftPosition - 50,
  //   top: this.topPosition - 50
  // }, this.timeBetweenSteps);
  // // diagonal go up
  // this.$node.animate({
  //   left: this.leftPosition,
  //   top: this.topPosition
  // }, this.timeBetweenSteps);

  makeDancer.prototype.step.call(horizontalDancer);
};