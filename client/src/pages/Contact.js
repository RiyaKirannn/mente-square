import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export const Contact = () => {
  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  console.log(watch());

  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");

  const [reach, setReach] = useState("");

  //Mail Sender
  function sendMail() {
    const url = `https://mails.mentesquare.com/contactmail.php?key=HEJHFJHDS-SRKJBKRFB-SEKBJRS&targetmail=viswanathan.anamika@gmail.com&targetname=anamika&f_name=${name}&f_mail=${email}&f_phone=${phone}&f_whno=${whatsapp}&f_stay=${address}&f_edu=${education}&f_reachtime=${reach}`;
    axios.get(url).then((res) => {
      document.getElementById("contact-form").reset();
      console.log(res);
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "Form Submitted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function formWork(radioVal) {
    let workInp = document.getElementById("work");
    if (radioVal === "yes") {
      workInp.removeAttribute("disabled");
    } else {
      workInp.setAttribute("disabled", "true");
    }
  }

  function formCurrWork(radioVal) {
    let workInp = document.getElementById("workCurr");
    if (radioVal === "yes") {
      workInp.removeAttribute("disabled");
    } else {
      workInp.setAttribute("disabled", "true");
    }
  }

  return (
    <>
      <div className="home">
        {/*Navbar*/}
        <div
          className="goBack px-3 py-3"
          style={{ backgroundColor: "#1eb2a6" }}
        >
          <div className="backButton d-flex align-items-center fw-bold">
            <Link to={"/home"} className="text-light">
              <i className="fa-solid fa-arrow-left"></i>&nbsp;
              <span>Back to home</span>
            </Link>
          </div>
        </div>
        {/*Navbar End*/}
        {/*Contact Section*/}
        <div className="contact-sect" id="contact" style={{ marginTop: "5em" }}>
          <div className="contact-cont">
            <div className="top-text text-center">
              <h2 className="fw-bold text-center">Contact Us</h2>
              <h5 className="subheading text-center fw-bold">
                Tell Us About Yourself
              </h5>
            </div>
            <div className="contact-form mt-5 d-flex justify-content-center align-items-center">
              <div className="form-cont">
                <form id="contact-form" onSubmit={handleSubmit(sendMail)}>
                  <div className="row mb-4 gap-lg-0 gap-4">
                    <div className="col-12 col-lg-6">
                      <div className="form-outline">
                        <input
                          {...register("name", {
                            required: "This field is required",
                          })}
                          type="text"
                          id="name"
                          className="form-control"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="name">
                          What's your name?
                        </label>
                        <span className="text-danger px-2">
                          {errors.name?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="form-outline">
                        <input
                          {...register("email", {
                            required: "This field is required",
                            pattern: {
                              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                              message: "Invalid Email",
                            },
                          })}
                          type="email"
                          id="email"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <span className="text-danger px-2">
                          {errors.email?.message}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4 gap-lg-0 gap-4">
                    <div className="col-12 col-lg-6">
                      <div className="form-outline">
                        <input
                          {...register("phone", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                              message: "Invalid Phone Number",
                            },
                          })}
                          type="tel"
                          id="phone"
                          className="form-control"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <label className="form-label" htmlFor="phone">
                          Phone No.
                        </label>
                        <span className="text-danger px-2">
                          {errors.phone?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="form-outline mb-4">
                        <input
                          {...register("whatsapp", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                              message: "Invalid Phone Number",
                            },
                          })}
                          type="tel"
                          id="whatsapp"
                          className="form-control"
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                        <label className="form-label" htmlFor="whatsapp">
                          WhatsApp No.
                        </label>
                        <span className="text-danger px-2">
                          {errors.whatsapp?.message}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/*<div className="row mb-4 gap-lg-0 gap-4">*/}
                  {/*    <div className="col-12 col-lg-6">*/}
                  {/*        <div className="form-outline">*/}
                  {/*            <select {...register("currWork", {required: "Please select an option"})} name="currWork" id="currWork" className="form-select" onChange={(e) => {*/}
                  {/*                formCurrWork(e.target.value);*/}
                  {/*                setCurrWork(e.target.value)*/}
                  {/*            }}>*/}
                  {/*                <option value="">Choose an option...</option>*/}
                  {/*                <option value="yes">Yes</option>*/}
                  {/*                <option value="no">No</option>*/}
                  {/*            </select>*/}
                  {/*            <label className="form-label" htmlFor="currWork">Are you currently working?</label>*/}
                  {/*            <span className="text-danger px-2">{errors.currWork?.message}</span>*/}
                  {/*        </div>*/}
                  {/*    </div>*/}

                  {/*    <div className="col-12 col-lg-6">*/}
                  {/*        <div className="form-outline">*/}
                  {/*            <input type="text" id="workCurr" className="form-control" disabled/>*/}
                  {/*            <label className="form-label" htmlFor="workCurr">Where and What?</label>*/}
                  {/*        </div>*/}
                  {/*    </div>*/}
                  {/*</div>*/}

                  {/*<div className="form-outline mb-4">*/}
                  {/*    <input {...register("reason", {required: "This field is required", minLength: {value: 5, message: "Please fill properly"}})} type="text" id="reason" className="form-control" onChange={(e) => setReason(e.target.value)}/>*/}
                  {/*    <label className="form-label" htmlFor="reason">What made you reach out for our services?</label>*/}
                  {/*    <span className="text-danger px-2">{errors.reason?.message}</span>*/}
                  {/*</div>*/}

                  {/*<div className="form-outline mb-4">*/}
                  {/*    <input {...register("areas", {required: "This field is required", pattern: {value: /\w{2,},\w{2,},\w{2,}/g, message: "Please fill properly"}})} type="text" id="areas" className="form-control" placeholder="Separate by comma with no spaces..." onChange={(e) => setAreas(e.target.value)}/>*/}
                  {/*    <label className="form-label" htmlFor="areas">What are the top 3 areas you need expert support in?</label>*/}
                  {/*    <span className="text-danger px-2">{errors.areas?.message}</span>*/}
                  {/*</div>*/}

                  {/*<div className="form-outline mb-4">*/}
                  {/*    <input {...register("expect", {required: "This field is required", minLength: {value: 5, message: "Please fill properly"}})} type="text" id="expect" className="form-control" onChange={(e) => setExpect(e.target.value)}/>*/}
                  {/*    <label className="form-label" htmlFor="expect">What do you expect from your mentors?</label>*/}
                  {/*    <span className="text-danger px-2">{errors.expect?.message}</span>*/}
                  {/*</div>*/}

                  <div className="form-outline mb-4">
                    <input
                      {...register("reachYou", {
                        required: "This field is required",
                        minLength: {
                          value: 1,
                          message: "Please fill properly",
                        },
                      })}
                      type="text"
                      id="reachYou"
                      className="form-control"
                      onChange={(e) => setReach(e.target.value)}
                    />
                    <label className="form-label" htmlFor="reachYou">
                      What is the best time to reach you?
                    </label>
                    <span className="text-danger px-2">
                      {errors.reachYou?.message}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*Contact Section End*/}
        <Footer />
      </div>
    </>
  );
};
