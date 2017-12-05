const jwt = require('jsonwebtoken');
const secretKey = "asdfasdfavjhgz8732867t76igzxciyuv"
const token = jwt.sign({ user_id: 1 }, secretKey);

console.log(token)

result = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2ciOiJFZGlzb24iLCJpYXQiOjE1MTI0Mzg1Mzh9.sgKGptJbCN816JQhnE-DGDsnR0PY3vVeG1s4JT39shc', 'sdfkjhsdfkjhsdfkjh')
console.log(result)