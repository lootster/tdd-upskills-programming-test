const withdrawal = require("./Exercise2");

describe("Exercise2", () => {
  let arr;
  let availableNotes;
  let withdrawalRequest;
  it("should return correct change", () => {
    arr = [
      "6 money notes of 500K",
      "1 money notes of 200K",
      "1 money notes of 100K",
      "1 money notes of 50K"
    ];
    availableNotes = [50000, 100000, 200000, 500000];
    withdrawalRequest = 3350000;

    let result1 = withdrawal(availableNotes, withdrawalRequest);
    expect(result1).toStrictEqual(arr);

    arr = ["15 money notes of 200K"];
    availableNotes = [100000, 200000];
    withdrawalRequest = 3000000;

    let result2 = withdrawal(availableNotes, withdrawalRequest);
    expect(result2).toStrictEqual(arr);
  });
  it('should throw error with message "No Change', () => {
    errorMsg = "No Change";
    availableNotes = [100000, 200000];
    withdrawalRequest = 3330000;
    function withdrawalError() {
      withdrawal(availableNotes, withdrawalRequest);
    }
    expect(withdrawalError).toThrow(errorMsg);
  });
});
