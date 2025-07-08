// Task Password Generator
const generator = require('generate-password');

function generateRandomPassword() {
    const password = generator.generate({
        length: 12,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true,
        excludeSimilarCharacters: false,
        exclude: '',
        strict: true
    });
    
    return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);

// Generating multiple passwords
console.log('\nGenerated Passwords:');
for (let i = 0; i < 5; i++) {
    console.log(`Password ${i + 1}: ${generateRandomPassword()}`);
}
