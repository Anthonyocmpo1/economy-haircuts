import React from 'react';

function Services({ artwork }) {
  return (
    <div>
      

      {/* Shutter Pictures Section */}
      <section id="shutter-pictures">
  <h3>Shutter Pictures</h3>
  <div className="image-container">
    <img src='image/shutterstock1.jpg' alt='stock 1' className="shutter-picture" />
    <img src='image/shutterstock2.jpg' alt='stock 2' className="shutter-picture" />
    <img src='image/shutterstock3.jpg' alt='stock 3' className="shutter-picture" />
    <img src='image/shutterstock4.jpg' alt='stock 4' className="shutter-picture" />
    <img src='image/shutterstock5.jpg' alt='stock 5' className="shutter-picture" />
    <img src='image/shutterstock6.jpg' alt='stock 6' className="shutter-picture" />
    <img src='image/shutterstock7.jpg' alt='stock 7' className="shutter-picture" />
    <img src='image/shutterstock8.jpg' alt='stock 8' className="shutter-picture" />
    <img src='image/shutterstock9.jpg' alt='stock 9' className="shutter-picture" />
  </div>
</section>


      {/* Background Remove Pictures Section */}
      <section id="bg-remove-pictures">
        <h3>Background Remove Pictures</h3>
        <div className="image-container">
        <img src='image/remove1.png' alt='Background' className="Remove pictures" />
        <img src='image/remove2.png' alt='Background' className="Remove pictures" />
        <img src='image/remove3.png' alt='Background' className="Remove pictures" />
        <img src='image/remove4.png' alt='Background' className="Remove pictures" />
        <img src='image/remove5.png' alt='Background' className="Remove pictures" />
        <img src='image/remove6.png' alt='Background' className="Remove pictures" />
        <img src='image/remove7.png' alt='Background' className="Remove pictures" />
        <img src='image/remove8.png' alt='Background' className="Remove pictures" />
        <img src='image/remove9.png' alt='Background' className="Remove pictures" />
        <img src='image/remove10.png' alt='Background' className="Remove pictures" />
        <img src='image/remove11.png' alt='Background' className="Remove pictures" />
        <img src='image/remove12.png' alt='Background' className="Remove pictures" />
        <img src='image/remove13.png' alt='Background' className="Remove pictures" />
         </div>
      </section>
    </div>
  );
}

export default Services;
