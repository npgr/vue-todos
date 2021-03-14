import { TodoState } from "@/store";
import getters from "@/store/getters";

describe("Store getters", () => {
  it("filteredTodos", () => {
    const mockState: TodoState = {
      filter: {
        title: "a",
        done: true
      },
      todos: [
        { id: 1, title: "Apple", done: true },
        { id: 2, title: "Orange", done: false },
        { id: 3, title: "Molot", done: true }
      ]
    };

    const expectedResult = [{ id: 1, title: "Apple", done: true }];

    const result = getters.filteredTodos(mockState);

    expect(result).toEqual(expectedResult);
  });
});
