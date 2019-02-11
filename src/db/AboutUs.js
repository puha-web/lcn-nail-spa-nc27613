import React from 'react';

const AboutUs = {
  salonName: 'LCN NAIL SPA',
  logo: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/logo/logo.png',
  coverPhoto: 'https://s3.amazonaws.com/puha-web-images/PhotoCover/cover1.jpg',
  slogan: 'Let Us Bring You Comfort & Relaxation',
  aboutUs: <span>
            LCN Nails is proud of providing our customers with excellent services at affordable prices. 
            Our well-trained, experienced & talented technicians with a positive attitude will bring customers 
            comfort and relaxation with trending and new beauty techniques with decent prices every time crossing by. 
            Especially, customers’ cleanliness and safety is also of our utmost importance at our salon. 
            All our instruments are autoclave-sterilized, and Files, Buffers, Pumice Stones are disscarded after each client. 
            It would be our pleasure to serve you at LCN Nail Spa.
          </span>
            ,
  weOffer: [
    { name: 'Nails Enhancements',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/mani4.png'
    },
    { name: 'Luxury Pedicures',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/pedi9.png'
    },
    { name: "Waxing",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/ourSpecials/waxing2.jpg'
    },
    { name: "Kids' Services",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/nailArt1.png'
    },
  ],
  busHrs: [
    { dates: 'Tuesday - Saturday', time: "9:30 am - 7:00 pm" },
    { dates: 'Sunday', time: "11:00 am - 5:00 pm" },
    { dates: 'Monday', time: "Closed" },
  ],
  address: {
    street: '12341 Strickland Rd, Ste 106',
    city: 'Raleigh',
    state: 'NC',
    zipCode: '27613'
  },
  addressLink: 'https://www.google.com/maps/dir//lcn+nail+spa+raleigh+nc/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89acf9d4b5e8080f:0x2ef50e3bb0a76f03?ved=2ahUKEwizjtS1xJ7gAhURGt8KHbLXD5UQ9RcwC3oECAYQEA',
  phone: '(984) 202-5188',
  email: '',
  salonPhoto: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/gallery/salonPhoto/salon3.jpg'
}

export default AboutUs;