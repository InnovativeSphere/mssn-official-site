// src/data/content.ts

// ==========================================
// 1. SITE METADATA & CONFIG
// ==========================================
export const siteConfig = {
  name: "Muslim Students' Society of Nigeria (MSSN)",
  shortName: "MSSN",
  description: "Uniting Muslim students in Nigeria since 1954.",
  motto: "There is no deity worthy of worship except ALLAH and Muhammad (SAW) is His messenger.",
  foundedYear: 1954,
  logo: "/images/logo.png", // Placeholder - update with your transparent PNG/SVG later
};

// ==========================================
// 2. NAVIGATION LINKS
// ==========================================
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Aims", href: "#aims" },
  { label: "Leadership", href: "#leadership" },
  { label: "Programmes", href: "#programmes" },
  { label: "Contact", href: "#contact" },
];

// ==========================================
// 3. HERO SECTION
// ==========================================
export const heroData = {
  title: "MSSN A-Zone",
  subtitle: "Uniting Muslim Students Since 1954",
  description: "A unified religious organization dedicated to the spiritual, educational, and social development of Muslim students across Nigeria.",
  ctaText: "Discover Our Aims",
  ctaLink: "#aims",
  heroImage: "/images/hero.jpg", // Placeholder - use the 3-men on chairs photo here
};

// ==========================================
// 4. ABOUT / HISTORY SECTION
// ==========================================
export const aboutData = {
  title: "Our Legacy & History",
  preamble: "The Muslim Students' Society of Nigeria (MSSN) started as a dream in 1954 when students of Methodist Boys' High School, Lagos—notably Tajudeen Aromasodun, AbdulRahman Sahid, and Sunmola Akinola—conceived the idea of forming an association for all Muslim students. Facing an era where Muslims were often forced to renounce their faith for education, they took a stand.",
  foundingDetails: "The inaugural meeting was held on April 18th, 1954, at Ansar-ud-Deen Primary School, Alakoro, Lagos, with 14 students representing various secondary schools. The society was officially born on Sunday, May 30th, 1954.",
  registrationDate: "The Society was incorporated with the Federal Ministry of Internal Affairs on October 14th, 1982.",
  vision: "To establish an Ummah governed by the principles and rules of the Shari'ah.",
  mission: "To work relentlessly towards the establishment of a society that fosters all-round human development by continuously striving towards strengthening the Ummah educationally, spiritually, and politically through a wide spectrum of activities in schools and the larger society in partnership with similar organizations.",
  goalStatement: "To educate and train members on Islam as a way of life, achieve enhanced capacity building of the Ummah, pursue Da'awah and enlightenment, promote good governance, and empower members economically.",
  historyImage: "/images/about-community.jpg", // Placeholder - use the outdoor mic photo here
};


// ==========================================
// 5. AIMS (THE 8 POINTS) - UPDATED FOR BREVITY
// ==========================================
export const aims = [
  { id: 1, title: "Spiritual Unity", description: "Fostering Islamic brotherhood and unwavering faith in Allah among all Muslims." },
  { id: 2, title: "Shari'ah Governance", description: "Establishing a community governed by the principles and rules of Shari'ah." },
  { id: 3, title: "Qur'an & Arabic Studies", description: "Promoting the study of the Qur'an and the Arabic language across the Ummah." },
  { id: 4, title: "Welfare & Rights", description: "Protecting the welfare and fundamental rights of Muslims in every society." },
  { id: 5, title: "Propagation (Da'awah)", description: "Propagating and strengthening the message of Islam throughout Nigeria and the world." },
  { id: 6, title: "Championing the Oppressed", description: "Championing the rights and dignity of the oppressed in every community." },
  { id: 7, title: "Quality Education", description: "Encouraging sound, qualitative education for all Muslim youths." },
  { id: 8, title: "Ancillary Functions", description: "Undertaking supporting functions that align with the core objectives of the Society." },
];

// ==========================================
// 6. ORGANIZATIONAL STRUCTURE
// ==========================================
export const orgStructure = [
  { level: 1, title: "National Headquarters", subtitle: "Supreme Governing Body", location: "First Avenue, 14th Road, Gwarinpa, Abuja, FCT" },
  { level: 2, title: "Zones", subtitle: "Zone A (19 Northern States + FCT) & Zone B (17 Southern States)", location: "Zone A HQ: Zaria, Kaduna State | Zone B HQ: Ibadan, Oyo State" },
  { level: 3, title: "Area Units", subtitle: "State Level", description: "Every state in the federation and the FCT is an Area Unit under each Zone." },
  { level: 4, title: "Area Councils", subtitle: "Local Government / Town Level", description: "A conglomeration of Branches situated within one or more Local Government Areas." },
  { level: 5, title: "Branches", subtitle: "Institutional Level", description: "Formed in all post-primary and post-secondary institutions (Campuses/Colleges/Schools) across the federation." },
];

