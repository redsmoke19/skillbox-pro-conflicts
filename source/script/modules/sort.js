const initSort = () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
  ];

  users.sort((a, b) => a.age - b.age);

  console.log(users);
}

export { initSort };
