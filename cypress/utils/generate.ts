class Generate {
    generateEmail(emailLength=8, domainLength=3) {
       return `${this.generateRandomName(emailLength)}@${this.generateRandomName(domainLength)}.com`
    }

   generateRandomName(length: any) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    generatePassword(length:any){
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        const allChars = lowerCase + upperCase + digits + specialChars;

        if (length < 4) {
            throw new Error("Password length must be at least 4 characters to include all character types.");
        }

        // Ensure at least one of each type
        const passwordArray = [
            lowerCase[Math.floor(Math.random() * lowerCase.length)],
            upperCase[Math.floor(Math.random() * upperCase.length)],
            digits[Math.floor(Math.random() * digits.length)],
            specialChars[Math.floor(Math.random() * specialChars.length)],
        ];

        // Fill the rest of the password
        for (let i = passwordArray.length; i < length; i++) {
            passwordArray.push(allChars[Math.floor(Math.random() * allChars.length)]);
        }

        // Shuffle the password array
        for (let i = passwordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
        }

        return passwordArray.join('');
    }

    generateRandoPhoneNumber() {
        const randomNumber = Math.floor(Math.random() * 9000000000) + 8000000000;
        return `8${randomNumber.toString().slice(0, 9)}`;
    }
}


const GenerateUtils = new Generate()
export default GenerateUtils