type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return (
    <button className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 hover:scale-105 transition-all duration-300">
      {label}
    </button>
  );
}
