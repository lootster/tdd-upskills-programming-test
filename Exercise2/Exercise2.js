function withdrawal(availableNotes, withdrawal) {
  let balance = withdrawal;
  let resultArr = [];
  if (withdrawal % availableNotes[0] !== 0) throw new Error("No Change");
  for (let i = availableNotes.length - 1; i >= 0; i--) {
    if (balance) {
      let note = Math.floor(balance / availableNotes[i]);
      let result = `${note} money notes of ${availableNotes[i] / 1000}K`;
      resultArr.push(result);
      balance -= note * availableNotes[i];
    }
  }
  return resultArr;
}

module.exports = withdrawal;
