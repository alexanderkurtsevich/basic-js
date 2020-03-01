
const chainMaker = {
  chain: [],
  newChain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let Element = '( ' + value + ' )';
    this.chain.push(Element);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position > this.chain.length || position < 1) {
      this.chain = [];
      throw new "Error"();
    }
    else {
      this.chain.splice(position - 1, 1);
      return this;
    };
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    Element = this.chain.join('~~');
    this.chain = [];
    return Element;
  }
};

module.exports = chainMaker;
