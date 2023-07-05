console.log('cross-origin script execute...');


setTimeout(() => {
  const a = {};
  // 这里会抛出 Error
  console.log(a.b.c);
}, 1000);
