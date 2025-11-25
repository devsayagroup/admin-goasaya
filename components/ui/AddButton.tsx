// "use client";

// interface AddButtonProps {
//   label?: string;
//   onClick: () => void;
// }

// export function AddButton({ label = "Add", onClick }: AddButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         bg-orange-600 
//         text-white 
//         px-4 py-2 
//         rounded-md 
//         font-semibold 
//         shadow 
//         hover:bg-orange-700
//         w-full md:w-52
//       "
//     >
//       + {label}
//     </button>
//   );
// }

"use client";

interface AddButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function AddButton({ label = "Add", onClick, className = "" }: AddButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "bg-orange-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-orange-700 w-full md:w-auto " +
        className
      }
    >
      + {label}
    </button>
  );
}
