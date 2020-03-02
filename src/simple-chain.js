const chainMaker = {
  getLength() {
    return this.str ? this.str.split('~~').length : 0;
  },
  addLink(value = ' ') {
    this.str ? this.str += `~~( ${value} )` : this.str = `( ${value} )`;
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
      !isFinite(position) ||
      position < 1 ||
      position > this.getLength() - 1) {
        delete this.str;
        throw new Error();
    }

    let arr = this.str.split('~~').filter((item, index) => index !== position - 1);
    arr.length > 1 ? this.str = arr.join('~~') : this.str = arr.toString();
    
    return this;
  },
  reverseChain() {
    this.str ? this.str = this.str.split('~~').reverse().join('~~') : this;
    return this;
  },
  finishChain() {
    let result = this.str;
    delete this.str;

    return result;
  }
};

module.exports = chainMaker;
