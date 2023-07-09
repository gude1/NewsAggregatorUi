type SelectProps = {
  name?: string;
  title?: string;
  checked?: boolean;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
};
export default function Select({
  name = "CheckBox",
  checked = false,
  onChange,
}: SelectProps) {
  return (
    <div className={`flex items-center mx-1`}>
      <input
        type="checkbox"
        onChange={onChange}
        name={name}
        checked={checked}
      />
      <span className="ml-2">{name}</span>
    </div>
  );
}
