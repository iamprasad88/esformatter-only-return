'use strict';

const tk = require('rocambole-token'),
  plugin = {};

plugin.nodeAfter = function(node) {
  if (node.type === 'ReturnStatement' && node.parent.type == 'BlockStatement') {
    if(!tk.findInBetween(node.parent.startToken.next, node.startToken.prev, tk.isNotEmpty)) {
      tk.removeInBetween(node.parent.startToken.next, node.startToken.prev, tk.isEmpty);
    }

      if(!tk.findInBetween(node.endToken.next, node.parent.endToken.prev, tk.isNotEmpty)) {
      tk.removeInBetween(node.endToken.next, node.parent.endToken.prev, tk.isEmpty);
    }
  }
};

module.exports = plugin;
