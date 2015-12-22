'use strict';

function Commit(config) {
  if (this instanceof Commit) {
    this.config = config;
    this.sha = config.sha;
    this.repo = config.repo;
  } else {
    return new Commit(config);
  }
}

Commit.prototype.createStatus = function(opts) {
  var self = this;
  opts.sha = self.sha;
  opts.repo = self.repo;
  var status = new Status(opts);
  return status.pending()
  .return(status);
};

module.exports = Commit;
