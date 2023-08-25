// Partial
interface Todo {
  title: string;
  description: string;
  date: string;
}
// interface NewTodo {
//   title?: string;
//   description?: string;
//   date?: string;
// }

function updateTodo(todo: Todo, newTodo: Partial<Todo>) {
  return {
    ...todo,
    ...newTodo,
  };
}
console.log(
  updateTodo(
    {
      title: "learning JS",
      description: "Hello",
      date: "25/02/2000",
    },
    {}
  )
);

interface Props {
  isActive?: boolean;
  color?: string;
}
// Required<T>
const compA: Props = {};
const compB: Required<Props> = {
  isActive: true,
  color: "red",
};

// Reatonly<T>
interface Book {
  title: string;
}
const life: Book = {
  title: "The life of book",
};
const game: Readonly<Book> = {
  title: "The life of game",
};
// game.title = "No game no life";
life.title = "No game no life";

// Record<T>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// Pick<Type, Keys>
interface TodoS {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<TodoS, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;

// Omit<Type,Key>
interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreviewOmit = Omit<TodoOmit, "description">;

const todoOmit: TodoPreviewOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todoOmit;

// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a">; //type T0 = "b" | "c"
// Extract<Type, Union>
type T1 = Extract<"a" | "b" | "c", "a" | "f">; //type T0 = "a"
type T2 = Extract<string | number | (() => void), Function>; //type T2 = () => void
//NonNullable<Type>
type T3 = NonNullable<string | number | undefined>; //type T3 = string | number