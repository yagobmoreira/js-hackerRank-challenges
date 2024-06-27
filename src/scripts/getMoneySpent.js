const getMoneySpent = (keyboards, drives, b) => {
  let mostExpensive = 0;
  for (const keyboard of keyboards) {
    for (const drive of drives) {
      if (keyboard + drive <= b && keyboard + drive > mostExpensive) {
        mostExpensive = keyboard + drive;
      }
    }
  }
  return mostExpensive !== 0 ? mostExpensive : -1;
};

module.exports = getMoneySpent;

/* console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
--- Index.js ----
const b = Number(data.split('\n')[0].split(' ')[0]);
const keyboards = data.split('\n').slice(1)[0].split(' ').map((str) => Number(str));
const drives = data.split('\n').slice(1)[1].split(' ').map((str) => Number(str)); */
