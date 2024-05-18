// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
const processedNumbers = [3, 4, 9, 16]; // This should be the result of processArray
const modifiedNames = ['alice', 'WORLD', 'charlie', 'DIANA']; // This should be the result of formatArrayStrings

const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
// Expected output:
// [
//     { originalName: 'Alice', modifiedName: 'alice', id: 1 },
//     { originalName: 'Bob', modifiedName: 'WORLD', id: 2 },
//     { originalName: 'Charlie', modifiedName: 'charlie', id: 3 },
//     { originalName: 'Diana', modifiedName: 'DIANA', id: 4 }
// ]

// Export the function if you are using modules (optional)
module.exports = createUserProfiles;
