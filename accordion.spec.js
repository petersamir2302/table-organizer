// Import the function to be tested
const groupDataByYear = require('./index');

// Describe the groupDataByYear function
describe('groupDataByYear function', () => {
  // Test case for correct grouping of data by year
  it('should correctly group data by year', () => {
    // Mock data for testing
    const mockData = [
      { date: '2023-01-01', firstName: 'John', lastName: 'Doe' },
      { date: '2023-05-15', firstName: 'Jane', lastName: 'Smith' },
      { date: '2022-09-30', firstName: 'Alice', lastName: 'Johnson' },
      { date: '2021-12-25', firstName: 'Bob', lastName: 'Brown' },
      { date: '2023-08-20', firstName: 'Michael', lastName: 'Lee' },
      { date: '2020-06-10', firstName: 'Emily', lastName: 'Taylor' }
    ];

    // Call the groupDataByYear function
    const groupedData = groupDataByYear(mockData);

    // Assert the correctness of the grouping
    expect(groupedData).toEqual([
      {
        "year": "2023",
        "rows": [
          {
            "date": "2023-01-01",
            "firstName": "John",
            "lastName": "Doe"
          },
          {
            "date": "2023-05-15",
            "firstName": "Jane",
            "lastName": "Smith"
          },
          {
            "date": "2023-08-20",
            "firstName": "Michael",
            "lastName": "Lee"
          }
        ]
      },
      {
        "year": "Unique Years",
        "rows": [
          {
            "date": "2020-06-10",
            "firstName": "Emily",
            "lastName": "Taylor"
          },
          {
            "date": "2021-12-25",
            "firstName": "Bob",
            "lastName": "Brown"
          },
          {
            "date": "2022-09-30",
            "firstName": "Alice",
            "lastName": "Johnson"
          }
        ]
      }
    ]);
  });
});

// Describe the groupDataByYear function
describe('groupDataByYear function', () => {
  // Test case for correct grouping of data by year
  it('return data as is if all is unique', () => {
    // Mock data for testing
    const mockData = [
      { date: '2019-01-01', firstName: 'John', lastName: 'Doe' },
      { date: '2014-05-15', firstName: 'Jane', lastName: 'Smith' },
      { date: '2022-09-30', firstName: 'Alice', lastName: 'Johnson' },
      { date: '2021-12-25', firstName: 'Bob', lastName: 'Brown' },
      { date: '2023-08-20', firstName: 'Michael', lastName: 'Lee' },
      { date: '2020-06-10', firstName: 'Emily', lastName: 'Taylor' }
    ];

    // Call the groupDataByYear function
    const groupedData = groupDataByYear(mockData);

    // Assert the correctness of the grouping
    expect(groupedData).toEqual([
      { date: '2019-01-01', firstName: 'John', lastName: 'Doe' },
      { date: '2014-05-15', firstName: 'Jane', lastName: 'Smith' },
      { date: '2022-09-30', firstName: 'Alice', lastName: 'Johnson' },
      { date: '2021-12-25', firstName: 'Bob', lastName: 'Brown' },
      { date: '2023-08-20', firstName: 'Michael', lastName: 'Lee' },
      { date: '2020-06-10', firstName: 'Emily', lastName: 'Taylor' }
    ]);
  });
});
