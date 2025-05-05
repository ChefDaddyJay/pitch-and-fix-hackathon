export function SubmitButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div
      className="w-full h-max min-w-min bg-amber-500 flex flex-col justify-center items-center p-4 text-3xl font-bold rounded shadow-xl hover:bg-amber-400 transition-colors duration-300 cursor-pointer"
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export function ColorBlock({ color }: { color: string }) {
  return (
    <div
      className={`bg-${color.toLowerCase()}-800 w-[100px] h-[100px] flex justify-center items-center text-white hover:shadow hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
    >
      {color}
    </div>
  );
}

export function StatesOptions() {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor="state" className="w-full font-bold">
        State
      </label>
      <select
        name="state"
        className="w-full p-2 border border-neutral-300 rounded"
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

export function FormField({
  label,
  placeholder,
  name,
  hidden,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  name: string;
  hidden?: boolean;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex flex-col mb-2">
      {label ? (
        <label htmlFor={name} className="w-full font-bold">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        type={hidden ? "password" : "text"}
        name={name}
        className="w-full p-2 border border-neutral-300 rounded"
        placeholder={placeholder ? placeholder : label}
        onChange={onChange ? (event) => onChange(event.target.value) : () => {}}
      />
    </div>
  );
}

export function Checkbox({ label, name }: { label: string; name: string }) {
  return (
    <div className="w-4/5 flex gap-4 text-sm my-4">
      <input type="checkbox" name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export function AddressForm() {
  return (
    <div className="w-4/5 flex flex-col gap-2">
      <div className="text-sm text-neutral-400 pb-2">All fields required</div>
      <FormField label="Email Address" name="email" />
      <FormField label="First Name" name="firstName" />
      <FormField label="Last Name" name="lastName" />
      <FormField label="Deliver Address" name="address-1" />
      <FormField name="address-2" />
      <FormField label="City" name="city" />
      <StatesOptions />
      <FormField label="ZIP Code" name="zip" />
      <Checkbox label="Same billing address" name="sameBilling" />
    </div>
  );
}
