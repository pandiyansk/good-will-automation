import { NavLink, IndustrySolution, Brand, CoreValue, ProductLine, ProductCategory, Project, FoundationPillar, Certification, IndustryService, Partner, DeltaProduct, NavBrand } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Products & Brands', path: '/products' },
  { name: 'Industries', path: '/industries' },
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

// export const CATALOGUE_URL = '../pages/public/Doc_pdf/GW.pdf';
export const CATALOGUE_URL = './pages/public/Doc_pdf/GW.pdf';


export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  { icon: 'factory', iconBgColor: 'bg-blue-100 text-blue-600', title: 'Factory Automation', description: 'PLC, VFD, HMI, and Servo Drive systems for complete automation' },
  { icon: 'energy', iconBgColor: 'bg-green-100 text-green-600', title: 'Energy Solutions', description: 'Siemens, INVT, and MM energy-saving solutions' },
  { icon: 'motor', iconBgColor: 'bg-purple-100 text-purple-600', title: 'Industrial Motors', description: 'IE2/IE3 motors with various mounting configurations' },
  { icon: 'valve', iconBgColor: 'bg-teal-100 text-teal-600', title: 'Pneumatics & Valves', description: 'Complete pneumatic systems, cylinders, and valve solutions' },
  { icon: 'cable', iconBgColor: 'bg-orange-100 text-orange-600', title: 'Cables & Sensors', description: 'High-quality industrial cables and precision sensor systems' },
  { icon: 'panel', iconBgColor: 'bg-red-100 text-red-600', title: 'Control Panels', description: 'MS, SS, and Aluminium control panels with PLC integration' },
];

export const BRAND_PARTNERS: Brand[] = [
    { logo: './pages/public/brand/delta.png', name: 'Delta Electronics', description: 'PLC & Automation Solutions' },
    { logo: './pages/public/brand/mitsubishi.png', name: 'Mitsubishi Electric', description: 'Factory Automation & CNC' },
    { logo: './pages/public/brand/schneider-electric.png', name: 'Schneider Electric', description: 'Energy Management' },
    { logo: './pages/public/brand/siemens.png', name: 'Siemens', description: 'Industrial Automation' },
    { logo: './pages/public/brand/invt.png', name: 'INVT', description: 'Energy Saving Solutions' },
    { logo: './pages/public/brand/inovance.png', name: 'INOVANCE', description: 'Drive Technology' },
    { logo: './pages/public/brand/skf.png', name: 'SKF', description: 'Bearing Solutions' },
    { logo: './pages/public/brand/ntn.png', name: 'NTN', description: 'Precision Bearings' },
    { logo: './pages/public/brand/smc.png', name: 'SMC', description: 'Pneumatic Solutions' },
    { logo: './pages/public/brand/abb.png', name: 'ABB', description: 'Power & Automation Technologies' },
    { logo: './pages/public/brand/airtech.png', name: 'Airtech', description: 'Pneumatic Components' },
    { logo: './pages/public/brand/goodwill.png', name: 'Goodwill', description: 'Automation & Service' },
    { logo: './pages/public/brand/goodwill.png', name: 'Goodwill Automation', description: 'Transformers & Power Solutions' },
];

export const CORE_VALUES: CoreValue[] = [
  { icon: 'efficiency', iconBgColor: 'bg-blue-100 text-blue-600', title: 'Operational Efficiency', description: 'Streamline your operations with smart automation solutions that reduce costs and improve productivity.', tag: '40% efficiency gain', tagColor: 'bg-blue-500/10 text-blue-600' },
  { icon: 'jobs', iconBgColor: 'bg-green-100 text-green-600', title: 'Job Creation', description: 'Our solutions create high-skilled jobs while automating repetitive tasks, fostering human-machine collaboration.', tag: '10,000+ jobs supported', tagColor: 'bg-green-500/10 text-green-600' },
  { icon: 'sustainability', iconBgColor: 'bg-emerald-100 text-emerald-600', title: 'Sustainability', description: 'Eco-friendly manufacturing solutions that reduce waste, energy consumption, and environmental impact.', tag: '30% energy savings', tagColor: 'bg-emerald-500/10 text-emerald-600' },
  { icon: 'access', iconBgColor: 'bg-pink-100 text-pink-600', title: 'Product Access', description: 'Global distribution network ensures rapid access to quality products and technical support worldwide.', tag: '24/7 support', tagColor: 'bg-pink-500/10 text-pink-600' },
];

