class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.startASCII = 65;
    this.endASCII = 90;
  }
  

  getEncryptNumber(num1, num2) {
    let maxNumber = 26;
    let result = num1 + num2;

    return result >= maxNumber ? (result - maxNumber) : result;
  }

  getDecryptNumber(num1, num2) {
    let maxNumber = 26;
    let minNumber = 0;
    let result = num1 - num2;

    return result < minNumber ? (result + maxNumber) : result;
  }

  getVigenereLetter(num) {
    return String.fromCharCode(num + this.startASCII);
  }

  getSameLengthKeyword(str, keyword) {
    let result = '';
    while(result.length < str.length) {
      result += keyword;
    }

    return result.slice(0, str.length);
  }

  getVigenereStr(str, keyword, vigenereFun) {
    let index = 0;
    const sameLengthKeyword = this.getSameLengthKeyword(str, keyword);

    const charArr = str.split('').map((item) => {
      const char = item.toUpperCase();
      const keyLetter = sameLengthKeyword[index].toUpperCase();

      if (char.charCodeAt(0) >= this.startASCII && char.charCodeAt(0) <= this.endASCII) {
        index++;
        const num1 = char.charCodeAt(0) - this.startASCII;
        const num2 = keyLetter.charCodeAt(0) - this.startASCII;
        
        return this.getVigenereLetter(vigenereFun(num1, num2));
      } else {
        return char;
      }
    });

    return this.type ?
      charArr.join('') :
      charArr.reverse().join('');
  }

  encrypt(str, keyword) {
    if (!str || !keyword) {
      throw new Error('Both parameters must be passed!');
    }

    const encrypted = this.getVigenereStr(str, keyword, this.getEncryptNumber);

    return encrypted;

  }

  decrypt(str, keyword) {
    if (!str || !keyword) {
      throw new Error('Both parameters must be passed!');
    }

    const decrypted = this.getVigenereStr(str, keyword, this.getDecryptNumber);

    return decrypted;
  }
}

module.exports = VigenereCipheringMachine;
