const assert = require('assert');
const Init = require('../lib/init');
const Listener = require('../../listener/lib/index')

describe('Chain', function() {
  describe('applyDeposit()', function() {
    it('should apply deposit', function(done) {
      Init.run().then(chain=>{
        Listener.run(chain);
        const initialBlockHeight = chain.blockHeight;
  
        chain.applyDeposit({
          returnValues: {
            depositor: 'e0d7a297a4f17f4122af3088a20374493c897cbd8689c870fca6fb71aa3db8c1',
            amount: 20
          }
        })
  
        setTimeout(_=>{
          assert(initialBlockHeight + 1 === chain.blockHeight);
          done();
        }, 1500)
      })
    }).timeout(2000);
  });
});