export const FEATURED_PRODUCTS: ProductLine[] = [
  { title: 'PLC Control Systems', description: 'Delta Electronics programmable logic controllers for automation', features: ['High Reliability', 'Easy Programming', 'Expandable'] },
  { title: 'Variable Frequency Drives', description: 'Energy-efficient motor speed and frequency control solutions', features: ['Energy Saving', 'Precise Control', 'Network Ready'] },
  { title: 'HMI Touch Panels', description: 'Human Machine Interface systems for industrial control', features: ['User-Friendly', 'Color Display', 'Network Ready'] },
  { title: 'Servo Drive Systems', description: 'High-precision AC servo drives and motors', features: ['High Precision', 'Low Vibration', 'Fast Response'] },
  { title: 'Industrial Motors', description: 'IE2/IE3 motors with various mounting configurations', features: ['High Efficiency', 'Low Maintenance', 'Versatile'] },
  { title: 'Control Panels', description: 'Custom MS, SS, and Aluminum control panel solutions', features: ['Custom Design', 'Durable Build', 'Safety Certified'] },
];

// FIX: Added PRODUCT_CATEGORIES to resolve import error in Products.tsx.
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    category_name: 'Automation & Control',
    products: [
      'PLCs (Programmable Logic Controllers)',
      'HMIs (Human Machine Interfaces)',
      'Servo Drives & Motors',
      'Variable Frequency Drives (VFDs)',
      'SCADA Systems',
      'Control Panels',
    ],
  },
  {
    category_name: 'Electrical Components',
    products: [
      'Sensors & Transducers',
      'Relays & Contactors',
      'Circuit Breakers',
      'Power Supplies',
      'Industrial Cables',
      'Switches & Push Buttons',
    ],
  },
  {
    category_name: 'Pneumatics & Hydraulics',
    products: [
      'Pneumatic Cylinders',
      'Valves & Solenoids',
      'Air Preparation Units (FRL)',
      'Hydraulic Pumps',
      'Fittings & Tubing',
      'Pressure Gauges',
    ],
  },
  {
    category_name: 'Bearings & Mechatronics',
    products: [
      'Ball Bearings',
      'Roller Bearings',
      'Linear Guides',
      'Actuators',
      'Couplings & Clutches',
      'Gearboxes',
    ],
  },
  {
    category_name: 'Energy Solutions',
    products: [
      'Energy Meters',
      'Power Factor Correction Panels',
      'Solar Inverters',
      'UPS Systems',
      'Harmonic Filters',
      'Energy Management Software',
    ],
  },
  {
    category_name: 'Industrial Motors',
    products: [
      'AC Induction Motors',
      'DC Motors',
      'Stepper Motors',
      'Synchronous Motors',
      'IE2/IE3 Efficiency Motors',
      'Brake Motors',
    ],
  },
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        image: './pages/public/Projects gallery/Robotic Food Packaging Line.png',
        category: 'Factory Automation',
        year: 2024,
        location: 'Mumbai, Maharashtra',
        title: 'Robotic Food Packaging Line',
        description: 'Implementation of high-speed robotic arms for automated food packaging, increasing throughput and ensuring hygiene.',
        tags: ['Robotics', 'Food & Beverage', 'Packaging', 'Automation'],
    },
    {
        id: 2,
        image: './pages/public/Projects gallery/Custom PLC Control Panel.png',
        category: 'Control Panels',
        year: 2024,
        location: 'Pune, Maharashtra',
        title: 'Custom PLC Control Panel',
        description: 'Design and assembly of a custom PLC control panel for a manufacturing plant, ensuring centralized control and safety.',
        tags: ['PLC', 'Control Panel', 'Electrical', 'Manufacturing'],
    },
    {
        id: 3,
        image: './pages/public/Projects gallery/Heavy Equipment.png',
        category: 'Installations',
        year: 2023,
        location: 'Nagpur, Maharashtra',
        title: 'Heavy Equipment Fleet Management',
        description: 'Integration of IoT and control systems for a fleet of heavy construction machinery, enabling remote monitoring and predictive maintenance.',
        tags: ['Heavy Machinery', 'IoT', 'Construction', 'Fleet Management'],
    },
    {
        id: 4,
        image: './pages/public/Projects gallery/Pharmaceutical Cleanroom.png',
        category: 'Factory Automation',
        year: 2023,
        location: 'Hyderabad, Telangana',
        title: 'Pharmaceutical Cleanroom Automation',
        description: 'Advanced environmental control and process automation for a pharmaceutical manufacturing cleanroom, adhering to strict regulatory standards.',
        tags: ['Pharmaceutical', 'Cleanroom', 'HVAC', 'Process Control'],
    },
    {
        id: 5,
        image: './pages/public/Projects gallery/Rooftop Solar Power Plant.png',
        category: 'Energy Solutions',
        year: 2023,
        location: 'Jaipur, Rajasthan',
        title: 'Rooftop Solar Power Plant',
        description: 'Installation of a commercial rooftop solar power system, providing sustainable energy and reducing operational costs.',
        tags: ['Solar', 'Renewable Energy', 'Energy Solutions', 'Installation'],
    },
    {
        id: 6,
        image: './pages/public/Projects gallery/Textile Spinning Mill Modernization.png',
        category: 'Factory Automation',
        year: 2022,
        location: 'Coimbatore, Tamil Nadu',
        title: 'Textile Spinning Mill Modernization',
        description: 'Upgrading a textile mill with modern VFDs and PLC systems to improve yarn quality and production speed.',
        tags: ['Textile', 'VFD', 'PLC', 'Modernization'],
    },
    {
        id: 7,
        image: './pages/public/Projects gallery/PLC & HMI Training Systems.png',
        category: 'Control Panels',
        year: 2022,
        location: 'Bangalore, Karnataka',
        title: 'PLC & HMI Training Systems',
        description: 'Development of modular PLC and HMI training rigs for technical institutions and corporate training centers.',
        tags: ['PLC', 'HMI', 'Training', 'Education'],
    },
    {
        id: 8,
        image: './pages/public/Projects gallery/Motor Control Center (MCC) Panel.png',
        category: 'Control Panels',
        year: 2022,
        location: 'Chennai, Tamil Nadu',
        title: 'Motor Control Center (MCC) Panel',
        description: 'Supply and installation of a large Motor Control Center for an industrial facility, ensuring reliable power distribution.',
        tags: ['MCC Panel', 'Switchgear', 'Power Distribution', 'Industrial'],
    },
    {
        id: 9,
        image: './pages/public/Projects gallery/Automotive Component Assembly.png',
        category: 'Factory Automation',
        year: 2024,
        location: 'Gurgaon, Haryana',
        title: 'Automotive Component Assembly',
        description: 'A high-precision robotic assembly line for automotive components, enhancing production speed and accuracy.',
        tags: ['Automotive', 'Robotics', 'Assembly Line', 'Automation'],
    },
    {
        id: 10,
        image: './pages/public/Projects gallery/Electronics PCB Assembly Line.png',
        category: 'Factory Automation',
        year: 2023,
        location: 'Sanand, Gujarat',
        title: 'Electronics PCB Assembly Line',
        description: 'Automated soldering and assembly of Printed Circuit Boards (PCBs) using vision-guided robotic arms for the electronics industry.',
        tags: ['Electronics', 'PCB', 'Robotics', 'Soldering'],
    }
];


