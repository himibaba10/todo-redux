import Container from '@/components/ui/Container';
import { TodoModal } from '@/components/Todos/TodoModal';
import PendingTodos from '@/components/Todos/PendingTodos';
import CompletedTodos from '@/components/Todos/CompletedTodos';

const Todos = () => {
  return (
    <Container>
      <h1 className="text-4xl text-center font-bold mb-10">My Todos</h1>
      <div className="flex items-center justify-between mb-3">
        <TodoModal />
      </div>
      <PendingTodos />
      <h1 className="text-4xl text-center font-bold my-10">Completed Todos</h1>
      <CompletedTodos />
    </Container>
  );
};

export default Todos;
