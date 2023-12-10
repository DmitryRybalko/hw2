import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      const newState = [...state];
      if (action.payload === "up") {
        return newState.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === "down") {
        return newState.sort((a, b) => -1 * a.name.localeCompare(b.name));
      } else {
        return state;
      }
    }
    case "check": {
      return state.filter((u) => u.age >= 18);
    }
    default:
      return state;
  }
};
