const sentence = 'hello there from lighthouse labs';

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    // print the current character
    process.stdout.write(char);
  }, delay);

  delay = delay + 50;
}

// setTimeout(() => {}, 1000);
