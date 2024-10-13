import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import dp from '/picpic.png';

const Section = ({ children, className, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex flex-col justify-center ${className}`}
    >
      {children}
    </motion.section>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#contact', text: 'Contact' },
    
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-white text-2xl font-bold">My Portfolio</a>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href).scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                {item.text}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg"
          >
            <nav className="container mx-auto px-6 py-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-white hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(item.href).scrollIntoView({
                      behavior: 'smooth'
                    })
                    setIsOpen(false)
                  }}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const Hero = () => (
  <Section id="home" className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl font-bold mb-4"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl mb-8"
      >
        I'm a passionate web developer creating amazing digital experiences
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition-colors"
      >
        Explore My Work
      </motion.button>
    </div>
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </Section>
)

const About = () => (
  <Section id="about" className="bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.img
            src={dp}
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            I'm a web developer with a passion for creating beautiful and functional websites. With expertise in React, Node.js, and modern web technologies, I strive to deliver high-quality solutions that meet client needs.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
          </p>
        </div>
      </div>
    </div>
  </Section>
)

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Rapydlaunch",
      period: "June 2024 - August 2024",
      description: "Designed and developed a High-Level system. Developed REST APIs to efficiently perform CRUD operations and optimized data management system. Integrated 100ms SDK for calling feature. Also successfully reduced existing APIs response time from 1.5 seconds to under 0.5 seconds. Technologies used: React-Native, Nodejs, express, Firebase Cloud Messaging, Postman, Web-Sockets, Amazon S3, MongoDB and REST APIs."
    },
    {
      title: "Project Associate Developer",
      company: "VCriate Internet Services",
      period: "July 2023 - Oct 2023",
      description: "Developed and administered comprehensive technical assessments covering HTML, CSS, JavaScript, Reactjs, Nextjs, Nodejs, SQL, and GCP for 200+ candidates, resulting in a 30% increase in hiring success rate."
    },
    {
      title: "FrontEnd Developer Intern",
      company: "Accintia",
      period: "May 2023 - June 2023",
      description: "Assisted in the development of web applications and gained experience in various technologies.Implemented a full responsive system and integrated 3rd Party SDKs & APIs. Also implemented custom prompts for the bot API from the backend. Technologies used: Reactjs, Nodejs, Express, Firebase DB, GCP (Google cloud Platform) and OpenAI API."
    },
    {
      title: "Campus Ambassador",
      company: "Geeks for Geeks",
      period: "2022",
      description: "Learned Marketing basics and assisted in campaigns. Organized hackathons and webinars in my college."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="experience" className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gradient">My Experience</h2>
        <div className="relative">
          {/* Vertical line with gradient for large screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-purple-400 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              // For large screens, alternate layout between left/right
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-12`}
            >
              {/* Left/Right content */}
              <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 shadow-lg rounded-lg ml-8 mr-8`}>
                <h3 className="text-xl font-semibold text-blue-500">{exp.title}</h3>
                <p className="text-gray-800">{exp.company}</p>
                <p className="text-sm text-gray-500 italic">{exp.period}</p>

                {/* View Details button for mobile */}
                <div className="md:hidden mt-4">
                  <button
                    className="text-blue-600 underline"
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedIndex === index ? 'Hide Details' : 'View Details'}
                  </button>
                  {expandedIndex === index && (
                    <p className="mt-4 text-gray-700">{exp.description}</p>
                  )}
                </div>
              </div>

              {/* Center dot (visible only on larger screens) */}
              <div className="hidden md:block w-6 h-6 bg-blue-600 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 shadow-md"></div>

              {/* Description on the other side for larger screens */}
              <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} bg-white shadow-md rounded-lg ml-8 mr-8 hidden md:block`}>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};



const projectData = [
  {
    title: "CryptoTracker",
    description: "An User-friendly Platform to track live crypto coins price changes. Built using Nextjs, and CoinGecko API.",
    github: "https://github.com/sudhanshu105/CryptoTracker",
    liveDemo: "https://crypto-tracker-eta-navy.vercel.app/",
    imageUrl: "/crypto.png",
  },
  {
    title: "User Chat APP",
    description: "Public Chat app with Google account authentication. Implemented with React, Node.js, and Firebase.",
    github: "https://github.com/sudhanshu105/chatapp",
    liveDemo: "https://sudhanshu105.github.io/chatapp/",
    imageUrl: "/chat.png",
  },
  {
    title: "AI Chat Bot",
    description: "An interactive and user-friendly AI chatbot using React, Node.js, and OpenAI API.",
    github: "https://github.com/sudhanshu105/ChatBot",
    liveDemo: "https://663c8118bd17df7d0717a08e--thriving-truffle-e4a96e.netlify.app/",
    imageUrl: "/bot.png",
  },
  {
    title: "NurtureEats.in",
    description: "Developed a fully functional and responsive website for a product-based startup using JavaScript, React.js, Node.js, Firebase, and GCP.",
    github: "https://github.com/sudhanshu105/NurtureEats_page",
    liveDemo: "https://app.nurtureeats.in/",
    imageUrl: "/nurture.png",
  },
];

const Projects = () => (
  <Section id="projects" className="bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.imageUrl}
              alt={`Project ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
              {" | "}
              <a href={project.liveDemo} className="text-blue-600 hover:underline">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)

const skills = [
  { name: "C/C++", image: "https://img.icons8.com/color/48/000000/c-programming.png", rating: 95 },
  { name: "JavaScript", image: "https://img.icons8.com/color/48/000000/javascript.png", rating: 95 },
  { name: "Python", image: "https://img.icons8.com/color/48/000000/python.png", rating: 70 },
  { name: "Node.js", image: "https://img.icons8.com/color/48/000000/nodejs.png", rating: 85 },
  { name: "HTML/CSS", image: "https://img.icons8.com/color/48/000000/html-5.png", rating: 90 },
  { name: "React", image: "https://img.icons8.com/color/48/000000/react-native.png", rating: 90 },
  { name: "React-Native", image: "https://img.icons8.com/color/48/000000/react-native.png", rating: 80 },
  { name: "MongoDB", image: "https://img.icons8.com/color/48/000000/mongodb.png", rating: 75 },
  { name: "SQL", image: "https://img.icons8.com/color/48/000000/database.png", rating: 70 },
  { name: "Firebase", image: "https://img.icons8.com/color/48/000000/firebase.png", rating: 70 },
  { name: "AWS", image: "https://img.icons8.com/color/48/000000/amazon-web-services.png", rating: 70 },
  { name: "GCP", image: "https://img.icons8.com/color/48/000000/google-cloud-platform.png", rating: 70 },
  { name: "Git", image: "https://img.icons8.com/color/48/000000/git.png", rating: 90 },
  { name: "Docker", image: "https://img.icons8.com/color/48/000000/docker.png", rating: 70 },
  { name: "Postman", image: "https://img.icons8.com/color/48/000000/postman.png", rating: 70 },
];

const Skills = () => (
  <Section id="skills" className="bg-gray-100">
    <div className="container mx-auto mt-8 mb-8 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg p-6 shadow-md text-center"
          >
            <img src={skill.image} alt={skill.name} className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.rating}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);


const Contact = () => (
  <Section id="contact" className="bg-blue-600 text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="max-w-lg mx-auto">
        <p className="text-center mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/sudhanshu105"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sudhanshu-singh-540133229"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:singh.sudhanshu121@gmail.com"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl hover:text-gray-300 transition-colors"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </div>
  </Section>
)

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}