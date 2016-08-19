'use strict';

const tk = require('rocambole-token'),
  plugin = {},
  indent = require('rocambole-indent');

plugin.nodeAfter = function(node) {
  if (node.type === 'ReturnStatement' && node.parent.type == 'BlockStatement') {
    if(!tk.findInBetween(node.parent.startToken.next, node.startToken.prev, tk.isNotEmpty)) {
      tk.removeInBetween(node.parent.startToken.next, node.startToken.prev, tk.isBr);
    }
  }
};

module.exports = plugin;
