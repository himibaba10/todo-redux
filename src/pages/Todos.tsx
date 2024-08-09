import Container from '@/components/ui/Container';
import { TodoFilter } from '@/components/Todos/TodoFilter';
import { TodoModal } from '@/components/Todos/TodoModal';
import TodoCard from '@/components/Todos/TodoCard';
import { useAppSelector } from '@/redux/hooks';

const Todos = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-10">My Todos</h1>
      <div className="flex items-center justify-between mb-3">
        <TodoModal />
        <TodoFilter />
      </div>
      <div className="border-2 border-red-500 rounded-xl p-5">
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 font-bold">
          <span className="w-[5%]">#</span>
          <span className="w-1/4">Title</span>
          <span className="w-[45%]">Description</span>
          <span className="w-1/4">Action</span>
        </div>
        {todos.map((todo) => (
          <TodoCard todo={todo} />
        ))}
      </div>
    </Container>
  );
};

export default Todos;
