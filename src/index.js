const fs = require('fs').promises;
const path = require('path');
// const processData = require('./scripts/processData')
// const getMoneySpent = require('./scripts/getMoneySpent')


const dataName = 'input_getMoneySpent.txt';
const filePath = path.join(__dirname, 'data', dataName);

const main = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    console.error(err);
  }
}
main()



