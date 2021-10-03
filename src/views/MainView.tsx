import React, { useEffect } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import ZapierForm from "react-zapier-form";
import $ from "jquery";
import "css/main.css";
import "css/header.css";

const MainView: FC = () => {
  useEffect(() => {
    //Next Button
    $(".button.style2").on("click", function (event) {
      var target = event.target;
      $("html, body").animate(
        { scrollTop: $(String($(target).attr("href"))).position().top },
        680
      );
    });

    // Contact.
    $("#contactBtn").on("click", function () {
      $("html, body").animate({ scrollTop: $("#contact").position().top }, 680);
    });
  }, []);
  return (
    <>
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Logo</h2>
        </Link>
        <nav className="nav">
          <ul className="right">
            <li>
              <Link to={"/login"} className="link">
                <span className="right-menu">Log In</span>
              </Link>
            </li>
            <li>
              <a href="#contact" id="contactBtn" className="link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="intro" className="main style1 dark fullscreen">
        <div className="content">
          <header>
            <h2>Hey.</h2>
          </header>
          <p>
            Welcome to <strong>Big Picture</strong> a responsive site template
            designed by <a href="https://html5up.net">HTML5 UP</a>
            <br />
            and released for free under the{" "}
            <a href="https://html5up.net/license">
              Creative Commons Attribution license
            </a>
            .
          </p>
          <footer>
            <a href="#one" className="button style2 down">
              More
            </a>
          </footer>
        </div>
      </section>
      <section id="one" className="main style2 right dark fullscreen">
        <div className="content box style2">
          <header>
            <h2>What I Do</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna.
          </p>
        </div>
        <a href="#two" className="button style2 down anchored">
          Next
        </a>
      </section>
      <section id="two" className="main style2 left dark fullscreen">
        <div className="content box style2">
          <header>
            <h2>Who I Am</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu.
          </p>
          <Link to={"/board"} className="btn blue">
            Go Board
          </Link>
        </div>
        <a href="#three" className="button style2 down anchored">
          Next
        </a>
      </section>
      <section id="three" className="main style2 right dark fullscreen">
        <div className="content box style2">
          <header>
            <h2>What I Do</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu.
          </p>
          <Link to={"/info"} className="btn blue">
            Get Information
          </Link>
        </div>
        <a href="#contact" className="button style2 down anchored">
          Next
        </a>
      </section>

      <ZapierForm action="https://hooks.zapier.com/hooks/catch/11017396/bt42gl2">
        {({ error, success }) => {
          return (
            <section id="contact" className="main style3 secondary">
              {!error && !success && (
                <div className="content">
                  <header>
                    <h2>Say Hello.</h2>
                    <p>
                      Lorem ipsum dolor sit amet et sapien sed elementum egestas
                      dolore condimentum.
                    </p>
                  </header>
                  <div className="box">
                    <div className="contact-form">
                      <div className="fields">
                        <div className="field half">
                          <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="field half">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="field">
                          <textarea
                            name="message"
                            placeholder="Message"
                            rows={6}
                          ></textarea>
                        </div>
                      </div>
                      <ul className="actions special">
                        <li>
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn blue"
                            style={{ padding: "0 2em" }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div
                  style={{
                    fontSize: "30px",
                    color: "#999",
                  }}
                >
                  Something went wrong. Please try again later.
                </div>
              )}
              {success && (
                <div
                  style={{
                    fontSize: "30px",
                    color: "#999",
                  }}
                >
                  Thank you for contacting us!
                </div>
              )}
            </section>
          );
        }}
      </ZapierForm>
      <footer id="footer">
        <ul>
          <li>
            <a href="#">
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Instagram</span>
            </a>
          </li>
        </ul>

        <ul>
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </footer>
      <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
      <script src="js/jquery.scrollex.min.js"></script>
    </>
  );
};

export default MainView;
