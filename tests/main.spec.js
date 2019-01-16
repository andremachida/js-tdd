import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calculator', () => {
  describe('Smoke tests', () => {
    it('Should exists method sum', () => {
      expect(sum).to.exist;
    });
    it('Should exists method sub', () => {
      expect(sub).to.exist;
    });
    it('Should exists method mult', () => {
      expect(mult).to.exist;
    });
    it('Should exists method div', () => {
      expect(div).to.exist;
    });
  });

  describe('Sum', () => {
    it('Should return 4 when sum(2, 2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('Should return 0 when sub(2, 2)', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });
    it('Should return -5 when sub(2, 7)', () => {
      expect(sub(2, 7)).to.be.equal(-5);
    });
  });

  describe('Mult', () => {
    it('Should return 6 when mult(3, 2)', () => {
      expect(mult(3, 2)).to.be.equal(6);
    });
  });

  describe('Div', () => {
    it('Should return 1 when div(2, 2)', () => {
      expect(div(2, 2)).to.be.equal(1);
    });
    it('Should return its not possible division by zero', () => {
      expect(div(2, 0)).to.be.equal('Its not possible division by zero');
    });
    it('Should return 0.6666666666666666 when div(2, 3)', () => {
      expect(div(2, 3)).to.be.equal(0.6666666666666666);
    });
  });
});
