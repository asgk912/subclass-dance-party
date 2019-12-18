describe('vDancer', function() {

  var vDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    vDancer = new makeVDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(vDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animate', function() {
    sinon.spy(vDancer.$node, 'animate');
    vDancer.step();
    expect(vDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(vDancer, 'step');
      expect(vDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(vDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(vDancer.step.callCount).to.be.equal(2);
    });

    it('should reposition the node 4 times per one dance move', function() {
      sinon.spy(vDancer.$node, 'animate');
      expect(vDancer.$node.animate.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(vDancer.$node.animate.callCount).to.be.equal(4);
    });
  });


});