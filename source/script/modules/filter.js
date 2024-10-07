const initFilter = () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
  ];

  const adultUsers = users.filter(user => user.age > 21);

  console.log(adultUsers);
}

export { initFilter }
