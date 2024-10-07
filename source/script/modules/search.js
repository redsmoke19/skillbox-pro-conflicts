const initSearch = () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
  ];

  const foundUser = users.find(user => user.name === 'Charlie');

  console.log(foundUser);
};

export { initSearch };
