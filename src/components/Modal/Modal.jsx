import React from 'react'
import useModal from '../../hooks/useModal'
import './modal.css'
import img from '../../assets/images/congratulation.png'
import Button from '../../shared/Button/Button'
import wink from '../../assets/images/wink.png'

const Modal = ({ setModalVisible }) => {
  const modalRef = useModal(setModalVisible)
  return (
    <div className='modal'>
      <div ref={modalRef} className='modal_content'>
        <div>
          <img src={img} alt="congratulation" />
          <h3>
            Congratulations <br />
            you have successfully Registered!</h3>
          <div className='emoji'>
            <p>
              <span>
                Yes, it was easy and you did it!
              </span>
              <span>
                check your mail box for next step
              </span>
            </p>
            <img src={wink} alt="emoji" />
          </div>
          <Button
            title='Back'
            onClick={() => setModalVisible(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal