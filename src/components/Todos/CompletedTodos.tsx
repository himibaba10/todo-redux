import { useAppSelector } from '@/redux/hooks';
import TodoCard from './TodoCard';

const CompletedTodos = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div className="border-2 border-red-500 rounded-xl p-5">
      <div className="flex justify-between items-center border-b border-gray-300 pb-3 font-bold">
        <span className="w-[5%]">#</span>
        <span className="w-1/4">Title</span>
        <span className="w-[45%]">Description</span>
        <span className="w-1/4">Action</span>
      </div>
      {todos
        .filter((todo) => todo.isCompleted)
        .map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default CompletedTodos;
