const initState = {
  themeId: 1,
};

export const themeReducer = (
  state = initState,
  action: Actions
): InitialStateType => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

type Actions = changeThemeIdTypeAC;
type InitialStateType = typeof initState;

export type changeThemeIdTypeAC = ReturnType<typeof changeThemeId>;

export const changeThemeId = (id: number) =>
  ({ type: "SET_THEME_ID", id } as const); // fix any