// ==========================================
// 7. LEADERSHIP & EXECUTIVES (SWIPER DATA)
// ==========================================
export const leadershipData = {
  currentZoneA: {
    title: "Current Zone A Executive Council",
    members: [
      { name: "Mal. Ado Garba Yankaji", role: "Chairman", tenure: "2024 – Till date" },
      { name: "Mal. Sabiu Shitu", role: "Secretary", tenure: "2024 – Till date" },
    ]
  },
  pastZoneAChairmen: {
    title: "Past Zone A Chairmen & Secretaries (1983 - 2024)",
    members: [
      { name: "Mal. Muhammad Isa", role: "Chairman", tenure: "2021 – 2024" }, // From doc
      { name: "Dr. Auwalu Yunusa", role: "Secretary", tenure: "2021 – 2024" }, // From doc
      { name: "Mal. Ishaq Muhammad Ishiyaku", role: "Chairman", tenure: "2016 – 2021" }, // From doc (two terms)
      { name: "Prof. Abdullahi Dalhatu", role: "Chairman", tenure: "2015 – 2016" },
      { name: "Mal. Muhammad Isa", role: "Secretary", tenure: "2015 – 2016" },
      { name: "Dr. Yusuf Yakub Arrigasiyyu", role: "Chairman", tenure: "2012 – 2015" },
      { name: "Dr. Najeeb A. A. Gambo", role: "Secretary", tenure: "2012 – 2015" },
      { name: "Engr. Muhammad Lawal Maidoki", role: "Chairman", tenure: "2003 – 2012" },
      { name: "Mal. Umar Larat Aliyu", role: "Secretary", tenure: "2003 – 2012" },
      // ... You can add the rest from the document into this array later. 
    ]
  },
  currentAmirah: {
    title: "Sisters' Wing (Amirahs) 2021 - Date",
    members: [
      { name: "Sister Mardiyyah Imam Qasim", role: "Amirah", tenure: "2021 - Date" },
      { name: "Sis. Rakiyah Musa", role: "Secretary", tenure: "2021 - Date" },
    ]
  },
  pastAmirahs: {
    title: "Past Amirahs & Sisters' Secretaries",
    members: [
      { name: "Late Sis. Rabi Lawal Barau", role: "Amirah", tenure: "2018 – 2021" },
      { name: "Sis. Mardiyyah Imam Qasim", role: "Secretary", tenure: "2018 – 2021" },
      { name: "Sis. Habiba Abdullahi", role: "Amirah", tenure: "2012 – 2018" },
      { name: "Sis. Fatima Jibril", role: "Secretary", tenure: "2012 – 2018" },
      { name: "Sis. Fatimah Ameh", role: "Amirah", tenure: "2006 – 2012" },
      { name: "Late Sis. Rabiatu Garba", role: "Secretary", tenure: "2006 – 2012" },
    ]
  }
};

// ==========================================
// 8. PROGRAMMES & ACTIVITIES
// ==========================================
export const programmes = [
  { id: 1, title: "National Programme", description: "Flagship annual activities organized at the national level.", flyerImage: "/images/events/national-programme.jpg" },
  { id: 2, title: "National Islamic Vacation Course (IVC)", description: "The 81st IVC is scheduled for December 24th, 2025, in Dutse, Jigawa State.", flyerImage: "/images/events/ivc-flyer.jpg" }, // Using info from doc
  { id: 3, title: "NHICOMS", description: "National Higher Institution Convention of Muslim Students.", flyerImage: "/images/events/nhicoms.jpg" },
  { id: 4, title: "Leadership Training Course (LTC)", description: "Building the next generation of Muslim leaders.", flyerImage: "/images/events/ltc.jpg" },
  { id: 5, title: "National Quiz Competition", description: "Encouraging academic excellence and Islamic knowledge.", flyerImage: "/images/events/quiz.jpg" },
  { id: 6, title: "Jihad/Da'awah Week", description: "A week dedicated to spiritual reawakening and Islamic propagation.", flyerImage: "/images/events/jihad-week.jpg" },
  { id: 7, title: "COHIMSU", description: "Conference of Higher Institutions Muslim Students.", flyerImage: "/images/events/cohmsu.jpg" },
  { id: 8, title: "Collaboration with Like-Minded Organizations", description: "Working with other Islamic bodies to strengthen the Ummah.", flyerImage: "/images/events/collab.jpg" },
  { id: 9, title: "Special Tarbiyya Programme", description: "Tailored moral and spiritual mentorship for members.", flyerImage: "/images/events/tarbiyya.jpg" },
  { id: 10, title: "Post-Primary Institutions Programme", description: "Dedicated outreach and development initiatives for secondary school students.", flyerImage: "/images/events/ppi.jpg" },
];

// ==========================================
// 9. STATS / IMPACT NUMBERS
// ==========================================
export const statsData = [
  { label: "Zones", value: "2", description: "Zone A (North) & Zone B (South)" },
  { label: "Area Units", value: "20+", description: "States & FCT covered" },
  { label: "Higher Institutions", value: "100+", description: "Tertiary branches across Nigeria" },
  { label: "Post-Primary Inst.", value: "1000+", description: "Secondary school branches nationwide" },
  { label: "Founded", value: "1954", description: "Over 70 years of service" },
];

// ==========================================
// 10. CONTACT & FOOTER
// ==========================================
export const contactData = {
  headquarters: {
    label: "National Headquarters",
    address: "First Avenue, 14th Road, Gwarinpa, Abuja, Federal Capital Territory (FCT)",
  },
  zoneAHQ: {
    label: "Zone A Headquarters",
    address: "c/o Islamic Trust of Nigeria (ITN), Kilometre 4 Zaria - Funtua Road, Zangon Shanu, Samaru - Zaria, Kaduna State.",
    postal: "P.O.Box 984, Zaria 81001, Kaduna State.",
  },
  emails: ["mssazone@yahoo.com", "mssazone@gmail.com"],
  phoneNumbers: ["07068733722 (MTN)", "08083969581 (Airtel)"],
  socialLinks: {
    facebook: "#", // Placeholder - you can swap with their Facebook page URL
  },
};