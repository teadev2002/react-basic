const initState = {
  users: [
    { id: 1, name: "The anh" },
    { id: 2, name: "ANh HOang" },
  ],
  posts: [],
};
// tham số truyền vào bằng với state đã tạo bên trên, sau đó return về giá trị là biến myState
const rootReducer = (myState = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = myState.users;
      users = users.filter((item) => item.id !== action.payload.id);

      return {
        ...myState,
        users,
      };

    case "CREATE_USER":
      let uid = Math.floor(Math.random() * 10000);
      let user = {
        id: uid,
        name: `Player#${uid}`,
      };
      return {
        ...myState,
        users: [...myState.users, user],
      };

    default:
      return myState;
  }
};

export default rootReducer;
