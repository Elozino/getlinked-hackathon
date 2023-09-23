import './register.css'
import Navbar from "../../components/Navbar/Navbar"
import Button from "../../shared/Button/Button"
import InputField from "../../shared/InputField/InputField"
import shadowTop from '../../assets/images/Purple-Lens-FlareTop-PNG.png'
import shadowBottom from '../../assets/images/Purple-Lens-Flare-Bottom-PNG.png'
import illustration from '../../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png'
import lady from '../../assets/images/lady.png'
import guy from '../../assets/images/image_processing20200511-10310-13mnlsx.png'
import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { registerUrl, url } from '../../utils/service/endpoint'
import { toast } from 'react-toastify'

const Register = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [category, setCategory] = useState([])
  const [formInput, setFormInput] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: '',
    project_topic: "",
    category: '',
    privacy_poclicy_accepted: false
  })
  const [formState, setFormState] = useState({
    loading: false,
    error: false,
    message: ''
  })

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
        .catch(() => {
          toast.error('An error occurred')
        });
    }

    response()
  }, [])

  const handleChange = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formInput.email === '' ||
      formInput.phone_number === '' ||
      formInput.team_name === '' ||
      formInput.project_topic === '' ||
      formInput.group_size === '' ||
      formInput.category === 0 ||
      formInput.privacy_poclicy_accepted === false
    ) {
      toast.warning('All fields required')
    }
    try {
      const data = {
        ...formInput,
        category: Number(formInput.category),
        group_size: Number(formInput.group_size),
        privacy_poclicy_accepted: true
      }
      const response = await fetch(`${registerUrl}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setModalVisible(true)
      toast.success("Success")
      return response.json().data
    } catch (error) {
      setFormState(prev => ({ ...prev, error: true, message: error.message, loading: false }))
      toast.error('We encountered an error')
    } finally {
      setFormInput({
        email: "",
        phone_number: "",
        team_name: "",
        group_size: '',
        project_topic: "",
        category: '',
        privacy_poclicy_accepted: false
      })
      setFormState(prev => ({ ...prev, loading: false }))
    }
  }
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
              <div className='movement'>
                <h5>Be part of this movement!</h5>
                <div className='moving'>
                  <img src={lady} alt="lady" />
                  <img src={guy} alt="guy" />
                </div>
              </div>
            </div>

            <form action=""
              onSubmit={handleSubmit}
            >
              <h3>CREATE YOUR ACCOUNT</h3>
              <div className="register_form">
                <InputField
                  label="Team's name"
                  type='text'
                  placeholder='Enter the name of your group'
                  name='team_name'
                  id='team_name'
                  value={formInput.team_name}
                  onChange={handleChange}
                />
                <InputField
                  label="Phone"
                  type='tel'
                  placeholder='Enter your phone number'
                  name='phone_number'
                  id='phone_number'
                  value={formInput.phone_number}
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  type='text'
                  placeholder='Enter your email address'
                  name='email'
                  id='email'
                  value={formInput.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Project Topic"
                  type='text'
                  placeholder='What is your group project topic'
                  name='project_topic'
                  id='project_topic'
                  value={formInput.project_topic}
                  onChange={handleChange}
                />
                <div className='register_select'>
                  <label htmlFor="">Category</label>
                  <select className='register_form_select'
                    name='category'
                    id='category'
                    value={formInput.category}
                    onChange={handleChange}
                  >
                    <option value="">Select your category</option>
                    {category.map(item => (
                      <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className='register_select'>
                  <label htmlFor="">Group Size</label>
                  <select
                    name='group_size'
                    id='group_size'
                    value={formInput.group_size}
                    onChange={handleChange}
                    className='register_form_select'>
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className='register_agree'>
                <h6>Please review your registration details before submitting</h6>
                <div>
                  <input type="checkbox" name="privacy_poclicy_accepted" id="privacy_poclicy_accepted"
                    checked={formInput.privacy_poclicy_accepted}
                    onChange={handleChange}
                  />
                  <span>I agreed with the event terms and conditions  and privacy policy</span>
                </div>
              </div>
              <div className='register_btn_wrapper'>
                <Button
                  title={formState.loading ? "Please wait..." : "Register Now"}
                  className='register_btn'
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