import { InlineCode, Text } from '@/once-ui/components'
import { MoreBtn } from '../components/MoreBtn'

const person = {
  firstName: 'Mahendra',
  lastName: 'Dewangan',
  get name () {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'Frontend Engineer, Fullstack Engineer, Freelancer',
  avatar: '/images/avatar2.webp',
  timeZone: 'Asia/Kolkata', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Hindi'] // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  )
}

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'X',
    icon: 'x',
    link: 'https://twitter.com/mahendra_dew'
  },
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/mahendraDew'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/mahendradew/'
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:mahendradewangan195@gmail.com'
  }
]

const home = {
  label: 'home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineer, Freelancer, Builder</>,
  sublineOne: (
    <>
      Hi, I’m Mahendra Dewangan, Frontend developer from India. I recently
      graduated with a Bachelors in Computer Science, specializing in frontend
      development. I’ve dabbled in both frontend and backend{' '}
      <Text onBackground='danger-weak'>
        (because, why not complicate life a little more?)
      </Text>
    </>
  ),
  sublineTwo: (
    <>
      I’m passionate about building cool things and creating projects that push
      the boundaries of tech{' '}
      <Text onBackground='danger-weak'>
        (or break them, depending on the day)
      </Text>
      .
    </>
  ),
  sublineThree: (
    <>
      {' '}
      In my free time{' '}
      <Text onBackground='danger-weak'> (which is practically a myth)</Text>, I
      enjoy working on my side projects. After hours, I like building my own
      ideas into reality{' '}
      <Text onBackground='danger-weak'>
        because, you know, who needs sleep?
      </Text>{' '}
      Oh, and I also like to do drawing and painting{' '}
      <Text onBackground='danger-weak'>
        {' '}
        (on those rare occasions when I actually have time to breathe!)
      </Text>
      <MoreBtn />
    </>
  )
}

