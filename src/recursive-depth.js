module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (!arr.length) {
        return 1;
      }
      return 1 + Math.max(...arr.map((item) => this.calculateDepth(item)));
    }
    return 0;
  }
};
