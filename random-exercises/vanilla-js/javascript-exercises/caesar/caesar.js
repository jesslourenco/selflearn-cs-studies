const caesar = function(message, key) {
    let codedMessage = '';
    let asciicode;
    for (i = 0; i < message.length; i++)
    {
        if(message[i].toLowerCase() === message[i].toUpperCase())
        { // If false, it's a letter
            codedMessage += message[i];
        }
        else
        {
            if(message[i] === message[i].toUpperCase())
            { // case char is a capital letter
                // ASCII values from 65 to 90
                asciicode = 65;
            }
            else
            { // case char is a lower case letter
                // ASCII values from 97 to 122
                asciicode = 97;
            }
            let index = message.charCodeAt(i) - asciicode; // convert to ASCII then alphaindex (0-26)
            index = (index + key) 
            index = ((index % 26) + 26) % 26; // calculate alphaindex considering the key given
            index = index + asciicode; // convert back to ASCII index
            codedMessage += String.fromCharCode(index); // conveRT ASCII code to string
        }
    }
    return codedMessage;
};

console.log(caesar('Mjqqt, Btwqi!', -5) );

module.exports = caesar;
