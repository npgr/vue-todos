import { TodoState } from "@/store";
import { getters } from "@/store/getters";

describe("Store getters", () => {
  it("filteredTodos", () => {
    const mockState: TodoState = {
      filter: {
        title: "a",
        done: true
      },
      todos: [
        { id: 1, title: "Apple", done: true, editing: false },
        { id: 2, title: "Orange", done: false, editing: false },
        { id: 3, title: "Molot", done: true, editing: false }
      ]
    };

    const expectedResult = [
      { id: 1, title: "Apple", done: true, editing: false }
    ];

    const result = getters.filteredTodos(mockState);

    expect(result).toEqual(expectedResult);
  });
});
