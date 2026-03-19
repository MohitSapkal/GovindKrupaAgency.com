/**
 * Global Property Data
 * Purpose: Centralized data source for Indian real estate listings.
 */

const allProjects = [
    {
        id: 98,
        name: "Navkar Residency",
        location: "Near MIT College, 200m from Beed Bypass, Chhatrapati Sambhaji Nagar",
        price: "Starting from ₹45 Lakhs",
        propertyType: "Apartment (2BHK)",
        image: "images/navkar.jpg",
        description: "Luxurious 2BHK ready possession flats in a premium and highly connected location.",
        fullDescription: "Navkar Residency offers luxurious 2BHK ready possession flats in a premium and highly connected location. Designed for modern living, these homes feature spacious layouts, premium finishes, and smart planning for everyday comfort. This is not just a home, but a complete lifestyle upgrade, ideal for families and investors looking for value and convenience.",
        amenities: ["Ready Possession Flats", "Spacious Living Hall with Modern False Ceiling", "Smart & Functional Kitchen", "Comfortable Master Bedroom", "Children-Friendly Bedroom", "Lift Facility", "Allotted Parking"],
        pricing: "Starting from ₹45 Lakhs",
        status: "Ready to Move",
        rera: "Approved",
        nearbyLocations: ["Alpine Hospital \u2013 200m", "Kamalnayan Bajaj Hospital \u2013 800m", "Gurukul School \u2013 500m", "Jain International School \u2013 500m"],
        youtubeVideo: "https://www.youtube.com/embed/lSrbzyiKLmo" 
    },
    {
        id: 99,
        name: "Ambika Apartments",
        location: "Plot No. 45 (Part), Near Sara Bai Nagar, Garkheda Parisar, Chhatrapati Sambhaji Nagar",
        price: "₹58 Lakhs \u2013 ₹77 Lakhs",
        propertyType: "2BHK & 3BHK Flats",
        image: "images/Screenshot 2026-03-19 020557.png",
        description: "Luxurious 2BHK and 3BHK flats designed for modern urban living with premium construction quality.",
        fullDescription: "Ambika Apartments offers luxurious 2BHK and 3BHK flats designed for modern urban living. The project focuses on comfort, smart layouts, and premium construction quality. With excellent connectivity and a well-developed surrounding area, it is ideal for families looking for a stylish and convenient lifestyle.",
        amenities: ["Inverter Backup", "Multiplex (Entertainment Options)", "Water Supply", "Elevator Connectivity", "Attractive Elevation & Modern Design"],
        pricing: "Starting from ₹58 Lakhs",
        status: "Possession Soon",
        rera: "P51600054648"
    },
    {
        id: 100,
        name: "Deogiri Homes",
        location: "Naik Nagar, Beed Bypass, Chhatrapati Sambhaji Nagar",
        price: "₹29 Lakhs \u2013 ₹42 Lakhs",
        propertyType: "Flats & Row Houses",
        image: "images/deogiri_homes_alt.png",
        description: "Thoughtfully planned 2BHK flats and row houses in a fast-developing location of Sambhaji Nagar.",
        fullDescription: "Deogiri Homes offers thoughtfully planned 2BHK flats and row houses in a fast-developing location of Sambhaji Nagar. Designed for comfortable living, the project ensures good ventilation, modern layout planning, and a secure gated community environment. It is ideal for families looking for affordability along with essential lifestyle amenities.",
        amenities: ["One Gate Entry (Gated Security)", "Children's Play Area", "Ample Parking", "Cement Concrete Roads"],
        pricing: "Starting from ₹29 Lakhs",
        rera: "P51600054434"
    },
    {
        id: 101,
        name: "Shree Residency",
        location: "Andheri West, Mumbai",
        price: "₹45 Lakhs \u2013 ₹80 Lakhs",
        propertyType: "Apartment",
        image: "images/Mumbai.jpg",
        description: "Modern 1 & 2 BHK apartments in the heart of Mumbai, offering excellent connectivity and premium lifestyle amenities.",
        fullDescription: "Shree Residency redefines urban living in Mumbai. These thoughtfully designed apartments ensure ample cross-ventilation, abundant natural light, and premium fixtures. The complex offers a secure gated community environment perfect for modern families.",
        amenities: ["24/7 Security", "Gymnasium", "Children's Play Area", "Covered Parking", "Power Backup"],
        pricing: "Starting from ₹45,000,000"
    },
    {
        id: 102,
        name: "Sai Heights",
        location: "Kharadi, Pune",
        price: "₹60 Lakhs \u2013 ₹1.2 Cr",
        propertyType: "Luxury Apartment",
        image: "images/Pune.jpg",
        description: "Spacious 2, 3 & 4 BHK luxury residences near major IT hubs with world-class facilities.",
        fullDescription: "Located in the rapidly growing hub of Kharadi, Sai Heights offers unmatched convenience for IT professionals. The property features large balconies, smart home integrations, and an expansive clubhouse with recreational facilities.",
        amenities: ["Clubhouse", "Swimming Pool", "Jogging Track", "Yoga Pavilion", "Smart Security"],
        pricing: "Starting from ₹6,000,000"
    },
    {
        id: 103,
        name: "Green Valley Enclave",
        location: "Whitefield, Bangalore",
        price: "₹1.5 Cr \u2013 ₹3.0 Cr",
        propertyType: "Villa",
        image: "images/Pune3.jpg ",
        description: "Exclusive premium villas surrounded by lush greenery, private gardens, and serene landscapes.",
        fullDescription: "Escape the city buzz at Green Valley Enclave. These independent premium villas provide absolute privacy, custom-designed private gardens, and majestic architecture. A perfect blend of nature and super-luxury living in Bangalore.",
        amenities: ["Private Garden", "Servant Quarter", "Mini Theatre", "Private Plunge Pool", "Tennis Court"],
        pricing: "Starting from ₹15,000,000"
    },
    {
        id: 104,
        name: "Royal Heritage",
        location: "Wardha Road, Nagpur",
        price: "₹50 Lakhs \u2013 ₹90 Lakhs",
        propertyType: "Independent House",
        image: "images/indep home.jpg",
        description: "Elegant independent homes offering spacious living tailored for family comfort and privacy.",
        fullDescription: "Royal Heritage showcases the charm of independent living. Designed with Vaastu compliance in mind, these homes offer large terraces, open courtyards, and tranquil surroundings. It's ideally suited for families seeking peace without sacrificing urban access.",
        amenities: ["Vaastu Compliant", "Large Terrace", "Landscaped Garden", "CCTV Surveillance"],
        pricing: "Starting from ₹5,000,000"
    },
   
];
