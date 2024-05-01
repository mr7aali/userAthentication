// Define a function to generate random data for a single user
function generateRandomUserData() {
    const firstName = "mst";
    const lastName = "mim";
    const email = "mr5li@gmil.com";
    const password = "$2b$10$36P9dkcidOKGt2wnHLRKbez2bVqMoRB/9qzTCrP3jA1JMebkrHi6q";
    const role = "admin";
    const projectId = "662abd6689364ea613e2c749";
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    const __v = 0;

    return {
        firstName,
        lastName,
        email,
        password,
        role,
        projectId,
        createdAt,
        updatedAt,
        __v
    };
}

// Define a function to generate an array of unique user data
function generateUniqueUserData(count:any) {
    const uniqueUserData = [];
    const existingEmails = new Set();

    while (uniqueUserData.length < count) {
        const userData = generateRandomUserData();
        // Check if the email is unique before adding
        if (!existingEmails.has(userData.email)) {
            uniqueUserData.push(userData);
            existingEmails.add(userData.email);
        }
    }

    return uniqueUserData;
}

// // Generate 5000 unique sets of data
// const uniqueUserData = generateUniqueUserData(5000);

// // Print the generated JSON
// console.log(uniqueUserData);

export default generateUniqueUserData;