export const FOUNDATION_PILLARS: FoundationPillar[] = [
  {
    icon: 'mission',
    title: 'Mission',
    description: 'To provide innovative industrial automation solutions that enhance productivity, efficiency, and competitiveness for our customers while fostering sustainable growth.'
  },
  {
    icon: 'vision',
    title: 'Vision',
    description: 'To be the leading provider of industrial automation solutions in India, recognized for innovation, quality, and customer excellence.'
  },
  {
    icon: 'values',
    title: 'Values',
    description: 'Integrity, Innovation, Customer Focus, Quality Excellence, Sustainability, and Continuous Improvement drive everything we do.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    icon: 'award',
    title: 'ISO 9001:2015',
    description: 'Quality Management'
  },
  {
    icon: 'award',
    title: 'ISO 14001:2015',
    description: 'Environmental Management'
  },
  {
    icon: 'award',
    title: 'Industry Excellence Award',
    description: '2023 Automation Leader',
  },
  {
    icon: 'award',
    title: 'Customer Choice Award',
    description: 'Best Service Provider'
  }
];

export const INDUSTRIES_SERVED: IndustryService[] = [
  {
    icon: 'factory',
    title: 'Manufacturing',
    description: 'Complete automation solutions for manufacturing processes including PLC systems, VFDs, and servo drives for enhanced productivity.',
    keyApplications: ['Assembly Lines', 'Quality Control', 'Process Automation', 'Material Handling']
  },
  {
    icon: 'energy',
    title: 'Power & Energy',
    description: 'Reliable power solutions with transformers, stabilizers, and energy management systems for industrial applications.',
    keyApplications: ['Power Distribution', 'Energy Monitoring', 'Load Management', 'Power Quality']
  },
  {
    icon: 'infrastructure',
    title: 'Infrastructure',
    description: 'Control panels and automation systems for building management, HVAC, and facility operations.',
    keyApplications: ['Building Automation', 'HVAC Control', 'Security Systems', 'Energy Management']
  },
  {
    icon: 'automotive',
    title: 'Automotive',
    description: 'Precision automation solutions for automotive manufacturing with industrial motors, sensors, and control systems.',
    keyApplications: ['Production Lines', 'Robotic Assembly', 'Quality Testing', 'Material Transport']
  },
  {
    icon: 'heavy-engineering',
    title: 'Heavy Engineering',
    description: 'Robust industrial solutions including heavy-duty motors, bearings, and pneumatic systems for demanding applications.',
    keyApplications: ['Material Processing', 'Heavy Machinery', 'Mining Equipment', 'Construction']
  },
  {
    icon: 'electronics',
    title: 'Electronics',
    description: 'Specialized automation and precision control systems for electronics manufacturing and testing.',
    keyApplications: ['PCB Assembly', 'Component Testing', 'Clean Room Systems', 'Precision Control']
  },
  {
    icon: 'defense',
    title: 'Defense',
    description: 'High-reliability systems and components for defense applications with stringent quality requirements.',
    keyApplications: ['Control Systems', 'Power Management', 'Communication', 'Testing Equipment']
  },
  {
    icon: 'logistics',
    title: 'Logistics',
    description: 'Automated material handling solutions with conveyor systems, sensors, and warehouse automation.',
    keyApplications: ['Warehouse Automation', 'Sorting Systems', 'Inventory Management', 'Conveyor Control']
  }
];

