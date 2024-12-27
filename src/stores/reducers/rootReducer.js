const initState = {
  users: [
    { id: 1, name: "The anh" },
    { id: 2, name: "ANh HOang" },
  ],
};
// tham số truyền vào bằng với state đã tạo bên trên, sau đó return về giá trị là biến myState
const rootReducer = (myState = initState, action) => {
  return myState;
};

export default rootReducer;
