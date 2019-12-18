describe('horizontalDancer', function() {

  var horizontalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    horizontalDancer = new makeHorizontalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(horizontalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animate', function() {
    sinon.spy(horizontalDancer.$node, 'animate');
    horizontalDancer.step();
    expect(horizontalDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(horizontalDancer, 'step');
      expect(horizontalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(horizontalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(horizontalDancer.step.callCount).to.be.equal(2);
    });

    it('should reposition the node 1 times per one dance move', function() {
      sinon.spy(horizontalDancer.$node, 'animate');
      expect(horizontalDancer.$node.animate.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(horizontalDancer.$node.animate.callCount).to.be.equal(1);
    });
  });


});