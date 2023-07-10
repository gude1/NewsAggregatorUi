type SelectProps = {
  name?: string;
  title?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
};
export default function Select({
  name = "CheckBox",
  defaultChecked,
  onChange,
}: SelectProps) {
  return (
    <div className={`flex items-center mx-1`}>
      <input
        type="checkbox"
        onChange={onChange}
        name={name}
        // checked={checked}
        defaultChecked={defaultChecked}
      />
      <span className="ml-2">{name}</span>
    </div>
  );
}
