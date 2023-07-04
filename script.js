console.log('cross-origin script execute...');


setTimeout(() => {
  const a = {};
  console.log(a.b.c);
}, 1000);
