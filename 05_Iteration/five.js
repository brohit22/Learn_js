const programs = ['js', 'java', 'css', 'python', 'html'];

programs.forEach((element) => {
  // console.log(element);
});

function printME(item) {
  // console.log(item);
}

// programs.forEach(printME);

// what parameters are accessible to forEach
programs.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: 'javascript',
    languageFileName: 'js',
  },
  {
    languageName: 'java',
    languageFileName: 'java',
  },
  {
    languageName: 'python',
    languageFileName: 'py',
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