const about = {
  label: 'about',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true
  },
  avatar: {
    display: true
  },
  calendar: {
    display: true,
    link: 'https://cal.com'
  },
  intro: {
    display: true,
    title: 'Introduction'
    // description: <>Mahendra is a Indian engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work/Intern',
    experiences: [
      {
        company: 'HNGx',
        timeframe: {
          start: 'Sept 2023',
          end: 'Nov 2023'
        },
        role: 'Frontend Engineer',
        achievements: [
          <>
            Implemented a screen recording feature using JavaScript and browser
            APIs to capture screen/tab/window activity. Utilized Blob objects to
            chunk and send recorded video data to the backend via API endpoints.
          </>,
          <>
            Fetched and displayed video and transcript data from the backend,
            synchronizing the transcript with the video playback to highlight
            the current word as the video progresses.
          </>,
          <>
            This project enhanced user experience by providing a seamless screen
            recording and playback feature, improving the overall functionality
            and usability of the web application.
          </>,
          <>
            Skills and Technologies: Javascript/Typescript, React.js, Nextjs,
            Node.js, API, TailwindCSS, ChromeAPIs.
          </>
        ]
      }
    ]
  },
  project: {
    display: true, // set to false to hide this section
    title: 'Projects',
    mainProjects: [
      {
        name: 'devspace',
        timeframe: 'June 2024 - Present',
        oneliner:
          'A site to help developers find other people to pair program with.',
        description: [
          <>
            a pair programming platform where you can find fellow developers,
            create live rooms for video chat, and share screens, facilitating
            global collaboration. also, find and join rooms that interest you,
            connect, and code together!
          </>
        ],
        tags: [
          'nextjs',
          'js',
          'typescript',
          'tailwind',
          'nodejs',
          'docker',
          'Drizzle',
          'PostgreSQL',
          'OAuth'
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'devspace img',
          width: 5,
          height: 3
        },
        links: {
          ext: 'https://devspace-prod.vercel.app/',
          github: 'https://github.com/mahendrdew/devspace'
        }
      },
      {
        name: 'Moodify',
        timeframe: 'June 2024 - Present',
        oneliner:
          'Music recommendation system(web app) based on facial expression(emotion)',
        description: [
          <>
            Moodify is a music recommendation web app that uses facial emotion
            recognition to suggest songs. Capture your mood through the camera,
            and Moodify will curate a personalized playlist to match your
            emotional state, enhancing your music experience.
          </>
        ],
        tags: [
          'HTML/CSS',
          'Javascript',
          'Python',
          'Flask',
          'OpenCV',
          'Haarcascade classifier',
          'FER 2013',
          'Firebase'
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'moodify img',
          width: 5,
          height: 3
        },
        links: {
          ext: '',
          github: ''
        }
      },
      {
        name: 'DeployCell - Vercel Clone',
        timeframe: 'June 2024 - Present',
        oneliner:
          'A plateform to streamline the deployment of React application.',
        description: [
          <>
            Developed DeployCell, a plateform to streamline the deployment of
            React applications. DeployCell offers an efficient and automated
            deployment process, ensuring optimal performance and compatibility
            for web applications.
          </>
        ],
        tags: [
          'Javascript',
          'Typescript',
          'Next.js',
          'React.js',
          'Node.js',
          'Express',
          'Redis DB',
          'Azure Containers',
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'moodify img',
          width: 5,
          height: 3
        },
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Deploycell-vercel-clone'
        }
      },
      {
        name: 'Recify - Spotify Clone',
        timeframe: 'June 2024 - Present',
        oneliner: 'Music screaming platform using Spotify API',
        description: [
          <>
            Recify is a Spotify clone web app offering seamless music streaming.
            Enjoy high-quality audio, create custom playlists, and discover new
            music based on your with an intuitive interface and robust features.
          </>
        ],
        tags: [
          'Javascript',
          'Reactjs',
          'APIs',
          'RapidAPI',
          'Axios',
          'Redux',
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'moodify img',
          width: 5,
          height: 3
        },
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Recify-react-app'
        }
      },
      {
        name: 'Face Recognition System using OpenCV',
        timeframe: 'June 2024 - Present',
        oneliner: 'Simple face recognition system',
        description: [
          <>
            This is a simple face recognition system implemented using the
            OpenCV library in Python. The project involves capturing and saving
            face images, training a face recognition model, and performing
            recognition tasks.
          </>
        ],
        tags: [
          'Python',
          'OpenCV','Numpy'
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'face recognition img',
          width: 5,
          height: 3
        },
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Face-detection-project'
        }
      },
      {
        name: 'Image Gallery',
        timeframe: 'June 2024 - Present',
        oneliner:
          'Responsive image gallery that showcases a collection of images in a visually appealing way',
        description: [
          <>
            A fully functional and responsive image gallery that showcases a
            collection of images in a visually appealing way. Ability to Login
            to the gallery page. Authenticated users are able to use the
            Drag-and-Drop feature, able to select and drag images, effortlessly
            rearranging them within the gallery. This project consumes data from
            the unSplash API.
          </>,
          <> username: user@example.com, password: 1Password</>
        ],
        tags: [
          
          'Javascript',
          'Reactjs',
          'TailwindCSS',
          'Nodejs',
          'FirebaseAUTH',
          'unSplash',
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'image gallery img',
          width: 5,
          height: 3
        },
        links: {
          ext: 'https://hng-stage-three-image-gallery.vercel.app/',
          github: 'https://github.com/mahendraDew/HNG-stage-three'
        }
      },
      {
        name: 'React DallE Clone',
        timeframe: 'June 2024 - Present',
        oneliner: 'An image generator app using',
        description: [
          <>
            An image generator app using ReactJS, inspired by DALL-E, to create
            unique images based on text prompts. Explore endless creative
            possibilities with advanced AI-driven image generation.
          </>
        ],
        tags: [
          'Javascript',
          'Nodejs','Reactjs','dallE API'
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'React dalle clone img',
          width: 5,
          height: 3
        },
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/react-dallE-clone'
        }
      },
      {
        name: 'Tic Tac Toe - Java CLI App',
        timeframe: 'June 2024 - Present',
        oneliner: 'Console-based Tic-Tac-Toe game',
        description: [
          <>
            This is a simple console-based Tic Tac Toe game implemented in Java.
            The game allows two players to take turns entering their moves until
            one of them wins or the board is full.
          </>
        ],
        tags: [
          'Java','IntelliJ Idea'
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'tic tac toe game img',
          width: 5,
          height: 3
        },
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/TicTacToe_Java'
        }
      },
      {
        name: 'Dictionary App Chrome Extension',
        timeframe: 'June 2024 - Present',
        oneliner: 'Dictionary App Chrome Extension',
        description: [
          <>
            Dictionary App is a Chrome extension that provides quick and easy
            access to word definitions and synonyms. Enhance your vocabulary and
            understanding directly within your browser.
          </>
        ],
        tags: [
          'HTML','CSS','Javascript'
        ],
        image: {
          src: '/images/projects/project-01/cover-01.jpg',
          alt: 'tic tac toe game img',
          width: 5,
          height: 3
        },
        links: {
          ext: '',
          github:
            'https://github.com/mahendraDew/Dictionary_App_Chrome_extension'
        }
      }
    ],
    ArchiveProjects: [
      {
        name: 'React ChatGPT Clone',
        timeframe: 'June 2024 - Present',
        oneliner: "chat application powered by OpenAI's GPT-3.5",
        links: [
          {
            ext: '',
            github: 'https://github.com/mahendraDew/react-chatGPT-clone'
          }
        ]
      },
      {
        name: 'Spotify App clone',
        timeframe: 'June 2024 - Present',
        oneliner:
          'This is a frontend-only web application that replicates some of the core features of Spotify. It is built using React and utilizes the Spotify API for fetching music data.',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Spotify-clone-app'
        }
      },
      {
        name: 'Chess game',
        timeframe: 'June 2024 - Present',
        oneliner:
          'This is a classical chess game build with reactjs, chessboardjsx and chess.js',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Chess-Game-React'
        }
      },
      {
        name: 'Keeper',
        timeframe: 'June 2024 - Present',
        oneliner: 'Keeper is an note taking app (Google Keeps Clone).',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Keeper'
        }
      },
      {
        name: 'QuickNote',
        timeframe: 'June 2024 - Present',
        oneliner: 'Note taking chrome extension',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/QuickNote-chrome-extension'
        }
      },
      {
        name: 'Typing test',
        timeframe: 'June 2024 - Present',
        oneliner:
          'This Python project idea aims to create a fun project that allows you to assess and even enhance your typing speed.',
        links: {
          ext: '',
          github:
            'https://github.com/mahendraDew/Python-Projects/tree/main/Typing%20Speed%20Test'
        }
      },
      {
        name: 'Morse Code Translator',
        timeframe: 'June 2024 - Present',
        oneliner: 'Morse Code Translator.',
        links: {
          ext: '',
          github:
            'https://github.com/mahendraDew/Web-Dev-Projects/tree/master/Morse%20Code%20Translator'
        }
      }
    ]
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'University of Jakarta',
        description: <>Studied software engineering.</>
      },
      {
        name: 'Build the Future',
        description: <>Studied online marketing and personal branding.</>
      }
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      }
    ]
  }
}

const blog = {
  label: 'blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
}

const work = {
  label: 'work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

export { person, social, home, about, blog }
