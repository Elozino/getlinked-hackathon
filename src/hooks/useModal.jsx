import React from 'react'

const useModal = (arg) => {
  const modalRef = React.useRef(null);
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        arg(false);
      }
    };

    const modalClick = () => {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    };

    modalClick();

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    }
  }, [arg]);
  return (
    modalRef
  )
}

export default useModal