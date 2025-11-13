import appointment_img from './appointment_img.png'
import header_img from './header_img1.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './StayHub-logo.jpg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import stay1 from './stay1.jpg'
import stay2 from './stay2.jpg'
import stay3 from './stay3.jpg'
import stay4 from './stay4.jpg'
import stay5 from './stay5.jpg'
import stay6 from './stay6.jpg'
import stay7 from './stay7.jpg'
import stay8 from './stay8.jpg'
import stay9 from './stay9.jpg'
import stay10 from './stay10.jpg'
import Badge from './verified.png'
import afford from './Affordable.png'
import Location from './location.png'
import Comfort from './comfort.png'
import Eco from './eco.png'
import Pet from './pet.png'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    Badge,
    afford,
    Location,
    Comfort,
    Eco,
    Pet
}

export const specialityData = [
    {
        speciality: 'Verified Stays',
        image: Badge
    },
    {
        speciality: 'Affordable & Flexible',
        image: afford
    },
    {
        speciality: 'Prime Locations',
        image: Location
    },
    {
        speciality: 'Comfort & Amenities',
        image: Comfort
    },
    {
        speciality: 'Eco-Friendly Stays',
        image: Eco
    },
    {
        speciality: 'Pet-Friendly Options 🐾',
        image: Pet
    },
]

export const topstay = [
    {
        _id: 'stay1',
        name: 'The Maple Residency',
        image: stay1,
        speciality: 'Verified Stays',
        Owner: 'Rahul Sharma',
        experience: '4 Years',
        about: 'The Maple Residency is known for its clean, well-maintained rooms and friendly service. Located in the heart of the city, it provides a comfortable stay for both students and working professionals.',
        fees: 12000,
        address: {
            line1: '12th Cross, Indiranagar',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay2',
        name: 'Sunrise Comfort PG',
        image: stay2,
        speciality: 'Affordable & Flexible',
        Owner: 'Priya Menon',
        experience: '3 Years',
        about: 'Sunrise Comfort PG offers affordable accommodation with flexible meal options and clean surroundings, perfect for college students and job seekers.',
        fees: 9500,
        address: {
            line1: '5th Block, Koramangala',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay3',
        name: 'Green Nest Stay',
        image: stay3,
        speciality: 'Eco-Friendly Stays',
        Owner: 'Ankit Verma',
        experience: '2 Years',
        about: 'Green Nest Stay promotes eco-conscious living with solar-powered lighting and water recycling facilities, offering guests a peaceful and sustainable stay.',
        fees: 10500,
        address: {
            line1: 'HSR Layout Sector 2',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay4',
        name: 'Elite Urban Homes',
        image: stay4,
        speciality: 'Prime Locations',
        Owner: 'Sneha Kapoor',
        experience: '6 Years',
        about: 'Elite Urban Homes is located in the most convenient part of the city, providing quick access to tech parks, restaurants, and public transport.',
        fees: 15000,
        address: {
            line1: 'MG Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay5',
        name: 'The Comfort Den',
        image: stay5,
        speciality: 'Comfort & Amenities',
        Owner: 'Vikram Singh',
        experience: '5 Years',
        about: 'The Comfort Den ensures a homely environment with top-notch amenities like Wi-Fi, laundry service, and common lounges for guests to relax.',
        fees: 13000,
        address: {
            line1: 'BTM 2nd Stage',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay6',
        name: 'Blue Haven Residency',
        image: stay6,
        speciality: 'Pet-Friendly Options 🐾',
        Owner: 'Aisha Khan',
        experience: '3 Years',
        about: 'Blue Haven Residency welcomes pet owners with dedicated pet zones and open lawns, providing a safe and fun environment for your furry friends.',
        fees: 14500,
        address: {
            line1: 'Whitefield Main Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay7',
        name: 'Serene Suites',
        image: stay7,
        speciality: 'Verified Stays',
        Owner: 'Karan Patel',
        experience: '7 Years',
        about: 'Serene Suites is known for its verified listings and guest safety, with 24/7 CCTV surveillance and biometric entry systems.',
        fees: 14000,
        address: {
            line1: 'Electronic City Phase 1',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay8',
        name: 'Golden Leaf PG',
        image: stay8,
        speciality: 'Affordable & Flexible',
        Owner: 'Meera Joshi',
        experience: '2 Years',
        about: 'Golden Leaf PG offers affordable accommodation for students and professionals with flexible food plans and modern interiors.',
        fees: 9000,
        address: {
            line1: 'Bannerghatta Main Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay9',
        name: 'Harmony Habitat',
        image: stay9,
        speciality: 'Comfort & Amenities',
        Owner: 'Rohit Desai',
        experience: '4 Years',
        about: 'Harmony Habitat focuses on providing high-quality comfort with spacious rooms, fast Wi-Fi, and delicious meals served daily.',
        fees: 12500,
        address: {
            line1: 'JP Nagar 5th Phase',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay10',
        name: 'Olive Grove Stay',
        image: stay10,
        speciality: 'Eco-Friendly Stays',
        Owner: 'Nisha Bhat',
        experience: '3 Years',
        about: 'Olive Grove Stay features green design, energy-efficient appliances, and natural ventilation systems to create a sustainable lifestyle.',
        fees: 11000,
        address: {
            line1: 'Yelahanka New Town',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay11',
        name: 'CityView Residency',
        image: stay1,
        speciality: 'Prime Locations',
        Owner: 'Amit Rao',
        experience: '5 Years',
        about: 'CityView Residency offers panoramic city views and easy connectivity to metro stations, making it perfect for business travellers.',
        fees: 15500,
        address: {
            line1: 'Church Street',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay12',
        name: 'The Cozy Corner',
        image: stay2,
        speciality: 'Comfort & Amenities',
        Owner: 'Divya Iyer',
        experience: '4 Years',
        about: 'The Cozy Corner is a boutique stay offering comfort-focused services, air-conditioned rooms, and a peaceful environment.',
        fees: 12500,
        address: {
            line1: 'Domlur Layout',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay13',
        name: 'Palm Residency',
        image: stay3,
        speciality: 'Verified Stays',
        Owner: 'Ramesh Pillai',
        experience: '6 Years',
        about: 'Palm Residency is a verified and secure property offering affordable yet premium living spaces for working individuals.',
        fees: 13500,
        address: {
            line1: 'Hebbal Ring Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay14',
        name: 'Urban Bliss PG',
        image: stay4,
        speciality: 'Affordable & Flexible',
        Owner: 'Snehal Patil',
        experience: '2 Years',
        about: 'Urban Bliss PG is known for its flexible rental options and shared amenities, ideal for students and professionals alike.',
        fees: 9500,
        address: {
            line1: 'Marathahalli',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'stay15',
        name: 'Pet Paradise Homes',
        image: stay5,
        speciality: 'Pet-Friendly Options 🐾',
        Owner: 'Aditya Jain',
        experience: '3 Years',
        about: 'Pet Paradise Homes is designed for pet lovers, featuring pet grooming areas, open play zones, and a calm environment for all.',
        fees: 15000,
        address: {
            line1: 'Sarjapur Road',
            line2: 'Bangalore, Karnataka'
        }
    },
]