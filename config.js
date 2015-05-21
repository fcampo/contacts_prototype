(function(exports) {
  var config = {
    'performance': false,
    'debug': false,
    // Could be any value between
    // ['list', 'detail', 'all']
    'original-ui': ['all']
  }

  exports.Config = {
    get performance() {
      return config.performance
    },
    get debug() {
      return config.debug
    },
    get originalUI() {
      return config['original-ui']
    }
  };
}(this));
