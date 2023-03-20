/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashley Chong",
  title: "Hi! I'm Ashley",
  subTitle: emoji(
    "A recent graduate from Boston University passionate about tech innovation. Currently helping build Google's network. 🚀"
  ),
  resumeLink:
    "https://www.dropbox.com/s/xd5kfyy8uikb3h9/AshleyChong_Resume_Dec2021.pdf?dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ashleychong1",
  linkedin: "https://www.linkedin.com/in/ashleychong1/",
  gmail: "akchong@bu.edu",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@chongashley",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Boston University",
      logo: require("./assets/images/bostonUniversityLogo.png"),
      subHeader: "Bachelor of Science in Electrical Engineering",
      duration: "September 2018 - May 2022",
      desc: "Graduated with a concentration in Technology Innovation and a minor in Business Administration & Management.",
      descBullets: [
        "Relevant coursework: Business of Tech Innovation, Computer Organization, Digital Signal Processing, Digital VLSI Circuit Design, Electronics, Machine Learning, Software Engineering, Statistics & Data Science, Strategy for Tech Based Firms",
        "Activities and societies: BU Mars Rover, BU Consulting Group, Finance & Investment Club, International Affairs Association, BarMUN XIV, UNA-USA Boston University Chapter, BU Ski & Board Club"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Project Management", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "70%"
    },
    {
      Stack: "Optical Transport Network",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Network Implementation Engineer",
      company: "Google",
      companylogo: require("./assets/images/googleCloudLogo.jpeg"),
      date: "July 2022 – Present",
      desc: "Joined as part of Network Operations Residency Program, a two-year program for fresh grads, designed to give new hires exposure to different teams within Google Global Networking.",
      descBullets: [
        "Gained experience in Technical Program Management and Network Engineering roles.",
        "Past rotations:  Optical Networking Technologies, Network Supply Chain & Commercial Operations."
      ]
    },
    {
      role: "Solutions Engineer Intern",
      company: "NetApp",
      companylogo: require("./assets/images/netappLogo.png"),
      date: "June 2021 – August 2021",
      descBullets: [
        "Designed an innovative DataOps demonstration leveraging Linux, Kubeflow, Kubernetes, and Docker to highlight latest NetApp AI and machine learning capabilities",
        "Led channel-partner technical sales enablement efforts with NVIDIA data scientists through deployment and setup of DataOps demo environment with NVIDIA DGX and GPUs",
        "Actively supported pre-sales presentations on NetApp’s Cloud Portfolio by preparing and following up on customer questions",
        "Developed strong client relationships through working directly with vendors, partners, and sales"
      ]
    },
    {
      role: "Technical Fellow",
      company: "BU Spark!",
      companylogo: require("./assets/images/buSparkLogo.png"),
      date: "September 2021 – May 2022",
      descBullets: [
        "Formulated customer personas, validation experiments, user story maps, CI/CD, and Agile development methods to design a user-centered software application to improve public speaking ability in the workplace",
        "Created user authentication function with SAML 2.0 to track user configurations for onboarding and personalized progress",
        "Implemented highly available content distribution network architecture using AWS Lambda, DynamoDB, S3, CloudFront",
        "Integrated React Native frontend with Python, SQL, and Flask backend deployed to an AWS EC2 Instance"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects & Papers",
  //subtitle: "SOME PROJECTS AND RESEARCH PAPERS THAT I'M PARTICULARLY PROUD OF",
  projects: [
    {
      image: require("./assets/images/bumrcLogo.jpeg"),
      projectName: "Boston University Mars Rover",
      projectDesc: "BU Mars Rover is a student-run engineering team that designs an innovative Mars exploration rover to compete in the annual University Rover Challenge.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://bumrc.org/"
        },
        {
          name: "View LinkedIn Page",
          url: "https://www.linkedin.com/company/bu-mars-rover/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/homeDASHLogo.png"),
      projectName: "HOMEdash",
      projectDesc: "An ArcGIS API-powered dashboard that displays real-time data streams related to the UN 2030 Sustainable Development Goals on a 3D globe with interactive visualization functions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://homedash.earth/"
        },
        {
          name: "View Prototype",
          url: "http://homedash.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/dataCenterReport.jpeg"),
      projectName: "Global Data Center Report 2020",
      projectDesc: "A 40-page investment report on industry analysis and proposed long and short positions for the US, China, Hong Kong, and Singapore cloud infrastructure and data center market.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.dropbox.com/s/w7ng2xoerf6a1nh/AshleyChong_GlobalDataCenterReport.pdf?dl=0"
        }
      ]
    },
    {
      image: require("./assets/images/greaterBayArea.png"),
      projectName: "Assessing Greater China Business Environments 2021",
      projectDesc: "Research paper that analyzes major political, legal, infrastructure, and economic factors influencing the Greater China business environment, and their impact on global expansion.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.dropbox.com/s/95zg0acybkg46ue/AshleyChong_AssessingGreaterChinaBusinessEnvironments.pdf?dl=0"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  //subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle:
        "Passed AWS certification exam, demonstrating the ability to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
      image: require("./assets/images/awsSAALogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/0842f797-b81d-47d4-886d-c373f256f4cc/public_url"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle:
        "Passed AWS certification exam, demonstrating cloud fluency and foundational understanding of AWS Cloud concepts, services, and terminology.",
      image: require("./assets/images/awsCPLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/4ab67fb6-a7be-4ddd-825b-b51d60291482/public_url"
        }
      ]
    },
    {
      title: "Certified Fiber Optics Installer",
      subtitle: "Completed 4-day course on optical fiber installation, connectorization, splicing, and testing. Passed certification exam and hands-on lab test on mechanical and fusion splicing.",
      image: require("./assets/images/foiLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/cf2f4444-2861-4bcd-9aa5-b1783ef1993b/public_url"
        }
      ]
    },

    {
      title: "Implementing and Administering Cisco Networking Technologies",
      subtitle: "Completed a 5-day intensive course on installing, operating, configuring, and verifying basic IPv4 and IPv6 networks, through a combination of lecture, hands-on labs, and self-study, ",
      image: require("./assets/images/ciscoLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/93de123e-58f4-4350-90f1-c0db38dea4f7/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ✉"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "akchong@bu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