export const TRUSTED_PARTNERS: Partner[] = [
  { logo: './pages/public/brand/delta.png', name: 'Delta Electronics' },
  { logo: './pages/public/brand/mitsubishi.png', name: 'Mitsubishi Electric' },
  { logo: './pages/public/brand/schneider-electric.png', name: 'Schneider Electric' },
  { logo: './pages/public/brand/siemens.png', name: 'Siemens' },
  { logo: './pages/public/brand/inovance.png', name: 'Inovance' },
  { logo: './pages/public/brand/invt.png', name: 'INVT' },
  { logo: './pages/public/brand/abb.png', name: 'ABB' },
  { logo: './pages/public/brand/weg.png', name: 'WEG' },
  { logo: './pages/public/brand/skf.png', name: 'SKF' },
  { logo: './pages/public/brand/ntn.png', name: 'NTN' },
  { logo: './pages/public/brand/janatics.png', name: 'Janatics' },
  { logo: './pages/public/brand/smc.png', name: 'SMC' },
  { logo: './pages/public/brand/airtech.png', name: 'Airtech' },
  { logo: './pages/public/brand/omron.png', name: 'Omron' },
  { logo: './pages/public//brand/polycab.png', name: 'Polycab' },
  { logo: './pages/public/brand/v-guard.png', name: 'V-Guard' },
];


