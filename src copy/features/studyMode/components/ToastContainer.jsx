// // import { X } from "lucide-react";
// // import PropTypes from "prop-types";
// // ToastContainer.propTypes = {
// //   toasts: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.string.isRequired,
// //       message: PropTypes.string.isRequired,
// //     })
// //   ).isRequired,
// //   removeToast: PropTypes.func.isRequired,
// // };
// // function ToastContainer({ toasts, removeToast }) {
// //   return (
// //     <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2">
// //       {toasts.map((toast) => (
// //         <div
// //           key={toast.id}
// //           className="bg-white border-2 border-gray-300 rounded-full px-6 py-3 shadow-lg flex items-center gap-3 animate-slide-up"
// //         >
// //           <span className="text-gray-800 font-medium">{toast.message}</span>

// //           <button
// //             onClick={() => removeToast(toast.id)}
// //             className="w-5 h-5 flex items-center justify-center hover:bg-gray-100 rounded-full"
// //           >
// //             <X size={14} />
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default ToastContainer;
// import { X } from "lucide-react";
// import PropTypes from "prop-types";

// ToastContainer.propTypes = {
//   toasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   removeToast: PropTypes.func.isRequired,
// };

// function ToastContainer({ toasts, removeToast }) {
//   return (
//     <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2 w-full max-w-sm px-4">
//       {toasts.map((toast) => (
//         <div
//           key={toast.id}
//           className="bg-white border-2 border-gray-300 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg flex items-center gap-3 animate-slide-up"
//         >
//           <span className="text-gray-800 font-medium text-sm md:text-base flex-1">
//             {toast.message}
//           </span>

//           <button
//             onClick={() => removeToast(toast.id)}
//             className="w-5 h-5 flex items-center justify-center hover:bg-gray-100 rounded-full flex-shrink-0"
//           >
//             <X size={14} />
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ToastContainer;
import { X } from "lucide-react";
import PropTypes from "prop-types";

ToastContainer.propTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeToast: PropTypes.func.isRequired,
};

function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2 w-full max-w-xs sm:max-w-sm px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white border-2 border-gray-300 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg flex items-center gap-2 sm:gap-3 animate-slide-up"
        >
          <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base flex-1">
            {toast.message}
          </span>

          <button
            onClick={() => removeToast(toast.id)}
            className="w-5 h-5 flex items-center justify-center hover:bg-gray-100 rounded-full flex-shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
