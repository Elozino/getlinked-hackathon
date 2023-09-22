import './register.css'
import Navbar from "../../components/Navbar/Navbar"
import Button from "../../shared/Button/Button"
import InputField from "../../shared/InputField/InputField"
import shadowTop from '../../assets/images/Purple-Lens-FlareTop-PNG.png'
import shadowBottom from '../../assets/images/Purple-Lens-Flare-Bottom-PNG.png'
import illustration from '../../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png'
import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { url } from '../../utils/service/endpoint'

const Register = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [category, setCategory] = useState([])
  useEffect(() => {
    const response = async () => {
      await fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setCategory(data);
        })
        .catch(error => {
          alert(`An error occurred: ${error.message}`);
        });
    }

    response()
  }, [])
  return (
    <>
      {
        modalVisible && (
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />

        )
      }
      <main className="register">
        <img
          src={shadowTop}
          alt="shadow"
          className="contact_shadow-top"
        />
        <img
          src={shadowBottom}
          alt="shadow"
          className="contact_shadow-bottom"
        />

        <Navbar />

        <section className="register_header">
          <div className="register_illustration">
            <img src={illustration} alt="illustration" />
          </div>
          <div className="register_form-container">
            <div className="register_form-title">
              <h3 className="register_themed">Register</h3>
              <h5>Be part of this movement!</h5>
            </div>

            <form action="">
              <h3>CREATE YOUR ACCOUNT</h3>
              <div className="register_form">
                <InputField
                  label="Team's name"
                  type='text'
                  placeholder='Enter the name of your group'
                />
                <InputField
                  label="Phone"
                  type='text'
                  placeholder='Enter your phone number'
                />
                <InputField
                  label="Email"
                  type='text'
                  placeholder='Enter your email address'
                />
                <InputField
                  label="Project Topic"
                  type='text'
                  placeholder='What is your group project topic'
                />
                <div className='register_select'>
                  <label htmlFor="">Category</label>
                  <select name="" id="" className='register_form_select'>
                    <option value="">Select your category</option>
                    {category.map(item => (
                      <option value={item.name} key={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='register_select'>
                  <label htmlFor="">Group Size</label>
                  <select name="" id="" className='register_form_select'>
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
              <div className='register_agree'>
                <h6>Please review your registration details before submitting</h6>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>I agreed with the event terms and conditions  and privacy policy</span>
                </div>
              </div>
              <div className='register_btn_wrapper'>
                <Button
                  title="Register Now"
                  className='register_btn'
                  type='button'
                  onClick={() => setModalVisible(true)}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Register