export const DELTA_PRODUCTS: DeltaProduct[] = [
  {
    name: 'PLC SYSTEM',
    fullName: 'Programmable Logic Controller',
    image: './pages/public/product/plc system.png',
    models: [
      'DVP1422',
      'DVP12SA',
      'DVP10SX',
      'DVP28SV',
      'DVP16SP',
      'AS228T-A',
    ],
  },
  {
    name: 'TOUCH PANEL SYSTEM (HMI)',
    fullName: 'Human-Machine Interface',
    image: './pages/public/product/touch panel system.png',
    subCategories: [
      {
        title: '4.3 INCH',
        items: ['DOP103BQ', 'DOP103WQ'],
      },
      {
        title: '7 INCH',
        items: ['DOP107CV', 'DOP107BV', 'DOP107WV'],
      },
      {
        title: '10 INCH',
        items: ['DOP103BQ', 'DOP103WQ'],
      },
    ],
  },
  {
    name: 'SERVO MOTOR & DRIVE',
    fullName: 'High-precision AC Servo Systems',
    image: './pages/public/product/servo motor and drive.png',
    models: [
      'ASDA-A2',
      'ASDA-A3',
      'ASDA-B2',
      'ASDA-B3',
      'ASDA-E3',
    ],
  },
  {
    name: 'AC DRIVE (VFD)',
    fullName: 'Variable Frequency Drive',
    image: './pages/public/product/ac motor(vf).png',
    subCategories: [
      {
        title: 'VFD - EL-W SERIES',
        items: ['SINGLE PHASE - 0.25hp to 3hp', 'THREE PHASE - 1hp to 5hp'],
      },
      {
        title: 'VFD - EL SERIES',
        items: ['SINGLE PHASE-THREE PHASE - (0.2/25hp), (0.4/0.5hp), (0.75/1hp), (1.5/2), (2.2/3hp), (3.7/5hp- 3P)'],
      },
      {
        title: 'VFD - ME SERIES',
        items: ['SINGLE PHASE: (0.2/25hp), (0.4/0.5hp), (0.75/1hp), (1.5/2)', 'THREE PHASE: (0.2/25hp), (0.4/0.5hp), (0.75/1hp), (1.5/2), (2.2/3hp) to (7.5/10hp)'],
      },
      {
        title: 'VFD - MS-300 SERIES',
        items: ['SINGLE PHASE: (0.2/25hp), (0.4/0.5hp), (0.75/1hp), (1.5/2), (2.2/3hp)', 'THREE PHASE: (0.2/25hp), (0.4/0.5hp), (0.75/1hp), (1.5/2), (2.2/3hp) to (22/30hp)'],
      },
      {
        title: 'VFD - C2000 SERIES',
        items: ['POWER RANGE: 0.75 Kw to 630 Kw for various industrial needs'],
      },
    ],
  },
];

export const INOVANCE_PRODUCTS: DeltaProduct[] = [
  {
    name: 'Variable Frequency Drive (VFD)',
    fullName: 'Advanced motor control for energy savings',
    image: './pages/public/product/variable freguency drive(vfd).png',
    description: 'Inovance offers a comprehensive portfolio of Variable Frequency Drives (VFDs) designed for robust performance and energy efficiency across a wide range of industrial applications.'
  },
  {
    name: 'Programmable Logic Controller (PLC)',
    fullName: 'Reliable logic control for automation',
    image: './pages/public/product/programmable logic controller(plc).png',
    description: 'Inovance PLCs provide reliable and scalable control solutions, enabling seamless automation for machinery and production lines with easy-to-use programming software.'
  },
  {
    name: 'Human Machine Interface (HMI)',
    fullName: 'Intuitive operator interface panels',
    image: './pages/public/product/human machine interface()hmi.png',
    description: 'With high-resolution displays and user-friendly interfaces, Inovance HMIs offer clear visualization and simplified operation for complex industrial processes.'
  },
  {
    name: 'AC Servo Drive and Motor',
    fullName: 'Precision motion control for dynamic applications',
    image: './pages/public/product/ac servo  drive and motor.png',
    description: 'Engineered for high-performance applications, Inovance AC Servo Drives and Motors deliver exceptional accuracy, speed, and a dynamic response for advanced motion control.'
  }
];

