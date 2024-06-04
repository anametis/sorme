interface iTextfield {
  label: string;
  defaultValue?: string;
  error?: string;
  value: string;
  register: any;
  type?: string;
}

const Textfield = ({
  label,
  defaultValue,
  error,
  value,
  register,
  type,
}: iTextfield) => {
  return (
    <div className="p-4">
      <div className="pl-2">
        <label>{label}</label>
      </div>
      <input type={!!type ? type : 'string'} className="p-2 rounded-md" defaultValue={defaultValue} 
      {...(register(value, { required: true }))}
      />
      {!!error && (
        <div className="pl-2">
          <span className="font-light text-xs text-white">{"ali"}</span>
        </div>
      )}
    </div>
  );
};

export default Textfield;
