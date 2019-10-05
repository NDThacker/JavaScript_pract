let s = Math.random();

s = s * (10e16) / (new Date().getTime())
s = s.toString(36).replace('.', '');
console.log(s);