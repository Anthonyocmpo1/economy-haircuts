import React from 'react';


const Gallery = () => {
  

  const images = [
    {
      section: 'Our Salon Interior',
      items: [
        { src: '/image/salon.jpeg', alt: 'Interior 1', name: 'Salon Interior 1' },
        { src: '/image/interior2.jpeg', alt: 'Interior 2', name: 'Salon Interior 2' },
        { src: '/image/interior3.jpeg', alt: 'Interior 3', name: 'Salon Interior 3' },
        { src: '/image/interior4.jpeg', alt: 'Interior 4', name: 'Salon Interior 4' },
        { src: '/image/interior5.jpeg', alt: 'Interior 5', name: 'Salon Interior 5' }
      ]
    },
    {
      section: 'Haircuts & Treatments',
      items: [
        { src: '/image/Curry hair cut and treatments.jpeg', alt: 'Carry Haircut and Treatment', name: 'Carry Haircut and Treatment'  },
        { src: '/image/Perm and trim shape up.jpeg', alt: 'Highlights', name: 'Perm and trim shape up' },
        { src: '/image/curry haircut and treatment.jpeg', alt: 'Highlights', name: 'Curry haircut and treatment' },
        { src: '/image/Highlights,’low lights perm and trim.jpeg', alt: 'Perm and Trim', name: 'Highlights,’low lights perm and trim',id:"curry"},
        { src: '/image/Men hair cut, fade.jpeg', alt: 'Men Haircut Fade', name: 'Men Haircut Fade' },
        { src: '/image/Beard trim and edgin.jpeg', alt: 'Beard Trim Haircut and Color', name: 'Beard trim and edgin' },
        { src: '/image/Beard trim and edging.jpeg', alt: 'Beard Trim Haircut and Color', name: 'Beard trim and edging' },
      ]
    },
    {
      section: 'Special Styles',
      items: [
        { src: '/image/Hair cut, scissors or clippers.jpeg', alt: 'Haircut with Scissors', name: 'Haircut with Scissors or clippers' },
        { src: '/image/Fade.jpeg', alt: 'Fade', name: 'Fade' },
        { src: '/image/Junior zero fade.jpeg', alt: 'Junior Zero Fade', name: 'Junior Zero Fade' },
        { src: '/image/Bald fade.jpeg', alt: 'Bald Fade', name: 'Bald Fade' }
      ]
    },
    {
      section: 'Color & Style',
      items: [
        { src: '/image/Color.jpeg', alt: 'Color', name: 'Color' },
        { src: '/image/colorcut.jpeg', alt: 'Colorcut and Style', name: 'Colorcut and Style' },
        { src: '/image/Style.jpeg', alt: 'Color', name: 'Style' },
        { src: '/image/Cut and style.jpeg', alt: 'Colorcut and Style', name: 'Cut and style' },
        { src: '/image/Undercut women haircut.jpeg', alt: 'Color', name: 'Undercut women haircut' },
        { src: '/image/Layers hair cut.jpeg', alt: 'Layers hair cut', name: 'Layers hair cut' },
        { src: '/image/Wig cut and style.jpeg', alt: 'Color', name: 'Wig cut and style' },
        { src: '/image/Wig cut, and style.jpeg', alt: 'Colorcut and Style', name: 'Wig cut and style' },
        { src: '/image/Flat iro.jpeg', alt: 'Color', name: 'Flat iro' },
        { src: '/image/Hair cut for short hair.jpeg', alt: 'Layers hair cut', name: 'Hair cut for short hair' }
      ]
    }
  ];

  return (
    <section id="gallery">
      <h1 className="gallery-title">Welcome to Our Gallery</h1>
      <p className="gallery-description">
        We have a wide range of beautiful salon interiors and high-quality haircuts & treatments for all your needs.
      </p>
      {images.map((sectionData, index) => (
        <div key={index} className="gallery-section">
          <h2 className="section-title">{sectionData.section}</h2>
          <div className="image-gallery">
            {sectionData.items.map((image, idx) => (
              <div key={idx} className="image-card">
                <img src={image.src} alt={image.alt} className="gallery-image" id={image.id} />
                <p className="image-name">{image.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="booking-section">
        <a href="https://book.squareup.com/appointments/z288wfnlekxjox/location/LQ0QBKPRB0QHA/services" target="_blank" rel="noopener noreferrer">
          <button className="booking-btn">
            Book Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
