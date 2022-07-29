function lvl3exercise1 () {
  // Create strings "hello" and a "world", return the concatenation of the two
  const text1 = "hello"
  const text2 = "world"
  const result = text1.concat("", text2)
  return result;
}

function lvl3exercise2 () {
  // Create a "hello" and a 12, return the concatenation of the two
  const text1 = "hello"
  const text2 = 12
  const result = text1.concat("", text2)
  return result;
}

function lvl3exercise3 () {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
  const text2 = 12
  return text2.toString();
}

function lvl3exercise4 () {
  // Create a "hello world!" string. Return the length of the string
  const text2 = "hello world!"
  return text2.length;
}

function lvl3exercise5 () {
  // Create a "hello world!" string. Return the index of the word "world".
  const str = "hello world!"
  const result = str.substring(5,11)
  return result;
}
