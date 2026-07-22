import React, {useEffect} from "react";
import {Footer} from "../components/Footer";
import {Link} from "react-router-dom";

export const Testimonials = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="home">
                {/*Header*/}
                <div className="goBack px-3 py-3" style={{backgroundColor: "#1eb2a6"}}>
                    <div className="backButton d-flex align-items-center fw-bold">
                        <Link to={"/home"} className="text-light"><i className="fa-solid fa-arrow-left"></i>&nbsp;<span>Back to home</span></Link>
                    </div>
                </div>
                {/*Header End*/}
                <div className="testimonials p-5" id="testm" style={{marginTop: "5em"}}>
                    <div className="testm-cont">
                        <div className="test-top-text">
                            <h2 className="fw-bold">Too good to be true?</h2>
                        </div>
                        <div className="testm-flex mt-5">
                            <div className="row flex-wrap gap-4 justify-content-center">
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>As a BBA student, how can expert guidance help direct you towards a fulfilling career path?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“A major issue that I have faced while pursuing my interest in the field of management is that I stumbled a lot of times in terms of where and how to go forward. I believe expert guidance will help me find the answer to those questions and it is better to walk down the path with someone who already knows the way to your destination.” </i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Mohit, BBA Business Studies</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>Thanks for all the guidance</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“Hi Anamika, thanks for all your guidance to Sanika. She seems to be much clear now on what she wants to do. Thanks again!” </i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Mr Rajneet Maini</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>As a fresher, how would expert guidance help you prepare to work better in organizations in the future?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“Everyone would agree if I said adulting is anxious and landing your first job and pretending to be professionals is much more anxious. What if I said there are mentors who can ease this process? How do they do this? They normalize failure by experience sharing and help us set attainable smart goals, all that we need for our future organizations.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Amrutha, Psychology</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>As an aspiring counselor, what can help you find your niche in the Corporate world?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“I think learning more about and experientially practicing in the fields that connect the corporate sector with my skills as a counselor such as employee engagement, training and development would be a great help.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Pranita, Psychology</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>How can working on soft-skills and people-connect instill confidence in you as an aspiring psychologist?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“Connecting to people and having soft skills is pretty much the basics to psychology. Having basic sympathy and knowing what drives people is really important to be a successful and rather the most effective psychologist you can possibly be.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Aishwarya, Bsc Psychology</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>How can you seek help regarding career-specific study options abroad?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“Deciding to study abroad is a big decision for all of us. There are so many factors to consider in career and growth opportunities. What will help us pick out the best decision for ourselves is expert guidance.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Vandhana, BA Economics</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>How has Covid-19 Pandemic affected your career plans?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“This covid pandemic has affected everybody’s career plans and in order to tackle this situation the guidance from the industry experts is much needed. I believe that this platform will surely help the aspirants to map their skills with the industry requirements and give a positive start to their careers.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Mayank, MBA</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>What, according to you, can help bridge the gap between the classroom and the corporate world in the present scenario?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“The corporate world as we know it relies more on applicative and theoretical knowledge that cannot be acquired through textbooks. It also makes use of the skills which also have to be acquired and cannot be spoon fed and I think a person may find it very difficult to survive in the corporate world without having these skills and knowledge and just based on academic learnings. So I feel to counter this difficulty we should have a mentor in our lives. A mentor who is very knowledgeable and knows the trick of the trade.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Ankoor, BBA</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>What value can industry connections bring to you which just academia cannot provide?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“Textbooks and classes end where professional skills and industry knowledge begins. Networking with experienced personalities in any field can give you guidance through the process of establishing yourself in your field of interest.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Parvathy, Economics</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>Given the huge number of engineering graduates today, how can soft-skills coaching differentiate you in the job market?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“Various skills lead to various outcomes and communication is one of the keys to success for an engineer. As an engineer you need to be able to communicate and collaborate with engineers who are working on different pieces of the system as well as cross-functionally with other managers, designers and also others who are contributing to the design of the system. Soft skill also helps one to communicate better and make the people around us feel better.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Dolly, Computer Science</span>
                                    </div>
                                </div>
                                <div className="testm-item d-flex flex-column gap-3 col-lg-5 item">
                                    <div className="ques-text">
                                        <span>How important is it to have access to top Legal Experts as a young law student?</span>
                                    </div>
                                    <div className="testm-text">
                                        <span><i>“It is extremely essential. Seeing how competitive the market is and the current legal frameworks that are constantly developing, I would essentially define the right mentors to help you realize and figure out your own career goals.”</i></span>
                                    </div>
                                    <div className="name-text">
                                        <span>- Vishal, LLB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Footer  */}
                <Footer/>
            </div>
        </>
    )
}