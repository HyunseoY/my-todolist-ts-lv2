export interface Todo {
  title: string;
  contents: string;
  id: number;
  isDone: boolean;
}

export interface TodoCardProps {
  todos?: Todo[];
  isDone: boolean;
}
