import React from "react";
import MyFooter from "../components/UI/footer/MyFooter";
import "./styles/About.css";

const About = () => {
  return (
    <div>
      <div className="myBody">
        <h1 className="title">About post list application</h1>
        <section>
          <a href="#aboutApp">
            <h2 id="aboutApp">About app</h2>
          </a>
          <p>
            This is an application that stimulates the work of the feed on
            social networks or on any other website. You can receive posts from
            the backend or create new posts yourself. You can also delete some
            entries and sort them by name or description.
          </p>
        </section>
        <section>
          <a href="#aboutPages">
            <h2 id="aboutPages">About pages</h2>
          </a>
          <p>
            You have list of pages.
            <ul>
              <li>
                The home page is the login page where you can log in to the
                application. Therefore, if you are not logged in, you will not
                be able to visit other pages. The login page simulated the flow
                of data to the backend, and if the login process was successful,
                it provided an opportunity to visit other pages{" "}
              </li>
              <li>
                The posts page has a list of posts and several buttons and
                selectors to choose from. Where you can read some posts, delete
                and sort them. You can also find the post you need and open the
                post's page.
              </li>
              <li>
                Post's page is a page where you can read this post and the
                comments that users have written.
              </li>
              <li>
                The "About" page is a page with all the information about the
                application.
              </li>
            </ul>
          </p>
        </section>
        <section>
          <a href="#howItWorks">
            <h2 id="howItWorks">How does it work?</h2>
          </a>
          <p>
            This application receives messages in parts from an open API, you
            can choose the size of these portions from parts in the "Posts per
            page" field. Then you can scroll through the website and when you
            reach the end of the page, the application will simulate a page
            change and receive a new array of messages.
          </p>
        </section>
        <section>
          <a href="#howElemWorks">
            <h2 id="howElemWorks">How does the elements work?</h2>
          </a>
          <p>
            <ul>
              <li>
                The navigation bar provides you with the ability to change pages
                and log out if you want.
              </li>
              <li>
                The search is a simple component with two-way binding, that
                takes an event target value and compares it with post's name.
              </li>
              <li>
                The select is a modified default component that takes "options,
                defaultValue, value, onChange" as a props and makes working with
                them easier.
              </li>
            </ul>
          </p>
        </section>
        <section>
          <a href="https://github.com/Volkoviysash" target={"_blank"}>
            <h2 id="aboutAuthor">About author</h2>
          </a>
          <p>
            This is my application written using React framework. If you want to
            see my other projects, you can visit my github account volkovich
            alexandr.
            <br />
            Contact me with email: volkoviysash@gmail.com
          </p>
        </section>
        <hr></hr>
        <MyFooter />
      </div>
    </div>
  );
};

export default About;
