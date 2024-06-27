function processData(input) {
  const tags = {};
  
  for (const line of input.split('\n').slice(1)) {
    for (const item of line.split('<').slice(1)) {
      let tagName = '';
      for (const ch of item.trim()) {
        if (ch.match(/[a-z0-9]/i)) {
          tagName += ch;
        } else if (tagName !== '') {
            tags[tagName] = true;
            tagName = '';
            break;
          }
      }
    }
  }
  console.log(Object.keys(tags).sort().join(';'));
}

module.exports = processData;