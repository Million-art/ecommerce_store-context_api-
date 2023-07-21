import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image from '../assets/slider/slider1.jpg';
 const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <img src={image} alt="About Us" className="mb-4" />
        <p className="text-lg">
          Welcome to our expertly designed ecommerce web application. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec euismod, libero vitae luctus aliquet, nisl mauris aliquet turpis, at porttitor nisi nibh id mauris.
          Morbi bibendum, velit nec egestas ultrices, justo mi tincidunt quam, eget dapibus sem nisl in nunc. Mauris id
          mauris sed libero volutpat pharetra. Nulla facilisi. Sed id tellus eget tellus commodo aliquam. Sed auctor lacus
          vel augue faucibus, id lobortis risus pharetra. Sed auctor, sapien ac tincidunt consectetur, orci sem gravida
          lacus, vitae varius ligula turpis non nunc. Aenean iaculis orci id lorem efficitur, id tempus massa pharetra.
          Nulla facilisi. Quisque ac metus in mauris facilisis vestibulum. Fusce id metus auctor, placerat ligula id,
          lacinia ante.
        </p>
      </div>
      <Footer />
    </>
  );
};
 export default About;