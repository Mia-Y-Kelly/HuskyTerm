// Create a terminal
var term = new Terminal();
term.open(document.getElementById('terminal'));

// Write to terminal
term.write('\x1B[1;3;31mHuskyTerm\x1B[0m $ ');

// https://stackoverflow.com/questions/44447473/how-to-make-xterm-js-accept-input
term.onKey(e => {
    console.log(parseInt(e.key));
     // If they press enter
    if (e.key == '\r') {
        term.write('\n');
        term.write('\x1B[1;3;31mHuskyTerm\x1B[0m $ ');
    }
    term.write(e.key);
})