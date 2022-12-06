const ModalQuizzes = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapperQuizz') onClose();
  };

  return (
    <>
      <div
        className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapperQuizz"
        onClick={handleClose}
      >
        <div className="w-[37.5rem] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white p-2 rounded">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ModalQuizzes;
