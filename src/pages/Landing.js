import React from "react";
import Book from "../assets/book-remove.png";
import Books from "../assets/books-remove.png";
import Art from "../assets/art.jpg";
import Dance from "../assets/dance.jpg";
import Design from "../assets/design.jpg";
import Drugs from "../assets/drugs.jpg";
import Enchantment from "../assets/enchantment.jpg";
import Knight from "../assets/knight.jpg";
import Memory from "../assets/memory.jpg";
import Million from "../assets/million.jpg";
import Secret from "../assets/secret.jpg";
import Sin from "../assets/sin.jpg";

const Landing = () => {
  const scrollLeft = () => {
    let left = document.querySelector(".scroll-images");
    left.scrollBy(350, 0);
  };
  const scrollRight = () => {
    let right = document.querySelector(".scroll-images");
    right.scrollBy(-350, 0);
  };
  return (
    <>
      {/* Homepage */}
      <section className="landing" id="landing">
        <div className="menu">
          {" "}
          <span>Ministry of Education</span>
          <div className="submenu">
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="body">
          <div>
            <img src={Book} alt="book" />
          </div>
          <div className="landing-texts">
            <h4>e-Library</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div>
              <button className="btn btn-outline-primary btn-lg">
                <a
                  href="#features"
                  className="text-white text-decoration-none"
                  //   style={{ textDecoration: "none" }}
                >
                  Explore
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End of Home */}
      {/* Features */}
      <section id="features" className="features">
        <h3>Features</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={Books} alt="books" className="features-books" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item shadow-lg bg-white rounded">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa-solid fa-star pe-3"></i>
                      Access to unlimited resources
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div class="accordion-item shadow-lg bg-white rounded">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="fa-solid fa-eye pe-3"></i>
                      Read on demand
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div class="accordion-item shadow-lg bg-white rounded">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="fa-solid fa-hand-holding-heart pe-3"></i>
                      Borrow books
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Features */}
      {/* Categories */}
      <section id="categories" className="categories">
        <h3>Categories</h3>
        {/* Recent */}
        <div className="container my-5 py-5">
          <h5>Recent Books</h5>
          <div className="recent pt-3">
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollLeft}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="cover">
              <div className="scroll-images">
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Abstract Art
                  </p>
                  <div className="recent-box">
                    <img src={Art} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Dancing
                  </p>
                  <div className="recent-box">
                    <img src={Dance} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Formula
                  </p>
                  <div className="recent-box">
                    <img src={Design} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Drugs
                  </p>
                  <div className="recent-box">
                    <img src={Drugs} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Enchantment
                  </p>
                  <div className="recent-box">
                    <img
                      src={Enchantment}
                      alt="category"
                      className="recent-img"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Cover
                  </p>
                  <div className="recent-box">
                    <img src={Knight} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Memory
                  </p>
                  <div className="recent-box">
                    <img src={Memory} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Million
                  </p>
                  <div className="recent-box">
                    <img src={Million} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Secret
                  </p>
                  <div className="recent-box">
                    <img src={Secret} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Sin
                  </p>
                  <div className="recent-box">
                    <img src={Sin} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollRight}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        {/* End of Recent */}
        {/* Science */}
        <div className="container my-5 py-5">
          <h5>Science and Technology</h5>
          <div className="recent pt-3">
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollLeft}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="cover">
              <div className="scroll-images">
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Abstract Art
                  </p>
                  <div className="recent-box">
                    <img src={Art} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Dancing
                  </p>
                  <div className="recent-box">
                    <img src={Dance} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Formula
                  </p>
                  <div className="recent-box">
                    <img src={Design} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Drugs
                  </p>
                  <div className="recent-box">
                    <img src={Drugs} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Enchantment
                  </p>
                  <div className="recent-box">
                    <img
                      src={Enchantment}
                      alt="category"
                      className="recent-img"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Cover
                  </p>
                  <div className="recent-box">
                    <img src={Knight} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Memory
                  </p>
                  <div className="recent-box">
                    <img src={Memory} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Million
                  </p>
                  <div className="recent-box">
                    <img src={Million} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Secret
                  </p>
                  <div className="recent-box">
                    <img src={Secret} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Sin
                  </p>
                  <div className="recent-box">
                    <img src={Sin} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollRight}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        {/* End of Science */}
        {/* Art */}
        <div className="container my-5 py-5">
          <h5>Art</h5>
          <div className="recent pt-3">
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollLeft}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="cover">
              <div className="scroll-images">
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Abstract Art
                  </p>
                  <div className="recent-box">
                    <img src={Art} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Dancing
                  </p>
                  <div className="recent-box">
                    <img src={Dance} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Formula
                  </p>
                  <div className="recent-box">
                    <img src={Design} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Drugs
                  </p>
                  <div className="recent-box">
                    <img src={Drugs} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Enchantment
                  </p>
                  <div className="recent-box">
                    <img
                      src={Enchantment}
                      alt="category"
                      className="recent-img"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Cover
                  </p>
                  <div className="recent-box">
                    <img src={Knight} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Memory
                  </p>
                  <div className="recent-box">
                    <img src={Memory} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Million
                  </p>
                  <div className="recent-box">
                    <img src={Million} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Secret
                  </p>
                  <div className="recent-box">
                    <img src={Secret} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Sin
                  </p>
                  <div className="recent-box">
                    <img src={Sin} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollRight}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        {/* End of Art */}
        {/* Commerce */}
        <div className="container my-5 py-5">
          <h5>Commerce</h5>
          <div className="recent pt-3">
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollLeft}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="cover">
              <div className="scroll-images">
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Abstract Art
                  </p>
                  <div className="recent-box">
                    <img src={Art} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Dancing
                  </p>
                  <div className="recent-box">
                    <img src={Dance} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Formula
                  </p>
                  <div className="recent-box">
                    <img src={Design} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Drugs
                  </p>
                  <div className="recent-box">
                    <img src={Drugs} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Enchantment
                  </p>
                  <div className="recent-box">
                    <img
                      src={Enchantment}
                      alt="category"
                      className="recent-img"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Cover
                  </p>
                  <div className="recent-box">
                    <img src={Knight} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Memory
                  </p>
                  <div className="recent-box">
                    <img src={Memory} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Million
                  </p>
                  <div className="recent-box">
                    <img src={Million} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Secret
                  </p>
                  <div className="recent-box">
                    <img src={Secret} alt="category" className="recent-img" />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Sin
                  </p>
                  <div className="recent-box">
                    <img src={Sin} alt="category" className="recent-img" />
                  </div>
                  <div
                    className="text-center mt-3"
                    style={{ backgroundColor: "#f5fffa" }}
                  >
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "10rem" }}
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-btn">
              <button className="btn-scroll" onClick={scrollRight}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        {/* End of Commerce */}
      </section>
      {/* End of Categories */}
      {/* Footer */}
      <section className="footer"></section>
      {/* End of Footer */}
    </>
  );
};

export default Landing;
