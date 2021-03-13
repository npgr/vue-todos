import { Todo } from "@/models/Todo";
import { TodoState } from "@/store";

const plain = (title: string) => title.trim().toLowerCase();

export default {
  filteredTodos: ({ todos, filter }: TodoState): Todo[] => {
    const filteredByDone = todos.filter(({ done }) => done === filter.done);
    return !filter.title.trim()
      ? filteredByDone
      : filteredByDone.filter(({ title }) =>
          plain(title).includes(plain(filter.title))
        );
  }
};
