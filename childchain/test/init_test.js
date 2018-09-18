const assert = require('assert');
const Init = require('../lib/init');

describe('Init', function() {
  describe('init()', function() {
    it('should have properties', function(done) {
      Init.run().then(chain=>{
        assert(chain.blockHeight > 0)
        assert(chain.commitmentTxs.length > 0)
        assert(chain.block.number > 0)
        done()
      })
    }).timeout(2000);
  });
});
