export class Random {
    getRandomString(characterCount){
        let randomText = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < characterCount; i++) {
          randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return randomText;
      };

      getRandomNumber(characterCount){
        let randomNumber = '';
        const possible = '0123456789';
        for (let i = 0; i < characterCount; i++) {
          randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return randomNumber;
      };
}