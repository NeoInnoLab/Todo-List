import { useState } from 'react';

function Control({ list, setList }) {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    const timestamp = new Date().getTime();
    setList([...list, { value: value, id: timestamp }]);
    setValue('');
  };

  return (
    <>
      <input
        type='text'
        placeholder='Add todo item'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1'
      />
      <button
        onClick={onSubmit}
        className='ml-2 mt-1 px-3 py-2 bg-sky-500 text-white border shadow-sm border-sky-500 placeholder-slate-400 hover:bg-sky-600 rounded-md sm:text-sm font-semibold'
      >
        Add
      </button>
    </>
  );
}

export default Control;
