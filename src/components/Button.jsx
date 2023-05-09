/* eslint-disable react/prop-types */
function Button({type, fn}) {
  return (
    <button
      type="button"
      className="w-10 h-10 text-white font-bold text-2xl bg-lime-500 rounded-full justify-center items-center"
        onClick={fn}
    >
      {type}
    </button>
  );
}

export default Button;
