describe('antManDancer', function() {

  var antManDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    antManDancer = new makeAntManDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(antManDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animate', function() {
    sinon.spy(antManDancer.$node, 'animate');
    antManDancer.step();
    expect(antManDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(antManDancer, 'step');
      expect(antManDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(antManDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(antManDancer.step.callCount).to.be.equal(2);
    });

    it('should antManDancer the node 1 times per one dance move', function() {
      sinon.spy(antManDancer.$node, 'animate');
      expect(antManDancer.$node.animate.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(antManDancer.$node.animate.callCount).to.be.equal(1);
    });
  });


});