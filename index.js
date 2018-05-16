const PROTOCOL_REGEXP = /.:\/\//

function isURL (input) {
  return PROTOCOL_REGEXP.test(input);
}

module.exports = isURL;