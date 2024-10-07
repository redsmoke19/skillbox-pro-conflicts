const initSort = () => {
  const users = [
    { name: 'Mask', age: 54 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 },
    { name: 'Vivian', age: 23 }
  ];

  users.sort((a, b) => a.age - b.age);

  console.log(users);
}

export { initSort };
