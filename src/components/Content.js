function Content({ list, setList }) {
  const onRemove = (e) => {
    const id = parseInt(e?.target?.id); // string to number
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className='px-[16px] md:px-[64px] lg:px-[256px]'>
      {list.map((item) => {
        return (
          <div
            key={`key_${item.id}`}
            id={item.id}
            onClick={onRemove}
            className='md:w-[320px] mt-4 mx-auto bg-sky-100 flex items-center rounded-md py-1 px-2 text-blue-900 cursor-pointer hover:bg-red-200 hover:text-red-900'
          >
            {item.value}
          </div>
        );
      })}
    </div>
  );
}

export default Content;