export const INVT_PRODUCTS: DeltaProduct[] = [
  {
    name: 'Variable Frequency Drive (VFD)',
    fullName: 'Efficient and reliable motor control solutions',
    image: './pages/public/product/variable freguency drive(vfd).png',
    description: 'INVT provides a wide range of VFDs that offer high performance, reliability, and energy savings for various industrial motor applications.'
  },
  {
    name: 'Programmable Logic Controller (PLC)',
    fullName: 'Flexible automation for industrial processes',
    image: './pages/public/product/programmable logic controller(plc).png',
    description: 'INVT\'s PLCs deliver robust and scalable control solutions, designed for seamless integration and reliable operation in complex automation systems.'
  },
  {
    name: 'Human Machine Interface (HMI)',
    fullName: 'Intuitive control and visualization',
    image: './pages/public/product/human machine interface()hmi.png',
    description: 'Featuring high-resolution touchscreens and user-friendly software, INVT HMIs provide clear and intuitive interfaces for machine and process control.'
  },
  {
    name: 'AC Servo Drive and Motor',
    fullName: 'Precision motion for demanding applications',
    image: './pages/public/product/servo motor and drive.png',
    description: 'INVT\'s AC Servo Drives and Motors are engineered for high-precision motion control, offering excellent dynamic response, accuracy, and reliability.'
  }
];

export const SCHNEIDER_PRODUCTS: DeltaProduct[] = [
  {
    name: 'PLC - PANEL',
    fullName: 'Programmable Logic Controller Panels',
    image: './pages/public/product/plc panel.png',
    description: 'Custom-built PLC panels for seamless automation and control, integrating high-quality Schneider Electric components for reliability and performance.'
  },
  {
    name: 'VFD - PANEL',
    fullName: 'Variable Frequency Drive Panels',
    image: './pages/public/product/vfd-panel.png',
    description: 'Energy-efficient VFD panels designed for precise motor speed control, reducing energy consumption and mechanical stress on your equipment.'
  },
  {
    name: 'MCC - PANEL',
    fullName: 'Motor Control Center Panels',
    image: './pages/public/product/mcc panel.png',
    description: 'Centralized motor control solutions for industrial processes, ensuring reliable operation and protection for all your motors in a compact, organized system.'
  },
  {
    name: 'RTU PANEL',
    fullName: 'Remote Terminal Unit Panels',
    image: './pages/public/product/rtu panel.png',
    description: 'RTU panels for remote monitoring and control of assets, providing a critical link for SCADA systems in utilities, infrastructure, and industrial facilities.'
  }
];

export const ABB_PRODUCTS: DeltaProduct[] = [
    {
        name: 'INDUSTRIAL MOTORS',
        fullName: 'High-Efficiency Industrial Electric Motors',
        image: './pages/public/product/indutrial motor.png',
        models: [
            'IE2 MOTOR',
            'IE3 MOTOR',
            'FOOT MOUNTED MOTOR',
            'FLANGE MOUNTED MOTOR',
            'FOOT CUM FLANGE MOUNTED MOTOR',
            'FACE MOUNTED MOTOR'
        ]
    }
];

export const WEG_PRODUCTS: DeltaProduct[] = [
    {
        name: 'AC MOTORS',
        fullName: 'High-Efficiency Industrial AC Motors',
        image: './pages/public/product/ac motor.png',
        models: [
            'IEC',
            'IE2 MOTOR',
            'IE3 MOTOR',
            'FOOT MOUNTED MOTOR',
            'FLANGE MOUNTED MOTOR'
        ]
    }
];

