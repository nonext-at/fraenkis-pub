export function decodeEmail() {
    const coded = "lMnK@wMunFK8MDDMKKt.ktl";
    const key = "1DtzZ8TGBuhRjJMKWI4gkUF2qidfOyPmSN7X30Vpso6xvErLnwQCbalA95HcYe";
    const shift = coded.length;
    let link = "";
  
    for (let i = 0; i < coded.length; i++) {
      const char = coded.charAt(i);
      if (key.indexOf(char) === -1) {
        link += char;
      } else {
        const ltr = (key.indexOf(char) - shift + key.length) % key.length;
        link += key.charAt(ltr);
      }
    }
  
    return link;
  }
  