import React from 'react';
import '../styles/about.css';


const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>Welcome to Eco Drive</h1>
        <p className="intro-text">
          Eco Drive is a carpooling platform designed to make commuting more eco-friendly, cost-effective, and convenient. We aim to reduce the number of cars on the road, minimize traffic congestion, and lower carbon emissions. Join us in our mission to make transportation greener and more sustainable.
        </p>

        <section className="about-section">
          <h2>What is Carpooling?</h2>
          <p>
            Carpooling is the practice of sharing a car ride with others who are going in the same direction. It helps reduce the number of vehicles on the road, saves money on fuel, and decreases traffic congestion. By choosing to carpool, you are actively contributing to a cleaner environment and a more efficient transportation system.
          </p>
        </section>

        <section className="about-section">
          <h2>Benefits of Eco Drive</h2>
          <ul>
            <li><strong>Eco-Friendly:</strong> Reduce your carbon footprint by sharing rides with others and driving fewer miles.</li>
            <li><strong>Cost-Efficient:</strong> Save on fuel and maintenance costs by splitting expenses with fellow passengers.</li>
            <li><strong>Convenience:</strong> Carpooling allows you to travel without the stress of finding parking and dealing with traffic alone.</li>
            <li><strong>Community:</strong> Meet new people and connect with individuals who share similar travel routes and schedules.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>How Does Eco Drive Work?</h2>
          <p>
            Using Eco Drive is simple. Just create an account, enter your travel details, and find a carpool match. You can choose to either offer a ride or join a ride, based on your preferences. The platform connects drivers and passengers, making sure that everyone has a safe and comfortable journey. Our platform ensures that carpooling is easy, secure, and accessible.
          </p>
        </section>

        <section className="about-section">
          <h2>Join Us Today!</h2>
          <p>
            Ready to save money, help the environment, and make new friends? Join Eco Drive today and start carpooling with like-minded individuals who are passionate about a sustainable future. Together, we can create a cleaner, greener world, one ride at a time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