export const SIEMENS_PRODUCTS: DeltaProduct[] = [
    {
        name: 'SIEMENS MOTORS',
        fullName: 'High-Performance Industrial Motors',
        image: './pages/public/product/siemens motor.png',
        description: 'A wide range of motors available from 0.25 to 75 hp, including 1-Phase, 3-Phase, and Brake motors.',
        models: [
            '1LA8 N - COMPACT MOTORS 355 - 500 FRAME (IE3)',
            '1LE7 GLOBAL SERIES 71-315 FRAME (IE2 & IE3)',
            '1LE7 BRAKE MOTOR 71-225 FRAME (IE2)',
            '1LE7 CRANE DUTY S4 DUTY MOTORS'
        ]
    }
];

export const HIWIN_PRODUCTS: DeltaProduct[] = [
  {
    name: 'BALL SCREW',
    fullName: 'Precision Motion Control Components',
    image: './pages/public/product/ball screw.png',
    models: [
      'HEAVY LOAD DRIVE SERIES',
      'PRECISION GROUND SERIES',
      'PRECISION ROLLED SERIES',
      'HIGH SPEED SUPER S SERIES'
    ]
  },
  {
    name: 'LINER GUIDEWAY',
    fullName: 'High-Accuracy Linear Guideways',
    image: './pages/public/product/linear guide way.png',
    models: [
      'E2 SERIES',
      'EG SERIES',
      'HG SERIES',
      'RG SERIES'
    ]
  }
];

export const ZD_PRODUCTS: DeltaProduct[] = [
    {
        name: 'ZD MOTOR & GEARBOX',
        fullName: 'Specialized Mini AC & DC Gear Motors',
        image: './pages/public/product/zd  motor and gear boxes.png',
        description: 'ZD MOTOR is specialized in mini AC gear motors, offering a wide range of solutions including gear motors, three-phase motors, speed control motors, brake motors, torque motors, and DC gear motors.',
        models: [
            'Gear motors',
            'Three phase motor',
            'Speed control motor',
            'Brake motors',
            'Torque motor',
            'DC gear motor'
        ]
    }
];

export const JANATICS_PRODUCTS: DeltaProduct[] = [
    {
        name: 'JANATICS PNEUMATIC',
        fullName: 'Comprehensive Pneumatic & Solenoid Solutions',
        image: './pages/public/product/janatics pneumatic.png',
        models: [
            'AIR CYLINDERS',
            'PNEUMATIC SYSTEM',
            'ONE TOUCH FITTINGS',
            'AIR PREPARATION UNITS',
            'ACCESSORIES & AIR LINE FITTING',
            'PNEUMATIC / SOLENOID VALVES'
        ]
    }
];

export const SMC_PRODUCTS: DeltaProduct[] = [
    {
        name: 'ISO STANDARD CYLINDERS',
        fullName: 'Double Acting Pneumatic Cylinders',
        image: './pages/public/product/iso standard cylinder.png',
        models: [
            '(A27 - Magnetic, A28 Non Magnetic)',
            '(A16 - Non Magnetic, A17 Magnetic)',
            '(A23 - Magnetic, A24 - Non Magnetic)',
            '(A64 - Non Magnetic, A63 Magnetic)',
            '(A02 - Non Magnetic, A03 Magnetic)'
        ]
    }
];

export const AIRTEC_PRODUCTS: DeltaProduct[] = [
    {
        name: 'Pneumatic Cylinders, Tubes & Units',
        fullName: 'High-Performance Pneumatic Components',
        image: './pages/public/product/pneumatic cylinnder,tubeand ,unit.webp',
        models: [
            'COMPACT GUIDED CYLINDER',
            'AIR PREPARATION UNIT FRL SERIES',
            'COMPACT CYLINDER WITH GUIDE ROD',
            'COLOURED POLYURETHANE TUBE',
            'COLOURED COILED POLYURETHANE TUBE'
        ]
    },
    {
        name: 'Pneumatic Valves & Actuators',
        fullName: 'Precision Control for Pneumatic Systems',
        image: './pages/public/product/plc system.png',
        models: [
            'PNEUMATIC ACTUATORS',
            'BUTTERFLY VALVES',
            'MANUAL VALVES',
            'CONTROL VALVES',
            'BALL VALVES'
        ]
    }
];

