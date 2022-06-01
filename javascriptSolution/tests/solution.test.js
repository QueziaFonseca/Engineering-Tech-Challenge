const getUpdatedInv = require('../src/solution');
// Os teste abaixo foram implementados utilizando os dados contidos no arquivo de teste "lib.rs".

describe('Implementa a função getUpdatedInv', () => {
  // test_case_1
  it('Empty entries should result in empty outputs', () => {
    const curInv = [];
    const newInv = [];
    const expected_result = [];

    expect(getUpdatedInv(curInv, newInv)).toEqual(expected_result);
  });

  // test_case_2
  it('The output should reflect the updated values', () => {
    const curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ]
      const newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
      ]
    const expected_result = [
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"]
    ];

    expect(getUpdatedInv(curInv, newInv)).toEqual(expected_result);
  });

  // test_case_3
  it('If `new_inv` is empty, the output should be equal to `cur_inv', () => {
    const curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ];
    const newInv = [];
    const expected_result = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
  ];

    expect(getUpdatedInv(curInv, newInv)).toEqual(expected_result);
  });

  // test_case_4
  it('tIf `cur_inv` is empty, the output should be equal to `new_inv`', () => {
    const curInv = [];
    const newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
  ];
    const expected_result = [
      [67, "Bowling Ball"],
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [7, "Toothpaste"],
  ];

    expect(getUpdatedInv(curInv, newInv)).toEqual(expected_result);
  });

  // test_case_5
  it('The output should reflect the updated values', () => {
    const curInv = [
      [0, "Bowling Ball"],
      [0, "Dirty Sock"],
      [0, "Hair Pin"],
      [0, "Microphone"],
  ];
    const newInv = [
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [1, "Bowling Ball"],
      [1, "Toothpaste"],
  ];
    const expected_result = [
      [1, "Bowling Ball"],
      [0, "Dirty Sock"],
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [0, "Microphone"],
      [1, "Toothpaste"],
  ];

    expect(getUpdatedInv(curInv, newInv)).toEqual(expected_result);
  });

});
