import { useState } from 'react';

const ListPage = () => {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Whole Coffe Beans!',
      completed: false,
    },
    {
      id: 2,
      title: 'Onions',
      completed: true,
    },
    {
      id: 3,
      title: 'Tomatoes',
      completed: false,
    },
  ]);

  const handleToggleComplete = (id: number) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setList(newList);
  };

  const handleAddItem = (text: string) => {
    let id = 0;

    do {
      id = Math.floor(Math.random() * 10000);
    } while (list.some((e) => e.id === id));

    setList([...list, { id, title: text, completed: false }]);
  };

  return (
    <div className='pt-10'>
      <h3 className='text-3xl font-bold text-stone-200 mb-5 sm:text-4xl'>
        Todo List
      </h3>
      <div className='p-4 flex flex-col items-center'>
        {AddItem(handleAddItem)}
        {TodoList(list, handleToggleComplete)}
      </div>
    </div>
  );
};

const AddItem = (handleAddItem: Function) => {
  const [text, setText] = useState('');

  const handleCallback = () => {
    if (text) {
      handleAddItem(text);
      setText('');
    }
  };

  return (
    <div className='flex w-full md:w-2/3 lg:w-1/3 mb-3'>
      <input
        placeholder='Add item...'
        className='px-3 p-2 rounded w-full bg-gray-500 focus:outline-none text-gray-200'
        type='text'
        name='item'
        id='item'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleCallback}
        className='ml-2 bg-rose-400 hover:bg-rose-300 rounded px-4'>
        Add
      </button>
    </div>
  );
};

const TodoList = (list: any[], handleToggleComplete: Function) => {
  return (
    <>
      {list.map((item) => (
        <div
          onClick={() => handleToggleComplete(item.id)}
          key={item.id}
          className='flex justify-between p-3 bg-gray-500 rounded shadow mt-2 cursor-pointer w-full md:w-2/3 lg:w-1/3'>
          <div
            className={[
              'text-xl self-center',
              item.completed ? 'line-through' : '',
            ].join(' ')}>
            {item.title}
          </div>
          <div>{CheckBadge(item.completed)}</div>
        </div>
      ))}
    </>
  );
};

const CheckBadge = (completed: boolean) => {
  return completed ? (
    <span className='bg-lime-500 p-2 rounded-3xl px-3 text-lime-100 font-bold'>
      ✓
    </span>
  ) : (
    <span className='bg-gray-700 p-1 rounded-3xl px-4'> </span>
  );
};

export default ListPage;
