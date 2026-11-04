export const projects = [
  {
    slug: 'cartique',
    title: 'Cartique',
    category: 'compsci',
    date: '2022-05',
    featured: false,
    description: 'A C# Windows Forms shopping application with user authentication, product browsing, order placement, and administration of products and orders.',
    tags: ['C#', 'Windows Forms', 'Desktop Application'],
    image: "img/projects/cartique/user-interface.png",
    role: 'Lead Developer, Designer & Tester',
    team: '4 people',
    duration: null,
    overview:
      'Cartique is a desktop shopping application developed in C# using Windows Forms as a high school project in May 2022. It provides a shopping experience for users and a separate interface for administrators to manage products and orders.',
    contributions: [
      'Led the development of the application.',
      'Designed the user interface and application forms.',
      'Tested the application and its core shopping and administration workflows.',
    ],
    sections: [],
    media: [
      {
        type: 'image',
        src: '/img/projects/cartique/login.png',
        caption: 'Login form',
      },
      {
        type: 'image',
        src: '/img/projects/cartique/user-interface.png',
        caption: 'Shopping interface',
      },
      {
        type: 'image',
        src: '/img/projects/cartique/admin-interface.png',
        caption: 'Administration interface',
      },
    ],
    links: [
      { label: 'Source code', href: 'https://github.com/azrapamuk/Cartique' },
    ],
  },
  {
    slug: 'signify',
    title: 'Signify',
    category: 'compsci',
    date: '2024-06',
    featured: false,
    description: 'A real-time American Sign Language recognition application that uses computer vision and machine learning to identify hand gestures through a webcam.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'scikit-learn', 'Machine Learning'],
    image: "img/projects/signify/cover.png",
    role: 'Developer',
    team: 'Solo project',
    duration: '1 month',
    overview:
      'Signify is a Python application exploring computer vision and machine learning through real-time American Sign Language recognition. It uses MediaPipe to detect hands and extract hand landmarks, which are then processed by a trained machine learning classifier to recognize individual signs. The project also provides a foundation for experimenting with gesture-based interactions and other hand gesture recognition applications.',
    contributions: [
      'Implemented real-time hand detection and landmark tracking using MediaPipe.',
      'Developed a custom image collection pipeline for gathering gesture data.',
      'Created a dataset preparation and preprocessing workflow.',
      'Trained a machine learning classifier to recognize ASL hand signs.',
      'Integrated the recognition pipeline into a real-time webcam application using OpenCV.',
    ],
    sections: [
      {
        heading: 'Data collection and model training',
        text: 'The application includes a custom data collection pipeline that captures hand gestures for different classes. The collected images are processed into a dataset, which is then used to train a machine learning classifier for gesture recognition.',
      },
      {
        heading: 'Real-time recognition',
        text: 'MediaPipe detects and tracks hand landmarks from the webcam feed, while the trained classifier predicts the corresponding sign. OpenCV handles the camera input and visual output, bringing the individual components together into one application.',
      },
    ],
    media: [
      {
        type: 'loop',
        src: '/img/projects/signify/demo.mp4',
        caption: 'Demonstration video'
      },
      {
        type: 'image',
        src: '/img/projects/signify/signs.jpg',
        caption: 'Supported signs'
      },
    ],
    links: [
      { label: 'Source code', href: 'https://github.com/azrapamuk/Signify' },
    ],
  },
  {
    slug: 'greenview',
    title: 'GreenView',
    category: 'compsci',
    date: '2024-06',
    featured: false,
    description: 'An Android plant information app featuring Medical, Culinary, and Botanical modes, with plant discovery, search, and custom entries powered by the Trefle.io API.',
    tags: ['Kotlin', 'Android Studio', 'REST API', 'Mobile Development'],
    image: "img/projects/greenview/cover.png",
    role: 'Developer',
    team: 'Solo project',
    duration: '3 months',
    overview:
      'GreenView is an Android application developed in Kotlin as part of the Mobile Application Development course at Faculty of Engineering, University of Sarajevo. It provides an interactive way to explore plant information through three dedicated modes: Medical, Culinary, and Botanical. By integrating the Trefle.io API, the app allows users to discover plants, search by name or flower color, explore detailed information, and add new plant entries.',
    contributions: [
      'Designed and developed the Android application using Kotlin.',
      'Integrated the Trefle.io API to retrieve plant information.',
      'Implemented Medical, Culinary, and Botanical browsing modes.',
      'Developed plant search functionality by name and flower color.',
      'Implemented the ability to add new plant entries.',
      'Designed the user interface and overall navigation experience.',
    ],
    sections: [
      {
        heading: 'Three ways to explore plants',
        text: 'GreenView organizes plant information into three modes, each offering a different perspective. Medical Mode focuses on medicinal plants and their uses, Culinary Mode explores plants used in cooking, and Botanical Mode provides botanical details such as plant families, origins, and characteristics.',
      },
      {
        heading: 'Plant discovery and API integration',
        text: 'The application integrates the Trefle.io API to retrieve plant data. Users can search for plants by name or flower color, explore their information, and contribute new entries to the application.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/greenview/botanical-mode.png',
        caption: 'Botanical mode interface',
      },
      {
        type: 'image',
        src: '/img/projects/greenview/plant-add.png',
        caption: 'Plant adding interface',
      },
    ],
    links: [
      { label: 'Source code', href: 'https://github.com/azrapamuk/GreenView' },
    ],
  },
  {
    slug: 'estateease',
    title: 'EstateEase',
    category: 'compsci',
    date: '2025-01',
    featured: false,
    description: 'A full-stack real estate management web application featuring property listings, user authentication, advanced search, and an administrative dashboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'AJAX'],
    image: "img/projects/estateease/cover.png",
    role: 'Full-Stack Developer',
    team: 'Solo project',
    duration: 'October 2024 - January 2025',
    overview:
      'EstateEase is a full-stack web application developed as part of a Web Technologies course at the Faculty of Engineering, University of Sarajevo. It provides a platform for browsing and managing real estate listings, combining an interactive frontend with a Node.js backend and a MySQL database managed through Sequelize.',
    contributions: [
      'Designed and developed the responsive user interface using HTML, CSS, and JavaScript.',
      'Implemented the backend using Node.js and Express.js.',
      'Designed and implemented RESTful API routes for managing property listings and user data.',
      'Integrated MySQL with Sequelize for database management.',
      'Implemented user registration, login, and authentication functionality.',
      'Developed property search and filtering based on location, price, and property type.',
      'Created an administrative dashboard for managing listings, users, and property details.',
      'Used AJAX for asynchronous data loading and dynamic page updates without full page reloads.',
    ],
    sections: [
      {
        heading: 'Full-stack architecture',
        text: 'The application follows a client-server architecture, with a frontend built using HTML, CSS, and JavaScript, and a backend powered by Node.js and Express.js. Sequelize handles communication with the MySQL database, while RESTful API routes provide access to application data.',
      },
      {
        heading: 'Property management and search',
        text: 'Users can browse available properties and narrow down results using search criteria such as location, price, and property type. An administrative dashboard provides additional functionality for managing property listings, user accounts, and property information.',
      },
      {
        heading: 'Asynchronous interactions',
        text: 'AJAX is used to retrieve and update data dynamically, reducing unnecessary page reloads and creating a smoother browsing experience.',
      },
    ],
    media: [
      {
        type: 'loop',
        src: '/img/projects/estateease/demo.mp4',
        caption: 'EstateEase application walkthrough',
      },
    ],
    links: [
      { label: 'Source code', href: 'https://github.com/azrapamuk/EstateEase' },
    ],
  },

  {
    slug: 'modernhome',
    title: 'Modern Home',
    category: 'compsci',
    date: '2024-06',
    featured: false,
    description:
      'An object-oriented furniture sales application designed around customer shopping, inventory management, and administrative workflows.',
    tags: [
      'Object-Oriented Analysis & Design',
      'UML',
      'SOLID Principles',
      'Design Patterns',
      'Software Testing',
      'UI/UX Design',
    ],
    image: '/img/projects/modernhome/cover.png',
    role: 'Developer, Designer & Tester',
    team: '4 people',
    duration: 'March - June 2024',
    overview:
      'Modern Home is an online furniture sales application developed as part of an Object-Oriented Analysis and Design course. The system provides dedicated functionality for customers, employees, and administrators, covering product discovery, shopping cart management, ordering, reviews, inventory management, and administrative operations. Alongside application development, the project involved a structured software design process, including requirements specification, use case modelling, UML class diagrams, and the exploration of object-oriented principles and design patterns.',
    contributions: [
      'Contributed to the analysis, design, and implementation of the application.',
      'Participated in developing functionality across the different system user roles.',
      'Designed and refined parts of the application interface and user experience.',
      'Tested application functionality and user workflows.',
      'Contributed to software documentation, including requirements specification and system design.',
      'Participated in modelling the system using UML and exploring SOLID principles and design patterns.',
    ],
    sections: [
      {
        heading: 'A role-based shopping experience',
        text:
          'Modern Home supports three main user roles: customers, employees, and administrators. Customers can browse furniture, search and filter products, manage their shopping carts, place orders, and review purchased items. Employees can access product information and manage inventory, while administrators oversee product listings, orders, and user accounts.',
      },
      {
        heading: 'System analysis and design',
        text:
          'The project began with defining the system requirements and identifying its main actors and business processes. The documentation included functional and non-functional requirements, use case diagrams, detailed use case scenarios, and UML class modelling. This process helped translate the application concept into a structured object-oriented system design.',
      },
      {
        heading: 'Object-oriented principles and design patterns',
        text:
          'The design phase explored the SOLID principles and the application of creational, structural, and behavioural design patterns. Patterns such as Factory Method, Adapter, Facade, Strategy, Observer, and State were examined through examples relevant to the furniture sales system, including payment processing, inventory updates, and order management.',
      },
      {
        heading: 'Testing and documentation',
        text:
          'In addition to development and interface design, I contributed to testing the application and preparing the project documentation. This included documenting system requirements, describing use case scenarios, and explaining the proposed object-oriented design decisions.',
      },
    ],
    media: [
      // Application
      {
        type: 'image',
        src: '/img/projects/modernhome/application-overview.png',
        caption: 'Modern Home application interface',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/modernhome/homepage-user.gif',
        caption: 'User interface prototype',
      },
      {
        type: 'image',
        src: '/img/projects/modernhome/products.gif',
        caption: 'Product browsing and shopping experience prototype',
      },
      {
        type: 'image',
        src: '/img/projects/modernhome/homepage-prototype.gif',
        caption: 'Homepage prototype',
      },

      // System analysis and design
      {
        type: 'image',
        src: '/img/projects/modernhome/use-case-diagram.png',
        caption: 'Use Case Diagram',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/modernhome/class-diagram.png',
        caption: 'UML Class Diagram',
        wide: true,
      },
    ],
    links: [
      {
        label: 'Source code',
        href: 'https://github.com/azrapamuk/Modern-Home',
      },
      {
        label: 'Project documentation',
        href: 'https://github.com/azrapamuk/Modern-Home/tree/main/Dokumentacija',
      },
    ],
  },
  {
    slug: 'plaza-de-espana',
    title: 'Plaza de España',
    category: 'gamedev',
    date: '2025-02',
    featured: true,
    featuredOrder: 5,
    description:
      'An augmented reality experience that brings the iconic Plaza de España to life through an interactive 3D model, points of interest, and an educational quiz.',
    tags: [
      'Unity',
      'Blender',
      'Vuforia',
      'Augmented Reality',
      '3D Modelling',
    ],
    image: '/img/projects/plaza-de-espana/cover.png',
    role: '3D Artist & AR Developer',
    team: 'Solo project',
    duration: 'October 2024 - February 2025',
    overview:
      'Plaza de España is an augmented reality application developed as part of the Computer Graphics course at the Faculty of Electrical Engineering, University of Sarajevo. The project combines 3D modelling and augmented reality to create an interactive experience centred around the iconic Plaza de España. Users can explore a detailed 3D representation of the landmark in their surroundings, discover important points of interest, and test their knowledge through an interactive quiz.',
    contributions: [
      'Contributed to the creation of the 3D environment and landmark representation using Blender.',
      'Worked on the development of the augmented reality experience in Unity.',
      'Integrated image recognition and AR functionality using Vuforia.',
      'Contributed to implementing interactive points of interest and the educational quiz.',
    ],
    sections: [
      {
        heading: 'Bringing a landmark into augmented reality',
        text:
          'The application uses Vuforia image recognition to place a 3D representation of Plaza de España into the user’s surroundings. The model was created in Blender and integrated into Unity, allowing users to explore the landmark through an augmented reality experience.',
      },
      {
        heading: 'Interactive exploration',
        text:
          'Rather than simply displaying a 3D model, the application encourages users to explore the landmark through interactive points of interest. These provide additional information about selected features of the plaza, turning the experience into a guided digital tour.',
      },
      {
        heading: 'An educational quiz',
        text:
          'The experience concludes with an interactive quiz that allows users to test what they have learned while exploring Plaza de España, adding an educational element to the AR application.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/plaza-de-espana/render2nobackground.png',
        caption: 'Plaza de España 3D model',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/plaza-de-espana/render1nobackground.png',
        caption: 'Additional 3D model render without background',
      },
      {
        type: 'image',
        src: '/img/projects/plaza-de-espana/render1withbackground.png',
        caption: '3D model with its environment',
      },
      {
        type: 'image',
        src: '/img/projects/plaza-de-espana/render2withbackground.png',
        caption: 'Additional 3D model render with environment',
      },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=B4A9bw9criY',
        caption: 'Plaza de España AR application walkthrough',
        wide: true,
      },
    ],
    links: [
      {
        label: 'Download APK',
        href: 'https://www.dropbox.com/scl/fi/379rj2vovo8kzb59uyn4k/Plaza-De-Espana.apk?rlkey=4c79xisbzuxn2cul7pkno0j6e&st=xoeey8gm&dl=1',
      },
      {
        label: 'Download AR marker',
        href: 'https://www.dropbox.com/scl/fi/cnatvssohelrz6zbb7n40/ImageRecognition.jpg?rlkey=quv1cpbp98sobvuy908uke6qj&st=khdwbj24&dl=1',
      },
    ],
  },

  {
    slug: 'music-generator',
    title: 'Music Generator with Genetic Algorithm',
    category: 'compsci',
    date: '2025-06',
    duration: 'March - June 2025', 
    featured: false,
    description:
      'A Python desktop application that learns musical styles from MIDI files and generates original melodies using genetic algorithms.',
    tags: [
      'Python',
      'Genetic Algorithms',
      'MIDI',
      'Music Generation',
      'Audio Processing',
    ],
    image: '/img/projects/music-generator/cover.png',
    role: 'Developer',
    team: '3 people',
    overview:
      'Music Generator is a Python-based desktop application that uses genetic algorithms to generate new melodies inspired by existing musical styles. It analyses MIDI datasets to learn statistical musical characteristics, then uses the resulting style model to guide the evolution of new melodies. The application combines algorithmic music generation with an interactive graphical interface, allowing users to experiment with generation parameters, select instruments, and listen to the results.',
    contributions: [
      'Developed the desktop application and its graphical user interface.',
      'Implemented musical style analysis using statistical features extracted from MIDI files.',
      'Developed a genetic algorithm for evolving new melodies based on learned musical characteristics.',
      'Implemented model saving and loading using pickle.',
      'Added customizable genetic algorithm parameters, including population size, generations, mutation rate, and crossover rate.',
      'Integrated instrument selection using General MIDI instruments.',
      'Implemented audio playback and waveform visualization for generated melodies.',
    ],
    sections: [
      {
        heading: 'Learning musical styles',
        text:
          'The application analyses collections of MIDI files to extract statistical characteristics of a musical style, including pitch distributions, intervals, and note durations. The learned information is stored in a reusable style model that can be saved and loaded for future generation sessions.',
      },
      {
        heading: 'Evolutionary melody generation',
        text:
          'A genetic algorithm uses the learned musical characteristics to evolve new melodies. Users can experiment with different population sizes, generation counts, mutation rates, and crossover rates to influence the generation process and explore different musical outcomes.',
      },
      {
        heading: 'Playback and audio visualization',
        text:
          'Generated melodies can be assigned different General MIDI instruments and exported as MIDI and WAV files. The application also provides an integrated audio player and waveform visualization, allowing users to listen to and inspect the generated results directly.',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/img/projects/music-generator/demo.mp4',
        caption: 'Generating and playing a new melody',
        wide: true,
      },
    ],
    links: [
      {
        label: 'Source code',
        href: 'https://github.com/azrapamuk/Music-Generator-App',
      },
      {
        label: 'Supplementary project files',
        href: 'https://github.com/azrapamuk/Music-Generator-App/tree/main/Drive-Files',
      },
    ],
  },
  {
    slug: 'shelterbound-site',
    title: 'Shelterbound Companion',
    category: 'compsci',
    date: '2026-06',
    featured: false,
    description:
      'A companion web application for the Shelterbound card game, featuring a digital guidebook, game setup assistance, a timer, and tools for in-game events.',
    tags: [
      'React',
      'TypeScript',
      'Frontend Development',
      'Web Application',
      'Game Companion',
    ],
    image: '/img/projects/shelterbound-site/cover.png',
    role: 'Frontend Developer',
    team: 'Solo project',
    duration: 'October 2025 - June 2026',
    overview:
      'Shelterbound Companion is a web application developed to support players of the Shelterbound card game. It combines a digital guidebook with practical gameplay tools, helping players prepare for a session and manage time-sensitive events during play. Built independently with React and TypeScript, the application provides an accessible companion experience for both game setup and active gameplay.',
    contributions: [
      'Designed and developed the companion web application independently.',
      'Implemented the digital guidebook for accessing game rules and instructions.',
      'Developed a game setup tool that calculates the required number of board tiles based on player count.',
      'Implemented a timer to support time-sensitive gameplay.',
      'Created tools for handling sudden in-game events.',
      'Deployed the application using Vercel.',
    ],
    sections: [
      {
        heading: 'A digital guidebook',
        text:
          'The companion includes a digital guidebook that gives players convenient access to the Shelterbound card game rules and instructions, helping them reference game information during setup and play.',
      },
      {
        heading: 'Game setup assistant',
        text:
          'Players enter the number of participants, and the setup tool calculates how many board tiles they need to prepare. This simplifies preparation and helps players get the game ready more efficiently.',
      },
      {
        heading: 'Tools for active gameplay',
        text:
          'A built-in timer supports time-sensitive parts of the game, while dedicated functionality helps players manage sudden in-game events. These tools complement the physical card game without replacing its core mechanics.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/shelterbound-site/guidebook.png',
        caption: 'Digital Guidebook',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/shelterbound-site/setup-calculator.png',
        caption: 'Game Setup Calculator',
      },
      {
        type: 'image',
        src: '/img/projects/shelterbound-site/timer.png',
        caption: 'In-Game Timer',
      },
      {
        type: 'image',
        src: '/img/projects/shelterbound-site/sudden-event.png',
        caption: 'Sudden In-Game Event',
      },
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://shelterbound.vercel.app/',
      },
    ],
  },

  {
    slug: 'shelterbound-card-game',
    title: 'Shelterbound',
    category: 'gamedev',
    date: '2026-06',
    featured: true,
    featuredOrder: 4,
    description:
      'A chaotic survival party game where players build a modular board, gather supplies, and pursue secret objectives while surviving unpredictable disasters.',
    tags: [
      'Game Design',
      'Tabletop Game',
      'Survival',
      'Resource Management',
      'Playtesting',
    ],
    image: '/img/projects/shelterbound-game/cover.png',
    role: 'Game Designer',
    team: '3 people',
    duration: 'October 2025 - June 2026',
    overview:
      'Shelterbound is a light-hearted survival party game set in a delightfully disastrous apocalypse. Designed for 2-4 players, the game combines player-built maps, resource collection, secret objectives, and unpredictable events. Players explore a changing landscape, gather supplies, and manage limited shelter space while trying to survive long enough to achieve their personal victory conditions.',
    contributions: [
      'Solely created the visual assets for the game, including its cards and tiles.',
      'Contributed to the design and refinement of the game mechanics.',
      'Worked on balancing resource management, survival pressure, and player interaction.',
      'Contributed to the development of the game rules and design documentation.',
      'Participated in developing and refining the tabletop game prototype.',
    ],
    sections: [
      {
        heading: 'A map built by the players',
        text:
          'Each game begins with players constructing a connected map from randomly drawn terrain tiles. The resulting board changes from session to session, creating new routes, opportunities, and challenges to explore.',
      },
      {
        heading: 'Explore, gather, and survive',
        text:
          'During the Day phase, players roll a die, move across the board, and resolve the tile they land on. They may collect supplies, gain one-time bonuses, or face disasters. At Night, a required supply type is announced. Players who cannot provide it lose a heart, making resource management essential to survival.',
      },
      {
        heading: 'Secret goals and competing strategies',
        text:
          'Each player receives a hidden Goal Card that defines their personal path to victory. To win, a player must complete their objective and assemble the required Survival Kit, or be the last survivor remaining. Hidden objectives encourage varied strategies and make opponents’ intentions uncertain.',
      },
      {
        heading: 'Unpredictable events and limited resources',
        text:
          'Disasters, bonuses, and disappearing supply tiles continually disrupt players’ plans. Limited shelter capacity forces players to decide what to keep, what to sacrifice, and when to take risks. The result is a mix of light strategy, social interaction, and comedic chaos.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/shelterbound-game/early-prototype.png',
        caption: 'The very first prototype - before things got fancy',
      },
      {
        type: 'image',
        src: '/img/projects/shelterbound-game/howto.png',
        caption: 'Cheat sheet card',
      },
      {
        type: 'image',
        src: '/img/projects/shelterbound-game/board.png',
        caption: 'Example of a board made by connecting the tiles',
      },
      {
        type: 'image',
        src: '/img/projects/shelterbound-game/tiles.png',
        caption: 'Game tiles visual style',
        wide: true
      },
      {
        type: 'image',
        src: '/img/projects/shelterbound-game/cards.png',
        caption: 'Game cards visual style',
        wide: true,
      },
    ],
    links: [
      {
        label: 'Companion Website',
        href: 'https://shelterbound.vercel.app/',
      },
    ],
  },

  {
    slug: 'stedomedo',
    title: 'StedoMedo',
    category: 'compsci',
    date: '2024-12',
    featured: false,
    description:
      'A console-based personal expense tracking application developed to explore software verification, validation, testing, and code quality improvement techniques.',
    tags: [
      'C#',
      'Software Testing',
      'White-Box Testing',
      'Code Coverage',
      'Code Refactoring',
      'Performance Optimization',
    ],
    image: '/img/projects/stedomedo/cover.png',
    role: 'Developer & Software Tester',
    team: '5 people',
    duration: 'October - December 2024',
    overview:
      'StedoMedo is a console-based expense tracking application developed as a team project for a Software Verification and Validation course. The application was designed to support personal expense management through transaction handling, expense analysis, budget monitoring, and user authentication. The main focus of the project was applying software verification and validation techniques to assess code quality, identify potential improvements, and improve the implementation through systematic testing, performance tuning, and refactoring.',
    contributions: [
      'Analysed the SHA-256 password hashing method using code metrics and McCabe cyclomatic complexity.',
      'Designed and performed white-box tests, including branch, condition, and loop coverage analysis.',
      'Created test cases to verify hashing behaviour and validate expected outputs.',
      'Performed code tuning by optimizing memory allocations and bitwise operations, reducing execution time from 3.31 seconds to 1.86 seconds.',
      'Refactored the hashing method into smaller, specialized functions to improve maintainability and readability.',
      'Evaluated changes using code metrics and maintainability indicators.',
    ],
    sections: [
      {
        heading: 'Personal expense tracking',
        text:
          'The console application was designed around essential personal finance management features, including transaction management, expense categorization, budget monitoring, spending statistics, and expense forecasting. Its proposed functionality also included filtering and sorting transactions, as well as user authentication.',
      },
      {
        heading: 'White-box testing and code coverage',
        text:
          'The SHA-256 Hash method was selected for an in-depth white-box testing analysis. McCabe cyclomatic complexity was used to examine the method’s control flow, while branch, condition, and loop coverage techniques were used to identify the test cases required to exercise its execution paths. Expected hashing results were compared against independently generated SHA-256 outputs.',
      },
      {
        heading: 'Performance optimization',
        text:
          'Code tuning focused on reducing unnecessary memory allocations and optimizing bitwise operations within the hashing implementation. Changes included replacing StringBuilder with a fixed-size character array, reusing allocated data structures, and optimizing the RotateRight operation. The measured execution time decreased from 3.31 seconds to 1.86 seconds.',
      },
      {
        heading: 'Code refactoring and maintainability',
        text:
          'The Hash method was refactored by extracting larger sections of logic into specialized helper methods, including ProcessRounds and ConvertToHex. This improved separation of responsibilities and resulted in better code metrics and maintainability indicators.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/stedomedo/console-app.png',
        caption: 'StedoMedo console application',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/stedomedo/control-flow-graph.png',
        caption: 'McCabe control flow graph of the Hash method',
      },
      {
        type: 'image',
        src: '/img/projects/stedomedo/code_tuning.png',
        caption: 'Execution time comparison before and after code tuning',
      },
    ], links: [
      {
        label: 'Source code',
        href: 'https://github.com/DervisevicAdnan/StedoMedo',
      },
    ],
  },

  {
    slug: 'siairline',
    title: 'SIAirline',
    category: 'compsci',
    date: '2025-06',
    featured: false,
    description:
      'A .NET backend for an airline information system, supporting flight management, bookings, authentication, payment processing, and real-time communication.',
    tags: [
      'C#',
      '.NET 8',
      'ASP.NET Core',
      'MySQL',
      'REST API',
      'Backend Development',
      'Real-Time Communication',
    ],
    image: '/img/projects/siairline/cover.png',
    role: 'Backend Developer',
    team: '10+ people',
    duration: 'March - June 2025',
    overview:
      'SIAirline is an airline information system developed using ASP.NET Core and .NET 8. Its backend provides services for flight booking, schedule management, user authentication, and payment processing. It follows a structured architecture with separate controllers, services, data models, and DTOs. My main responsibilities focused on backend functionality for the administrative side of the system, as well as contributing to the implementation of a real-time chat feature within the application.',
    contributions: [
      'Developed backend functionality related to the administrative side of the airline information system.',
      'Worked on implementing and maintaining backend services for administrative operations.',
      'Played a key role in developing the real-time chat functionality within the application.',
      'Contributed to backend API development and integration with the application database.',
    ],
    sections: [
      {
        heading: 'Airline information system',
        text:
          'The backend provides the core services required by an airline information system, including flight booking, schedule management, user authentication, and payment processing. Built with ASP.NET Core, it exposes API endpoints consumed by the frontend application.',
      },
      {
        heading: 'Administrative backend',
        text:
          'A significant part of my work focused on backend functionality supporting the administrative side of the platform. This involved developing server-side functionality for administrative operations and supporting the management of the airline system.',
      },
      {
        heading: 'Real-time communication',
        text:
          'I was particularly involved in implementing a real-time chat feature within the application. This functionality enables users to communicate through the platform without relying on traditional request-and-response interactions alone.',
      },
      {
        heading: 'Backend architecture',
        text:
          'The backend follows a modular structure that separates API controllers, business logic, data models, DTOs, and database access. Entity Framework Core is used for database migrations and integration with MySQL.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/siairline/real-time-chat.gif',
        caption: 'Real-time chat functionality (the depicted frontend was made just for testing purposes)',
      },
      {
        type: 'image',
        src: '/img/projects/siairline/swagger-api.png',
        caption: 'Backend API documentation in Swagger',
      },
    ],
    links: [
      {
        label: 'Backend source code',
        href: 'https://github.com/SI-2025-AIRLINE/Backend',
      },
    ],
  },
  {
    slug: 'predictive-radar',
    title: 'Predictive Radar',
    category: 'compsci',
    date: '2025-07',
    featured: false,
    description:
      'An FPGA-based adaptive traffic control system that predicts traffic conditions and automatically controls a road barrier based on incoming vehicle speed data.',
    tags: [
      'VHDL',
      'FPGA',
      'Digital Systems Design',
      'Finite State Machines',
      'UART',
      'PWM',
      'Hardware Design',
    ],
    image: '/img/projects/predictive-radar/cover.png',
    role: 'Team Member',
    team: '4 people',
    duration: null,
    overview:
      'Predictive Radar is a distributed digital system designed to adapt traffic control based on vehicle speed measurements. Developed as a project for Digital Systems Design and Synthesis, the system uses two FPGA boards that communicate through UART. One board collects vehicle speed measurements, while the other processes the received data, predicts future traffic conditions, and controls a physical road barrier using a servo motor. The project was implemented in VHDL using a modular, hierarchical architecture.',
    contributions: [
      'Contributed to the design and implementation of the FPGA-based traffic control system.',
      'Worked with VHDL to implement modular digital components and finite state machines.',
      'Contributed to the implementation of data processing and traffic speed prediction logic.',
      'Worked on integrating communication, timing, display, and motor control components.',
      'Contributed to testing and validating the system on the FPGA development board.',
    ],
    sections: [
      {
        heading: 'Distributed FPGA Architecture',
        text:
          'The system is distributed across two FPGA boards with separate responsibilities. Board A collects vehicle speed measurements, while Board B receives and processes the data to make traffic control decisions. The boards communicate through a UART serial interface, allowing the system to exchange measurement data without requiring high-bandwidth communication.',
      },
      {
        heading: 'Traffic Speed Prediction',
        text:
          'Board B stores incoming speed measurements and processes the historical data using an exponentially weighted average algorithm. The algorithm assigns progressively lower weights to older measurements, with ALPHA set to 0.2. This produces a predicted average speed that is used to determine whether traffic conditions require intervention.',
      },
      {
        heading: 'Automated Barrier Control',
        text:
          'When the predicted speed falls below the defined threshold of 20, the system activates a servo motor to raise the road barrier. The barrier remains raised for 60 seconds before returning to its initial position. A dedicated PWM driver generates the signal required to control the servo motor.',
      },
      {
        heading: 'Modular Hardware Design',
        text:
          'The design follows a modular, hierarchical architecture built around finite state machines. Separate components handle UART reception, data processing, timing, servo control, and seven-segment display output. The system also supports inactive, active, and semi-active operating modes, including manual barrier control.',
      },
      {
        heading: 'Hardware Feedback and Display',
        text:
          'The system provides real-time feedback through seven-segment HEX displays and LED indicators. The displays show the predicted traffic speed during normal operation and switch to a countdown when the barrier is activated. LEDs indicate the current operating state and support system debugging.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/predictive-radar/system-architecture.png',
        caption: 'High-Level System Architecture',
      },
      {
        type: 'image',
        src: '/img/projects/predictive-radar/active-state.png',
        caption: 'Active State Hardware Architecture',
      },
      {
        type: 'image',
        src: '/img/projects/predictive-radar/fpga-board.jpg',
        caption: 'FPGA Development Board',
      },
      {
        type: 'video',
        src: '/img/projects/predictive-radar/demo.mp4',
        caption: 'Complete System Demonstration - Both FPGA Boards in Operation',
        wide: true,
      },
    ],
    links: [
      {
        label: 'Source code',
        href: 'https://github.com/Zlatanius/PSDS-Projekat-Ploca-B/tree/final-version',
      },
    ],
  },
  {
    slug: 'pencil-sketch-shader',
    title: 'Pencil Sketch Shader',
    category: 'gamedev',
    date: '2025-11',
    featured: false,
    description:
      'A real-time pencil sketch shader that transforms a 3D scene into a hand-drawn illustration using procedural hatching, shadows, ambient occlusion, and edge outlines.',
    tags: [
      'C++',
      'GLSL',
      'OpenGL',
      'Shader Programming',
      'Computer Graphics',
      'Real-Time Rendering',
    ],
    image: '/img/projects/pencil-sketch-shader/cover.png',
    role: 'Graphics Programmer',
    team: 'Solo project',
    duration: '2 weeks',
    overview:
      'Pencil Sketch Shader is a real-time rendering project developed for the PV227 GPU Rendering course at Faculty of Informatics, Masaryk University. It transforms a 3D scene into a pencil-drawn illustration by combining procedural screen-space hatching with shadowing, ambient occlusion, and edge detection. The implementation uses custom GLSL shaders and multiple rendering passes to create a stylized, hand-drawn appearance while maintaining interactive performance.',
    contributions: [
      'Implemented a procedural screen-space hatching effect using custom GLSL shaders.',
      'Integrated shadow mapping to represent cast shadows through hatching.',
      'Implemented Sobel-based edge detection to produce outlines on visible object edges.',
      'Integrated ambient occlusion through screen-space techniques with a UI toggle.',
      'Worked with multiple render passes and framebuffer textures to combine shading effects.',
      'Implemented adjustable outline thickness through a UI control, using morphological dilation to expand detected edges.',
    ],
    sections: [
      {
        heading: 'Procedural Hatching',
        text:
          'A custom GLSL shader generates a crosshatching pattern in screen space. The hatching intensity is driven by diffuse illumination, allowing darker regions of the scene to receive denser strokes and creating the appearance of hand-drawn shading.',
      },
      {
        heading: 'Shadows and Ambient Occlusion',
        text:
          'Shadow mapping contributes cast shadows to the stylized shading. Screen-space ambient occlusion adds subtle contact shading, with an interface control to enable or disable the effect.',
      },
      {
        heading: 'Screen-Space Outlines',
        text:
          'A Sobel-based convolution filter detects edges using scene data such as depth and surface normals. Morphological dilation expands the detected edges, allowing the outline thickness to be adjusted through the UI. The resulting outlines are combined with the hatching pass to emphasize visible object boundaries and internal details.',
      },
      {
        heading: 'Multi-Pass Rendering',
        text:
          'The rendering pipeline uses separate passes and intermediate textures to calculate illumination and edge information before combining them into the final pencil-sketch image.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/pencil-sketch-shader/final-render.png',
        caption: 'Final pencil-sketch rendering',
        wide: true,
      },
      {
        type: 'video',
        src: '/img/projects/pencil-sketch-shader/demo.mp4',
        caption: 'Real-time shader demonstration',
        wide: true,
      },
    ],
    links: [],
  },
  {
    slug: 'snowstorm-simulation',
    title: 'Snowstorm Simulation',
    category: 'gamedev',
    date: '2026-01',
    featured: false,
    description:
      'A real-time snowstorm simulation featuring GPU-based particles, adaptive snow accumulation, and interactive snow coverage in a 3D scene.',
    tags: [
      'C++',
      'OpenGL',
      'GLSL',
      'GPU Programming',
      'Particle Systems',
      'Tessellation',
      'Computer Graphics',
    ],
    image: '/img/projects/snowstorm-simulation/cover.png',
    role: 'Graphics Programmer',
    team: 'Solo project',
    duration: '4 weeks',
    overview:
      'Snowstorm Simulation is a real-time computer graphics project developed for the PV227 GPU Rendering course at Faculty of Informatics, Masaryk University. It combines GPU-based particle simulation with tessellation and displacement mapping to create a dynamic snowstorm and gradually accumulating snow cover. The corrective version also introduces an interactive cloud that follows the mouse over the terrain and casts a shadow, while released snow particles continue falling independently.',
    contributions: [
      'Implemented a GPU-based snow particle system with configurable particle density and cloud size.',
      'Developed particle collision and bounce behavior using scene depth information.',
      'Implemented snow accumulation on terrain using tessellation and displacement mapping.',
      'Created a gradual snow whitening effect for scene objects.',
      'Implemented a movable snow cloud that follows the mouse position over the ground.',
      'Ensured released particles continue falling independently when the cloud moves.',
      'Implemented cloud shadows in the scene.',
    ],
    sections: [
      {
        heading: 'GPU-Based Snow Particles',
        text:
          'The snowstorm is simulated using GPU-based particles that are emitted from a cloud above the scene. Particle density and cloud size can be adjusted through the interface. Snowflakes are rendered as camera-facing textured quads and interact with scene geometry through depth-based collision detection.',
      },
      {
        heading: 'Interactive Snow Cloud',
        text:
          'In the corrective version, the cloud follows the mouse cursor across the terrain and casts a shadow onto the scene. Once particles are released, they continue their own motion rather than teleporting along with the moving cloud.',
      },
      {
        heading: 'Adaptive Snow Accumulation',
        text:
          'Particles that settle on the ground contribute to a snow accumulation texture. Tessellation and displacement mapping use this data to gradually build a snow layer with smooth transitions and a controllable maximum height.',
      },
      {
        heading: 'Snow Settling on Objects',
        text:
          'Particles landing on scene objects contribute to a separate accumulation texture. Object materials gradually blend toward white based on the accumulated snow, creating the appearance of snow settling on surfaces without changing their geometry.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/snowstorm-simulation/final-render.png',
        caption: 'Snowstorm simulation in the 3D scene',
        wide: true,
      },
      {
        type: 'video',
        src: '/img/projects/snowstorm-simulation/demo.mp4',
        caption: 'Interactive snowstorm demonstration',
        wide: true,
      },
    ],
    links: [],
  },
  {
    slug: 'computer-graphics-algorithms',
    title: 'Computer Graphics Algorithms',
    category: 'compsci',
    date: '2025-11',
    featured: false,
    description:
      'Implementation of two computer graphics algorithms: Loop subdivision for triangle mesh refinement and portal culling for visibility optimization in 3D scenes.',
    tags: [
      'C++',
      'Computer Graphics',
      'OpenGL',
      'Mesh Processing',
      'Loop Subdivision',
      'Half-Edge Data Structure',
      'Portal Culling',
      'Visibility Optimization',
    ],
    image: '/img/projects/computer-graphics-algorithms/cover.png',
    role: 'Programmer',
    team: 'Solo project',
    duration: '',
    overview:
      'Computer Graphics Algorithms is a collection of two assignments developed for the PA010 Computer Graphics course. The project explores mesh refinement and visibility optimization through two distinct techniques. Loop subdivision focuses on refining triangle meshes using geometric subdivision rules and the Half-Edge Data Structure, while portal culling determines which regions of a scene are visible from the camera to avoid unnecessary rendering.',
    contributions: [
      'Implemented Loop subdivision for triangle meshes using edge and vertex subdivision rules.',
      'Applied the Half-Edge Data Structure to navigate mesh topology and access adjacent vertices, edges, and faces.',
      'Calculated new edge vertices and repositioned existing vertices according to the Loop subdivision rules.',
      'Reconstructed refined meshes by generating new vertices and assembling subdivided triangles.',
      'Implemented portal-based visibility culling using a cell adjacency graph.',
      'Developed recursive traversal of connected cells to determine scene visibility.',
      'Implemented portal projection, view frustum culling, and rectangle intersection tests in Normalized Device Coordinates (NDC).',
    ],
    sections: [
      {
        heading: 'Loop Subdivision',
        text:
          'Implemented Loop subdivision, a surface refinement algorithm that increases triangle mesh resolution while producing smoother geometry. The implementation uses separate edge and vertex rules to calculate the positions of new and existing vertices. The Half-Edge Data Structure provides efficient access to mesh connectivity, allowing the algorithm to navigate neighboring vertices, edges, and faces.',
      },
      {
        heading: 'Half-Edge Data Structure',
        text:
          'Used an oriented Half-Edge Data Structure to represent manifold mesh topology and simplify adjacency queries. Each half-edge stores references to its starting vertex, opposite twin edge, successor edge, and adjacent face. This representation enables efficient traversal of mesh elements and supports the implementation of mesh modification algorithms.',
      },
      {
        heading: 'Mesh Reconstruction',
        text:
          'Implemented the construction of the subdivided mesh by collecting vertices generated through the edge and vertex rules. The algorithm traverses the original triangle faces, retrieves their vertices, and assembles the resulting smaller triangles using the newly generated mesh elements.',
      },
      {
        heading: 'Portal-Based Visibility Culling',
        text:
          'Implemented portal culling to optimize rendering in scenes divided into logical cells connected through polygonal portals. Using a precomputed cell adjacency graph, the algorithm recursively traverses connected cells and determines which regions may be visible from the camera. Only visible cells are rendered, reducing unnecessary rendering of occluded parts of the scene.',
      },
      {
        heading: 'Portal Projection and Intersection',
        text:
          'Implemented portal projection by transforming portal vertices into clip space and Normalized Device Coordinates (NDC). Projected portals are approximated using axis-aligned bounding rectangles, which are intersected with the currently visible screen region to determine whether traversal into adjacent cells is necessary.',
      },
      {
        heading: 'View Frustum Culling',
        text:
          'Implemented view frustum culling to discard portals located entirely outside the camera viewing volume. The algorithm evaluates portal vertices against the six clipping planes in clip space and rejects portals when all four vertices lie beyond the same frustum plane.',
      },
    ],
    media: [
      {
        type: 'loop',
        src: '/img/projects/computer-graphics-algorithms/loop-subdivision-demo.mp4',
        caption: 'Loop subdivision demonstration',
      },
      {
        type: 'loop',
        src: '/img/projects/computer-graphics-algorithms/portal-culling-demo.mp4',
        caption: 'Portal culling demonstration',
      },
    ],
    links: [],
  },

  {
    slug: '3d-modeling-materials',
    title: '3D Modeling & Materials',
    category: 'gamedev',
    date: '2025-11',
    featured: false,
    description:
      'A collection of 3D modeling and material creation exercises exploring geometric composition, polygonal modeling, retopology, UV mapping, and physically based materials using Blender.',
    tags: [
      'Blender',
      '3D Modeling',
      'Polygonal Modeling',
      'Retopology',
      'UV Mapping',
      'Texturing',
      'Materials',
      'Lighting',
      'Subdivision Surface',
    ],
    image: '/img/projects/3d-modeling-materials/cover.jpg',
    role: '3D Artist',
    team: 'Solo project',
    duration: 'Throughout the semester',
    overview:
      'A collection of practical 3D modeling assignments developed for the VV035 3D Modeling course at Faculty of Informatics, Masaryk University. The project covers several aspects of 3D asset creation, from experimenting with geometric compositions and modeling objects based on photographic references to optimizing mesh topology and creating textured materials. Each assignment explores a different modeling or material workflow using Blender.',
    contributions: [
      'Created a Rubik’s Cube-inspired geometric composition, experimenting with object placement, materials, lighting, and shadows.',
      'Modeled a chair and a hair dryer using polygonal modeling techniques and photographic references.',
      'Used subdivision surfaces, supporting geometry, and edge creases to control object shapes and preserve details.',
      'Performed manual retopology of a high-poly telephone handset, improving mesh topology and reducing unnecessary geometry while preserving the original shape.',
      'Created UV maps and applied color, normal, and roughness textures to 3D objects.',
      'Created and configured various materials, including glass, metallic, emissive, plastic, and subsurface scattering materials.',
    ],
    sections: [
      {
        heading: '3D Composition',
        text:
          'Created a Rubik’s Cube-inspired geometric composition inside a constrained cube-shaped scene. Experimented with the spatial arrangement of basic geometric objects, different materials, lighting configurations, and shadows to explore how these elements influence the overall composition. Created multiple rendered variations using different geometries, colors, and lighting setups.',
      },
      {
        heading: 'Polygonal Modeling',
        text:
          'Created two household object models using polygonal modeling techniques. Modeled a chair based on provided photographic references and a hair dryer based on self-created reference images. Focused on accurately reproducing object shapes and details, using subdivision surfaces, supporting geometry, and edge creases to achieve smooth surfaces while maintaining sharper edges where necessary.',
      },
      {
        heading: 'Retopology',
        text:
          'Performed manual retopology of a provided high-poly telephone handset model, reorganizing its mesh to create cleaner and more efficient geometry. Focused on reducing unnecessary vertices and faces, improving edge flow, and maintaining the original shape and important details. Used a Subdivision Surface modifier to achieve a smooth final surface while keeping the underlying mesh editable.',
      },
      {
        heading: 'Texturing & Materials',
        text:
          'Worked with a collection of household and decorative objects to explore material creation, texture mapping, and UV unwrapping. Applied different material properties and textures to objects such as a Rubik’s Cube, Christmas tree, gemstone, books, teddy bear, and piggy bank. Created UV maps for objects requiring image-based textures and experimented with color, normal, and roughness maps, as well as glass, metallic, emissive, and subsurface scattering materials.',
      },
    ],
    media: [
      // 3D Composition
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/composition-01.jpg',
        caption: 'Rubik’s Cube-inspired geometric composition',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/composition-02.jpg',
        caption: 'Geometric arrangement and lighting variation',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/composition-03.jpg',
        caption: 'Alternative composition with experimental materials',
      },

      // Polygonal Modeling
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/chair-references.png',
        caption: 'Chair model and photographic references arranged in Blender',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/chair-final.png',
        caption: 'Final chair model render',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/hairdryer-references.png',
        caption: 'Hair dryer model and reference images arranged in Blender',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/hairdryer-final-01.png',
        caption: 'Final hair dryer render - front view',
      },
      {
        type: 'loop',
        src: '/img/projects/3d-modeling-materials/hairdryer-final.mkv',
        caption: 'Final hair dryer - turntable',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/hairdryer-final-03.png',
        caption: 'Final hair dryer render - side view',
      },

      // Retopology
      {
        type: 'loop',
        src: '/img/projects/3d-modeling-materials/retopology-demo.mp4',
        caption: 'Original high-poly model and retopologized mesh',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/final-render.png',
        caption: 'Final telephone handset model',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/retopology-render.png',
        caption: 'Final telephone handset model - details',
      },

      // Texturing & Materials
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/materials-overview.png',
        caption: 'Collection of objects with different materials',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/texturing-examples.png',
        caption: 'UV mapping and texture application',
      },
      {
        type: 'image',
        src: '/img/projects/3d-modeling-materials/diamond-material.png',
        caption: 'Diamond material',
      },
    ],
    links: [],
  },

  {
    slug: 'robot-design',
    title: 'Robat',
    category: 'gamedev',
    date: '2025-12',
    featured: false,
    description:
      'A hard-surface sci-fi character modeling project exploring biomechanical design, transforming organic bat anatomy into a robotic reconnaissance drone.',
    tags: [
      'Blender',
      '3D Modeling',
      'Character Design',
      'Hard Surface Modeling',
      'Materials',
      'Texturing',
      'Lighting',
      'Rendering',
      'Concept Art'
    ],
    image: '/img/projects/robot-design/cover.png',
    role: '3D Artist & Concept Designer',
    team: 'Solo project',
    overview:
      'Robat is an autonomous, stealth-reconnaissance bio-drone concept designed in Blender. The project bridges the gap between natural chiropteran anatomy and sleek industrial robotics, contrasting smooth black metallic chassis plating with high-emission neon red energy membranes and exposed hydraulic line-work.',
    contributions: [
      'Researched real-world bat skeletal structures and comparative sci-fi mecha designs (Horizon Zero Dawn, Transformers).',
      'Created 2D ideation sketches detailing mechanical joints, segmented wing digits, and head silhouettes.',
      'Modeled hard-surface geometry in Blender with a focus on functional mechanical joints (digitigrade legs, multi-segmented wings, neck collar).',
      'Engineered procedural materials and emission shaders, featuring a wavy grid-pattern membrane for the holographic wings and glowing internal conduits.',
      'Set up studio rim lighting and high-contrast ambient setups to accentuate silhouette readability against dark backdrops.'
    ],
    sections: [
      {
        heading: 'Concept & Anatomical Research',
        text:
          'The design process began with an analysis of natural bat anatomy—specifically arm bone proportions, finger phalanges supporting flight membranes, and digitigrade leg structures. These organic curves were translated into rigid, functional mechanical plates and articulated ball-and-socket joints through traditional sketchbook ideation.'
      },
      {
        heading: 'Hard-Surface Modeling',
        text:
          'Using Blender, the organic forms were modeled into sleek, polished paneling. Special attention was paid to the wing armature, segmenting individual digit struts to look capable of folding and articulating, while exposed cabling and knee/ankle pivot joints ground the creature in mechanical believability.'
      },
      {
        heading: 'Shading & Emission Design',
        text:
          'To establish a menacing sci-fi aesthetic, a dual-tone palette was chosen: deep, semi-reflective black enamel for the exoskeleton contrasted with vibrant crimson emission lines. The wings utilize a customized linear wave/frequency pattern shader, giving the impression of an acoustic or holographic flight membrane.'
      }
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/robot-design/sketches_wings.png',
        caption: 'Initial mechanical joint studies and wing hinge diagrams',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/robot-design/initial_sketch.jpg',
        caption: 'Initial idea and first sketch'
      },
      {
        type: 'image',
        src: '/img/projects/robot-design/head.jpg',
        caption: 'Sketches for the head and ears'
      },

      {
        type: 'image',
        src: '/img/projects/robot-design/legs.jpg',
        caption: 'Early silhouette explorations for the legs and leg joints'
      },
      {
        type: 'image',
        src: '/img/projects/robot-design/wireframe.png',
        caption: 'Topology of the model',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/robot-design/render_front.png',
        caption: 'Front render',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/robot-design/render_perspective.png',
        caption: 'Three-quarter perspective render showcasing torso'
      },
      {
        type: 'image',
        src: '/img/projects/robot-design/render_back.png',
        caption: 'Rear view detailing the ports, hip joints, and spine glow'
      },
      {
        type: 'image',
        src: '/img/projects/robot-design/render_legs_detail.png',
        caption: 'Close-up on leg hydraulics, heel spurs, and cable routing'
      }
    ],
    links: [
      {
        label: 'ArtStation',
        href: 'https://www.artstation.com/artwork/xddWDW'
      }
    ],
  },
  {
    slug: '3d-animation',
    title: 'Whiskers & Witchcraft',
    category: 'gamedev',
    date: '2026-01',
    featured: false,
    description:
      'A cinematic 3D animated short scene featuring a mystical exterior transition into a magical witch hut with an animated grey cat witch and floating enchanted potions.',
    tags: [
      'Blender',
      '3D Animation',
      'Keyframe Animation',
      'Storytelling',
      'Camera Animation',
      '3D Modeling',
      'Scene Assembly',
      'Lighting',
      'Rendering',
      'Environment Design'
    ],
    image: '/img/projects/3d-animation/cover.png',
    role: '3D Artist & Animator',
    team: 'Solo project',
    duration: '2 weeks',
    overview:
      'Whiskers & Witchcraft is a short cinematic sequence created in Blender focusing on atmospheric storytelling and camera choreography. The camera glides from a quiet, firefly-lit forest exterior through a weathered wooden door to reveal the cozy, enchanted lair of a witch cat\'s levitating glowing potions.',
    contributions: [
      'Modeled and rigged the stylized witch cat character, complete with a pointed wizard hat and expressive facial animation.',
      'Modeled key environmental and prop assets including the rustic wooden doorway, potion flasks, candles, and parchment prints.',
      'Integrated and adapted third-party assets (table, picture frames, foliage, lantern) into a cohesive stylized visual look.',
      'Choreographed smooth, continuous camera motion establishing tension and spatial continuity from exterior to interior.',
      'Animated floating potion bottles using floating offset keyframes to simulate magical telekinesis.',
      'Designed contrasting lighting setups: cool forest tones and lantern glow outside, shifting to warm candlelight and glowing potion emissives inside.'
    ],
    sections: [
      {
        heading: 'Scene Composition & Storytelling',
        text:
          'The goal was to build suspense and curiosity through camera pacing. Starting with a wide shot of a mossy stone hut flanked by glowing will-o\'-the-wisps, the camera slowly creeps up to the ajar wooden door before peering inside, shifting the mood from quiet forest mystery to warm, alchemical magic.'
      },
      {
        heading: 'Character & Prop Animation',
        text:
          'The centerpiece of the interior is the cat and its telekinetic spells. The cat was keyframed with subtle idle motion and lively facial expressions, while the levitating potion flasks were animated along floating paths to sell the illusion of magical control.'
      },
      {
        heading: 'Lighting, Shading & Asset Integration',
        text:
          'The scene combines original modeling with selected ready-made props (table, frames, lantern, and bushes). Shaders and lighting were customized across all elements to achieve visual harmony—balancing the cold green lantern glow outside with warm, reflective candlelight and swirling volumetric potion emissions inside.'
      }
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/3d-animation/render_cat_closeup.png',
        caption: 'Close-up of the cat showing facial expression and glowing potion reflections',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/3d-animation/render_exterior_door.png',
        caption: 'Exterior approach showing the rustic wooden door, hanging lantern, and fireflies'
      },
      {
        type: 'image',
        src: '/img/projects/3d-animation/render_potions_table.png',
        caption: 'Detail shot of the levitating potions, fantasy map frame, and ornate candleholders'
      },
      {
        type: 'image',
        src: '/img/projects/3d-animation/render_wide_interior.png',
        caption: 'Interior scene composition balancing candlelight with potion emissive shaders'
      },
      {
        type: 'video',
        src: '/img/projects/3d-animation/animation.mp4',
        caption: 'Full animation',
        wide: true,

      }
    ],
    links: [
      {
        label: 'Victorian End Table (TurboSquid)',
        href: 'https://www.turbosquid.com/3d-models/end-table-victorian-style-1385161'
      },
      {
        label: 'Picture Frames (TurboSquid)',
        href: 'https://www.turbosquid.com/3d-models/3d-picture-frames-pbr-game-ready-2305090'
      },
      {
        label: 'Small Bush (Free3D)',
        href: 'https://free3d.com/3d-model/small-bush-76246.html'
      },
      {
        label: 'Old Lantern (Free3D)',
        href: 'https://free3d.com/3d-model/old-lantern-462153.html'
      },
      {
        label: 'ArtStation',
        href: 'https://www.artstation.com/artwork/9BBvBq'
      }
    ]
  },
  {
    slug: 'rezon',
    title: 'Rezon',
    category: 'gamedev',
    date: '2025-11',
    featured: false,
    description:
      'A classic 2.5D arcade shoot \'em up (SHMUP) built in Unity featuring cross-platform PC and Android support, an upgrade hangar economy, and a multi-phase AI boss.',
    tags: [
      'Unity',
      'C#',
      'Game Development',
      '3D Modeling',
      'Blender',
      'AI Steering Behaviors',
      'Finite State Machine',
      'Cross-Platform',
      'Android',
      'UI Design',
      'VFX'
    ],
    image: '/img/projects/rezon/cover.png',
    role: 'Gameplay Programmer & Technical Designer',
    team: 'Solo project',
    duration: '9 weeks',
    overview:
      'Rezon is an arcade-style 2.5D space shooter developed over an iterative 9-week production cycle for the "Game Development I" course at FI MU. Built on a top-down XZ-plane perspective, the game combines custom-authored 3D player craft and enemy models with responsive bullet-hell mechanics, persistent cross-level scoring, an upgrade hangar shop, and a multi-phase AI boss built with state machines and seek steering behaviors.',
    contributions: [
      'Iterated from basic capsule prototypes to a full multi-level game loop across a 9-week recorded devlog (~60+ hours of development).',
      'Modeled, textured, and rigged the custom player spaceship in Blender using layered PBR materials (Metal & Cockpit Glass), along with custom enemy vessels and projectiles.',
      'Engineered an AI Boss encounter utilizing Finite State Machines (FSM) and Seek steering behaviors across three combat modes: Long-Range, Short-Range cooldown, and a multi-directional Power-Shot.',
      'Architected a persistent in-game economy (credits & score) feeding into a pre-level Upgrade Shop for hull upgrades, dual guns, and fire rate.',
      'Implemented multi-tier enemy behaviors (randomized meteor fields, Space Invaders zig-zag cruisers, screen-bouncers, and tracking snipers).',
      'Built responsive UI layouts supporting fullHD/4K scaling, complete with Main Menu, Level Select, Pause overlay, Options, and dynamic in-game HUDs.',
      'Ported and optimized the game for Android with dedicated touch-drag input controls and boundary clamping alongside the standard Windows build.',
      'Integrated developer tools and debug cheats including Immortality (I key) and Unlimited Credits for balance testing.'
    ],
    sections: [
      {
        heading: 'Iterative Development & Game Loop',
        text:
          'Development followed a weekly milestone structure. Early iterations focused on kinematic player movement and factory-based meteor spawners. By Week 03, an integer-based health/damage matrix and layer-based collision system were established, supported by non-rotating HUD health bars and persistent currency tracking across scenes.'
      },
      {
        heading: 'Custom Modeling & Visual Upgrades',
        text:
          'To transition away from placeholder cubes, a custom player spaceship was modeled in Blender and textured with multi-layered PBR materials (chassis metal, pipes, and reflective cockpit glass). Custom models were also authored for enemy ships and projectiles, complemented by particle systems for engine thruster plumes and comet trails on asteroid hazards.'
      },
      {
        heading: 'Boss AI Architecture & The Upgrade Economy',
        text:
          'The final level culminates in a mothership boss fight requiring over 6 hours of AI development. Driven by a Finite State Machine combined with Seek steering behaviors, the boss repositions across the arena, transitioning between sustained long-range fire, defensive short-range cooldowns, and radial power-shot barrages. To overcome the encounter, players utilize a custom Hangar Shop to purchase weapon and armor upgrades using earned credits.'
      },
      {
        heading: 'Cross-Platform Deployment & Testing',
        text:
          'A fully functional Windows build was complemented by an Android mobile build. Mobile adaptation required rewriting controls for touch-screen input, adjusting UI anchors for variable mobile aspect ratios, and ensuring a consistent 60+ FPS performance profile.'
      }
    ],
    media: [
      {
        type: 'video',
        src: '/img/projects/rezon/gameplay_windows.mp4',
        caption: 'PC (Windows) gameplay showcase: full stage progression, upgrade shop usage, and AI boss battle',
        wide: true,
      },
      {
        type: 'video',
        src: '/img/projects/rezon/gameplay_android.mp4',
        caption: 'Android mobile gameplay showcase: touch-drag controls and mobile UI',
        wide: true
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week09_01.png',
        caption: 'The Upgrade Shop: Purchasing ship improvements and weapons with persistent credits'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week08.png',
        caption: 'Boss encounter: Final stage showdown utilizing Seek steering behaviors and projectile rings'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week09_02.png',
        caption: 'Mobile Android build: Touch-drag gameplay controls with responsive UI scaling'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week05_01.png',
        caption: 'Main Menu scene featuring Start, Options, Credits, and Exit navigation'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week05_02.png',
        caption: 'Level Select menu allowing direct access to all unlocked stages'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week04.png',
        caption: 'Visual polish milestone: Replacing placeholder primitives with custom 3D models and thruster particle VFX'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week03.jpg',
        caption: 'Health & Combat milestone: Collision detection, HUD health bars, and scoring logic'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week02.jpg',
        caption: 'Enemy iteration: Space Invaders-style zig-zag movement and firing routines'
      },
      {
        type: 'image',
        src: '/img/projects/rezon/week01.jpg',
        caption: 'Initial Week 01 prototype: Basic capsule movement and procedural meteor generation'
      }
    ],
    links: [
      {
        label: 'Boss Model Asset (Sketchfab)',
        href: 'https://sketchfab.com/3d-models/x-space-flyer-chasing-dragons-triangle-739d150c083640648d8ad6a7d2898ca2'
      },
      {
        label: 'itch.io',
        href: 'https://azrapamuk.itch.io/rezon'
      },
    ]
  },
  {
    slug: 'intangible-prototype',
    title: 'Intangible - Prototype',
    category: 'gamedev',
    date: '2026-01',
    featured: false,
    description:
      'A first-person puzzle-platformer adventure in which players use a phasing ability to escape a high-security research facility.',
    tags: [
      'Unity',
      'C#',
      'Game Development',
      'Puzzle Design',
      'First-Person',
      'Gameplay Programming',
      'Level Design',
      'Team Project',
    ],
    image: '/img/projects/intangible-prototype/cover.png',
    role: 'Game Developer & 3D Artist',
    team: '3 people',
    duration: '2 months',
    overview:
      'Intangible is a first-person puzzle-action prototype set in a high-security research facility. Players take on the role of Norah, also known as Subject 27, who has the ability to phase through certain solid surfaces. Using this power, they must navigate complex rooms, bypass security systems, and solve environmental puzzles to escape captivity.',
    contributions: [
      'Handled texturing and prop placement throughout the entire prototype.',
      'Created the introductory and outro sequences, framing the beginning and ending of the gameplay experience.',
      'Contributed to the design and implementation of selected gameplay mechanics.',
      'Participated in level design, playtesting, and gameplay refinement.',
      'Helped improve environmental presentation and visual readability through material choices and prop placement.',
    ],
    sections: [
      {
        heading: 'Environment Art & Texturing',
        text:
          'Worked on texturing the prototype environment and adding props throughout the research facility. Material choices helped establish the sci-fi setting while visually distinguishing phaseable and unphaseable surfaces.',
      },
      {
        heading: 'Level Design',
        text:
          'Contributed to designing the research facility levels, arranging spaces and environmental elements to support exploration, navigation, and phasing-based puzzles.',
      },
      {
        heading: 'Gameplay Mechanics',
        text:
          'Participated in developing and refining selected gameplay mechanics, helping integrate them into the prototype and ensuring they supported the intended player experience.',
      },
      {
        heading: 'Playtesting & Refinement',
        text:
          'Tested the prototype throughout development and contributed feedback to improve gameplay flow, puzzle readability, and the overall player experience.',
      },
      {
        heading: 'Intro & Outro Sequences',
        text:
          'Created the introductory and outro sequences for the prototype, establishing the opening and closing moments of the player’s experience and providing context for the gameplay.',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/img/projects/intangible-prototype/gameplay.mp4',
        caption: 'Intangible gameplay prototype',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/intangible-prototype/level-overview.jpg',
        caption: 'Research facility level layout',
      },
      {
        type: 'loop',
        src: '/img/projects/intangible-prototype/phasing.mp4',
        caption: 'Phasing mechanic in action',
      },
      {
        type: 'loop',
        src: '/img/projects/intangible-prototype/puzzle.mp4',
        caption: 'Environmental puzzle prototype',
      },
    ],
    links: [],
  },
  {
    slug: 'advanced-computer-graphics',
    title: 'ACG - Fluid Rendering & Path Tracing',
    category: 'compsci',
    date: '2026-04',
    featured: true,
    featuredOrder: 2,
    description:
      'A collection of shader programming assignments focused on fluid surface rendering and physically based path tracing techniques.',
    tags: [
      'C++',
      'GLSL',
      'OpenGL',
      'Fragment Shaders',
      'Fluid Rendering',
      'Path Tracing',
      'Monte Carlo Sampling',
      'Physically Based Rendering',
      'Blinn-Phong',
      'Smith GGX',
    ],
    image: '/img/projects/advanced-computer-graphics/cover.png',
    role: 'Graphics Programmer',
    team: 'Solo project',
    duration: 'March - April 2026',
    overview:
      'This project combines two Advanced Computer Graphics assignments exploring different approaches to realistic computer graphics. The first focuses on screen-space fluid rendering through depth processing, surface reconstruction, and lighting. The second explores physically based rendering through Monte Carlo path tracing, implementing diffuse and specular reflection models using GLSL fragment shaders.',
    contributions: [
      'Implemented fluid rendering techniques using GLSL fragment shaders.',
      'Developed depth smoothing using a bilateral filter and reconstructed fluid surface normals.',
      'Implemented Blinn-Phong lighting in camera space.',
      'Implemented Monte Carlo sampling techniques for diffuse and specular reflection.',
      'Developed physically based shading components, including Fresnel-Schlick and Smith GGX.',
      'Combined diffuse and specular reflection models into a unified shading implementation.',
    ],
    sections: [
      {
        heading: 'Fluid Rendering',
        text:
          'Implemented a screen-space fluid rendering pipeline using fragment shaders. The implementation includes rendering particles as spheres, smoothing the depth buffer with a bilateral filter, reconstructing fluid surface normals, and applying Blinn-Phong lighting to produce a continuous fluid appearance.',
      },
      {
        heading: 'Path Tracing',
        text:
          'Implemented components of a Monte Carlo path tracing renderer, covering uniform and cosine-weighted Lambertian sampling, diffuse reflection with albedo, and microfacet-based specular reflection. The implementation also includes Fresnel-Schlick approximation, Smith GGX masking-shadowing, and combined diffuse-specular evaluation.',
      },
    ],
    media: [
      {
        type: 'video',
        src: '/img/projects/advanced-computer-graphics/fluid-rendering.mp4',
        caption: 'Fluid rendering - particle-based surface reconstruction and lighting',
        wide: true,
      },
      {
        type: 'video',
        src: '/img/projects/advanced-computer-graphics/path-tracing.mp4',
        caption: 'Path tracing - diffuse, rough and mirror material demonstrations',
        wide: true,
      },
    ],
    links: [],
  },
  {
    slug: 'game-ai',
    title: 'Game AI - Steering, Pathfinding & Decision Making',
    category: 'gamedev',
    date: '2026-05',
    featured: false,
    description:
      'A collection of Unity AI implementations exploring steering behaviors, A* pathfinding, and behavior tree-based decision making.',
    tags: [
      'Unity',
      'C#',
      'Game AI',
      'Artificial Intelligence',
      'Steering Behaviors',
      'Flocking',
      'A* Pathfinding',
      'Behavior Trees',
      'Decision Making',
      'Blackboard System',
    ],
    image: '/img/projects/game-ai/cover.png',
    role: 'Game AI Programmer',
    team: 'Solo project',
    duration: 'March - May 2026',
    overview:
      'This project explores fundamental artificial intelligence techniques used in computer games through three practical Unity assignments. It covers autonomous agent movement, obstacle avoidance, flocking, graph-based pathfinding, and decision-making systems. The implementations demonstrate how different AI techniques can be combined to create agents capable of navigating environments, reacting to their surroundings, and making goal-oriented decisions.',
    contributions: [
      'Implemented kinematic and steering-based movement behaviors.',
      'Developed Arrival, Obstacle Avoidance, and Flocking algorithms.',
      'Implemented the A* pathfinding algorithm with configurable heuristics.',
      'Created step-by-step pathfinding visualization and smooth agent movement.',
      'Developed a Behavior Tree system with Selector, Sequence, Action, Condition, and Decorator nodes.',
      'Implemented a Blackboard system for sharing information between AI components.',
      'Designed three distinct AI agent behaviors using manually assembled Behavior Trees.',
    ],
    sections: [
      {
        heading: 'Steering Behaviors',
        text:
          'Implemented three autonomous movement behaviors: Arrival, Obstacle Avoidance, and Flocking. The Arrival behavior allows an agent to approach a target while gradually reducing its speed. Obstacle Avoidance uses acceleration-based steering to navigate around obstacles, while Flocking combines Separation, Alignment, and Cohesion to simulate coordinated group movement.',
      },
      {
        heading: 'A* Pathfinding',
        text:
          'Implemented the A* search algorithm for navigation through tile-based labyrinths. The system supports Euclidean and Null heuristics, eight-directional movement, and restrictions on diagonal traversal. The search process is visualized through color-coded Open Set and Closed Set nodes, followed by the resulting shortest path. Agents smoothly follow the computed route and recalculate it when the destination changes.',
      },
      {
        heading: 'Decision Making & Behavior Trees',
        text:
          'Developed a modular Behavior Tree system with Selector, Sequence, Action, Condition, and Decorator nodes, supported by a Blackboard for shared data. Designed three distinct AI agents with manually assembled behavior trees, each following a different strategy for collecting items and competing for points.',
        subsections: [
          {
            heading: 'Django - Strategic Collector',
            text:
              'Prioritizes permanent movement speed upgrades during the opening 20 seconds, even when point collectibles are closer. Dynamically validates targets and switches objectives if a collectible disappears, pursuing long-term efficiency.',
          },
          {
            heading: 'Tango - Defensive Disruptor',
            text:
              'Focuses on nearby point collectibles but shifts to board-reset collectibles when the human player takes a significant lead. Reacts to changes in collectible availability and re-evaluates its target when the board is reset.',
          },
          {
            heading: 'Mango - Greedy Gatherer',
            text:
              'Prioritizes the nearest point collectible using shortest-path navigation, while opportunistically collecting nearby speed upgrades. Avoids pursuing collectibles that have already been collected and continuously validates its current target.',
          },
        ],
      },
    ],
    media: [
      {
        type: 'loop',
        src: '/img/projects/game-ai/arrival.mp4',
        caption: 'Steering behavior - Arrival',
      },
      {
        type: 'loop',
        src: '/img/projects/game-ai/obstacle.mp4',
        caption: 'Steering behaviors - Obstacle Avoidance',
      },
      {
        type: 'loop',
        src: '/img/projects/game-ai/flocking.mp4',
        caption: 'Steering behaviors - Flocking',
      },
      {
        type: 'loop',
        src: '/img/projects/game-ai/a-star-pathfinding.mp4',
        caption: 'A* pathfinding - search visualization and agent navigation',
      },
      {
        type: 'video',
        src: '/img/projects/game-ai/decision-making.mp4',
        caption: 'Decision making - three AI agents controlled by Behavior Trees',
      },
    ],
    links: [],
  },
  {
    slug: 'vaelyra',
    title: 'Vaelyra',
    category: 'gamedev',
    date: '2026-04',
    featured: true,
    featuredOrder: 3,
    description: 'A stylized 3D character head created through sculpting, retopology, hair grooming, texturing, and facial animation.',
    tags: [
      'Blender',
      'Substance 3D Painter',
      '3D Character Modeling',
      'Sculpting',
      'Retopology',
      'Hair Grooming',
      'Texturing',
      'Facial Animation',
    ],
    image: '/img/projects/vaelyra/cover.png',
    role: '3D Character Artist',
    team: 'Solo project',
    duration: '4 weeks',
    overview: 'Vaelyra is an elven outcast who rejected a quiet, controlled life in pursuit of freedom. She joined a pirate crew and eventually rose to captain through her intelligence and leadership. Driven by a fascination with gold, jewels, and rare treasures, her character design combines elven features with a bold, adventurous personality.',
    contributions: [
      'Created the initial character sketch and sculpted the head from scratch.',
      'Performed retopology to rebuild the mesh after using Dyntopo during sculpting.',
      'Created stylized hair using curves.',
      'Designed and modeled facial accessories, including eyelashes, nose piercings, and earrings.',
      'Textured the character’s hair, skin, lips, and other facial details.',
      'Created a facial animation featuring three distinct expressions.',
    ],
    sections: [
      {
        heading: 'Concept & Sculpting',
        text: 'Developed Vaelyra’s visual identity from an initial sketch and sculpted the character head from scratch, shaping her elven features and distinctive appearance.',
      },
      {
        heading: 'Retopology',
        text: 'Rebuilt the head topology after sculpting with Dyntopo, creating a cleaner mesh suitable for further character work and animation.',
      },
      {
        heading: 'Hair & Character Details',
        text: 'Created stylized hair using curves and added details such as eyelashes, nose piercings, and earrings to reinforce the character’s personality and design.',
      },
      {
        heading: 'Texturing & Facial Animation',
        text: 'Created and applied character textures in Substance 3D Painter, including materials for the hair, skin, lips, and other facial details. Created an animation showcasing three distinct facial expressions.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/vaelyra/concept-sketch.png',
        caption: 'Initial character sketch',
      },

      {
        type: 'image',
        src: '/img/projects/vaelyra/render.png',
        caption: 'Final render of the character head',
      },
      {
        type: 'image',
        src: '/img/projects/vaelyra/retopology.png',
        caption: 'Retopology of the sculpted head',
      },
      {
        type: 'image',
        src: '/img/projects/vaelyra/final-head.png',
        caption: 'Final stylized character head',
        wide: true
      },
      {
        type: 'loop',
        src: '/img/projects/vaelyra/expressions.mkv',
        caption: 'Facial animation showcasing three expressions',
        wide: true,
      },
    ],
    links: [
      {
        label: 'ArtStation',
        href: 'https://www.artstation.com/artwork/q0oAO2',
      }
    ],
  },
  {
    slug: 'the-moth',
    title: 'Guided by the Wrong Light (The Moth)',
    category: 'gamedev',
    date: '2026-07',
    featured: true,
    featuredOrder: 6,
    description: 'A post-human character design exploring the loss of identity through technological dependence.',
    tags: [
      'Blender',
      'Character Design',
      '3D Character Modeling',
      'Sculpting',
      'Digital Sculpting',
      'Visual Storytelling',
      'Concept Art',
    ],
    image: '/img/projects/the-moth/final-render-back.png',
    role: 'Character Artist',
    team: 'Solo project',
    duration: '4 weeks',
    overview: 'The Moth is a post-human humanoid whose identity has gradually disappeared, leaving only the instinct to follow artificial signals. Once human, the figure has become an unnaturally thin, almost unreal version of itself. Nameless and stripped of individuality, memory, and purpose, it embodies the consequences of dependence on technology. An augmented glowing eye and robotic arm emphasize the fusion of human and machine, while its attraction to a television screen reflects its search for meaning in a digital world that is also consuming its remaining humanity.',
    contributions: [
      'Developed the character concept, initial sketch, and color palette.',
      'Used an online base mesh as a starting point and extensively resculpted the full character.',
      'Designed the character’s post-human proportions and silhouette.',
      'Created the final scene using freely available assets.',
    ],
    sections: [
      {
        heading: 'Concept & Visual Development',
        text: 'Developed the character concept around technological dependence and the gradual loss of identity. Created an initial sketch and color palette to establish the character’s silhouette, mood, and visual direction.',
      },
      {
        heading: 'Character Sculpting',
        text: 'Started from an online base mesh and extensively resculpted the entire body to achieve the character’s unnaturally thin, post-human appearance and distinctive proportions.',
      },
      {
        heading: 'Scene & Visual Storytelling',
        text: 'Placed the character in a scene assembled from free assets, using the television’s artificial light to reinforce the theme of a figure drawn toward the technology that is erasing its humanity.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/the-moth/concept-sketch.png',
        caption: 'Initial character concept sketch',
      },
      {
        type: 'image',
        src: '/img/projects/the-moth/final-render-back.png',
        caption: 'Final character and scene - back',
      },
      {
        type: 'image',
        src: '/img/projects/the-moth/final-render-front.png',
        caption: 'Final character and scene - front',
      },
      {
        type: 'image',
        src: '/img/projects/the-moth/final-render-side.png',
        caption: 'Final character and scene - side',
        wide: true,
      },

    ],
    links: [
      {
        label: 'ArtStation',
        href: 'https://www.artstation.com/artwork/LaZ28r',
      }],
  },
  {
    slug: 'memory-lane',
    title: 'Memory Lane - Digital Scrapbook',
    category: 'compsci',
    date: '2026-05',
    featured: false,
    description: 'An all-in-one digital scrapbook designed for capturing, organizing, and revisiting personal memories through multimedia entries, interactive maps, and timelines.',
    tags: [
      'Figma',
      'UI/UX Design',
      'User Research',
      'User Personas',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'SUS',
      'SEQ',
      'Interaction Design',
    ],
    image: '/img/projects/memory-lane/cover.png',
    role: 'Lead UI/UX Designer',
    team: 'Team of 4',
    duration: 'March - May 2026',
    overview: 'Memory Lane is a digital scrapbook designed as a personal space for preserving and revisiting life experiences. Users can create rich memory entries containing photos, videos, voice notes, and location data, organize their experiences through interactive maps and chronological timelines, and create time-locked messages for their future selves. The project focused on creating a cohesive and intuitive experience that encourages personal storytelling and reflection.',
    contributions: [
      'Designed the overall application color palette and established its visual direction.',
      'Designed the complete Time Capsule feature and its user flow.',
      'Designed account settings and user authentication screens, including login.',
      'Designed memory discovery and search features, including timeline and calendar-based views.',
      'Designed the map-based memory exploration and search experience.',
      'Connected and organized the screens in Figma, building the interactive prototype and ensuring consistent navigation across the application.',
      'Participated in usability testing and analyzed results using SEQ and SUS questionnaires.',
      'Refined the interface and user flows based on usability testing feedback.',
    ],
    sections: [
      {
        heading: 'User Research & Analysis',
        text: 'Conducted user research and analyzed the collected findings to better understand users’ needs and expectations. Developed user personas, tasks, and scenarios to establish the foundation for the application’s design.',
      },
      {
        heading: 'Low-Fidelity Prototyping',
        text: 'Explored the application’s structure and navigation through initial sketches and low-fidelity wireframes. Translated these early concepts into digital wireframes using Figma.',
      },
      {
        heading: 'High-Fidelity Prototyping',
        text: 'Developed a high-fidelity Figma prototype, refining the interface, visual language, and user flows to create a cohesive experience across the application’s main features.',
      },
      {
        heading: 'Usability Testing & Evaluation',
        text: 'Evaluated the prototype through user testing based on predefined use cases. Collected participant feedback and analyzed task difficulty using the Single Ease Question (SEQ), alongside overall perceived usability measured through the System Usability Scale (SUS).',
      },
      {
        heading: 'Final Design Iteration',
        text: 'Refined the prototype based on usability testing findings and participant feedback. The final presentation summarized the completed design, implemented improvements, and the overall development process.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/memory-lane/persona.png',
        caption: 'Example of a primary persona after conducting a user research',
      },
      {
        type: 'image',
        src: '/img/projects/memory-lane/low-fi.png',
        caption: 'Low-fidelity sketches and wireframes',
      },
      {
        type: 'image',
        src: '/img/projects/memory-lane/visual-style.png',
        caption: 'Visual Style',
      },
      {
        type: 'image',
        src: '/img/projects/memory-lane/high-fi.png',
        caption: 'High-fidelity Figma prototype',
        wide: true
      },
    ],
    links: [
      {
        label: 'Figma prototype',
        href: 'https://www.figma.com/proto/vPJzYxUTKoAixbO6Pquxqx/HCI-Team-Assignment---Memory-Lane?node-id=1064-2190&t=fg4RHaYumjQC2tsL-1&starting-point-node-id=1064%3A2190'
      }
    ],
  },
  {
    slug: 'intangible',
    title: 'Intangible',
    category: 'gamedev',
    date: '2026-06',
    featured: true,
    featuredOrder: 1,
    description: 'A first-person puzzle-action adventure where players use the ability to phase through solid surfaces to escape a high-security research facility.',
    tags: [
      'Unity',
      'C#',
      'Game Development',
      'Puzzle Design',
      'Level Design',
      'Environment Art',
      'Texturing',
      'Lighting',
      'Audio Design',
      'Gameplay Programming',
      'Animation',
      'Narrative Design',
      'Playtesting',
    ],
    image: '/img/projects/intangible/cover.png',
    role: 'Game Developer & 3D Environment Artist',
    team: '3 people',
    duration: '3 months',
    overview: 'Intangible is a first-person puzzle-action adventure set in a high-security underground research facility. Players take on the role of Subject 27, Norah, an individual with the ability to phase through certain solid surfaces. Captured by a private research organisation seeking to weaponise her abilities, she must find a way to escape by navigating interconnected rooms filled with environmental puzzles, security systems, and dangerous obstacles. The game revolves around using the phasing ability to bypass barriers, avoid detection, and discover creative solutions to spatial challenges.',
    contributions: [
      'Designed the first level, contributing to its layout, puzzle structure, and overall gameplay flow.',
      'Handled texturing across the entire game, ensuring visual consistency throughout all environments.',
      'Created and placed environmental props and decorative details across all levels.',
      'Created and implemented the intro and outro sequences, combining narrative elements with animations to establish the story and frame the player’s experience.',
      'Worked on the main menu and edited the credits section.',
      'Selected, mixed, and implemented audio assets to support the atmosphere and overall experience of the game.',
      'Created and adjusted lighting throughout the game to establish atmosphere and improve environmental readability.',
      'Contributed to the implementation of the core gameplay mechanics.',
      'Participated in playtesting sessions, documented findings, and helped resolve identified issues.',
    ],
    sections: [
      {
        heading: 'Game Concept & Story',
        text: 'Set in a near-future world where some individuals are born with extraordinary abilities, Intangible follows Subject 27, Norah, who has been captured by a private research organisation. The organisation aims to study and weaponise her phasing ability. Held inside an underground facility designed to contain individuals like her, Norah must exploit structural weaknesses and use her powers to find a way out.',
      },
      {
        heading: 'Core Gameplay Mechanics',
        text: 'The central mechanic allows players to phase through designated solid surfaces by holding an ability button. This enables them to bypass barriers, navigate otherwise inaccessible spaces, and solve environmental puzzles. However, not all materials can be traversed: certain surfaces are too dense, while lasers and detection systems introduce additional restrictions. If the ability ends while the player is inside a solid object, they are returned to the last checkpoint.',
      },
      {
        heading: 'Level Design & Puzzle Design',
        text: 'The game takes place across interconnected sections of a high-security research facility. Each area introduces spatial challenges that encourage players to understand the environment and experiment with the phasing mechanic. Environmental elements such as structural openings, different material types, moving obstacles, lasers, and sensors are used to create increasingly engaging puzzle scenarios. My level design contribution focused on the first level.',
      },
      {
        heading: 'Environment Art & Visual Design',
        text: 'I worked on the visual presentation of the entire game, handling texturing and adding environmental props and decorative details throughout the levels. I also created and adjusted the lighting to establish the atmosphere of the research facility, reinforce the environment’s visual identity, and improve readability during gameplay.',
      },
      {
        heading: 'Narrative & Cinematic Sequences',
        text: 'The game’s intro introduces the player to the story and setting through a short narrative segment, followed by an animation depicting the test subject waking up inside the research facility. The outro provides a conclusion to the experience through another narrative and animated sequence. I created and implemented both sequences, contributing to the storytelling and the overall presentation of the game.',
      },
      {
        heading: 'Audio Design',
        text: 'I selected audio assets from free asset libraries, mixed them to fit the needs of individual scenes, and implemented them throughout the game. Particular attention was given to creating an atmospheric soundscape that supports the setting and player experience.',
      },
      {
        heading: 'Development & Playtesting',
        text: 'I contributed to the implementation of the game’s core mechanics and participated in playtesting sessions throughout development. I documented testing results, identified issues, and helped address problems discovered during testing as part of the iterative development process.',
      },
      {
        heading: 'Release',
        text: 'Intangible was completed and published on itch.io, making the finished game publicly available to play.',
      },
    ],
    media: [
      {
        type: 'image',
        src: '/img/projects/intangible/cover.png',
        caption: 'Official game cover',
        wide: true,
      },
      {
        type: 'video',
        src: '/img/projects/intangible/gameplay.mp4',
        caption: 'Gameplay showcase',
        wide: true,
      },
      {
        type: 'image',
        src: '/img/projects/intangible/level-1.png',
        caption: 'First level - level design contribution',
      },
      {
        type: 'image',
        src: '/img/projects/intangible/environment.png',
        caption: 'Environment texturing and prop placement',
      },
      {
        type: 'image',
        src: '/img/projects/intangible/lighting.png',
        caption: 'Environmental lighting',
      },
      {
        type: 'image',
        src: '/img/projects/intangible/menu.png',
        caption: 'Main menu',
      },
      {
        type: 'video',
        src: '/img/projects/intangible/intro.mp4',
        caption: 'Intro - Story introduction and awakening sequence',
      },
      {
        type: 'video',
        src: '/img/projects/intangible/outro.mp4',
        caption: 'Outro - Final narrative and animation sequence',
      },
    ],
    links: [
      {
        label: 'itch.io',
        href: 'https://azrapamuk.itch.io/intangible',
      },
    ],
  },
  {
  slug: 'game-engine-development',
  title: 'Game Engine Development',
  category: 'gamedev',
  date: '2026-11',
  featured: true,
  description: 'Development of a custom 3D game engine in C++ and a circular Breakout-inspired game built on top of it.',
  tags: [
    'C++',
    'OpenGL',
    'Game Engine Development',
    '3D Graphics',
    'Linear Algebra',
    'Quaternions',
    'Matrix Transformations',
    'Procedural Geometry',
    'Camera Systems',
    'Rendering',
  ],
  image: '/img/projects/game-engine-development/cover.png',
  role: 'Game Engine & Graphics Programmer',
  team: 'Solo project',
  overview: 'This project focuses on developing a small 3D game engine from scratch in C++, followed by the implementation of a circular Breakout-inspired game using the custom engine. The engine is designed to provide the mathematical foundations and graphics functionality required for 3D game development, including vector and matrix operations, rotation representations, coordinate transformations, procedural geometry generation, and scene rendering.',
  contributions: [
    'Implemented a custom mathematical library, including 4D vectors and 4x4 matrices.',
    'Implemented AxisAngle and Quaternion representations for 3D rotations, including conversions between rotation representations.',
    'Implemented polar coordinates and their conversions to and from 2D Cartesian coordinates.',
    'Developed a hierarchical Frame of Reference system for managing object positions and orientations in 3D space.',
    'Implemented local and world transformation matrices, including their inverse transformations.',
    'Developed a camera system supporting perspective and top-down views.',
    'Implemented procedural geometry generation for the game environment, including the ball, paddles, bricks, and ground.',
    'Worked on texture mapping, lighting, and 3D scene rendering.',
  ],
  sections: [
    {
      heading: 'Project Overview',
      text: 'The assignment has two main objectives: building the core components of a 3D game engine in C++ and using the resulting engine to develop a playable game. Rather than relying on advanced third-party graphics or physics libraries, the project focuses on implementing fundamental mathematical and rendering systems from scratch.',
    },
    {
      heading: 'Mathematical Foundations',
      text: 'The engine includes a custom mathematical library covering 4D vector operations, 4x4 matrix transformations, AxisAngle rotations, quaternions, and polar coordinates. These components provide the foundation for representing positions, directions, rotations, and transformations throughout the 3D scene.',
    },
    {
      heading: 'Hierarchical Frame System',
      text: 'A hierarchical Frame of Reference system was implemented to manage the position and orientation of objects in 3D space. Each frame can be associated with a parent frame, allowing transformations to be composed across coordinate systems. The system supports local and world transformation matrices, as well as their inverse transformations.',
    },
    {
      heading: 'Procedural Geometry & Rendering',
      text: 'The engine generates the geometry of the game environment procedurally rather than relying on predefined vertex positions. The milestone implementation includes the geometry required for the ball, curved paddles, individual bricks, and the ground. Texture mapping, lighting, and scene rendering are also part of the implemented graphics functionality.',
    },
    {
      heading: 'Camera System',
      text: 'The game supports two camera perspectives: a perspective view and a top-down orthographic view. Players can switch between them during gameplay. The camera system adjusts to window resizing while maintaining the correct proportions of the rendered scene.',
    },
    {
      heading: 'Current Progress - Milestone',
      text: 'The project has reached the first development milestone, covering the mathematical engine components, camera system, procedural geometry generation, textures, and lighting. Collision detection, physics simulation, and the remaining gameplay functionality are planned for subsequent development stages.',
    },
    {
      heading: 'Next Development Steps',
      text: 'The next stage focuses on implementing collision detection and response, including ball interactions with curved paddles, bricks, and the outer boundary of the play area. Further development will cover the complete gameplay loop, scoring and lives, power-ups, additional physics behaviour, and final game polish.',
    },
  ],
  media: [
    {
      type: 'image',
      src: '/img/projects/game-engine-development/cover.png',
      caption: 'Current game scene',
      wide: true,
    },
    {
      type: 'image',
      src: '/img/projects/game-engine-development/camera-top.png',
      caption: 'Top-down camera view',
    },
    {
      type: 'image',
      src: '/img/projects/game-engine-development/lighting.png',
      caption: 'Debug view with object normals',
    },
  ],
  links: [],
  status: 'in-progress',
progress: 35,
now: 'Completed the first milestone, including the core math library, camera system, procedural geometry, textures, and lighting. Currently working towards collision detection and physics.',
},
{
  slug: 'skittles-vr-study',
  title: 'Food Experience in VR - Skittles Taste Study',
  category: 'compsci',
  date: '2026-11',
  featured: true,
  status: 'in-progress',
  progress: 25,
  now: 'Implementing the VR scenes before conducting the main user study.',
  description: 'An HCI research project investigating flavour recognition and the potential influence of virtual environments on taste perception.',
  tags: [
    'Virtual Reality',
    'Human-Computer Interaction',
    'User Study',
    'Experimental Design',
    'Taste Perception',
    'Research',
  ],
  image: '/img/projects/skittles-vr-study/cover.png',
  role: 'User Study Researcher',
  team: 'Individual project',
  duration: 'Autumn 2026',
  overview: 'This project explores the relationship between visual context and flavour perception through a VR-based tasting experiment. The goal is to investigate whether the virtual environment surrounding participants can influence their perception and identification of different flavours. The project consists of a preliminary taste recognition study, the implementation of VR scenes, and a second user study conducted within the virtual environment.',
  contributions: [
    'Designed and conducted a preliminary blind taste recognition study using five different Skittles flavours.',
    'Prepared the experimental procedure and participant instructions.',
    'Collected and documented participant responses.',
    'Analysed the preliminary results and prepared a user study report.',
  ],
  sections: [
    {
      heading: 'Project Overview',
      text: 'The project investigates how visual context may influence flavour perception. Using a VR-based experiment, it aims to explore whether different virtual environments can affect how participants perceive and identify flavours while tasting candy.',
    },
    {
      heading: 'Preliminary User Study',
      text: 'The preliminary study focused on blind flavour recognition. Participants were blindfolded and asked to identify five Skittles flavours: strawberry, orange, lemon, apple, and cherry. The experiment was designed to evaluate how accurately participants could recognise the flavours without visual cues. Responses were collected and documented in a user study report.',
    },
    {
      heading: 'Next Steps',
      text: 'The next stage involves implementing the required virtual reality scenes and preparing the main experiment. Once the VR environments are ready, a second user study will be conducted to investigate flavour perception in a virtual setting.',
    },
  ],
  media: [
  ],
  links: [],
}

]