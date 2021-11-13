const fs = require('fs');
const path = require('path');
const camelCase = require('camelcase');

class TreeNode {
  constructor() {
    this.files = [];
  }
}

function getAssets(parentPath) {
  var children = fs.readdirSync(parentPath, { withFileTypes: true })
  const treeNode = new TreeNode();
  children.forEach(function(child) {
    if (isAssetFile(child)) {
      treeNode.files.push(child.name);
    } else if (child.isDirectory()) {
      var childPath = path.join(parentPath, child.name);
      treeNode[camelCase(child.name)] = getAssets(childPath);
    }
  });
  return treeNode;
}

function isAssetFile(dirent) {
  const assets = [".svg"]
  const extension = path.extname(dirent.name);
  return dirent.isFile() && assets.includes(extension);
}

module.exports = function() {
  const rootDir = path.resolve(__dirname, '..');
  const assets = getAssets(rootDir);
  return assets;
};