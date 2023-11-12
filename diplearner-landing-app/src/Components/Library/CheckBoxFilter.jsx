const CheckBoxFilter = ({ name, title, actions, value, style }) => {
  return (
    <div className={`checkbox__container h-auto px-[10px] ${style}`}>
      <div className="checkbox__container__input h-auto pl-[20px] flex justify-start">
        <input
          className="hidden"
          onChange={(e) => actions(e.target.checked)}
          type="checkbox"
          name={name && name}
          id={name && name}
        />
        <label
          htmlFor={name && name}
          className={` cursor-pointer relative text-[16px] ${
            value ? "checked" : "unchecked"
          }`}
        >
          {title && title}
        </label>
      </div>
    </div>
  );
};

export default CheckBoxFilter;
