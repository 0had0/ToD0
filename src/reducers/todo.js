const initState = JSON.parse(localStorage.getItem("store")) || [
  {
    id: 0,
    content: "this is a test",
    visibility: true
  }
];

function reducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "DEL":
      let purged = [];
      purged = purged.concat(state);
      return purged.filter(item => item.id !== action.id);
    case "EDIT":
      let i = 0;
      for (i = 0; i < state.length; i++)
        if (state[i].id === action.item.id) break;

      let edited = Object.assign([], state, { [i]: action.item });
      console.log(edited);
      return edited;
    default:
      return state;
  }
}
export default reducer;
