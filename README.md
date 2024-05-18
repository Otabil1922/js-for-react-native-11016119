# Mobile Application Development Assignment

## Student ID: 111016119

## Description of Tasks

### Task 1: Process Array
- **Function**: `processArray(numbers)`
- **Description**: This function takes an array of numbers as input and returns a new array where each even number is squared and each odd number is tripled.
- **Example**:
  ```javascript
  function processArray(numbers) {
      return numbers.map(number => {
          if (number % 2 === 0) {
              // If the number is even, square it
              return number * number;
          } else {
              // If the number is odd, triple it
              return number * 3;
          }
      });
  }

  console.log(processArray([1, 2, 3, 4])); // Output: [3, 4, 9, 16]

  Task 2: Format Array Strings
###Function: formatArrayStrings(strings, numbers)
***Description: This function takes two arrays as input—one of strings and one of numbers processed by processArray. It modifies each string based on its corresponding number: capitalizing the string if the number is even and converting it to lowercase if the number is odd.
#*Example:
javascript
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            // Capitalize the entire string if the number is even
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return str.toLowerCase();
        }
    });
}

const processedNumbers = processArray([1, 2, 3, 4]);
const formattedStrings = formatArrayStrings(['Hello', 'World', 'React', 'Native'], processedNumbers);

console.log(formattedStrings); // Output: ['hello', 'WORLD', 'react', 'NATIVE']

        Task 3: Create User Profiles
###Function: createUserProfiles(names, modifiedNames)
***Description: This function takes an array of names and an array of modified names, returning an array of objects. Each object contains the original name, modified name, and an auto-incremented ID starting from 1.
#*Example:
javascript:
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
const processedNumbers = [3, 4, 9, 16]; // This should be the result of processArray
const modifiedNames = ['alice', 'WORLD', 'charlie', 'DIANA']; // This should be the result of formatArrayStrings

const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
// Output:
// [
//   { originalName: 'Alice', modifiedName: 'alice', id: 1 },
//   { originalName: 'Bob', modifiedName: 'WORLD', id: 2 },
//   { originalName: 'Charlie', modifiedName: 'charlie', id: 3 },
//   { originalName: 'Diana', modifiedName: 'DIANA', id: 4 }
// ]


    How to Run the Code

Prerequisites
Node.js: Ensure that Node.js is installed on your machine. You can download it from nodejs.org.
Steps:
1 Clone the Repository: git clone https://github.com/Otabil1922/js-for-react-native-11016119.git
2 Navigate to the Project Directory: cd js-for-react-native-11016119
3 Install Dependencies (if applicable): npm install
4 Run the JavaScript Files: node arrayManipulation.js
node userInfo.js


