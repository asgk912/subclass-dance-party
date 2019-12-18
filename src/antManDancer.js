var makeAntManDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('antManDancer');
  this.$node.prepend('<img id=antManDancer src=img/antman.gif>')
};

// inherit methods and set constructor properly
makeAntManDancer.prototype = Object.create(makeDancer.prototype);
makeAntManDancer.prototype.constructor = makeAntManDancer;

// update step
makeAntManDancer.prototype.step = function() {
  var dancer = this;
  makeDancer.prototype.step.call(this);

  this.$node.animate({
    height: '100px',
    width: '100px'
  }, {
    duration: this.timeBetweenSteps * 2,
    complete: function() {
      dancer.$node.animate({
        height: '10px',
        width: '10px'
      }, dancer.timeBetweenSteps * 2);
    }
  });

};