export const GOODWILL_AUTOMATION_PRODUCTS: DeltaProduct[] = [
  {
    name: 'TRANSFORMERS',
    fullName: 'Industrial Power Transformers',
    image: './pages/public/product/Gemini_Generated_Image_kbualmkbualmkbua.png', // Placeholder, replace with actual transformer image
    description: 'High-efficiency power transformers for various industrial applications, ensuring stable and reliable power supply.',
    models: [
      'DISTRIBUTION TRANSFORMERS',
      'POWER TRANSFORMERS',
      'ISOLATION TRANSFORMERS',
      'CONTROL TRANSFORMERS',
      'DRY-TYPE TRANSFORMERS',
      'OIL-FILLED TRANSFORMERS'
    ]
  }
];

export const CONTACT_INFO = {
  address: 'NO.35/4, 2ND FLOOR, ABOVE SRIRAM FAST FOOD, NETHAJI ROAD, HOSUR-635 109',
  phone: '+91 9739267280  +91 9345741427',
  email: 'automationgoodwill@gmail.com',
};

export const SOCIAL_LINKS = {
    whatsapp: "https://wa.me/919843271997",
    instagram: "https://www.instagram.com/goodwillautomationandservice/?utm_source=qr&igsh=MTg1Zzc4ZmNtdGdicw%3D%3D#"
};

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Brands', path: '/products' },
  { name: 'Industries', path: '/industries' },
  { name: 'Download Catalogue', path: CATALOGUE_URL },
];

export const NAV_MENU_BRANDS: NavBrand[] = [
  {
    id: 'delta-electronics',
    name: 'Delta Electronics',
    logo: './pages/public/brand/delta.png',
    products: DELTA_PRODUCTS
  },
  {
    id: 'inovance',
    name: 'Inovance',
    logo: './pages/public/brand/inovance.png',
    products: INOVANCE_PRODUCTS
  },
  {
    id: 'invt',
    name: 'INVT',
    logo: './pages/public/brand/invt.png',
    products: INVT_PRODUCTS
  },
  {
    id: 'schneider-electric',
    name: 'Schneider Electric',
    logo: './pages/public/brand/schneider-electric.png',
    products: SCHNEIDER_PRODUCTS
  },
  {
    id: 'abb',
    name: 'ABB',
    logo: './pages/public/brand/abb.png',
    products: ABB_PRODUCTS
  },
    {
    id: 'weg',
    name: 'WEG',
    logo: './pages/public/brand/weg.png',
    products: WEG_PRODUCTS
  },
  {
    id: 'siemens',
    name: 'Siemens',
    logo: './pages/public/brand/siemens.png',
    products: SIEMENS_PRODUCTS
  },
    {
    id: 'hiwin',
    name: 'HIWIN',
    logo: './pages/public/brand/hiwin.png',
    products: HIWIN_PRODUCTS
  },
    {
    id: 'zd',
    name: 'ZD',
    logo: './pages/public/brand/zd.png',
    products: ZD_PRODUCTS
  },
    {
    id: 'janatics',
    name: 'Janatics',
    logo: './pages/public/brand/janatics.png',
    products: JANATICS_PRODUCTS
  },
    {
    id: 'smc',
    name: 'SMC',
    logo: './pages/public/brand/smc.png',
    products: SMC_PRODUCTS
  },
  {
    id: 'airtec',
    name: 'Airtec',
    logo: './pages/public/brand/airtech.png',
    products: AIRTEC_PRODUCTS
  },
  {
    id: 'goodwill-automation',
    name: 'Goodwill Automation',
    logo: './pages/public/brand/goodwill.png',
    products: GOODWILL_AUTOMATION_PRODUCTS
  },
];

export const EXPERT_TEAM_MEMBERS = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=JD',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Lead Engineer',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=JS',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Peter Jones',
    role: 'Automation Specialist',
    image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=PJ',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Alice Brown',
    role: 'Project Manager',
    image: 'https://via.placeholder.com/150/FFFF00/000000?text=AB',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Robert White',
    role: 'Technical Support Lead',
    image: 'https://via.placeholder.com/150/00FFFF/000000?text=RW',
    social: {
      linkedin: '#',
    },
  },
];