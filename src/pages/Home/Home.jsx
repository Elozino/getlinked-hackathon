import Navbar from "../../components/Navbar/Navbar"
import './home.css'
import hackathonguy from '../../assets/images/Hackathon guy.png'
import Button from '../../shared/Button/Button'
import { Link } from "react-router-dom"
import bigIdea from '../../assets/images/The big idea.png'
import rules from '../../assets/images/rules.png'
import judge from '../../assets/images/analytics.png'
import faqs from '../../assets/images/faqs.png'
import rewards from '../../assets/images/Rewards.png'
import trophy from '../../assets/images/trophy.png'
import partners from '../../assets/images/Partner and Sponsors.svg'
import terms from '../../assets/images/Vector.png'
import bulb from '../../assets/images/Creative 1.png'
import chain from '../../assets/images/chain-9365116-7621444.png'
import banger from '../../assets/images/banger.png'
import shadowTop from '../../assets/images/Purple-Lens-FlareTop-PNG.png'
import shadowBottom from '../../assets/images/Purple-Lens-Flare-Bottom-PNG.png'
import check from '../../assets/images/check.svg'
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_nav">
          <Navbar />
        </div>
        <header>
          <img
            src={shadowTop}
            alt="shadow"
            className="home_shadow-top"
          />
          <img
            src={shadowBottom}
            alt="shadow"
            className="home_shadow-bottom"
          />
          <div>
            <div className="float">
              <h1>Igniting a Revolution in HR Innovation</h1>
              <svg width="255" height="17" viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
              </svg>
            </div>
            <section className="home_header-content">
              <h1>
                <div>
                  <img src={bulb} alt="idea" className="idea" />
                  getlinked Tech <br />
                  Hackathon <span>1.0</span> {" "}
                  <img src={chain} alt="chain" className="chain" />
                  <img src={banger} alt="fire" className="fire" />
                </div>
              </h1>
              <p>
                Participate in getlinked tech Hackathon 2023 stand <br />
                a chance to win a Big prize
              </p>
              <Link to='/register'>
                <Button
                  title={'Register'}
                />
              </Link>
              <div className="home_header-timer">
                00<span>H</span> 00<span>M</span> 00<span>s</span>
              </div>
            </section>
            <section className="home_header-image">
              <img src={hackathonguy} alt="guy" />
            </section>
          </div>
        </header>
        <section className="home_introduction-wrapper">
          <div className="home_introduction">
            <div className="home_introduction-idea">
              <img src={bigIdea} alt="big idea illustration" />
            </div>
            <div className="home_introduction-content">
              <h4>
                Introduction to getlinked <br />
                <span className="home_themed">tech Hackathon 1.0</span>
              </h4>
              <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you'll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
              </p>
            </div>
          </div>
        </section>
        <section className="home_rules-wrapper">
          <div className="home_rules">
            <div className="home_rules-content">
              <h4>
                Rules and <br />
                <span className="home_themed">Guidelines</span>
              </h4>
              <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you'll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
              </p>
            </div>
            <div className="home_rules-illustration">
              <img src={rules} alt="illustration of a lady with rules" />
            </div>
          </div>
        </section>
        <section className="home_judging-wrapper">
          <div className="home_judging">
            <div className="home_judge-illustration">
              <img src={judge} alt="judge illustration" />
            </div>
            <div className="home_judge-content">
              <h4>
                Judging Criteria <br />
                <span className="home_themed">Key attributes</span>
              </h4>
              <ul>
                <li>
                  <span className="home_themed2">Innovation and Creativity: </span> Evaluate the uniqueness and creativity of the
                  solution. Consider whether it addresses a real-world problem in a novel
                  way or introduces innovative features.
                </li>
                <li>
                  <span className="home_themed2">Functionality:</span> Assess how well the solution works. Does it perform its
                  intended functions effectively and without major issues? Judges would
                  consider the completeness and robustness of the solution.
                </li>
                <li>
                  <span className="home_themed2">Impact and Relevance:</span> Determine the potential impact of the solution
                  in the real world. Does it address a significant problem, and is it relevant
                  to the target audience? Judges would assess the potential social,
                  economic, or environmental benefits.
                </li>
                <li>
                  <span className="home_themed2">Technical Complexity: </span> Evaluate the technical sophistication of the solution.
                  Judges would consider the complexity of the code, the use of advanced
                  technologies or algorithms, and the scalability of the solution.
                </li>
                <li>
                  <span className="home_themed2">Technical Complexity: </span> Judges will Ensure that the team adhered
                  to the rules and guidelines of the hackathon, including deadlines, use of
                  specific technologies or APIs, and any other competition-specific requirements.
                </li>
              </ul>
              <Button
                title={'Read More'}
              />
            </div>
          </div>
        </section>
        <section className="home_faqs-wrapper">
          <div className="home_faqs">
            <div className="home_faqs-content">
              <h4>
                Frequently Ask <br />
                <span className="home_themed">Question</span>
              </h4>
              <p>
                We got answers to the questions that you might <br />
                want to ask about <strong>getlinked Hackathon 1.0</strong>
              </p>
              <ul>
                <li>
                  <p>Can I work on a project I started before the hackathon?</p>
                  <p>+</p>
                </li>
                <li>
                  <p>
                    What happens if I need help during the hackathon?
                  </p>
                  <p>+</p>
                </li>
                <li>
                  <p>
                    What happens if I don't have an idea for a project?
                  </p>
                  <p>+</p>
                </li>
                <li>
                  <p>
                    Can I join a team or do I have to come with one?
                  </p>
                  <p>+</p>
                </li>
                <li>
                  <p>
                    What happens after the hackathon ends
                  </p>
                  <p>+</p>
                </li>
                <li>
                  <p>
                    Can I work on a project I started before the hackathon?
                  </p>
                  <p>+</p>
                </li>
              </ul>
            </div>
            <div className="home_faqs-illustration">
              <img src={faqs} alt="faqs-illustration" />
            </div>
          </div>
        </section>
        {/* timeline */}
        <section className="home_timeline-wrapper"></section>
        <section className="home_prize_wrapper">
          <div className="home_prize">
            <div className="flex">
              <div className="empty"></div>
              <div className="home_prize_content">
                <h4>
                  Prizes and <br />
                  <span className="home_themed">Rewards</span>
                </h4>
                <p>
                  Highlight of the prizes or rewards for winners and for participants.
                </p>
              </div>
            </div>
            <div className="home_prize_awards">
              <img src={trophy} alt="trophy" />
              <img src={rewards} alt="prizes" />
            </div>
          </div>
        </section>
        <section className="home_sponsors-wrapper">
          <div className="home_sponsors">
            <div className="home_sponsor-content">
              <h4>
                Partners and Sponsors
              </h4>
              <p>
                Getlinked Hackathon 1.0 is honored to have the following major
                companies as its partners and sponsors
              </p>
            </div>
            <div className="home_sponsor-illustration">
              <img src={partners} alt="sponsor" />
            </div>
          </div>
        </section>
        <section className="home_privacy-wrapper">
          <div className="home_privacy">
            <div className="home_privacy-content">
              <h4>
                Privacy Policy and <br />
                <span>Terms</span>
              </h4>
              <p className="last-updated">Last updated on September 12, 2023</p>
              <p className="policy-text">Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant</p>
              <div className="terms">
                <p className="terms-text">
                  At getlinked tech Hackathon 1.0, we value your privacy
                  and are committed to protecting your personal information.
                  This Privacy Policy outlines how we collect, use, disclose,
                  and safeguard your data when you participate in our tech
                  hackathon event. By participating in our event, you consent
                  to the practices described in this policy.
                </p>
                <h6>Licensing Policy</h6>
                <p className="terms-text">Here are terms of our Standard License:</p>
                <ul>
                  <li>
                    <img src={check} alt="check" />
                    <p>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </li>
                  <li>
                    <img src={check} alt="check" />
                    <p>
                      You are licensed to use the item available at any free source
                      sites, for your project developement
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="home_privacy-illustration">
              <img src={terms} alt="illustration" />
            </div>
          </div>
        </section>
        <footer>
          <div className="container footer">
            <div className="footer1">
              <div>
                <h4 className="logo">
                  get<span>linked</span>
                </h4>
                <p>
                  Getlinked Tech Hackathon is a technology innovation program
                  established by a group of organizations with the aim of showcasing
                  young and talented individuals in the field of technology
                </p>
              </div>
              <div className="terms_privacy">
                Terms of Use <div className="line"></div> Privacy Policy
              </div>
            </div>
            <div className="links">
              <div className="footer2">
                <h6 className="title">Useful Links</h6>
                <ul>
                  <li>Overview</li>
                  <li>Timeline</li>
                  <li>FAQs</li>
                  <li>Register</li>
                  <li className="follow_themed">Follow us
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                      <path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                      <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#F8F8F8" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="#F8F8F8" />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="footer3">
                <h6>Contact Us</h6>
                <ul>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z" fill="#F8F8F8" />
                      <path d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z" fill="#F8F8F8" />
                    </svg>
                    <span>+234 6707653444</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                      <path d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z" fill="#F8F8F8" />
                    </svg>
                    <span>
                      27,Alara Street <br />
                      Yaba 100012 <br />
                      Lagos State
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copyright">All rights reserved. © getlinked Ltd.</p>
        </footer>
      </div>
    </div>
  )
}

export default Home