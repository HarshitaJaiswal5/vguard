import React, { useEffect } from 'react';

const ReadModeModal = ({ enableReadMode }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        enableReadMode();
        document.getElementById('read-mode-modal').style.display = 'none';
      } else if (event.key === 'Escape') {
        document.getElementById('read-mode-modal').style.display = 'none';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [enableReadMode]);

  return (
    <div
      id="read-mode-modal"
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center text-white z-50"
    >
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-11/12 sm:w-96">
        <h2 className="text-xl font-bold text-[#7d6c54] mb-4">Welcome to VisionGuard</h2>
        <p className="text-base mb-6">
          This site is designed for visually impaired users. Press{' '}
          <strong className="text-[#7d6c54]">Enter</strong> to enable Read Mode.
        </p>
        <p className="text-sm text-gray-600">
          Press <strong>Esc</strong> to close this dialog.
        </p>
        <button
          onClick={() =>
            (document.getElementById('read-mode-modal').style.display = 'none')
          }
          className="mt-6 px-4 py-2 bg-[#7d6c54] text-white rounded-lg hover:bg-[#5e523d] focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReadModeModal;
