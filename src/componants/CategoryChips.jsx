function CategoryChips({ category, isChosen, onClick }) {
  const { slug, name, url } = category;

  return (
    <>
      <button
        onClick={onClick}
        className={`${
          isChosen
            ? "bg-purple-700 text-white"
            : "bg-purple-200 border-2 border-purple-500 shadow-md"
        }  hover:bg-purple-700  hover:text-white font-bold py-2 px-4 rounded`}
        type="button"
      >
        {slug}
      </button>
    </>
  );
}

export default CategoryChips;
