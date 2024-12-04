import { Text } from '@/once-ui/components'

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



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'X',
    icon: 'x',
    link: 'https://x.com/mahendra_Dew'
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
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineer, Freelancer, Builder</>,
  sublineOne: (
    <>
      hi, i’m Mahendra Dewangan, full stack developer from india. i recently
      graduated with a bachelors in computer science, specializing in frontend
      development. i’ve dabbled in both frontend and backend{' '}
      <Text onBackground='danger-weak'>
        (because, why not complicate life a little more?)
      </Text>
    </>
  ),
  sublineTwo: (
    <>
      i’m passionate about building cool things{' '}
      <Text onBackground='danger-weak'>
        (or break them, depending on the day)
      </Text>
      .
    </>
  )
}

const about = {
  label: 'about',
  title: 'about me',
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
    title: 'introduction',
    sublineOne: (
      <>
        hi, i’m Mahendra Dewangan, frontend developer from india. i recently
        graduated with a bachelors in computer science, specializing in frontend
        development. i’ve dabbled in both frontend and backend{' '}
        <Text onBackground='danger-weak'>
          (because, why not complicate life a little more?)
        </Text>
      </>
    ),
    sublineTwo: (
      <>
        i’m passionate about building cool things and creating projects that push
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
        in my free time{' '}
        <Text onBackground='danger-weak'> (which is practically a myth)</Text>, I
        enjoy working on my side projects. after hours, i like building my own
        ideas into reality{' '}
        <Text onBackground='danger-weak'>
          because, you know, who needs sleep?
        </Text>{' '}
      </>,<>  
        oh, and i also like to do drawing and painting{' '}
        <Text onBackground='danger-weak'>
          {' '}
          (on those rare occasions when I actually have time to breathe!)
        </Text>
        .{' '}
        exploring web3 as of now{' :)'}{' '}
      </>
    )
  },
  work: {
    display: true, // set to false to hide this section
    title: 'work/intern',
    experiences: [
      {
        company: 'HNGx',
        timeframe: {
          start: 'sept 2023',
          end: 'nov 2023'
        },
        role: 'frontend engineer',
        achievements: [
          <>
            implemented a screen recording feature using javaScript and browser
            api to capture screen/tab/window activity. utilized blob objects to
            chunk and send recorded video data to the backend via api endpoints.
          </>,
          <>
            fetched and displayed video and transcript data from the backend,
            synchronizing the transcript with the video playback to highlight
            the current word as the video progresses.
          </>,
          <>
            this project enhanced user experience by providing a seamless screen
            recording and playback feature, improving the overall functionality
            and usability of the web application.
          </>,
          <>
            skills and technologies: javascript/typescript, react.js, next.js,
            node.js, api, tailwindcss, chromeapis.
          </>
        ]
      }
    ]
  },
  project: {
    display: true, // set to false to hide this section
    title: 'projects',
    mainProjects: [
      {
        name: 'secondbrain',
        timeframe: 'nov 2024 - present',
        oneliner:
          'your digital brain for storing, organizing, and effortlessly retrieving your thoughts and ideas.',
        description: [
          <>
           secondbrain is your personal knowledge hub designed to capture and organize your thoughts, ideas, and insights. store everything—from a simple tweet to a youtube video or a detailed blog article—all in one place. effortlessly retrieve information, simplify your workflow, and unlock your creative potential. never forget your 'thought' again!
          </>
        ],
        tags: [
          'react.js',
          'js',
          'typescript',
          'tailwind',
          'node.js',
          'express',
          'mongodb',
          'jwt',
          'mongoose',
          'oauth'
        ],
        image: {
          src: '/images/projects/secondbrain.png',
          alt: 'secondbrain img',
          width: 5,
          height: 3
        },
        links: {
          ext: 'https://getsecondbrain.vercel.app/',
          github: 'https://github.com/mahendraDew/secondbrain-client'
        }
      },
      {
        name: 'devspace',
        timeframe: 'june 2024 - present',
        oneliner:
          'a site to help developers find other people to pair program with.',
        description: [
          <>
            a pair programming platform where you can find fellow developers,
            create live rooms for video chat, and share screens, facilitating
            global collaboration. also, find and join rooms that interest you,
            connect, and code together!
          </>
        ],
        tags: [
          'next.js',
          'js',
          'typescript',
          'tailwind',
          'node.js',
          'docker',
          'drizzle',
          'postgreSQL',
          'oauth'
        ],
        image: {
          src: '/images/projects/devspace.png',
          alt: 'devspace img',
          width: 5,
          height: 3
        },
        links: {
          ext: 'https://devspaceorg.vercel.app/',
          github: 'https://github.com/mahendraDew/devspace'
        }
      },
      {
        name: 'ya todo',
        timeframe: 'may 2024 - present',
        oneliner:
          'ya-todo: yet another to-do app because who doesnt need more lists in their life?',
        description: [
          <>
            ya-todo: the simple to-do app that helps you organize your tasks, track your goals, and keep your life together—because apparently, we all need another list to manage.
          </>
        ],
        tags: [
          'react.js',
          'js',
          'tailwind',
          'node.js',
          'mongodb',
          'express',
          'jwt',
        ],
        image: {
          src: '/images/projects/yatodo.png',
          alt: 'ya-todo img',
          width: 5,
          height: 3
        },
        links: {
          ext: 'https://yetanothertodo.vercel.app/',
          github: 'https://github.com/mahendraDew/ya-todo-client'
        }
      },
     
      {
        name: 'deploycell - vercel clone',
        timeframe: 'june 2024 - present',
        oneliner:
          'a plateform to streamline the deployment of react application.',
        description: [
          <>
            developed deploycell, a plateform to streamline the deployment of
            react applications. deploycell offers an efficient and automated
            deployment process, ensuring optimal performance and compatibility
            for web applications.
          </>
        ],
        tags: [
          'javascript',
          'typescript',
          'next.js',
          'react.js',
          'node.js',
          'express',
          'redis DB',
          'azure Containers',
        ],
        image: {
          src: '/images/projects/deploycell.png',
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
        name: 'image gallery',
        timeframe: 'june 2024 - present',
        oneliner:
          'responsive image gallery that showcases a collection of images in a visually appealing way',
        description: [
          <>
            a fully functional and responsive image gallery that showcases a
            collection of images in a visually appealing way. ability to login
            to the gallery page. authenticated users are able to use the
            drag-and-drop feature, able to select and drag images, effortlessly
            rearranging them within the gallery. this project consumes data from
            the unsplash api.
          </>,
          <> username: user@example.com, password: 1Password</>
        ],
        tags: [
          
          'javascript',
          'react.js',
          'tailwindcss',
          'node.js',
          'firebase-auth',
          'unsplash',
        ],
        image: {
          src: '/images/projects/image-gallery.png',
          alt: 'image gallery img',
          width: 5,
          height: 3
        },
        links: {
          ext: 'https://hng-stage-three-image-gallery.vercel.app/',
          github: 'https://github.com/mahendraDew/HNG-stage-three'
        }
      },
      
    ],
    ArchiveProjects: [
      {
        name: 'moodify',
        timeframe: 'june 2024 - present',
        oneliner: "music recommendation system(web app) based on facial expression(emotion)",
        links:
          {
            ext: '',
            github: 'https://github.com/mahendraDew/real-time-emotion-based-music-recommendation-system'
          }
        
      },
      {
        name: 'recify - spotify clone',
        timeframe: 'june 2024 - present',
        oneliner: "music screaming platform using spotify api",
        links:
          {
            ext: '',
            github: 'https://github.com/mahendraDew/Recify-react-app'
          }
        
      },
      {
        name: 'face recognition system using opencv',
        timeframe: 'june 2024 - present',
        oneliner: "simple face recognition system",
        links:
          {
            ext: '',
            github: 'https://github.com/mahendraDew/Face-detection-project'
          }
        
      },
      {
        name: 'react dalle clone',
        timeframe: 'june 2024 - present',
        oneliner: "an image generator app using dalle api",
        links:
          {
            ext: '',
            github: 'https://github.com/mahendraDew/react-dallE-clone'
          }
        
      },
      {
        name: 'tic tac toe - java cli app',
        timeframe: 'june 2024 - present',
        oneliner: "console-based tic-tac-toe game",
        links:
          {
            ext: '',
            github: 'https://github.com/mahendraDew/TicTacToe_Java'
          }
        
      },
      {
        name: 'dictionary app chrome extension',
        timeframe: 'june 2024 - present',
        oneliner: "dictionary app chrome extension",
        links:
          {
            ext: '',
            github: 'https://github.com/mahendraDew/Dictionary_App_Chrome_extension'
          }
        
      },
      {
        name: 'react chatgpt clone',
        timeframe: 'june 2024 - present',
        oneliner: "chat application powered by openai's gpt-3.5",
        links:
          {
            ext: '',
            github: 'https://github.com/mahendraDew/react-chatGPT-clone'
          }
        
      },
      {
        name: 'spotify app clone',
        timeframe: 'june 2024 - present',
        oneliner:
          'this is a frontend-only web application that replicates some of the core features of Spotify.',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Spotify-clone-app'
        }
      },
      {
        name: 'chess game',
        timeframe: 'june 2024 - present',
        oneliner:
          'this is a classical chess game build with react.js, chessboard.jsx and chess.js',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Chess-Game-React'
        }
      },
      {
        name: 'keeper',
        timeframe: 'june 2024 - present',
        oneliner: 'keeper is an note taking app (google keeps clone).',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/Keeper'
        }
      },
      {
        name: 'quick note',
        timeframe: 'june 2024 - present',
        oneliner: 'note taking chrome extension',
        links: {
          ext: '',
          github: 'https://github.com/mahendraDew/QuickNote-chrome-extension'
        }
      },
      {
        name: 'typing test',
        timeframe: 'june 2024 - present',
        oneliner:
          'this python project idea aims to create a fun project that allows you to assess and even enhance your typing speed.',
        links: {
          ext: '',
          github:
            'https://github.com/mahendraDew/Python-Projects/tree/main/Typing%20Speed%20Test'
        }
      },
      {
        name: 'morse code translator',
        timeframe: 'june 2024 - present',
        oneliner: 'morse code translator.',
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
    title: 'education/studies',
    institutions: [
      {
        name: 'buildspace',
        description: <>buildspace - where you build cool stuff. (learned alot of things can't put here.)</>,
        image: {
          src:"/images/studies/buildspace.png",
          alt: "buildspace",
        }
      },
      {
        name: 'viswavidyalaya engineering college',
        description: <>bachelor of technology in computer science </>,
        image: {
          src:"/images/studies/vec.png",
          alt: "VEC College",
        }
      },
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'technical skills',
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
const getUniqueTags = () => {
  // Collect all tags from each project
  const allTags = about.project.mainProjects.flatMap(project => project.tags);
  
  // Remove duplicates by creating a Set
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags;
};


export { person, social, home, about, blog, getUniqueTags }
