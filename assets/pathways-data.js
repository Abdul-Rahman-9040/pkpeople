/**
 * PLACEMENT KEEPERS PEOPLE PULSE PVT LTD - Curriculum & Engineering Pathways Data Engine
 * Comprehensive 13-Point Structural Dataset for all Engineering Disciplines & Technical Pathways.
 */

const PATHWAYS_DATA = {
  // ==========================================
  // 1. CIVIL ENGINEERING
  // ==========================================
  "civil-built-environment": {
    id: "civil-built-environment",
    discipline: "Civil Engineering",
    pathwayName: "Pathway 1 – Built Environment",
    badge: "Core Infrastructure Domain",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`,
    img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Covers the planning, construction, maintenance, and management of buildings and physical infrastructure.",
      "Introduces students to residential, commercial, and institutional construction projects.",
      "Helps students understand how a building progresses from Concept → Planning → Drawing → Estimation → Construction → Inspection → Completion.",
      "Connects classroom subjects such as building construction, surveying, estimation, materials, and structural concepts with practical field work."
    ],
    whyImportant: [
      "Helps students understand how buildings are actually constructed on active job sites.",
      "Develops in-depth knowledge of construction materials and their field applications.",
      "Introduces students to construction-site activities, safety regulations, and professional responsibilities.",
      "Builds strong awareness of structural quality control, safety protocols, and project documentation."
    ],
    cie1: [
      "Introduction to the construction industry and built-environment sector.",
      "Understanding the roles of civil engineers, architects, contractors, consultants, and site supervisors.",
      "Introduction to construction project workflow and lifecycle stages.",
      "Understanding basic architectural and structural blueprints.",
      "Introduction to construction materials such as cement, concrete, steel, bricks, AAC blocks, aggregates, and finishing materials.",
      "Introduction to construction site safety and personal protective equipment (PPE).",
      "Understanding basic site documentation, daily progress reports (DPR), and measurement books."
    ],
    cie2: [
      "Study a sample residential or commercial building project blueprint.",
      "Understand floor plans, elevations, sections, and grid lines.",
      "Identify foundations, columns, beams, slabs, load-bearing walls, staircases, and structural components.",
      "Prepare basic material requirement take-offs (concrete volume, steel tonnage).",
      "Perform basic quantity and cost-estimation exercises (BOQ generation).",
      "Study construction sequence from substructure excavation to final finishing.",
      "Prepare basic project execution documentation and inspection requests.",
      "Understand how structural drawings are converted into physical site construction work."
    ],
    cie3: [
      "Observe actual construction site activities wherever applicable.",
      "Foundation and excavation observation (soil compaction, footing shuttering).",
      "Reinforcement and shuttering inspection (rebar spacing, cover blocks, lap lengths).",
      "Concrete mixing, slump testing, and placement pour observation.",
      "Masonry alignment and internal/external plastering activities.",
      "Flooring, painting, waterproofing, and MEP finishing activities.",
      "Material storage, cement protection, and aggregate stockpile handling.",
      "Site safety practices, scaffolding stability, and edge protection audits.",
      "Quality inspection, slump cone testing, cube compression testing, and level checking.",
      "Understanding how site engineers identify and resolve field-level execution conflicts."
    ],
    machines: [
      { name: "Concrete Mixer", desc: "Mechanical batching and mixing equipment for uniform concrete preparation." },
      { name: "Concrete Vibrator", desc: "Needle and surface vibrators used to eliminate air voids and consolidate fresh concrete." },
      { name: "Bar Cutting Machine", desc: "Electric shear equipment for cutting high-yield TMT steel reinforcement bars." },
      { name: "Bar Bending Machine", desc: "Motorized tools for shaping stirrups, hooks, and rebar bends per Bar Bending Schedules." },
      { name: "Drilling & Demolition Tools", desc: "Rotary hammers and breaker tools for structural anchor installations and chipping." },
      { name: "Scaffolding Systems", desc: "Cuplock, frame, and tubular scaffolding systems providing safe elevated working platforms." },
      { name: "Cranes & Lifting Equipment", desc: "Tower cranes, builder hoists, and material handling equipment for vertical transport." },
      { name: "Surveying Instruments", desc: "Total Stations, Auto Levels, and optical transits for precise layout marking and leveling." }
    ],
    software: [
      "AutoCAD (2D Drafting & Structural Detailing)",
      "Revit / BIM Concepts (3D Building Information Modeling & Clash Detection)",
      "Building Documentation & Quantity Estimation Tools",
      "Spreadsheet Estimating Tools (MS Excel BOQ & BBS Sheets)"
    ],
    practicalActivities: [
      "Architectural grid and structural drawing interpretation",
      "Material field identification and slump cone testing",
      "Quantity estimation and Bill of Quantities (BOQ) preparation",
      "On-site construction sequence observation and reporting",
      "Basic land surveying and benchmark level checking using Auto Level",
      "Quality assurance and formwork verticality inspection",
      "Site safety audits and Personal Protective Equipment (PPE) compliance checks",
      "Daily progress report (DPR) and site log drafting"
    ],
    whatStudentsLearn: [
      "How a building is planned, designed, and physically constructed on site.",
      "How structural and architectural drawings are correctly interpreted.",
      "How construction materials are selected, field-tested, and applied.",
      "How site construction activities are logically sequenced to avoid delays.",
      "How quality assurance and safety standards are maintained on active sites.",
      "How civil engineers coordinate multi-disciplinary construction teams."
    ],
    skillsDeveloped: [
      "Drawing Interpretation & Blueprint Reading",
      "Quantity Estimation & Costing",
      "Site Observation & Quality Supervision",
      "Technical Reporting & DPR Compilation",
      "Field Problem-Solving & Conflict Resolution",
      "Construction & Structural Safety Awareness"
    ],
    realWorldApplications: [
      "Residential Housing Complexes & High-Rise Apartments",
      "Commercial Shopping Malls & Corporate Towers",
      "Industrial Factories, Steel Structures & Warehouses",
      "Infrastructure & Institutional Campus Projects",
      "Structural Renovation, Retrofitting & Building Maintenance"
    ],
    careerRelevance: [
      "Junior Site Engineer",
      "Quantity Surveyor (QS) & Cost Estimator",
      "Quality Control / Quality Assurance (QA/QC) Engineer",
      "Site Safety Officer",
      "Structural CAD Detailer / Draftsperson"
    ],
    internshipOutcome: "Students gain direct exposure to real site environments, structural execution steps, and administrative reporting standards, enabling them to transition smoothly into entry-level site engineering and project coordination roles."
  },

  "civil-transportation": {
    id: "civil-transportation",
    discipline: "Civil Engineering",
    pathwayName: "Pathway 2 – Transportation",
    badge: "Highway & Mobility Infrastructure",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V15a1 1 0 01-1 1h-1m-6 0a2 2 0 002-2h2a2 2 0 002 2m0 0V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>`,
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Deals with the planning, geometric design, construction, and maintenance of transportation infrastructure.",
      "Covers roads, expressways, highways, urban transit corridors, and mobility networks.",
      "Introduces students to traffic flow movement, road safety, and junction management.",
      "Connects surveying, soil mechanics, and civil engineering principles with road construction."
    ],
    whyImportant: [
      "Helps students understand how modern highway and road networks are planned and constructed.",
      "Develops knowledge of flexible and rigid pavement layers and soil subgrade preparation.",
      "Introduces students to road construction equipment operations and quality inspection.",
      "Builds awareness of traffic engineering, road safety signages, and infrastructure maintenance."
    ],
    cie1: [
      "Introduction to road and highway engineering sectors.",
      "Understanding road construction stages from clearing to surface laydown.",
      "Introduction to pavement layers (Subgrade, GSB, WMM, Bituminous Macadam, Bituminous Concrete).",
      "Traffic-management concepts and level-of-service fundamentals.",
      "Road-safety principles, crash barriers, signages, and pavement markings.",
      "Basic surveying concepts for road alignments and cross-sections.",
      "Infrastructure inspection and pavement distress identification.",
      "Understanding the key role of site engineers in highway construction projects."
    ],
    cie2: [
      "Study a sample road/highway project alignment blueprint.",
      "Understand road alignment drawings, longitudinal profiles, and cross-sections.",
      "Identify flexible vs. rigid pavement layers and drainage channels.",
      "Study drainage requirements, culverts, and side drains.",
      "Perform basic route surveying and earthwork volume calculation exercises.",
      "Analyse traffic volume counts and road safety requirements.",
      "Prepare a basic road-project execution report."
    ],
    cie3: [
      "Observe actual road construction or infrastructure execution activities.",
      "Road excavation, clearing, and cut-and-fill earthwork observation.",
      "Grading, subgrade compaction, and field density testing.",
      "Pavement layer construction (Granular Sub-Base & Wet Mix Macadam).",
      "Asphalt paving operations and hot-mix laydown temperature monitoring.",
      "Road surface maintenance and pothole repair techniques.",
      "Road quality inspection, camber checks, and level measurements.",
      "Traffic-management arrangements and safety detour setups.",
      "Safety signage installation, metal beam crash barriers, and retro-reflective markings."
    ],
    machines: [
      { name: "Excavators", desc: "Heavy earthmovers for site clearing, cut-and-fill operations, and ditching." },
      { name: "Motor Graders", desc: "Precision equipment used to spread and level aggregate layers to exact cross-slopes (camber)." },
      { name: "Road Rollers", desc: "Smooth wheel, pneumatic-tyred, and vibratory rollers for achieving target compaction densities." },
      { name: "Asphalt Paver Finishers", desc: "Mechanical pavers for laying bituminous mixtures with precise thickness and slope control." },
      { name: "Hot Mix Plant", desc: "Industrial batch plants for asphalt production and bitumen spraying." },
      { name: "Total Station & Auto Level", desc: "High-precision surveying instruments for alignment setting and elevation verification." }
    ],
    software: [
      "AutoCAD Civil 3D (Highway Alignment & Grading)",
      "MX Road / OpenRoads Concepts (Highway Design Software)",
      "Spreadsheet Earthwork & Paving Calculation Tools"
    ],
    practicalActivities: [
      "Road alignment survey and longitudinal cross-section profiling",
      "Soil compaction field density testing (Core Cutter / Sand Replacement)",
      "Camber and superelevation measurement using Auto Level",
      "Traffic volume and vehicle classification counting",
      "Pavement distress inspection and defect logging",
      "Road safety signages and guardrail installation checks"
    ],
    whatStudentsLearn: [
      "Road construction methodology from subgrade to asphalt surface layer.",
      "Pavement structural design and material selection criteria.",
      "Route surveying techniques to set road alignments and gradients.",
      "Traffic management strategies during live construction.",
      "Road maintenance and distress inspection techniques."
    ],
    skillsDeveloped: [
      "Surveying & Route Alignment",
      "Earthwork & Paving Material Take-offs",
      "Pavement Layer Quality Inspection",
      "Traffic Volume & Safety Data Analysis",
      "Technical Road Inspection Reporting"
    ],
    realWorldApplications: [
      "State & National Highway Construction",
      "Expressways, Elevated Corridors & Bypass Roads",
      "Urban City Arterial Roads & Street Networks",
      "Industrial Park Internal Road Logistics",
      "Airport Runways & Taxiway Pavements"
    ],
    careerRelevance: [
      "Highway Site Engineer",
      "Pavement Construction Supervisor",
      "Survey & Alignment Engineer",
      "Infrastructure QA/QC Inspector",
      "Traffic Engineering Assistant"
    ],
    internshipOutcome: "Students acquire practical understanding of highway construction sequences, soil compaction testing, and field surveying, enabling them to join infrastructure EPC contractors and highway development teams."
  },

  "civil-town-planning": {
    id: "civil-town-planning",
    discipline: "Civil Engineering",
    pathwayName: "Pathway 3 – Town Planning & Green Building",
    badge: "Sustainable Urban Design",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V9a2 2 0 00-2-2h-1.07a2 2 0 01-1.414-.586l-.902-.902A2 2 0 0011.54 3H8.382a2 2 0 00-1.328.508L5.3 5.382A2 2 0 005 6.764L5 8"></path></svg>`,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Combines urban spatial planning with sustainable, eco-friendly construction techniques.",
      "Focuses on responsible land, water, energy, and resource usage in development.",
      "Introduces energy-efficient, climate-responsive, and environmentally responsible green buildings.",
      "Covers municipal zoning, water conservation, renewable energy, and solid waste management."
    ],
    whyImportant: [
      "Teaches students how to plan sustainable urban layouts adhering to municipal building bye-laws.",
      "Reduces carbon footprints, urban heat island effects, and operational energy demands.",
      "Promotes rainwater harvesting, greywater recycling, and solar energy integration.",
      "Prepares students for careers in certified green building design (IGBC, GRIHA, LEED)."
    ],
    cie1: [
      "Introduction to town planning and municipal master plans.",
      "Land-use planning, zoning rules (residential, commercial, industrial, green belts), and Floor Space Index (FSI).",
      "Infrastructure planning and municipal utility corridors.",
      "Sustainable development goals and climate-responsive architecture.",
      "Green-building principles and certification rating systems (IGBC / GRIHA / LEED).",
      "Energy efficiency in buildings, thermal insulation, and passive solar design.",
      "Water conservation concepts, rainwater harvesting (RWH), and greywater recycling.",
      "Waste management, source segregation, and eco-friendly building materials."
    ],
    cie2: [
      "Develop a basic sustainable building layout for a eco-friendly residential township.",
      "Plan land utilization adhering to setback rules, FSI limits, and open green spaces.",
      "Incorporate green buffers, permeable pavements, and solar shading features.",
      "Study natural lighting, building orientation, and cross-ventilation.",
      "Plan water-conservation measures and size a rainwater harvesting tank.",
      "Study renewable-energy integration (rooftop solar PV capacity sizing).",
      "Develop basic waste-management and localized sewage treatment plant (STP) layouts."
    ],
    cie3: [
      "Study real certified green buildings and sustainable township layouts.",
      "Identify passive green-building features: high-performance glass, insulated walls, and green roofs.",
      "Observe operational rooftop solar PV energy systems and net-metering setups.",
      "Study functional rainwater harvesting structures, filter sumps, and recharge wells.",
      "Observe energy-efficient HVAC, LED lighting, and Building Management Systems (BMS).",
      "Understand waste segregation centers and organic waste composters (OWC).",
      "Analyse environmentally friendly construction materials (fly-ash bricks, low-VOC paints)."
    ],
    machines: [
      { name: "Solar PV Systems", desc: "Panels, mounting structures, and inverters for clean electricity generation." },
      { name: "Rainwater Harvesting Systems", desc: "Collection sumps, leaf screens, multi-media filters, and recharge pits." },
      { name: "Building Management System (BMS)", desc: "Automated telemetry systems for real-time energy, water, and HVAC tracking." },
      { name: "Water-Saving Fixtures", desc: "Sensor faucets, dual-flush toilets, aerators, and low-flow showerheads." },
      { name: "Organic Waste Converter (OWC)", desc: "Mechanical composters and shredders for processing organic waste on site." },
      { name: "Environmental Meters", desc: "Lux meters (light level), thermal cameras, and air quality sensors (PM2.5/VOCs)." }
    ],
    software: [
      "AutoCAD / SketchUp (Site Layout & Solar Orientation)",
      "Building Energy Simulation Tools (eQUEST / EnergyPlus Concepts)",
      "GIS Spatial Mapping Tools (QGIS / ArcGIS)"
    ],
    practicalActivities: [
      "Drafting a zoned township master layout complying with FSI and setback rules",
      "Solar orientation analysis for natural daylighting and thermal gain mitigation",
      "Sizing rainwater harvesting sumps based on roof area and rainfall data",
      "Scoring a model building against an IGBC / GRIHA green rating checklist",
      "Measuring indoor lux levels using a digital light meter across rooms"
    ],
    whatStudentsLearn: [
      "Principles of sustainable urban land planning and municipal building bye-laws.",
      "Core requirements for green building certification (IGBC/LEED/GRIHA).",
      "Design procedures for rainwater harvesting and decentralized wastewater treatment.",
      "Integration of passive solar design and active solar energy systems.",
      "Resource conservation, waste management, and indoor environmental quality practices."
    ],
    skillsDeveloped: [
      "Sustainable Site Layout Planning",
      "Green Building Rating Assessment",
      "Rainwater Harvesting Sizing",
      "Environmental Metric Measurement",
      "Municipal Bye-law & Compliance Verification"
    ],
    realWorldApplications: [
      "Eco-Friendly Residential Townships & Smart Cities",
      "Certified Commercial Green Towers & Tech Parks",
      "Municipal Urban Planning & Public Works Departments",
      "Industrial Parks with Zero Liquid Discharge (ZLD)",
      "Sustainable Retrofitting of Existing Built Facilities"
    ],
    careerRelevance: [
      "Assistant Urban Planner",
      "Green Building Consultant / Auditor",
      "Sustainability Analyst",
      "Environmental Project Assistant",
      "Facility Manager (Green Operations)"
    ],
    internshipOutcome: "Students gain practical knowledge of sustainable design practices, energy efficiency, and green rating compliance, enabling them to join urban planning agencies, green consultancies, and real estate development firms."
  },

  // ==========================================
  // 2. AUTOMOBILE ENGINEERING
  // ==========================================
  "auto-ev-hybrid": {
    id: "auto-ev-hybrid",
    discipline: "Automobile Engineering",
    pathwayName: "Pathway – Electric & Hybrid Vehicles",
    badge: "Electric Mobility & Powertrain",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Focuses on vehicles powered partly or completely by electrical propulsion systems.",
      "Covers electric motors, high-voltage traction batteries, inverters, charging systems, and electronic control.",
      "Introduces students to the transition from conventional IC engine vehicles to electric mobility.",
      "Hybrid vehicles combine internal combustion engines with electric motor propulsion technologies."
    ],
    whyImportant: [
      "EVs are rapidly becoming the global standard for modern sustainable transportation.",
      "Modern automobiles increasingly depend on power electronics, embedded sensors, and software control.",
      "Students gain exposure to emerging automotive powertrains, battery tech, and high-voltage safety.",
      "Creates high-demand career opportunities in EV manufacturing, battery assembly, and R&D."
    ],
    cie1: [
      "Introduction to EV and hybrid-vehicle architecture vs. conventional IC engines.",
      "Battery technology (Lithium-Ion chemistry, cylindrical/prismatic cells, module, and pack assembly).",
      "Electric motors (PMSM, AC Induction Motors) and mechanical drivetrain integration.",
      "Battery Management System (BMS - cell balancing, State of Charge, State of Health, thermal protection).",
      "Inverter and DC-DC converter power electronics units.",
      "Charging systems (AC Level 1/2, DC Fast Charging CCS/CHAdeMO, Onboard Chargers).",
      "Regenerative braking mechanics and kinetic energy recovery.",
      "High-Voltage (HV) vehicle safety protocols, manual service disconnects (MSD), and insulation monitoring.",
      "Vehicle computer diagnostics and OBD-II trouble code reading."
    ],
    cie2: [
      "Study a complete EV powertrain schematic (Battery → BMS → Inverter → Motor → Wheels).",
      "Prepare EV architecture diagrams and high-voltage wiring paths.",
      "Study battery pack capacity calculations (Series/Parallel cell configuration for V/Ah).",
      "Understand charging cycles, C-ratings, and thermal heat dissipation.",
      "Study electric motor operation torque-speed curves under varying loads.",
      "Understand regenerative braking energy efficiency under deceleration.",
      "Analyse the role of BMS protective algorithms against over-voltage, short circuits, and overheating.",
      "Study basic EV diagnostics using scan tool telemetry logs."
    ],
    cie3: [
      "EV component visual inspection and module teardown demonstrations.",
      "Charging-system observation (AC Type-2 and DC Fast Charger operational testing).",
      "Battery-system study, cell voltage logging, and BMS thermal sensor verification.",
      "Diagnostic-system exposure using OBD-II EV diagnostic tools.",
      "Electrical-system insulation resistance testing using megohmmeters.",
      "EV High-Voltage safety procedures: Lockout/Tagout (LOTO), MSD removal, and zero-voltage verification.",
      "Understanding practical EV troubleshooting and DTC resolution."
    ],
    machines: [
      { name: "EV Traction Battery Pack", desc: "Modular Lithium-Ion battery units with integrated BMS units." },
      { name: "Electric Traction Motor & Dyno", desc: "PMSM or Induction motor coupled to a dyno load test bench." },
      { name: "Power Inverter & DC-DC Converter", desc: "High-power switching electronics for motor control and 12V auxiliary power." },
      { name: "EV Charging Station", desc: "Dual AC (7kW/22kW) and DC Fast Charger (30kW+) testing terminals." },
      { name: "Battery Cell Tester & Balancer", desc: "Cycling equipment to test cell capacity, internal resistance, and balance." },
      { name: "Automotive OBD-II Scanner", desc: "Advanced EV diagnostic tools for reading live P-codes and sensor data." },
      { name: "Insulated HV Safety Tools & PPE", desc: "1000V rated tools, high-voltage gloves, arc-flash shields, and MSD pullers." },
      { name: "High-Voltage Insulation Tester", desc: "Megohmmeters for checking HV line isolation to chassis ground." }
    ],
    software: [
      "MATLAB / Simulink (EV Powertrain & Battery Modeling)",
      "Automotive Diagnostic Software (OBD-II Scan Tool Telemetry)",
      "CAN Bus Analyzer Tools (CANalyzer / ValueCAN Concepts)"
    ],
    practicalActivities: [
      "Assembling battery cells in series-parallel configurations and calculating pack voltage/capacity",
      "Measuring individual cell voltages and running BMS cell balancing routines",
      "Connecting a diagnostic scanner to an EV trainer to trace live parameters (SoC, cell temp, motor RPM)",
      "Simulating an insulation fault and locating the fault using a high-voltage insulation tester",
      "Executing high-voltage de-energization procedures following industry LOTO guidelines"
    ],
    whatStudentsLearn: [
      "EV powertrain architecture and component interaction dynamics.",
      "Lithium-ion battery chemistry, assembly, and thermal management.",
      "Operation of electric traction motors and high-power inverters.",
      "Functions and protective algorithms of Battery Management Systems (BMS).",
      "EV charging standards, fast charging protocols, and high-voltage safety compliance."
    ],
    skillsDeveloped: [
      "EV Architecture Mapping",
      "Battery Pack Parameter Analysis",
      "High-Voltage Safety Protocol Execution",
      "EV Computer Diagnostics & DTC Analysis",
      "CAN Bus Telemetry Monitoring",
      "Electrical Isolation Troubleshooting"
    ],
    realWorldApplications: [
      "Passenger Electric Cars, SUVs & Hybrid Vehicles",
      "Electric Two-Wheelers & Three-Wheelers (Scooters/E-Rickshaws)",
      "Commercial Electric Buses & Logistics Delivery Trucks",
      "EV Charging Infrastructure & Battery Swapping Stations",
      "Automotive R&D & EV Component Manufacturing Plants"
    ],
    careerRelevance: [
      "EV Powertrain Junior Engineer",
      "Battery Pack Testing & Assembly Technician",
      "EV Diagnostic & Service Engineer",
      "Charging Infrastructure Maintenance Engineer",
      "EV Calibration & Field Test Assistant"
    ],
    internshipOutcome: "Students acquire practical expertise in EV battery architectures, electric motors, high-voltage safety protocols, and computer diagnostics, preparing them for roles in electric vehicle manufacturing, R&D labs, service centers, and charging networks."
  },

  // ==========================================
  // 3. ALTERNATIVE ENERGY
  // ==========================================
  "alt-solar": {
    id: "alt-solar",
    discipline: "Alternative Energy",
    pathwayName: "Pathway – Solar Energy Systems",
    badge: "Renewable Clean Energy",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Uses sunlight to generate clean electrical energy through Photovoltaic (PV) technology.",
      "Solar PV systems convert sunlight directly into electricity using semiconductor panels.",
      "A complete system includes solar panels, inverter, charge controller, protection gear, and battery storage.",
      "Students learn how renewable energy is applied to residential, commercial, and industrial facilities."
    ],
    whyImportant: [
      "Solar energy is a leading driver of global clean energy transition and decarbonization.",
      "Rapid expansion of rooftop solar and solar farms creates huge technical employment demand.",
      "Lowers electricity expenses for businesses through self-generation and net-metering.",
      "Equips students with practical skills in solar design, array sizing, wiring, and maintenance."
    ],
    cie1: [
      "Solar-energy fundamentals and solar irradiation principles.",
      "Solar Photovoltaic (PV) technology (mono-crystalline vs. poly-crystalline panels).",
      "Core components: solar panels, string/central inverters, battery storage, charge controllers.",
      "Working principles of Grid-Tied (On-Grid), Off-Grid, and Hybrid Solar configurations.",
      "Key electrical metrics: Open Circuit Voltage (Voc), Short Circuit Current (Isc), Max Power Point (Vmp/Imp).",
      "Series and parallel panel connections to achieve required voltage and current ratings.",
      "Mechanical mounting structures for rooftop and ground-mount applications.",
      "Electrical protection gear: DC isolators, surge protection devices (SPD), earthing, and lightning arresters.",
      "System maintenance and preventive inspection protocols."
    ],
    cie2: [
      "Calculate basic daily electrical energy requirements (Wh / kWh load profiling).",
      "Study solar-panel array capacity sizing based on peak sun hours.",
      "Understand battery-storage bank capacity requirements for autonomy days.",
      "Select a suitable inverter matching array MPPT voltage input windows.",
      "Prepare a basic solar single-line diagram (SLD) incorporating AC/DC distribution boxes.",
      "Study series and parallel panel string configurations.",
      "Understand basic system cable sizing and DC voltage drop limits."
    ],
    cie3: [
      "Observe live solar rooftop installations and solar farm arrays.",
      "Panel mounting structure assembly and tilt angle alignment checking.",
      "DC string wiring, crimping, and MC4 connector installation.",
      "Inverter operation monitoring, grid synchronization, and AC output testing.",
      "Battery system parameter checks (voltage, specific gravity, BMS monitoring).",
      "Testing and maintenance: verifying Voc and Isc using multimeters.",
      "Thermal imaging inspection using infrared cameras to locate panel hotspots.",
      "Basic fault identification: diagnosing blown DC fuses, tripped SPDs, and inverter error codes.",
      "Electrical safety practices and high-voltage DC isolation procedures."
    ],
    machines: [
      { name: "Solar PV Modules", desc: "Mono-PERC and Poly-crystalline solar panels for array string assembly." },
      { name: "Solar Inverter", desc: "Grid-Tied, Off-Grid, and Hybrid string inverters with integrated MPPT trackers." },
      { name: "Charge Controller", desc: "Maximum Power Point Tracking (MPPT) and PWM battery charge control units." },
      { name: "Battery Energy Storage", desc: "Deep-cycle Lead-Acid and Lithium Iron Phosphate (LiFePO4) battery banks." },
      { name: "Solar Power / Irradiance Meter", desc: "Meters for measuring peak sunlight irradiance (W/m²)." },
      { name: "Multimeters & Clamp Meters", desc: "DC/AC clamp meters and insulation resistance testers." },
      { name: "Thermal Imaging Camera", desc: "Infrared cameras for identifying thermal hotspots on solar modules." },
      { name: "MC4 Crimp & Tool Kit", desc: "Specialized MC4 connector crimping pliers and solar cable strippers." }
    ],
    software: [
      "PV*SOL / PVsyst Concepts (Solar Design & Yield Simulation)",
      "AutoCAD (Solar Rooftop Array Layout Drafting)",
      "Inverter Remote Telemetry Portals (Cloud Monitoring Apps)"
    ],
    practicalActivities: [
      "Measuring open-circuit voltage (Voc) and short-circuit current (Isc) under varying sunlight",
      "Assembling a complete off-grid solar system (Panel → Charge Controller → Battery → Inverter → Load)",
      "Crimping DC solar cables with MC4 connectors and measuring contact resistance",
      "Measuring earth pit resistance using an Earth Resistance Tester",
      "Calculating inverter conversion efficiency by comparing DC input vs. AC output power"
    ],
    whatStudentsLearn: [
      "Solar photovoltaic energy generation concepts and system components.",
      "Methods for sizing panels, inverters, charge controllers, and battery storage.",
      "Array string wiring, AC/DC distribution, and balance of plant protection.",
      "Installation practices for mechanical rooftop mounting structures.",
      "Testing, commissioning, thermal inspection, and maintenance procedures."
    ],
    skillsDeveloped: [
      "Solar Load Calculation & Array Sizing",
      "Single-Line Diagram (SLD) Interpretation",
      "DC Cable Wiring & MC4 Connector Crimping",
      "Solar Inverter Commissioning",
      "Thermal Hotspot Inspection & Fault Diagnosis",
      "Renewable Energy Electrical Safety"
    ],
    realWorldApplications: [
      "Residential Rooftop Solar System Installations",
      "Commercial & Industrial (C&I) Solar Power Plants",
      "Utility-Scale Ground-Mounted Solar Farms",
      "Solar Agricultural Water Pumping Systems",
      "Off-Grid Microgrids & Telecommunication Towers"
    ],
    careerRelevance: [
      "Solar Site Survey Engineer",
      "Solar Design & Estimation Assistant",
      "Solar Project Execution Engineer",
      "Solar O&M (Operations & Maintenance) Technician",
      "Renewable Energy Quality Inspector"
    ],
    internshipOutcome: "Students gain practical capabilities in solar load estimation, array wiring, inverter commissioning, and diagnostic maintenance, enabling immediate entry into solar EPC companies, installer firms, and clean-tech maintenance organizations."
  },

  // ==========================================
  // 4. MECHANICAL ENGINEERING
  // ==========================================
  "mech-amt": {
    id: "mech-amt",
    discipline: "Mechanical Engineering",
    pathwayName: "Pathway – Advanced Manufacturing Technology",
    badge: "Precision Machining & Production",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Focuses on modern industrial manufacturing, machining, and production processes.",
      "Covers how raw metallic/polymeric stock is converted into finished precision components.",
      "Introduces conventional machining, CNC programming, production planning, and metrology inspection.",
      "Helps students master industrial manufacturing workflows and dimensional quality control."
    ],
    whyImportant: [
      "Manufacturing is the fundamental foundation for producing machines, automotive parts, and appliances.",
      "Modern industries require parts machined to micrometer-level accuracy.",
      "Automated CNC toolpaths reduce cycle times, material wastage, and manual errors.",
      "Ensures manufactured parts comply with Geometric Dimensioning & Tolerancing (GD&T)."
    ],
    cie1: [
      "Introduction to manufacturing industries and machine shop ecosystems.",
      "Production workflow from raw material receiving to final part inspection.",
      "Manufacturing processes (Turning, Milling, Drilling, Grinding, Threading).",
      "Machine tool operations on conventional lathes and milling machines.",
      "CNC machine tools (CNC Turning Centers & Vertical Machining Centers - VMC).",
      "Industrial cutting tools (Carbide inserts, tool holders, speed/feed selection).",
      "CNC G-code and M-code programming fundamentals.",
      "Production planning, process sheets, and quality inspection.",
      "Workplace safety, machine guards, chip handling, and PPE."
    ],
    cie2: [
      "Select a sample component blueprint and evaluate manufacturing feasibility.",
      "Identify required manufacturing process sequence (Process Planning Sheet).",
      "Prepare G-code and M-code programs for turning and milling parts.",
      "Select machines, cutting tools, speeds, feeds, and depth of cut.",
      "Study dimensions, surface finish tolerances, and GD&T symbols.",
      "Study metrology inspection methods and instrument selection.",
      "Prepare a complete manufacturing process report and cycle time estimate."
    ],
    cie3: [
      "Machine shop workshop exposure and safety orientation.",
      "Machine demonstrations on conventional lathes, mills, and CNC equipment.",
      "Hands-on workpiece setup, 3-jaw chuck clamping, and zero setting (G54).",
      "CNC tool offset setting (geometry/wear offsets) and dry-run execution.",
      "Quality inspection of machined components using vernier calipers and micrometers.",
      "Surface roughness measurement (Ra value) using electronic profilometers.",
      "Production monitoring, chip clearing, and coolant concentration checking.",
      "Safety practices, emergency stop operations, and process-improvement tracking."
    ],
    machines: [
      { name: "CNC Turning Center (Lathe)", desc: "Computer-controlled lathe with automatic tool turrets for precision turning." },
      { name: "Vertical Machining Center (VMC)", desc: "3-axis CNC milling machine equipped with Automatic Tool Changers (ATC)." },
      { name: "Conventional Lathe & Milling Machine", desc: "Engine lathes and universal milling machines for conventional machining." },
      { name: "Precision Cutting Tools", desc: "Carbide inserts, end mills, face mills, reamers, and drill bits." },
      { name: "Metrology Instruments", desc: "Digital Vernier Calipers, Micrometers, Height Gauges, Dial Test Indicators, and Slip Gauges." },
      { name: "Surface Roughness Tester", desc: "Electronic profilometer for measuring Ra surface finish values." }
    ],
    software: [
      "AutoCAD / SolidWorks (2D Component Drafting & 3D Modeling)",
      "Mastercam / Fusion 360 (CAM Toolpath Generation & Simulation)",
      "CNC Controller Simulators (Fanuc / Siemens CNC Interfaces)"
    ],
    practicalActivities: [
      "Performing turning, facing, grooving, and chamfering on a conventional lathe",
      "Writing a 2D contour G-code program and executing on a VMC simulator",
      "Setting tool length offsets (H) and work coordinate systems (G54) on a CNC controller",
      "Inspecting machined component dimensions against blueprint tolerances using micrometers",
      "Measuring surface finish (Ra) of turned and milled parts under different cutting feeds"
    ],
    whatStudentsLearn: [
      "Operational methodology for turning raw material into precision components.",
      "Working principles of conventional machine tools and modern CNC machinery.",
      "Manual G-code/M-code programming and CAM toolpath simulation.",
      "Selection criteria for cutting tools, feeds, speeds, and coolants.",
      "Use of precision measuring instruments to verify dimensional accuracy and GD&T compliance."
    ],
    skillsDeveloped: [
      "Engineering Blueprint Interpretation (GD&T)",
      "CNC Programming (G-code / M-code)",
      "Machine Tool Setup & Operation",
      "Precision Dimensional Metrology",
      "Manufacturing Process Planning",
      "Workshop Safety Compliance"
    ],
    realWorldApplications: [
      "Automotive Engine & Transmission Component Manufacturing",
      "Aerospace Structural & Hydraulic Assemblies",
      "Industrial Equipment, Pump & Valve Manufacturing",
      "Tool & Die / Mold Making Industries",
      "Precision Job-Shop & Production Facilities"
    ],
    careerRelevance: [
      "Junior Production Engineer",
      "CNC Programmer & Setter",
      "Machining Process Planning Assistant",
      "Quality Control (QC) Mechanical Inspector",
      "CAD/CAM Technician"
    ],
    internshipOutcome: "Students acquire practical competencies in manufacturing planning, CNC machine setup, tool selection, and precision dimensional inspection, facilitating entry into machining facilities, automotive component plants, and tooling organizations."
  },

  "mech-automation-robotics": {
    id: "mech-automation-robotics",
    discipline: "Mechanical Engineering",
    pathwayName: "Pathway – Automation & Robotics",
    badge: "Smart Factory & Mechatronics",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Automation uses control systems to operate machines with reduced manual intervention.",
      "Robotics uses programmable multi-axis machines to perform physical handling and processing tasks.",
      "Automation improves production throughput, quality consistency, and process control.",
      "Robotics is widely used in modern automated assembly lines and smart factories."
    ],
    whyImportant: [
      "Modern factories (Industry 4.0) rely extensively on automated production and robotic cells.",
      "Eliminates human fatigue errors, speeds up cycle times, and handles heavy loads.",
      "Robots perform welding, painting, pick-and-place, and hazardous tasks safely.",
      "High demand for engineers skilled in PLC programming, sensors, pneumatics, and robotics."
    ],
    cie1: [
      "Industrial automation fundamentals and smart factory concepts.",
      "Robotics fundamentals, robot anatomy, degrees of freedom (DOF), and end-effectors.",
      "Industrial sensors (Inductive, Capacitive, Photoelectric, Reed switches).",
      "Actuators (Pneumatic cylinders, Solenoid valves, Servo/Stepper motors).",
      "Programmable Logic Controllers (PLCs - CPU, I/O modules, power supply).",
      "Pneumatics & Hydraulics (FRL units, directional control valves).",
      "PLC Ladder Logic programming basics (Timers, Counters, Relays).",
      "Industrial machine control and interlocked safety systems."
    ],
    cie2: [
      "Build a basic automated sequential control system (e.g., Clamp and Punch sequence).",
      "Study sensor input wiring and signal logic.",
      "Develop basic PLC Ladder Logic for a conveyor sorting system.",
      "Control a pneumatic actuator or electric motor drive.",
      "Study robotic arm joint movement and trajectory planning.",
      "Understand automated production flow and bottleneck identification."
    ],
    cie3: [
      "Observe industrial multi-axis robots in action (pick-and-place, welding).",
      "Conveyor systems, sorting mechanisms, and VFD speed control.",
      "PLC control panel inspection, wiring, and status LED monitoring.",
      "Sensor-based object detection and automated reject mechanisms.",
      "Robotic arm teach pendant operation: jogging axes and saving waypoints.",
      "Automated production troubleshooting and signal tracing using multimeters.",
      "Industrial safety fencing, light curtains, and emergency stop interlocks."
    ],
    machines: [
      { name: "Programmable Logic Controller (PLC)", desc: "Siemens / Allen-Bradley PLC units with digital and analog I/O modules." },
      { name: "6-Axis Industrial Robot", desc: "Articulated industrial robot arm equipped with teach pendant and gripper." },
      { name: "Pneumatic Trainer Kit", desc: "Double-acting cylinders, 5/2-way solenoid valves, FRLs, and sensors." },
      { name: "Industrial Sensor Kit", desc: "Inductive, capacitive, photoelectric, and limit switches." },
      { name: "Human-Machine Interface (HMI)", desc: "Touchscreen operator display panels for machine control visualization." },
      { name: "Conveyor Belt & VFD Drive", desc: "Motorized conveyor system driven by an AC Variable Frequency Drive." }
    ],
    software: [
      "Siemens TIA Portal / RSLogix (PLC Ladder Logic Programming)",
      "ABB RobotStudio / FANUC ROBOGUIDE (Offline Robot Simulation)",
      "WinCC / FactoryTalk View (HMI Operator Screen Design)"
    ],
    practicalActivities: [
      "Wiring a 24V proximity sensor to a PLC input terminal and verifying register status",
      "Writing a PLC Ladder Diagram program with timers/counters for an automated conveyor sequence",
      "Assembling an electro-pneumatic circuit for a sequential dual-cylinder sequence",
      "Programming a 6-axis robot arm using a Teach Pendant for a pick-and-place task",
      "Troubleshooting a broken sensor line on a live PLC panel using voltage testing"
    ],
    whatStudentsLearn: [
      "Core structure of industrial automation systems and automated assembly lines.",
      "Ladder Diagram logic programming, timers, counters, and PLC interlocks.",
      "Principles of electro-pneumatics, valve sequencing, and fluid power actuators.",
      "Industrial robot programming, teach pendant operation, and end-effector control.",
      "Diagnostic techniques for electrical, sensor, pneumatic, and PLC control faults."
    ],
    skillsDeveloped: [
      "PLC Ladder Logic Programming",
      "Electro-Pneumatic Circuit Assembly",
      "Industrial Sensor Integration & Calibration",
      "Robotic Teach Pendant Operation",
      "Control Panel Wiring & Schematic Interpretation",
      "Automation System Troubleshooting"
    ],
    realWorldApplications: [
      "Automated Automotive Assembly & Body Welding Lines",
      "Food & Beverage Packaging & Bottling Facilities",
      "Pharmaceutical Sortation & Blister Packaging Units",
      "E-Commerce Warehouse Automated Sortation & Palletizing",
      "Electronics & Appliance Automated Assembly Operations"
    ],
    careerRelevance: [
      "Junior Automation Engineer",
      "PLC Programmer & Commissioning Assistant",
      "Robotics Maintenance Technician",
      "Control System Maintenance Engineer",
      "Mechatronics Assembly Specialist"
    ],
    internshipOutcome: "Students develop hands-on capabilities in PLC ladder logic, electro-pneumatic assembly, robotic teach pendant programming, and electrical troubleshooting, enabling them to step into automated manufacturing plants, system integration firms, and robotic cell operations."
  },

  // ==========================================
  // 5. ADFT
  // ==========================================
  "adft-production-quality": {
    id: "adft-production-quality",
    discipline: "ADFT",
    pathwayName: "Pathway – Applied Production & Quality Management",
    badge: "Apparel Quality & Production",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-23"></path></svg>`,
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Focuses on producing apparel products efficiently while maintaining strict buyer quality standards.",
      "Covers garment production planning, cutting operations, sewing line layouts, inline inspection, and defect prevention.",
      "Helps students understand the direct relationship between line productivity and garment quality.",
      "Introduces apparel tech packs, industrial documentation, and statistical quality sampling (AQL)."
    ],
    whyImportant: [
      "Garment export industries rely heavily on meeting precise buyer measurement specs and seam strengths.",
      "Systematic production planning minimizes fabric cutting waste and balances sewing line bottlenecks.",
      "Enforces final quality audit standards (AQL 2.5) to prevent defective goods from reaching buyers.",
      "Prepares students for roles in apparel export houses, buying offices, and retail brand QC teams."
    ],
    cie1: [
      "Apparel production department and factory organization structure.",
      "Garment manufacturing workflow: Sampling → Spreading & Cutting → Sewing → Finishing → Packing.",
      "Quality Control (QC - inspection) vs. Quality Assurance (QA - systemic prevention).",
      "Garment defect classification: Critical (broken needle), Major (open seam), Minor (loose thread).",
      "Understanding garment Tech Packs: measurement spec sheets, flat sketches, and BOM tables.",
      "Sewing machinery types: Lockstitch (SNLS), Overlock (Interlock), Flatlock coverstitch machines.",
      "Acceptable Quality Limit (AQL 1.5 / 2.5 / 4.0) statistical sampling inspection tables.",
      "Industrial safety: needle guards, eye shields, chain-mail gloves for cutting, and ergonomic seating."
    ],
    cie2: [
      "Study a sample garment Specification Sheet (Tech Pack) and identify critical measurement points.",
      "Prepare a sewing line layout plan (machine sequence) for a Polo shirt or formal shirt.",
      "Identify possible fabric, sewing, and finishing defects on sample garments.",
      "Create Inline Quality Inspection Checklists covering SPI (Stitches Per Inch) and seam alignment.",
      "Analyse quality problems and perform root-cause defect analysis.",
      "Study corrective-action concepts (CAR) for recurring operator stitching errors.",
      "Analyse sewing line productivity, pitch times, and line balancing bottlenecks."
    ],
    cie3: [
      "Garment factory cutting room observation: spreading, marker laydown, and band-knife cutting.",
      "Sewing line observation: tracking garment assembly across Lockstitch, Overlock, and Flatlock stations.",
      "Quality inspection: checking seam allowance accuracy, SPI rates, and collar symmetry using measuring tapes.",
      "End-of-line quality auditing: identifying shade variations, oil stains, needle cuts, and loose threads.",
      "Hands-on AQL sampling procedure on a packed carton lot: selecting sample size and Pass/Fail decision.",
      "Finishing room observation: steam pressing, thread trimming, metal detector scanning, and barcode tagging.",
      "Documentation, daily production logging, and workplace safety compliance auditing."
    ],
    machines: [
      { name: "Single Needle Lockstitch (SNLS) Machine", desc: "Core sewing machine for main seam joining operations." },
      { name: "Overlock / Serger Machine (3/4/5 Thread)", desc: "Specialized machine for edge trimming and overcasting seam protection." },
      { name: "Flatlock / Coverstitch Machine", desc: "Machine for hemming knits and elastic seam attachment." },
      { name: "Fabric Inspection Machine", desc: "Motorized rolling frame with light table for evaluating fabric defects." },
      { name: "GSM Cutter & Electronic Scale", desc: "Precision circular cutter and scale for determining fabric weight (GSM)." },
      { name: "Garment Inspection Worktable", desc: "Illuminated inspection table equipped with measurement grids and SPI gauges." },
      { name: "Needle Detector Machine", desc: "Conveyorized magnetic detector for identifying broken needle parts in packed goods." },
      { name: "Steam Iron & Pressing Station", desc: "Vacuum pressing table and industrial steam iron for garment finishing." }
    ],
    software: [
      "Apparel ERP Software (Production Order Tracking & Inventory)",
      "Lectra / Gerber CAD Concepts (Pattern Making & Marker Efficiency)",
      "Spreadsheet Quality Tools (Excel Line Balancing & Defect Charts)"
    ],
    practicalActivities: [
      "Measuring fabric weight (GSM) using a circular cutter and digital scale",
      "Conducting fabric roll inspection following the 4-Point System guidelines",
      "Inspecting finished garments against Tech Pack spec sheets using measuring tapes",
      "Checking stitch density (SPI) on various seams using an SPI magnifying gauge",
      "Performing a simulated AQL 2.5 final random inspection on a packed box lot"
    ],
    whatStudentsLearn: [
      "End-to-end production workflow of commercial garment export factories.",
      "Quality Control & Assurance methods from raw fabric receiving to final packing.",
      "Interpretation of apparel Tech Packs, specification sheets, and measurement tolerances.",
      "Operating features of industrial sewing machines, cutting tools, and finishing gear.",
      "Statistical quality sampling methods (AQL standards) and defect classification."
    ],
    skillsDeveloped: [
      "Garment Tech Pack Reading",
      "Measurement & SPI Audit",
      "Fabric & Garment Defect Identification",
      "AQL Statistical Sampling Application",
      "Sewing Line Layout Planning",
      "Quality Report Compilation"
    ],
    realWorldApplications: [
      "Garment Export Manufacturing Complexes",
      "Apparel Retail Brand Sourcing & Quality Offices",
      "Textile Processing, Weaving & Knitting Mills",
      "Buying House Quality Audit Agencies",
      "Sportswear & Industrial Uniform Manufacturing Units"
    ],
    careerRelevance: [
      "Junior Apparel Production Supervisor",
      "Garment Quality Inspector / Auditor",
      "Inline QC Controller",
      "Assistant Industrial Engineer (Apparel)",
      "Sourcing & Merchandising Assistant"
    ],
    internshipOutcome: "Students develop practical expertise in garment production workflows, defect identification, tech pack verification, and AQL statistical quality auditing, enabling immediate transition into garment export houses, buying offices, and apparel retail quality departments."
  },

  // ==========================================
  // 6. COMMERCIAL PRACTICE
  // ==========================================
  "comm-finance-taxation": {
    id: "comm-finance-taxation",
    discipline: "Commercial Practice",
    pathwayName: "Pathway – Finance & Taxation",
    badge: "Corporate Accounting & GST",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Covers essential financial activities required to operate commercial and corporate businesses.",
      "Includes double-entry bookkeeping, invoicing, GST compliance, TDS taxation, and financial record management.",
      "Introduces students to digital business documentation, corporate ledgers, and financial statements.",
      "Focuses primarily on digital tools, spreadsheet modeling, and software rather than physical machinery."
    ],
    whyImportant: [
      "Every business entity must maintain accurate financial books and comply with statutory tax filing deadlines.",
      "Structured documentation gives management visibility into cash flows, profits, and tax liabilities.",
      "Modern accounting is fully digitized, requiring professionals skilled in Tally Prime, Excel, and e-filing.",
      "Creates universal employment opportunities across accounting firms, corporate offices, and SMEs."
    ],
    cie1: [
      "Introduction to corporate finance departments and accounting firms.",
      "Basic accounting principles, double-entry bookkeeping, and Chart of Accounts.",
      "Business transaction cycle: Purchase Orders → Invoices → Vouchers → Receipts.",
      "Invoicing standards, HSN/SAC codes, and GST tax structure (CGST, SGST, IGST).",
      "Goods and Services Tax (GST) framework and Input Tax Credit (ITC) mechanism.",
      "Introduction to Tax Deducted at Source (TDS) basic concepts and deduction rules.",
      "Payroll documentation fundamentals (CTC breakup, PF, ESI, Professional Tax, payslips).",
      "Financial record management, digital signatures, e-Invoicing, and E-Way Bills."
    ],
    cie2: [
      "Prepare sample GST-compliant tax invoices incorporating HSN codes.",
      "Record monthly multi-item business transactions in accounting software.",
      "Create spreadsheets for financial modeling, pivot tables, and VLOOKUP analysis.",
      "Calculate net GST payable by reconciling Output GST against Input Tax Credit (ITC).",
      "Organize corporate financial records and perform Bank Reconciliation Statements (BRS).",
      "Prepare simple financial summary reports (Trial Balance, P&L Account, Balance Sheet).",
      "Analyse sample business data and monthly payroll sheets."
    ],
    cie3: [
      "Understand real business financial documentation and audit trails.",
      "Study invoice-processing workflows, vendor payment approvals, and voucher archiving.",
      "Financial-record management using Tally Prime / Zoho Books platforms.",
      "Business reporting: Day Book, Cash Flow Statement, Aged Receivables/Payables.",
      "Payroll-related documentation, statutory PF/ESI filing sheets, and Form 16 generation.",
      "Spreadsheet-based financial analysis and ratio calculations.",
      "Understanding compliance accuracy, internal audit routines, and financial ethics."
    ],
    machines: [
      { name: "Tally Prime Software", desc: "Standard enterprise accounting, inventory management, and GST compliance software." },
      { name: "Zoho Books / QuickBooks", desc: "Cloud-based accounting software platforms for modern business bookkeeping." },
      { name: "Microsoft Excel (Advanced)", desc: "Essential tool for financial modeling, pivot tables, VLOOKUP/XLOOKUP, and tax formulas." },
      { name: "GST Portal Interfaces", desc: "Simulation environments for GSTR filing forms, ITC ledgers, and HSN lookup tools." },
      { name: "Digital Archiving System", desc: "PDF management, digital signature tools, and cloud storage systems for vouchers." }
    ],
    software: [
      "Tally Prime (Enterprise Accounting & Taxation)",
      "Zoho Books (Cloud Accounting & Automated Invoicing)",
      "Microsoft Excel (Advanced Data Modeling & Financial Analytics)",
      "GST & Tax Filing Portal Simulation Sandboxes"
    ],
    practicalActivities: [
      "Setting up a new company profile in Tally Prime, configuring GST details, and creating ledgers",
      "Recording 20+ multi-item purchase and sales vouchers with CGST/SGST/IGST tax calculation",
      "Compiling a complete monthly payroll spreadsheet in MS Excel with statutory deduction formulas",
      "Executing a monthly Bank Reconciliation Statement in Tally to resolve ledger vs. bank statement variances",
      "Generating automated Trial Balance, Profit & Loss statement, and Balance Sheet reports"
    ],
    whatStudentsLearn: [
      "Principles of double-entry financial accounting and computerized ledger management.",
      "Mechanics of GST taxation, Input Tax Credit (ITC) utilization, and compliant invoicing.",
      "Processing requirements for payroll administration, payslips, and statutory deductions.",
      "Use of advanced MS Excel functions for financial analysis, data audit, and reporting.",
      "Workflow requirements for corporate financial compliance, bank reconciliation, and audit preparation."
    ],
    skillsDeveloped: [
      "Computerized Bookkeeping (Tally Prime / Zoho)",
      "Advanced MS Excel Financial Modeling",
      "GST & Tax Invoice Preparation",
      "Bank & Ledger Reconciliation",
      "Payroll & Statutory Deduction Processing",
      "Financial Data Accuracy & Audit Verification"
    ],
    realWorldApplications: [
      "Corporate Accounting & Finance Departments",
      "Chartered Accountancy (CA) & Tax Audit Consultancies",
      "Commercial Wholesale, Retail & SME Business Bookkeeping",
      "E-Commerce Business Financial Operations & Billing",
      "Banking & Financial Services Back-Office Processing Centers"
    ],
    careerRelevance: [
      "Junior Accountant / Bookkeeper",
      "Accounts Payable / Receivable Clerk",
      "GST Billing & Taxation Assistant",
      "Payroll Processing Executive",
      "Commercial Operations Assistant"
    ],
    internshipOutcome: "Students acquire practical fluency in computerized accounting software (Tally/Zoho), GST invoicing, MS Excel financial tools, and payroll documentation, enabling immediate entry into corporate accounts departments, accounting agencies, and financial operations centers."
  },

  // ==========================================
  // 7. COMPUTER SCIENCE
  // ==========================================
  "cs-cybersecurity": {
    id: "cs-cybersecurity",
    discipline: "Computer Science",
    pathwayName: "Pathway 1 – Cybersecurity",
    badge: "Information & Network Security",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Protects computers, networks, applications, and digital data from cyber threats.",
      "Prevents unauthorized access, data breaches, malware infections, and cyber attacks.",
      "Helps organizations protect customer information, financial records, and core business systems.",
      "Crucial across banking, healthcare, e-commerce, government, and technology companies."
    ],
    whyImportant: [
      "Pervasive threat landscape: modern enterprises face continuous ransomware, phishing, and hack attempts.",
      "Safeguards critical digital infrastructure and maintains the CIA Triad (Confidentiality, Integrity, Availability).",
      "Ensures regulatory compliance with data protection laws (GDPR, ISO 27001).",
      "High global demand for certified cybersecurity analysts, SOC operators, and ethical hackers."
    ],
    cie1: [
      "Cybersecurity fundamentals and the CIA Triad (Confidentiality, Integrity, Availability).",
      "Network-security basics: firewalls, VPNs, IDS/IPS, and network segmentation.",
      "Cyber threats: Malware (viruses, ransomware), Phishing, Man-in-the-Middle, DDoS attacks.",
      "Web application threats: SQL Injection (SQLi) and Cross-Site Scripting (XSS).",
      "Authentication mechanisms, Multi-Factor Authentication (MFA), and Access Control (RBAC).",
      "Cryptography fundamentals: Symmetric (AES), Asymmetric (RSA), Hashing (SHA-256), and SSL/TLS.",
      "Vulnerability assessment concepts and ethical-hacking fundamentals.",
      "Security policies, incident response awareness, and acceptable use guidelines."
    ],
    cie2: [
      "Network security topology exercises and firewall rule-base design.",
      "Vulnerability identification in controlled lab environments.",
      "Network packet analysis using Wireshark to inspect unencrypted traffic.",
      "Authentication policies and Role-Based Access Control (RBAC) matrix creation.",
      "Security-log analysis on SIEM dashboards.",
      "Safe ethical-hacking demonstrations on vulnerable web applications.",
      "Drafting an Incident Response Checklist for malware containment."
    ],
    cie3: [
      "Understand how enterprise Security Operations Centers (SOC) protect systems.",
      "Hands-on network port scanning with Nmap to identify running services and OS signatures.",
      "Web application security testing using OWASP ZAP / Burp Suite Community Edition.",
      "Security monitoring, log aggregation, and alert analysis on SIEM platforms.",
      "Vulnerability management scanning using OpenVAS / Nessus Essentials.",
      "System hardening exercises: disabling open service ports and configuring firewall rules.",
      "Defensive security practices and SSL/TLS certificate verification."
    ],
    machines: [
      { name: "Wireshark", desc: "Industry-standard network packet analyzer for deep protocol inspection." },
      { name: "Nmap", desc: "Network mapper utility for network discovery, port scanning, and OS detection." },
      { name: "OWASP ZAP / Burp Suite", desc: "Web application security testing proxy tools for vulnerability scanning." },
      { name: "Metasploit Framework", desc: "Penetration testing software used in controlled labs to demonstrate exploit concepts." },
      { name: "OpenVAS / Nessus", desc: "Vulnerability assessment tools for scanning system exposures." },
      { name: "Splunk / ELK Security", desc: "SIEM platform concepts for log aggregation, security monitoring, and alerts." },
      { name: "VirtualBox / VMware Sandbox", desc: "Isolated sandbox environments for running security test labs safely." }
    ],
    software: [
      "Wireshark (Network Packet Capture & Protocol Analysis)",
      "Nmap (Network Port & Service Discovery Scanner)",
      "OWASP ZAP / Burp Suite (Web Vulnerability Scanner)",
      "Splunk / Elastic Security (SIEM Log Analytics)"
    ],
    practicalActivities: [
      "Capturing local network traffic with Wireshark and analyzing plain-text password exposures",
      "Executing an Nmap port scan against a lab target IP and compiling a service discovery report",
      "Testing a vulnerable web login form for SQL Injection using OWASP ZAP and verifying the fix",
      "Calculating and verifying SHA-256 cryptographic hash values of files to confirm integrity",
      "Configuring firewall rules to block unauthorized inbound ping and SSH port attempts"
    ],
    whatStudentsLearn: [
      "Core principles of information security, defensive techniques, and the CIA Triad.",
      "Operating principles of firewalls, IDS/IPS systems, VPNs, and network segmentation.",
      "Practical methods for identifying network vulnerabilities, open ports, and web security flaws.",
      "Symmetric/Asymmetric cryptography concepts, hashing algorithms, and digital certificates.",
      "Log monitoring principles, SIEM alert analysis, and basic incident response procedures."
    ],
    skillsDeveloped: [
      "Network Packet Analysis (Wireshark)",
      "Network Discovery & Port Scanning (Nmap)",
      "Web Application Vulnerability Identification",
      "Firewall & Security Rule Configuration",
      "System Hardening & Patch Verification",
      "Cybersecurity Log Monitoring"
    ],
    realWorldApplications: [
      "Enterprise Network & Infrastructure Security",
      "Banking & Financial Digital Transaction Protection",
      "E-Commerce Web Application Security",
      "Corporate Security Operations Centers (SOC)",
      "Cloud & Data Center Defensive Security"
    ],
    careerRelevance: [
      "Junior Cybersecurity Analyst",
      "SOC (Security Operations Center) L1 Analyst",
      "Junior Network Security Engineer",
      "Vulnerability Assessment Assistant",
      "IT Security Support Specialist"
    ],
    internshipOutcome: "Students acquire practical competencies in network packet analysis, vulnerability scanning, security log monitoring, and basic system hardening, enabling them to join enterprise SOC teams, IT security departments, and managed security consultancies."
  },

  "cs-cloud-computing": {
    id: "cs-cloud-computing",
    discipline: "Computer Science",
    pathwayName: "Pathway 2 – Cloud Computing",
    badge: "Cloud Architecture & Hosting",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 001-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Provides computing services—servers, storage, databases, networking—over the internet on a pay-as-you-go model.",
      "Allows organizations to host systems without maintaining expensive physical data centers on site.",
      "Covers Cloud Service Models (IaaS, PaaS, SaaS), Virtual Machines, Object Storage, VPCs, and IAM.",
      "Essential foundation for modern web applications, mobile backends, and enterprise software hosting."
    ],
    whyImportant: [
      "Modern tech companies and enterprises host applications predominantly on cloud platforms (AWS, Azure, GCP).",
      "Enables instant scalability to handle traffic spikes up or down efficiently.",
      "Reduces capital expenditure (CapEx) for physical server hardware into dynamic operational cost (OpEx).",
      "High career demand for certified cloud administrators, DevOps assistants, and cloud architects."
    ],
    cie1: [
      "Cloud fundamentals and hyperscaler overview (AWS, Azure, GCP).",
      "Cloud service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS).",
      "Cloud deployment models: Public, Private, Hybrid, and Multi-Cloud architectures.",
      "Virtualization fundamentals, Hypervisors (Type-1/2), Virtual Machines (VMs), and Containers.",
      "Core cloud components: Compute (VMs), Storage (Object/Block Storage), Networking (VPC), Databases.",
      "Identity and Access Management (IAM): users, groups, roles, policy JSON documents.",
      "Cloud security basics: Shared Responsibility Model, Security Groups, NACLs, and encryption.",
      "Resource monitoring, cost calculation, and auto-scaling concepts."
    ],
    cie2: [
      "Design a 2-tier cloud architecture diagram (Web Server VM → Managed Database) inside a Virtual Private Cloud (VPC).",
      "Configure Virtual Private Cloud (VPC) networking: subnets, route tables, and internet gateways.",
      "Write an Identity & Access Management (IAM) policy document following least-privilege rules.",
      "Configure static website hosting using Cloud Object Storage (e.g., AWS S3 / Azure Blob).",
      "Calculate monthly cloud cost estimates using official cloud pricing calculators.",
      "Configure Cloud Monitoring alerts triggered by high CPU utilization (>80%) on a virtual server.",
      "Draft a cloud virtual machine deployment procedure log."
    ],
    cie3: [
      "Hands-on navigation of Cloud Management Consoles (AWS / Azure / GCP).",
      "Provisioning a Linux/Windows Virtual Machine (e.g., AWS EC2 / Azure VM) with SSH key pairs.",
      "Creating Cloud Storage Buckets (S3/Blob), uploading files, and setting access permissions.",
      "Configuring Security Groups (Virtual Firewalls) allowing HTTP (80), HTTPS (443), and SSH (22).",
      "Deploying a web server stack (NGINX / Apache) on a cloud VM and serving a live site.",
      "Provisioning a Cloud Managed Database (AWS RDS / Azure SQL) and testing connectivity.",
      "Inspecting cloud monitoring metrics (CPU usage, network I/O, disk ops) on CloudWatch dashboards."
    ],
    machines: [
      { name: "AWS / Azure / GCP Consoles", desc: "Cloud management portals for provisioning virtual infrastructure." },
      { name: "SSH & Terminal Clients", desc: "PuTTY, OpenSSH, or MobaXterm for remote server command-line management." },
      { name: "Cloud Shell", desc: "Native command-line shell interfaces for cloud resource automation." },
      { name: "VirtualBox / VMware", desc: "Local hypervisors for testing virtual machine OS installations locally." },
      { name: "Docker", desc: "Containerization tool for packaging applications into light container images." }
    ],
    software: [
      "AWS / Azure / GCP Management Consoles",
      "PuTTY / OpenSSH (Remote Server Administration)",
      "Docker (Application Containerization Basics)",
      "AWS CloudWatch / Azure Monitor (Resource Metric Dashboards)"
    ],
    practicalActivities: [
      "Launching a Linux Virtual Machine on a cloud platform, connecting via SSH, and setting up NGINX",
      "Creating a public Cloud Object Storage bucket, configuring static website hosting, and uploading assets",
      "Configuring a custom Virtual Private Cloud (VPC) with public/private subnets and route tables",
      "Creating custom IAM Users, Groups, and JSON permission policies restricting service access",
      "Setting up a Cloud Watch Metric Alarm sending email alerts when VM CPU usage exceeds thresholds"
    ],
    whatStudentsLearn: [
      "Foundational architecture of modern cloud computing and cloud service models (IaaS, PaaS, SaaS).",
      "Provisioning, managing, and securing virtual servers, cloud storage, and virtual network infrastructure.",
      "Identity & Access Management (IAM) implementation following the principle of least privilege.",
      "Cloud network design, including VPCs, subnets, security groups, and routing tables.",
      "Cloud monitoring, resource utilization tracking, and cost calculation methodologies."
    ],
    skillsDeveloped: [
      "Cloud Console Navigation (AWS / Azure / GCP)",
      "Virtual Machine (VM) Provisioning & Linux Administration",
      "Cloud Storage Configuration & Management",
      "Cloud Network & Security Group Setup",
      "IAM Policy Configuration",
      "Cloud Resource Monitoring"
    ],
    realWorldApplications: [
      "Enterprise Application Hosting & Cloud Migration",
      "E-Commerce Scalable Cloud Web Infrastructure",
      "SaaS Product Backend Operations & Database Management",
      "Cloud Storage & Disaster Recovery Data Solutions",
      "Global Content Delivery Networks (CDN) & Web Hosting"
    ],
    careerRelevance: [
      "Junior Cloud Engineer / Administrator",
      "Cloud Support Associate",
      "Junior DevOps Specialist",
      "Systems Operations (SysOps) Assistant",
      "Cloud Infrastructure Technician"
    ],
    internshipOutcome: "Students acquire hands-on competencies in cloud server provisioning, cloud storage management, virtual networking, IAM security, and monitoring, enabling immediate entry into cloud hosting companies, IT service firms, and enterprise cloud operations teams."
  },

  "cs-ai-ml": {
    id: "cs-ai-ml",
    discipline: "Computer Science",
    pathwayName: "Pathway 3 – AI & Machine Learning",
    badge: "Predictive Analytics & Intelligence",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Enables computers to perform decision-making tasks associated with human intelligence.",
      "Machine Learning (ML) uses statistical algorithms to learn patterns directly from historical data.",
      "Used in predictive modeling, classification, recommendation systems, automation, and analytics.",
      "Shifts development from hard-coded rules to data-driven model training pipelines."
    ],
    whyImportant: [
      "AI/ML is transforming industries through automated predictions, natural language, and computer vision.",
      "Massive growth in organizational data creates high demand for data-driven analytics and ML models.",
      "Enhances decision accuracy in finance, healthcare diagnosis, retail, and manufacturing quality.",
      "Machine learning engineers and data analysts represent premier high-growth technical careers."
    ],
    cie1: [
      "AI fundamentals vs. Machine Learning vs. Deep Learning.",
      "ML paradigms: Supervised Learning (labeled data), Unsupervised Learning (clustering), Reinforcement Learning.",
      "Supervised learning tasks: Regression (predicting continuous values) vs. Classification (predicting categories).",
      "Data fundamentals: features, target labels, training sets vs. testing sets.",
      "Overfitting vs. Underfitting and model bias-variance trade-offs.",
      "Foundational ML algorithms: Linear Regression, Decision Trees, K-Nearest Neighbors (KNN), K-Means Clustering.",
      "Machine Learning project lifecycle from raw data ingestion to model deployment.",
      "AI ethics: data privacy, algorithmic bias, and responsible AI principles."
    ],
    cie2: [
      "Work with structured CSV datasets in Python data science environments.",
      "Perform data cleaning: handling missing values, encoding categorical variables, and feature scaling.",
      "Analyse data correlations and feature distributions using charts.",
      "Select features, split datasets into training and testing sets (70/30 split).",
      "Train a Linear Regression model to predict numerical trends.",
      "Train a Decision Tree Classifier to categorize records into target classes.",
      "Evaluate results using metrics: Mean Squared Error (MSE), Accuracy, Precision, Recall, Confusion Matrix.",
      "Build a beginner-level interactive ML web application prototype."
    ],
    cie3: [
      "Study real-world AI applications: recommender engines, sentiment analysis, defect detection.",
      "Interactive coding in Jupyter Notebooks / Google Colab.",
      "Utilize Python data libraries: NumPy, Pandas, Matplotlib, Seaborn.",
      "Apply Scikit-Learn library modules for algorithm training, hyperparameter tuning, and prediction.",
      "Export trained ML models using serialization (joblib / pickle).",
      "Deploy models into basic web apps using Streamlit / Gradio framework.",
      "Quality-analysis and automated decision support applications."
    ],
    machines: [
      { name: "Python Data Environment", desc: "Python 3 runtime with computational libraries." },
      { name: "Jupyter Notebook / Google Colab", desc: "Interactive cloud notebook IDEs for data exploration and modeling." },
      { name: "Pandas & NumPy", desc: "Essential libraries for data manipulation, cleaning, and array operations." },
      { name: "Matplotlib & Seaborn", desc: "Data visualization libraries for plotting correlation heatmaps and distributions." },
      { name: "Scikit-Learn", desc: "Comprehensive machine learning library for classification, regression, and clustering." },
      { name: "Streamlit / Gradio", desc: "Frameworks for building interactive web UI demos for pre-trained ML models." }
    ],
    software: [
      "Python Data Science Stack (NumPy, Pandas, Scikit-Learn)",
      "Jupyter Notebook / Google Colab",
      "Matplotlib / Seaborn Data Visualization",
      "Streamlit (Interactive ML Web App Framework)"
    ],
    practicalActivities: [
      "Loading a dataset into Pandas, cleaning missing values, and generating summary statistics",
      "Creating correlation heatmaps and scatter plots to visualize feature relationships",
      "Training a Decision Tree Classifier, generating a Confusion Matrix, and calculating Precision/Recall",
      "Implementing K-Means Clustering on unlabeled data to segment records into distinct clusters",
      "Building a Streamlit web app that accepts user input via sliders and displays live ML predictions"
    ],
    whatStudentsLearn: [
      "End-to-end workflow of the Machine Learning lifecycle from raw data to model prediction.",
      "Practical data preprocessing, cleaning, scaling, and feature engineering using Python.",
      "Implementation principles of foundational supervised and unsupervised ML algorithms.",
      "Evaluation metrics used to measure and validate ML model accuracy.",
      "Methods for visualizing data trends and prototyping interactive AI web apps."
    ],
    skillsDeveloped: [
      "Python Data Science Programming (Pandas/NumPy)",
      "Data Preprocessing & Feature Engineering",
      "Machine Learning Algorithm Implementation (Scikit-Learn)",
      "Model Evaluation & Metric Analysis",
      "Data Visualization & Correlation Analysis",
      "ML Web App Prototyping (Streamlit)"
    ],
    realWorldApplications: [
      "E-Commerce Product Recommendation Engines",
      "Financial Credit Scoring & Fraud Detection Models",
      "Predictive Maintenance Systems in Smart Manufacturing",
      "Healthcare Risk Classification & Diagnostic Support",
      "Customer Churn Analytics & Sales Forecasting"
    ],
    careerRelevance: [
      "Junior Data Scientist",
      "Machine Learning Developer Assistant",
      "Data Analyst / BI Analyst",
      "AI QA & Model Evaluation Specialist",
      "Python Data Applications Developer"
    ],
    internshipOutcome: "Students gain practical expertise in Python data processing, machine learning algorithm training using Scikit-Learn, model evaluation, and app prototyping, enabling them to step into data science teams, AI consultancies, and analytics departments."
  },

  "cs-fullstack": {
    id: "cs-fullstack",
    discipline: "Computer Science",
    pathwayName: "Pathway 4 – Full Stack Development",
    badge: "Web & API Software Engineering",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Covers complete end-to-end web application software development across Front-End and Back-End.",
      "Front-End is what users see and interact with (HTML5, CSS3, JavaScript UI).",
      "Back-End processes application logic, HTTP routing, business rules, and security authentication.",
      "Databases (SQL/NoSQL) store data persistently, connected via RESTful APIs."
    ],
    whyImportant: [
      "Modern tech companies demand versatile developers capable of building complete web features.",
      "High employability: Full Stack developers have holistic skill sets valuable to startups and enterprises.",
      "Enables rapid product prototyping, feature implementation, and API database integration.",
      "Provides a broad technical foundation for modern web engineering and cloud software."
    ],
    cie1: [
      "Software Development Lifecycle (SDLC) and Agile workflow fundamentals.",
      "Web development fundamentals: HTML5 semantic structure, CSS3 Flexbox/Grid layouts, ES6+ JavaScript.",
      "Responsive Web Design (RWD) for mobile, tablet, and desktop viewports.",
      "Back-End concepts: Server runtimes (Node.js/Express or Python/Flask), HTTP protocols, API routing.",
      "Application Programming Interfaces (APIs): RESTful endpoints, JSON format, HTTP methods (GET, POST, PUT, DELETE).",
      "Databases: Relational (SQL: MySQL/PostgreSQL) vs. NoSQL (Document: MongoDB).",
      "Authentication & Security: password hashing (bcrypt), JWT tokens, CORS rules.",
      "Version control fundamentals with Git and GitHub repository management."
    ],
    cie2: [
      "Build responsive web page layouts with CSS Flexbox/Grid.",
      "Create interactive UI components and form validation logic with JavaScript.",
      "Design a relational database schema (ER Diagram) for a web application.",
      "Develop server-side REST API endpoints for CRUD (Create, Read, Update, Delete) operations.",
      "Connect back-end API routes to database database storage operations.",
      "Implement user authentication and token-based authorization.",
      "Test API endpoints using Postman / Insomnia and inspect JSON payloads."
    ],
    cie3: [
      "Understand real software-development workflows in code editors (VS Code).",
      "Requirement analysis, UI wireframing, and component structuring.",
      "Building responsive front-end interfaces consuming back-end REST APIs via fetch()/Axios.",
      "Database CRUD query execution and persistent data management.",
      "Testing, browser console debugging, and server error log tracing.",
      "Git version control workflows: branching, committing checkpoints, pushing to GitHub.",
      "Application deployment to cloud hosting platforms (Vercel, Netlify, Render)."
    ],
    machines: [
      { name: "Visual Studio Code", desc: "Modern code editor with developer extension ecosystem." },
      { name: "Node.js / Express Runtime", desc: "Server-side JavaScript runtime environment for building scalable APIs." },
      { name: "PostgreSQL / MySQL / MongoDB", desc: "Relational SQL and NoSQL document database systems." },
      { name: "Postman / Insomnia", desc: "API testing platforms for inspecting endpoints, parameters, and headers." },
      { name: "Git & GitHub", desc: "Version control command-line tools and repository hosting platforms." },
      { name: "Vercel / Netlify / Render", desc: "Cloud deployment platforms for hosting live full-stack applications." }
    ],
    software: [
      "HTML5, CSS3, JavaScript (ES6+), Bootstrap/Tailwind",
      "Node.js & Express.js (or Python & Flask/Django)",
      "PostgreSQL / MySQL (SQL) & MongoDB (NoSQL)",
      "Git Command Line & GitHub",
      "Postman API Testing Tool"
    ],
    practicalActivities: [
      "Building a responsive landing page using HTML5 and CSS Flexbox for desktop and mobile viewports",
      "Writing JS scripts to consume a REST API using fetch() and dynamically render cards in the DOM",
      "Creating a Node.js/Express server providing full CRUD REST API endpoints for a task manager app",
      "Writing SQL queries to create tables, establish foreign key joins, and execute CRUD operations",
      "Initializing a Git repo, committing feature branches, and deploying the live site to Render/Vercel"
    ],
    whatStudentsLearn: [
      "End-to-end architecture and execution of web applications across UI, server, and database.",
      "Front-End implementation using modern HTML5, responsive CSS3, and dynamic JavaScript.",
      "Back-End server creation, RESTful API design, HTTP protocols, and database integration.",
      "Database modeling (SQL/NoSQL), CRUD operation coding, and data security.",
      "Developer workflows including Git version control, API testing, and web cloud deployment."
    ],
    skillsDeveloped: [
      "Responsive Front-End Web Development (HTML/CSS/JS)",
      "Back-End Server & RESTful API Architecture",
      "Database Design & SQL/NoSQL Querying",
      "Full Stack CRUD Integration",
      "Git Version Control & GitHub Workflow",
      "Application Debugging & Cloud Deployment"
    ],
    realWorldApplications: [
      "E-Commerce Web Portals & Shopping Cart Platforms",
      "Enterprise Management (ERP) & Analytics Dashboards",
      "SaaS Web Product User Interfaces & Backends",
      "Social Media & Content Management Systems (CMS)",
      "Interactive Customer Service Web Portals"
    ],
    careerRelevance: [
      "Junior Full Stack Web Developer",
      "Front-End Web Developer",
      "Back-End API Developer",
      "Web Applications Developer Assistant",
      "Junior Software Engineer"
    ],
    internshipOutcome: "Students gain practical capabilities in responsive front-end design, backend REST API development, database CRUD integration, Git workflows, and web deployment, enabling immediate entry into software development houses, digital agencies, and tech startup engineering teams."
  },

  // ==========================================
  // 8. ELECTRONICS & COMMUNICATION (ECE)
  // ==========================================
  "ece-industrial-automation": {
    id: "ece-industrial-automation",
    discipline: "Electronics & Communication Engineering",
    pathwayName: "Pathway 1 – Industrial Automation",
    badge: "Electronic Sensing & Control",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Applies electronic sensing, signal conditioning, PLC logic, and industrial communication to automate machines.",
      "Covers industrial electronic sensors, 4-20mA signal loops, PLCs, RS-485/Modbus serial buses, and motor drives.",
      "Emphasizes the electronic circuit interface between physical sensors, digital controllers, and industrial power equipment.",
      "Bridges analog/digital electronics, signal processing, microcontrollers, and factory control automation."
    ],
    whyImportant: [
      "Industrial automation relies on microsecond-level electronic sensing and control loop processing.",
      "Requires electronic expertise to filter noise, convert analog sensor signals (4-20mA/0-10V), and drive actuators.",
      "Integrates field-level electronic sensors with higher-level industrial networks and control panels.",
      "High demand for ECE graduates skilled in PLC panel wiring, sensor calibration, and serial bus diagnostics."
    ],
    cie1: [
      "Industrial automation fundamentals from an electronic systems perspective.",
      "Signal flow: Physical Parameter → Sensor → Signal Conditioning → Controller (PLC) → Driver → Actuator.",
      "Industrial sensors: PT100 RTDs, Thermocouples, 4-20mA Pressure Transmitters, Optical Encoders.",
      "Industrial signal standards: 4-20mA current loops, 0-10V analog signals, 24V DC digital logic.",
      "PLC digital I/O sourcing/sinking configurations and analog-to-digital (ADC) expansion modules.",
      "Industrial Communication Protocols: RS-232, RS-485 serial standards, Modbus RTU/TCP, Industrial Ethernet.",
      "Motor Control Electronics: Variable Frequency Drives (VFDs) for AC motors, Servo Drives, Stepper drives.",
      "Industrial safety: opto-coupler isolation, surge suppressors, grounding/shielding, emergency interlocks."
    ],
    cie2: [
      "Sensor-based signal conditioning circuit design (converting small sensor signals to 0-5V ADC inputs).",
      "Develop basic PLC Ladder Logic for reading analog temperature inputs and controlling relay outputs.",
      "Motor speed control interface design using PLC PWM outputs connected to Servo/VFD drives.",
      "Industrial control panel schematic design (24V DC distribution, terminal blocks, isolators, PLC I/O).",
      "Modbus RTU serial communication link setup for sensor data transmission to HMI screens.",
      "Signal noise troubleshooting checklist for diagnosing ground loops or EMI on sensor cables."
    ],
    cie3: [
      "Industrial control panel inspection: PLCs, 24V DC power supplies, opto-relays, cable shielding.",
      "Hands-on wiring of 2-wire and 3-wire industrial sensors (4-20mA output) to PLC analog inputs.",
      "Testing and calibrating analog temperature/pressure transmitters using signal calibrators.",
      "Programming PLC Ladder Logic for analog input scaling and closed-loop temperature control.",
      "Configuring Variable Frequency Drives (VFD) via keypad: acceleration ramps, frequency limits, external 0-10V control.",
      "Monitoring RS-485 Modbus serial communication signals using oscilloscopes or serial analyzers.",
      "Control panel fault diagnosis: checking 24V DC supply voltages, blown fuses, and sensor open loops."
    ],
    machines: [
      { name: "PLC Hardware Trainer", desc: "Siemens S7-1200 / Delta PLC with Analog I/O expansion modules." },
      { name: "Industrial Sensor Kit", desc: "PT100 RTDs, 4-20mA pressure transmitters, proximity switches, optical encoders." },
      { name: "Process Signal Calibrator", desc: "Handheld 4-20mA loop calibrators and voltage sources for sensor simulation." },
      { name: "Variable Frequency Drive (VFD)", desc: "3-Phase AC motor speed drive controlled via analog 0-10V signals." },
      { name: "Digital Storage Oscilloscope", desc: "Multi-channel oscilloscopes for inspecting electronic signals and serial buses." },
      { name: "USB-to-RS485 Converter Kit", desc: "Serial bus converters and Modbus monitoring software tools." }
    ],
    software: [
      "Siemens TIA Portal / Delta WPLSoft (PLC Programming)",
      "Modbus Poll / Serial Bus Monitoring Software",
      "Oscilloscope Signal Waveform Inspection Tools"
    ],
    practicalActivities: [
      "Wiring a 4-20mA pressure transmitter to a PLC analog input card and scaling digital values to pressure units",
      "Programming PLC Ladder Logic to execute closed-loop ON/OFF or PID temperature control",
      "Wiring and setting up a VFD drive to adjust AC motor speed from a 0-10V analog potentiometer",
      "Connecting an oscilloscope to an RS-485 serial bus line to observe differential voltage waveforms",
      "Troubleshooting ground-loop noise on a sensor line using differential wiring and signal isolators"
    ],
    whatStudentsLearn: [
      "Operational principles of industrial electronic sensing, signal processing, and control automation.",
      "Wiring, scaling, and calibration procedures for standard industrial analog signals (4-20mA / 0-10V).",
      "PLC Ladder Logic programming with emphasis on analog data processing and motor drive interfaces.",
      "Fundamentals of industrial communication standards (RS-485, Modbus) and electronic noise suppression.",
      "Diagnostic techniques for identifying electronic control panel, sensor loop, and power drive failures."
    ],
    skillsDeveloped: [
      "Industrial Electronic Sensor Wiring & Calibration",
      "Analog Signal Scaling & Processing (ADC/DAC)",
      "PLC Analog & Motion Control Programming",
      "Motor Drive (VFD/Servo) Setup & Parameterization",
      "Industrial Communication Protocol Analysis (Modbus/RS-485)",
      "Control Panel Electronic Troubleshooting"
    ],
    realWorldApplications: [
      "Process Control Systems in Chemical & Refining Facilities",
      "High-Speed Electronics Assembly & Testing Automated Lines",
      "Industrial Motor Control Centers (MCC) & Power Drives",
      "Building Automation & Energy Management Systems (BMS)",
      "Automated Packaging & Inspection Machinery"
    ],
    careerRelevance: [
      "Junior Industrial Electronics Engineer",
      "Automation Control Panel Technician",
      "Field Instrumentation & Calibration Assistant",
      "PLC & Drive Application Technician",
      "Industrial Systems Support Specialist"
    ],
    internshipOutcome: "Students acquire practical competencies in industrial sensor wiring, 4-20mA signal scaling, PLC analog control, motor drive setup, and RS-485 communication diagnostics, enabling immediate entry into process automation firms, control panel assembly operations, and electronic instrumentation divisions."
  },

  "ece-emobility": {
    id: "ece-emobility",
    discipline: "Electronics & Communication Engineering",
    pathwayName: "Pathway 2 – E-Mobility",
    badge: "Automotive Power Electronics & CAN",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1558441719-443b38631ad9?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Specialized electronics domain focused on EV embedded control units (VCU), power converters, BMS, and CAN networks.",
      "Covers Vehicle Control Units, High-Power Inverters, DC-DC Converters, Gate Drivers, and Controller Area Network (CAN Bus).",
      "Emphasizes power semiconductor switching (IGBTs/MOSFETs/SiC), real-time sensor processing, and embedded firmware.",
      "Connects power electronics, microcontrollers, automotive communication networks, and sensor instrumentation."
    ],
    whyImportant: [
      "Electric vehicles are fundamentally advanced electronic systems on wheels requiring specialized electronics engineers.",
      "Power semiconductor switching efficiency (SiC/IGBT) directly dictates EV driving range and battery life.",
      "EV subsystems (BMS, Inverter, VCU) continuously communicate over high-speed Controller Area Network (CAN Bus) lines.",
      "Expanding career opportunities in automotive embedded systems, power electronics design, and VCU calibration."
    ],
    cie1: [
      "Electric mobility fundamentals and EV electronic architecture.",
      "EV Electronic Systems: Vehicle Control Unit (VCU) → CAN Bus → BMS, Inverter, Onboard Charger.",
      "Power Electronics: Inverter switching stages (DC to 3-Phase AC), High-to-Low DC-DC Converters (400V to 12V), Gate Drivers.",
      "Power Semiconductors: MOSFETs, IGBTs, and Wide Bandgap Silicon Carbide (SiC) devices.",
      "Battery Management System (BMS) electronics: Analog Front-End (AFE) ICs, cell voltage sensing, balancing circuits.",
      "Automotive sensors: Resolver / Hall-Effect position sensors, current transducers, temperature NTCs.",
      "In-Vehicle Networking: Controller Area Network (CAN Bus 2.0B / CAN-FD) protocols, IDs, and frames.",
      "High-Voltage safety electronics: isolation monitoring, HVIL safety loops, emergency disconnects."
    ],
    cie2: [
      "Study EV electrical & electronic architecture schematics.",
      "Prepare battery-to-inverter-to-motor power and control signal flow diagrams.",
      "Design a Gate Driver circuit schematic driving high-side/low-side IGBT switches.",
      "Formulate a CAN Bus message frame matrix defining IDs, DLCs, and data byte layouts for battery SoC/motor speed.",
      "Analyze BMS Analog Front-End (AFE) voltage sensing schematics.",
      "Study automotive motor position sensor signal conditioning (Hall/Resolver signals).",
      "Explore power-conversion concepts and EV electronic fault isolation."
    ],
    cie3: [
      "EV component electronic board visual inspection (VCU, BMS mainboard, Inverter gate drivers, CAN transceivers).",
      "Hands-on testing of power MOSFET/IGBT switching waveforms on oscilloscopes.",
      "Monitoring live CAN Bus traffic using USB-to-CAN analyzer tools, decoding CAN IDs and data frames.",
      "BMS AFE sensor simulation using decade variable resistor boxes to test temperature fault interrupts.",
      "Testing automotive position sensor outputs (Hall-Effect signals) on a motor test bench.",
      "Injecting simulated CAN bus errors (missing heartbeat frames) and observing VCU fail-safe behavior.",
      "High-voltage isolation resistance testing on an EV electronic enclosure simulator."
    ],
    machines: [
      { name: "CAN Bus Analyzer Tool", desc: "Vector CANalyzer / Kvaser / PEAK USB-to-CAN hardware interface and software." },
      { name: "Power Electronics Test Bench", desc: "High-voltage DC power supplies, electronic loads, gate driver boards, IGBT modules." },
      { name: "Digital Storage Oscilloscope", desc: "Multi-channel oscilloscopes equipped with differential high-voltage probes." },
      { name: "BMS Electronic Evaluation Board", desc: "Modular BMS hardware featuring Analog Front-End (AFE) ICs and cell simulators." },
      { name: "Automotive Sensor Test Bench", desc: "Hall-Effect position sensors, current transducers, and temperature simulation rigs." },
      { name: "Function Generator & Multimeter", desc: "Precision signal generators and true-RMS digital multimeters." }
    ],
    software: [
      "CAN Bus Telemetry & Decoding Software (CANalyzer / BusMaster)",
      "Oscilloscope Waveform Inspection Software",
      "BMS Analog Front-End Telemetry Tools"
    ],
    practicalActivities: [
      "Connecting a USB-to-CAN analyzer to an EV network simulator and filtering specific CAN IDs (e.g. 0x18F)",
      "Capturing gate drive PWM voltage waveforms on an oscilloscope and measuring turn-on delay and dead-time",
      "Simulating an over-temperature state on a BMS sensor line and verifying firmware fault interrupt behavior",
      "Measuring current transducer output voltages under varying electrical loads and calculating scaling factors",
      "Testing CAN Bus termination circuit resistance across CAN_H and CAN_L lines (60Ω parallel resistance)"
    ],
    whatStudentsLearn: [
      "Electronic architecture governing electric vehicles, VCUs, power converters, and BMS hardware.",
      "Operation and signal requirements of gate drivers, IGBT/MOSFET switches, and DC-DC converters.",
      "Structure, signal characteristics, message frame layout, and diagnostics of CAN Bus systems.",
      "Principles of precision automotive sensing, signal conditioning, and BMS AFE monitoring ICs.",
      "Testing and diagnostic procedures for identifying automotive electronic and CAN bus communication faults."
    ],
    skillsDeveloped: [
      "CAN Bus Data Analysis & Message Decoding",
      "Power Electronics Waveform Inspection (Oscilloscope)",
      "BMS Analog Front-End (AFE) Signal Testing",
      "Automotive Sensor Output Verification",
      "Gate Driver & PWM Switching Analysis",
      "EV Electronic Diagnostics & Fault Isolation"
    ],
    realWorldApplications: [
      "EV Vehicle Control Unit (VCU) Development & Testing",
      "Traction Inverter & Power Electronics Manufacturing",
      "Battery Management System (BMS) Hardware Engineering",
      "Automotive Embedded Systems & Firmware Testing",
      "EV Charging Station Control Electronics"
    ],
    careerRelevance: [
      "Junior EV Electronics Engineer",
      "Automotive Embedded Systems Assistant",
      "CAN Bus & Vehicle Network Test Technician",
      "Power Electronics Testing Associate",
      "EV Calibration & Diagnostic Technician"
    ],
    internshipOutcome: "Students gain practical expertise in CAN bus decoding, power electronics switching analysis, BMS electronic testing, and automotive sensor verification, enabling immediate entry into EV electronics manufacturers, automotive Tier-1 suppliers, and R&D testing laboratories."
  },

  "ece-iiot": {
    id: "ece-iiot",
    discipline: "Electronics & Communication Engineering",
    pathwayName: "Pathway 3 – IIoT",
    badge: "Edge Sensing & Telemetry",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>`,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Connects industrial equipment, sensors, and electronic nodes directly to digital cloud systems.",
      "Allows organizations to collect, stream, and analyze machine data in real time.",
      "Supports smart factory automation, remote telemetry, predictive maintenance, and data-driven decisions.",
      "Bridges embedded electronics, wireless networking (Wi-Fi/LoRa), MQTT messaging, and cloud dashboards."
    ],
    whyImportant: [
      "IIoT is a core pillar of Industry 4.0, transforming conventional factories into connected Smart Factories.",
      "Predictive telemetry of machine vibration and temperature prevents catastrophic equipment failures.",
      "Enables remote operational visibility over industrial assets from anywhere via web dashboards.",
      "High demand for ECE graduates who combine sensor hardware, embedded microcontrollers, and cloud telemetry."
    ],
    cie1: [
      "IoT fundamentals and Industrial IoT (IIoT) architecture.",
      "IIoT System Layers: Sensor Node → Edge Gateway → Wireless Network → Cloud IoT Platform → User Dashboard.",
      "Sensor Interfacing: I2C, SPI, UART digital buses, 4-20mA analog interfaces, accelerometers, thermocouples.",
      "Edge Computing: role of low-power microcontrollers (ESP32, STM32, Raspberry Pi) in edge sensor processing.",
      "Wireless & Wired Communications: Wi-Fi, Bluetooth LE, LoRaWAN, Cellular, Ethernet, Modbus.",
      "IIoT Messaging Protocols: MQTT (Publish/Subscribe architecture, topics, JSON payloads, QoS levels) and HTTP APIs.",
      "Cloud IoT Platforms (AWS IoT Core, ThingsBoard, Node-RED) for device management.",
      "IIoT Cybersecurity: TLS/SSL encryption, authentication tokens, and remote monitoring integration."
    ],
    cie2: [
      "Design an IIoT Sensor Node schematic connecting digital vibration/temp sensors (I2C) to an ESP32 node.",
      "Formulate an MQTT Topic Hierarchy and JSON Data Payload schema (e.g. factory/line1/machine1/telemetry).",
      "Write embedded C/Python code to sample sensors, format JSON strings, and publish MQTT messages.",
      "Design a Cloud Telemetry Dashboard layout (ThingsBoard / Node-RED) with gauges and line charts.",
      "Design an Edge Gateway setup connecting an RS-485 Modbus sensor to an Ethernet MQTT bridge.",
      "Draft an IIoT Troubleshooting Guide for diagnosing device offline status or MQTT dropouts."
    ],
    cie3: [
      "Industrial IIoT hardware inspection: IP-rated sensor node enclosures, edge gateways, antennas.",
      "Hands-on assembly and wiring of sensor modules to ESP32 / Raspberry Pi developer platforms.",
      "Configuring an MQTT Broker (Mosquitto) and testing message streams using MQTT Explorer.",
      "Connecting IIoT edge hardware to a Cloud IoT Platform (ThingsBoard / AWS IoT Core).",
      "Building a live web dashboard displaying real-time vibration and temperature charts from an active node.",
      "Configuring automated SMS/Email alerts triggered when sensor values exceed safety thresholds.",
      "Simulating network disconnects and verifying edge storage/retry buffering logic on the node."
    ],
    machines: [
      { name: "Microcontroller Developer Kits", desc: "ESP32, STM32, or Raspberry Pi boards with Wi-Fi/Bluetooth." },
      { name: "Industrial IIoT Sensors", desc: "MPU6050 vibration accelerometers, PT100 temperature, CT current transformers." },
      { name: "Industrial Edge Gateway", desc: "Modbus-to-MQTT gateways or Raspberry Pi industrial computing setups." },
      { name: "MQTT Broker & Tools", desc: "Mosquitto MQTT Broker, MQTT Explorer, and MQTT.fx testing clients." },
      { name: "Cloud Dashboard Platforms", desc: "ThingsBoard (Open-Source), Node-RED, AWS IoT Core, or Adafruit IO." },
      { name: "Embedded IDEs", desc: "Arduino IDE, VS Code with PlatformIO, or Python programming environments." }
    ],
    software: [
      "MQTT Explorer & Mosquitto Broker",
      "Node-RED Flow Designer / ThingsBoard IoT Platform",
      "Arduino IDE / PlatformIO (Embedded C++ Coding)"
    ],
    practicalActivities: [
      "Wiring an I2C vibration sensor to an ESP32 node and reading raw acceleration data on serial terminal",
      "Programming ESP32 to establish Wi-Fi, connect to an MQTT broker via SSL, and publish JSON telemetry strings",
      "Setting up a Node-RED dashboard subscribing to MQTT topics and mapping data to gauge widgets",
      "Interfacing a split-core current transformer to measure AC motor current and streaming data to cloud",
      "Troubleshooting MQTT connection dropouts using serial debug logs and port connectivity checks"
    ],
    whatStudentsLearn: [
      "Complete technical architecture of Industrial Internet of Things (IIoT) systems.",
      "Methods for interfacing analog and digital sensors with microcontroller edge nodes.",
      "Implementation of the MQTT publish/subscribe protocol, JSON payloads, and wireless transmission.",
      "Configuration of cloud IoT platforms, telemetry databases, and real-time visual dashboards.",
      "Systematic techniques for diagnosing wireless communication, sensor hardware, and MQTT faults."
    ],
    skillsDeveloped: [
      "IIoT Sensor Interfacing (I2C / SPI / Analog)",
      "Microcontroller Embedded Programming (ESP32 / C++)",
      "MQTT Communication Protocol Configuration",
      "Cloud Telemetry Dashboard Creation (Node-RED / ThingsBoard)",
      "Edge Data JSON Payload Formatting",
      "IIoT System Connectivity Troubleshooting"
    ],
    realWorldApplications: [
      "Remote Industrial Machine Condition & Vibration Monitoring",
      "Smart Factory Automated Environmental & Energy Tracking",
      "Cold Chain Logistics Temperature & Humidity Tracking",
      "Smart Water & Utility Infrastructure Management",
      "Predictive Maintenance Deployments in Process Plants"
    ],
    careerRelevance: [
      "Junior IIoT Application Engineer",
      "Embedded IoT Developer Assistant",
      "Smart Factory Systems Technician",
      "Industrial Telemetry & Dashboard Specialist",
      "IIoT Field Integration Associate"
    ],
    internshipOutcome: "Students acquire practical competencies in sensor node wiring, embedded MQTT programming, cloud telemetry dashboard creation, and edge-to-cloud troubleshooting, enabling immediate entry into smart factory integrators, IIoT solution providers, and industrial automation firms."
  },

  // ==========================================
  // 9. ELECTRICAL & ELECTRONICS (EEE)
  // ==========================================
  "eee-utility": {
    id: "eee-utility",
    discipline: "Electrical & Electronics Engineering",
    pathwayName: "Pathway 1 – Electrical Utility",
    badge: "Power Distribution & Switchgear",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Focuses on electrical power distribution, high-voltage substations, transformers, and switchgear protection.",
      "Covers step-down substations, Vacuum Circuit Breakers (VCB), protective relays, busbars, and safety systems.",
      "Ensures continuous, high-quality, and safe electrical power delivery to industrial and commercial facilities.",
      "Bridges power systems, electrical machines, switchgear protection, and utility safety compliance."
    ],
    whyImportant: [
      "Electrical utilities form the mandatory infrastructure powering cities, factories, and commercial complexes.",
      "High-voltage switchgear and protective relays prevent catastrophic blackouts and equipment destruction during short-circuits.",
      "Enforces strict high-voltage safety rules, earthing grid design, and Permit to Work (PTW) protocols.",
      "High demand across DISCOM utilities, substations, heavy industrial plants, and electrical EPC contractors."
    ],
    cie1: [
      "Electrical power fundamentals, distribution grid layouts, and substation types.",
      "Substation Single-Line Diagram (SLD) architecture (33kV / 11kV step-down substations).",
      "Power & Distribution Transformers: working principles, cooling, and tap changers.",
      "High-Voltage Switchgear & Circuit Breakers: Air (ACB), Vacuum (VCB), and SF6 Circuit Breakers.",
      "Protective Relays: Overcurrent, Earth Fault, Differential protection, and Current/Voltage Transformers (CT/PT).",
      "Busbar configurations: single, sectionalized, and double busbar arrangements.",
      "Electrical earthing and grounding systems: earthing mats, ground pits, and neutral grounding resistors (NGR).",
      "Electrical safety: Permit to Work (PTW), Lockout/Tagout (LOTO), safety clearances, and arc-flash PPE."
    ],
    cie2: [
      "Prepare a basic distribution-system single-line diagram (SLD) for an industrial plant.",
      "Study transformer capacity sizing (kVA / MVA) based on connected load profiles.",
      "Calculate short-circuit fault currents to select circuit breaker breaking capacity (kA).",
      "Study switchgear operation, interlocking mechanisms, and CT/PT ratios.",
      "Understand circuit protection relay trip schematics.",
      "Analyse basic load distribution, busbar sizing, and voltage drop limits.",
      "Study electrical safety, PTW documentation, and LOTO isolation sequences."
    ],
    cie3: [
      "Electrical-equipment and outdoor/indoor substation inspection.",
      "Distribution-system exposure: observing VCB panel racking in / racking out mechanisms.",
      "Transformer observation: Buchholz relay, Oil Temperature Indicator (OTI), Winding Temperature Indicator (WTI), Breather.",
      "Switchgear observation: ACB/VCB panel operation, manual spring charging, close/trip testing.",
      "Protection systems: secondary current injection testing of numerical overcurrent relays.",
      "Maintenance practices: transformer insulation testing (Megger test) and earth pit resistance measurement.",
      "Safety procedures, Permit to Work issuance, and LOTO lock attachment."
    ],
    machines: [
      { name: "VCB Switchgear Panel", desc: "11kV Vacuum Circuit Breaker demonstration panel with racking mechanism and relays." },
      { name: "Digital Protective Relays", desc: "Microprocessor-based numerical relays for overcurrent and earth fault protection." },
      { name: "Insulation Tester (Megger)", desc: "High-voltage insulation resistance testing meters (1kV / 2.5kV / 5kV)." },
      { name: "Earth Resistance Tester", desc: "3-pole / 4-pole earth pit resistance measurement instruments." },
      { name: "Secondary Injection Test Kit", desc: "Portable test set for injecting calibrated AC currents into protective relays." },
      { name: "High-Voltage Safety Gear", desc: "Arc-flash suits, 11kV rated gloves, discharge rods, and voltage detectors." }
    ],
    software: [
      "Single-Line Diagram (SLD) AutoCAD Drafting",
      "Numerical Relay Configuration Software (Siemens SIPROTEC / ABB)",
      "Electrical Fault Calculation Spreadsheets"
    ],
    practicalActivities: [
      "Tracing power flow paths on an actual Substation Single-Line Diagram (SLD)",
      "Operating a VCB switchgear panel: manual spring charging, closing, tripping, and racked position checks",
      "Conducting insulation resistance (Megger) testing on a distribution transformer winding",
      "Measuring ground pit resistance using a digital Earth Resistance Tester",
      "Testing an overcurrent numerical relay using a secondary injection kit to verify IDMT trip timing"
    ],
    whatStudentsLearn: [
      "Technical layout, single-line diagrams, and equipment operation of electrical distribution substations.",
      "Functional mechanics of high-voltage switchgear, Vacuum/Air circuit breakers, and busbars.",
      "Operating principles of numerical protective relays, current/potential transformers, and trip loops.",
      "Testing and maintenance routines for power transformers, insulation resistance, and earthing networks.",
      "Mandatory high-voltage safety procedures, Permit to Work (PTW) structures, and Lockout/Tagout (LOTO)."
    ],
    skillsDeveloped: [
      "Electrical Single-Line Diagram (SLD) Interpretation",
      "Switchgear (VCB/ACB) Operation & Racking",
      "Transformer Maintenance & Insulation Testing (Megger)",
      "Earth Pit Resistance Measurement",
      "Protective Relay Function Verification",
      "Utility High-Voltage Safety Protocol Execution"
    ],
    realWorldApplications: [
      "State Electrical Distribution Utilities (DISCOMs)",
      "High-Voltage Municipal & Industrial Substations",
      "Industrial Plant Power Distribution Facilities",
      "Commercial High-Rise Electrical Utility Rooms",
      "Infrastructure & Renewable Energy Grid Interconnection Plants"
    ],
    careerRelevance: [
      "Junior Substation Engineer",
      "Electrical Utility Maintenance Engineer",
      "Switchgear & Protection Testing Technician",
      "Electrical Safety & PTW Coordinator",
      "Utility Operations Assistant"
    ],
    internshipOutcome: "Students acquire practical capabilities in substation SLD reading, VCB switchgear operation, transformer insulation testing, earth resistance measurement, and protective relay verification, enabling immediate entry into utility companies, industrial substations, and electrical EPC organizations."
  },

  "eee-power-engineering": {
    id: "eee-power-engineering",
    discipline: "Electrical & Electronics Engineering",
    pathwayName: "Pathway 2 – Power Engineering",
    badge: "Power Systems & Smart Grid",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Covers large-scale power generation, transmission lines, smart distribution, and power quality management.",
      "Includes Alternators, Power Factor Correction (PFC), Active/Reactive power control, and Smart Metering.",
      "Focuses on grid efficiency, power factor optimization, harmonic mitigation, and renewable grid integration.",
      "Bridges power systems analysis, electrical machines, power electronics, and smart grid automation."
    ],
    whyImportant: [
      "High-efficiency power transmission and smart distribution minimize massive electrical grid line losses.",
      "Modern grids must dynamically integrate fluctuating solar/wind renewables while maintaining grid stability.",
      "Industrial plants demand clean AC power free of harmonics and low power factor penalties.",
      "Creates high-demand opportunities in smart metering, SCADA operations, and energy management."
    ],
    cie1: [
      "Power generation methods (Thermal, Hydro, Solar, Wind) and transmission line dynamics.",
      "Value chain: Generation (11kV) → Step-Up Transmission (132kV-765kV) → Distribution → End User.",
      "AC Power Concepts: Active Power (kW), Reactive Power (kVAR), Apparent Power (kVA), Power Factor (cos φ).",
      "Power Factor Correction (PFC) penalties and Automatic Power Factor Correction (APFC) capacitor panels.",
      "Synchronous Generators (Alternators): excitation, Automatic Voltage Regulators (AVR), grid synchronization.",
      "Power Quality: Harmonics (THD), Voltage Sags/Swells, Transients, Active Harmonic Filters.",
      "Smart Grid Technologies: Smart Meters, SCADA telemetry, Advanced Metering Infrastructure (AMI).",
      "Energy management, load forecasting, and microgrid concepts."
    ],
    cie2: [
      "Study a complete power-flow generation-to-consumer single-line diagram.",
      "Calculate required APFC capacitor bank sizing (kVAR) to improve plant power factor from 0.8 to 0.98.",
      "Perform generator grid synchronization calculations (Voltage, Frequency, Phase matching).",
      "Analyse Total Harmonic Distortion (THD) report data for non-linear industrial loads.",
      "Study electrical protection schemes for transmission lines and distribution feeders.",
      "Understand energy-management concepts, peak demand shaving, and TOD tariffs."
    ],
    cie3: [
      "Power-system and generation alternator testing exposure.",
      "Equipment demonstrations: operating APFC capacitor bank panels and tracking step switching.",
      "Generator grid synchronization demonstration using synchroscopes, phase lamps, and AVR controls.",
      "Transformer and transmission parameter studies on power system trainer benches.",
      "Power quality inspection using 3-Phase Power Quality Analyzers to capture harmonic spectrums.",
      "Smart Metering telemetry reading via Modbus RS-485 interfaces.",
      "Electrical safety procedures and energy audit logs."
    ],
    machines: [
      { name: "3-Phase Power Quality Analyzer", desc: "Handheld analyzer for logging harmonics, THD, voltage sags, and power factor." },
      { name: "Synchroscope & Sync Panel", desc: "Grid synchronization setup with synchroscope, voltmeters, and phase lamps." },
      { name: "APFC Capacitor Panel", desc: "Automatic Power Factor Correction panel with digital step controller." },
      { name: "Smart Energy Meters", desc: "Bi-directional electronic smart meters with RS-485 Modbus communication." },
      { name: "Power System Simulator", desc: "Bench setup for studying transmission line parameters, load flow, and faults." },
      { name: "Digital Clamp Power Meter", desc: "Precision clamps for measuring kW, kVA, and power factor on live lines." }
    ],
    software: [
      "Power Quality Analysis Software (Harmonic Spectrum Telemetry)",
      "SCADA / HMI Monitoring Interface Software",
      "Power Factor Calculation & Sizing Tools"
    ],
    practicalActivities: [
      "Measuring active (kW), reactive (kVAR), and apparent (kVA) power on a 3-phase load to find power factor",
      "Connecting an APFC panel to an inductive load and observing step-wise capacitor contactor switching",
      "Executing generator-to-busbar synchronization on a trainer kit by adjusting speed and AVR voltage",
      "Connecting a Power Quality Analyzer to a non-linear load and capturing harmonic spectrum charts",
      "Reading active energy (kWh) and maximum demand (kW) from a smart meter via Modbus interface"
    ],
    whatStudentsLearn: [
      "Operational dynamics of power generation, high-voltage transmission, and smart distribution networks.",
      "Calculations and operational controls for Power Factor Correction (PFC) and APFC capacitor panels.",
      "Conditions and synchronization procedures for connecting generators to an active power grid.",
      "Identification, measurement, and mitigation of Power Quality issues, harmonics, and THD.",
      "Architecture and function of Smart Grids, Smart Meters, SCADA telemetry, and Microgrid controllers."
    ],
    skillsDeveloped: [
      "Power Factor Sizing & APFC Panel Operation",
      "Generator Grid Synchronization Execution",
      "Power Quality & Harmonic Analysis (PQA Tool)",
      "Smart Metering & Modbus Telemetry Interfacing",
      "Electrical Power Flow Calculation",
      "Energy Efficiency Audit & Analysis"
    ],
    realWorldApplications: [
      "Electrical Power Generation Plants & Transmission Networks",
      "Industrial Plant Utility & Power Management Operations",
      "Commercial Energy Audit & Power Quality Consultancies",
      "Smart Metering Infrastructure & DISCOM Automation Projects",
      "Renewable Energy Microgrids & Battery Energy Storage (BESS)"
    ],
    careerRelevance: [
      "Junior Power Systems Engineer",
      "Power Quality Technician / Analyst",
      "Energy Audit Assistant",
      "Smart Grid & SCADA Operations Assistant",
      "Industrial Electrical Power Coordinator"
    ],
    internshipOutcome: "Students acquire practical competencies in power factor correction, generator grid synchronization, power quality analysis, and smart meter telemetry, enabling immediate entry into power generation plants, energy consultancies, smart grid projects, and industrial power management facilities."
  },

  // ==========================================
  // 10. METALLURGY
  // ==========================================
  "met-heat-treatment": {
    id: "met-heat-treatment",
    discipline: "Metallurgy",
    pathwayName: "Pathway – Heat Treatment Process",
    badge: "Thermal Processing & Testing",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Alters the mechanical and microstructural properties of metals through controlled heating and cooling cycles.",
      "Covers thermal processes (Annealing, Normalizing, Hardening, Tempering) paired with mechanical material testing.",
      "Teaches how internal grain structures (austenite, ferrite, pearlite, martensite) are altered to meet target specs.",
      "Essential for automotive components, crankshafts, cutting tools, gears, and structural metals."
    ],
    whyImportant: [
      "Industrial components require precise heat treatment to withstand extreme wear, stress, and fatigue.",
      "Allows engineers to make metal hard for cutting tools or ductile for deep drawing operations.",
      "Destructive and non-destructive material testing verifies raw materials meet ISO/ASTM standards.",
      "Core operational discipline across automotive plants, aerospace manufacturers, foundries, and testing labs."
    ],
    cie1: [
      "Heat-treatment fundamentals and the Iron-Iron Carbide (Fe-Fe3C) Phase Diagram.",
      "Material mechanical properties: hardness, toughness, tensile strength, ductility, fatigue resistance.",
      "Heating and cooling thermal cycles and critical transformation temperatures (Ac1, Ac3).",
      "Bulk Heat Treatments: Annealing (softening), Normalizing (grain refinement), Hardening (martensite formation).",
      "Tempering: reheating hardened steel to eliminate brittleness while retaining strength.",
      "Surface Hardening: Carburizing, Nitriding, Induction Hardening, Flame Hardening.",
      "Metallurgical testing: Rockwell/Brinell hardness testing and metallographic microstructural analysis.",
      "Safety: furnace high-heat safety, quench oil fire precautions, chemical etching safety, PPE."
    ],
    cie2: [
      "Select a sample steel component (e.g. medium carbon steel gear) and design a complete Heat Treatment Process.",
      "Study material phase diagrams and CCT curves to select heating temperature, soak time, and quench medium.",
      "Prepare a Heat Treatment Process Sheet specifying target hardness (HRC/HBW) limits.",
      "Compare properties resulting from different cooling mediums (water vs. oil vs. air).",
      "Design a Metallographic Specimen Preparation Protocol (mounting, polishing, nital etching).",
      "Analyse expected material microstructures under different heat treatment states."
    ],
    cie3: [
      "Observe commercial heat-treatment processes and muffle furnace operations.",
      "Furnace operation: setting digital temperature controllers, soaking steel specimens at 850°C.",
      "Quenching: performing rapid oil/water quench cycles and observing phase transformation.",
      "Hardness testing: conducting Rockwell (HRC) and Brinell (HBW) testing on treated samples.",
      "Metallographic specimen preparation: hand grinding (240-1200 grit), cloth polishing, Nital etching.",
      "Microscopic analysis: observing ferrite, pearlite, and martensite under metallurgical optical microscopes.",
      "Quality-control practices: verifying case depth specifications for carburized steel parts."
    ],
    machines: [
      { name: "Heat-Treatment Muffle Furnace", desc: "Digital electric furnace (up to 1200°C) with programmable ramp and soak controllers." },
      { name: "Quenching Tanks", desc: "Temperature-monitored agitation tanks for oil, water, and polymer quenching." },
      { name: "Rockwell & Brinell Hardness Testers", desc: "Industrial hardness testing machines with diamond cone (HRC) and steel ball indenters." },
      { name: "Metallographic Polishing Machine", desc: "Dual-disc variable-speed grinding and cloth wheel polishing suite." },
      { name: "Metallurgical Optical Microscope", desc: "Inverted/Upright optical microscope with digital camera imaging software." },
      { name: "Universal Testing Machine (UTM)", desc: "Hydraulic/Electromechanical UTM for tensile and yield strength testing." }
    ],
    software: [
      "Metallographic Image Analysis Software (Grain Size Measurement)",
      "Heat Treatment Cycle Simulation & CCT Curve Tools",
      "Material Test Data Logging Spreadsheets"
    ],
    practicalActivities: [
      "Executing a Hardening & Tempering cycle on carbon steel: heating to 850°C, oil quenching, measuring HRC",
      "Preparing a metallographic specimen: grinding, cloth polishing, 2% Nital etching, and capturing microstructures",
      "Conducting Rockwell C (HRC) hardness testing across a carburized cross-section to plot case depth",
      "Performing Brinell Hardness Testing (HBW) on cast iron, measuring indentation using optical scope",
      "Testing a metal sample on a Universal Testing Machine (UTM) and plotting the Stress-Strain Curve"
    ],
    whatStudentsLearn: [
      "Principles of thermal heat treatment and microstructural transformation in metals and alloys.",
      "Practical execution of Annealing, Normalizing, Hardening, Tempering, and Surface Hardening.",
      "Operation of high-temperature furnaces, digital controllers, and quenching media selection.",
      "Metallographic specimen preparation methods including grinding, polishing, chemical etching, and microscopy.",
      "Mechanical material testing techniques including Rockwell/Brinell hardness testing and UTM tensile evaluation."
    ],
    skillsDeveloped: [
      "Heat Treatment Process Execution & Control",
      "Rockwell & Brinell Hardness Testing",
      "Metallographic Specimen Grinding, Polishing & Etching",
      "Microstructural Identification (Ferrite/Pearlite/Martensite)",
      "Tensile & Mechanical Property Testing (UTM)",
      "Metallurgical Quality Report Generation"
    ],
    realWorldApplications: [
      "Automotive Engine, Transmission & Gear Heat Treatment Plants",
      "Aerospace High-Strength Structural Component Manufacturing",
      "Tool & Die / Mold Manufacturing & Hardening Facilities",
      "Foundry & Forging Quality Inspection Laboratories",
      "Commercial Material Testing & Failure Analysis Labs"
    ],
    careerRelevance: [
      "Junior Metallurgical Engineer",
      "Heat Treatment Shop Supervisor",
      "Material Testing Laboratory Technician",
      "Quality Control (QC) Metallurgical Inspector",
      "Metallographic Analyst"
    ],
    internshipOutcome: "Students acquire practical capabilities in furnace operation, heat treatment cycle execution, Rockwell/Brinell hardness testing, metallographic specimen polishing, and microstructural analysis, enabling immediate entry into commercial heat treatment plants, automotive manufacturing labs, forging units, and material testing facilities."
  },

  // ==========================================
  // 11. MECHATRONICS
  // ==========================================
  "mecha-iiot-systems": {
    id: "mecha-iiot-systems",
    discipline: "Mechatronics",
    pathwayName: "Pathway 1 – Industrial IoT Systems",
    badge: "Cyber-Physical Mechatronics",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Combines mechanical mechanisms, electronic sensors, microcontrollers, electro-pneumatics, and cloud telemetry.",
      "Covers Mechatronic Actuators (Servos/Steppers), Smart Sensors, Embedded Systems (ESP32/STM32), and MQTT.",
      "Focuses on capturing mechanical state parameters (position, speed, force, vibration) and streaming data to cloud.",
      "Bridges mechanical design, electronic controls, embedded programming, and IoT predictive analytics."
    ],
    whyImportant: [
      "Modern industrial machines are cyber-physical systems operating inside connected Industry 4.0 plants.",
      "Predictive telemetry of vibration and thermal trends prevents mechanical equipment breakdowns.",
      "Enables remote adjustment of mechanical control parameters (servo speeds, pneumatic limits) via cloud.",
      "High employability for mechatronics engineers who bridge mechanical hardware with cloud telemetry."
    ],
    cie1: [
      "Mechatronics fundamentals and cyber-physical systems architecture.",
      "Industrial IoT (IIoT) integration in smart electromechanical machinery.",
      "Sensors & Transducers: Optical Encoders (position/speed), Accelerometers (vibration), Current Sensors.",
      "Actuator Drivers: PWM control of Servo Motors, Stepper Motor step/dir pulse drivers, Solenoid Valves.",
      "Embedded Microcontroller Nodes (STM32 / ESP32) for real-time closed-loop control.",
      "Industrial Data Acquisition (DAQ) and edge signal processing.",
      "Machine monitoring telemetry, MQTT messaging, and Cloud Dashboard interfaces.",
      "Predictive-maintenance concepts based on vibration RMS velocity and temperature thresholds."
    ],
    cie2: [
      "Sensor-based machine-monitoring project (connecting accelerometers and encoders to an ESP32 node).",
      "Collect equipment mechanical performance data and write C++ closed-loop control routines.",
      "Study machine operating conditions, thermal limits, and vibration spectrums.",
      "Display real-time telemetry data on cloud dashboards (ThingsBoard / Node-RED).",
      "Analyse basic electromechanical performance information and efficiency.",
      "Identify abnormal mechanical operating conditions and configure alert notifications."
    ],
    cie3: [
      "Smart-factory and cyber-physical machine observation.",
      "Connected-machine concepts: inspecting servo drives, planetary gearboxes, pneumatic valves, gateways.",
      "Hands-on multi-sensor wiring (encoder + accelerometer + current sensor) to microcontroller boards.",
      "Programming and PID gain tuning (Kp, Ki, Kd) for closed-loop Servo Motor positioning.",
      "Remote machine monitoring on cloud dashboards and MQTT Explorer message tracing.",
      "Predictive maintenance simulation: introducing artificial vibration to trigger cloud alarm alerts.",
      "Industrial mechatronics troubleshooting: distinguishing mechanical binding from electronic noise."
    ],
    machines: [
      { name: "Mechatronic Microcontroller Board", desc: "ESP32, STM32, or ARM Cortex developer kits equipped with motor drivers." },
      { name: "Servo & Stepper Motor Drive Bench", desc: "Servo Motors with digital encoders and Stepper Motors with A4988 drivers." },
      { name: "Electro-Pneumatic Actuator Suite", desc: "Pneumatic cylinders, 5/2 solenoid valves, and pressure regulators." },
      { name: "Mechatronic Sensors", desc: "MPU6050 vibration accelerometers, optical encoders, Hall-effect current sensors." },
      { name: "IIoT Telemetry Tools", desc: "MQTT Explorer, Mosquitto Broker, ThingsBoard IoT Platform, and Node-RED." },
      { name: "Digital Oscilloscope", desc: "Multi-channel DSO for inspecting encoder square waves and PWM motor signals." }
    ],
    software: [
      "ThingsBoard / Node-RED (Predictive Telemetry Dashboards)",
      "Arduino IDE / PlatformIO (Embedded C++ Coding)",
      "MQTT Explorer (Message Payload Tracing)"
    ],
    practicalActivities: [
      "Wiring a Servo Motor and optical encoder to a microcontroller and programming target angle position",
      "Interfacing an MPU6050 accelerometer to measure motor vibration and publishing data via MQTT",
      "Creating a Node-RED flow that receives telemetry, displays motor speed on a gauge, and logs counts",
      "Wiring a pneumatic solenoid valve to a relay channel, executing timed cycles, and streaming logs",
      "Troubleshooting a mechatronic positioning error using an oscilloscope to verify encoder A/B signals"
    ],
    whatStudentsLearn: [
      "Multidisciplinary integration of mechanical mechanisms, electronic sensors, motor drives, and cloud IIoT.",
      "Interfacing techniques for optical encoders, accelerometers, servo drives, and electro-pneumatics.",
      "Embedded programming for local electromechanical control paired with MQTT cloud streaming.",
      "Construction of Cloud Telemetry Dashboards for predictive maintenance and condition monitoring.",
      "Systematic diagnostic strategies for isolating mechanical, electronic, sensor, and network faults."
    ],
    skillsDeveloped: [
      "Mechatronic Sensor & Actuator Interfacing",
      "Embedded Microcontroller Programming (C++ / STM32 / ESP32)",
      "Servo / Stepper Motor Closed-Loop Control Tuning",
      "MQTT Protocol Telemetry & JSON Formatting",
      "Predictive Maintenance Dashboard Creation (Node-RED / ThingsBoard)",
      "Electromechanical System Troubleshooting"
    ],
    realWorldApplications: [
      "Smart Automated Pick-and-Place Gantry Systems",
      "Connected Industrial Robotics & Cyber-Physical Production Cells",
      "Automated Packaging & Sorting Machinery with Predictive Diagnostics",
      "Remote Agricultural & Heavy Machinery Telemetry Systems",
      "Smart Conveyor & Automated Guided Vehicle (AGV) Fleets"
    ],
    careerRelevance: [
      "Junior Mechatronics Engineer",
      "Smart Machine Integration Specialist",
      "Embedded Controls & IoT Assistant",
      "Automation & Robotics Maintenance Technician",
      "IIoT Electromechanical Solutions Assistant"
    ],
    internshipOutcome: "Students acquire practical capabilities in mechatronic sensor wiring, servo drive tuning, embedded MQTT programming, cloud dashboard construction, and electromechanical troubleshooting, enabling immediate entry into smart machine builders, robotics firms, and industrial automation consultancies."
  },

  "mecha-embedded-robotics": {
    id: "mecha-embedded-robotics",
    discipline: "Mechatronics",
    pathwayName: "Pathway 2 – Embedded & Robotics",
    badge: "Embedded Firmware & Autonomous Robotics",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Focuses on designing dedicated microcontroller-based computing systems (Embedded) controlling robotic platforms.",
      "Scope: Microcontrollers (ARM/STM32), Motor Drivers, Kinematics, Sensor Fusion, and Embedded C Coding.",
      "Combines low-level embedded hardware design and real-time firmware execution with mechanical movements.",
      "Used in industrial automation, smart machines, mobile robots (AGVs), and automated manipulators."
    ],
    whyImportant: [
      "Embedded systems power modern technical products from smart appliances to industrial robots.",
      "Modern factories depend on autonomous mobile robots (AMRs) and multi-axis manipulators.",
      "Embedded systems execute low-latency, deterministic control loops essential for robotic stability.",
      "High career demand for engineers skilled in embedded C coding, motor control drivers, and robotics."
    ],
    cie1: [
      "Embedded-system fundamentals and microcontroller CPU architecture (ARM Cortex / AVR).",
      "Microcontroller peripherals: GPIOs, Timers, PWM generators, ADC, I2C, SPI, UART.",
      "Sensors & Perception: Ultrasonic distance, IR line sensors, IMUs (Gyro/Accelerometer), Encoders.",
      "Actuation Drivers: DC Geared Motors, Stepper Motors, Servo Motors, H-Bridge driver circuits (L298N).",
      "Embedded C/C++ Firmware: register manipulation, hardware interrupts, timer ISRs, RTOS basics.",
      "Robotic Kinematics: Forward & Inverse Kinematics, Differential Drive, Articulated Arm dynamics.",
      "Robotics and automation applications in manufacturing.",
      "Embedded safety: watchdog timers, brown-out reset, hardware emergency stop interlocks."
    ],
    cie2: [
      "Build a sensor-based mobile robot or robotic arm project schematic.",
      "Program a microcontroller in Embedded C to read sensor inputs and execute control loops.",
      "Read digital encoder inputs and IMU sensor data via timer interrupts.",
      "Control H-Bridge motor drivers to regulate wheel speeds via PWM.",
      "Operate electro-mechanical actuators and servo joint linkages.",
      "Develop a basic robotic application (line following, obstacle avoidance, pick-and-place)."
    ],
    cie3: [
      "Robotics demonstrations and embedded board teardown inspection.",
      "In-circuit debugging of Embedded C code using ST-Link / JTAG hardware debuggers.",
      "Monitoring PWM signals, motor driver outputs, and I2C buses on oscilloscopes and logic analyzers.",
      "Programming closed-loop PID speed control for DC motors using encoder feedback.",
      "Autonomous robot navigation testing on arena setups.",
      "Troubleshooting: resolving interrupt timing conflicts, bus noise, and motor driver thermal cutouts."
    ],
    machines: [
      { name: "Microcontroller Board", desc: "STM32 Nucleo / ARM Cortex / ESP32 developer platforms with debug interfaces." },
      { name: "Robotics Platform", desc: "Differential Drive Mobile Robot kit or 3-to-5 Axis Articulated Robotic Arm kit." },
      { name: "Motor Driver Modules", desc: "L298N / TB6612FNG H-Bridge drivers, DC Geared Motors with encoders, Servos." },
      { name: "Perception Sensors", desc: "HC-SR04 Ultrasonic sensors, MPU6050 IMU modules, TCRT5000 IR sensor arrays." },
      { name: "Logic Analyzer & JTAG Debugger", desc: "ST-Link V2 in-circuit debuggers and 8-channel USB Logic Analyzers." },
      { name: "Embedded IDE Suite", desc: "STM32CubeIDE, VS Code with PlatformIO, or Keil MDK software." }
    ],
    software: [
      "STM32CubeIDE / Keil MDK (Embedded C/C++ Compiler & Debugger)",
      "PlatformIO / VS Code (Microcontroller Development)",
      "PulseView / Logic Analyzer Signal Inspection Software"
    ],
    practicalActivities: [
      "Writing an Embedded C script utilizing hardware Timers to generate 20kHz PWM for H-Bridge motor control",
      "Interfacing an ultrasonic sensor using input capture hardware interrupts to trigger obstacle avoidance",
      "Programming a differential drive robot to execute closed-loop straight-line drive using encoder PID",
      "Connecting a USB Logic Analyzer to an I2C bus line, capturing data frames, and decoding bytes",
      "Programming a multi-joint robotic arm using servo control to execute smooth trajectory pick-and-place"
    ],
    whatStudentsLearn: [
      "Architecture and low-level programming of embedded microcontrollers (ARM / C++).",
      "Interfacing and driving electromechanical actuators using H-Bridge drivers and PWM control logic.",
      "Operation and firmware integration of robotic perception sensors (Ultrasonic, IMU, Encoders, IR).",
      "Principles of mobile robot kinematics, differential drive dynamics, and multi-axis joint control.",
      "Embedded firmware debugging techniques using logic analyzers, oscilloscopes, and hardware debuggers."
    ],
    skillsDeveloped: [
      "Embedded C/C++ Firmware Programming",
      "Microcontroller Peripheral Configuration (PWM / ADC / Timers / I2C)",
      "Motor Driver (H-Bridge / Servo) Interfacing",
      "Closed-Loop PID Motor Speed & Position Tuning",
      "Robotic Kinematics & Trajectory Execution",
      "Hardware Debugging (Logic Analyzer / Oscilloscope)"
    ],
    realWorldApplications: [
      "Autonomous Mobile Robots (AMRs) & Warehouse AGVs",
      "Consumer & Commercial Robotic Appliances (Vacuum/Delivery Robots)",
      "Industrial Embedded Controllers & Smart Actuator Modules",
      "Medical & Surgical Robotic Systems",
      "Unmanned Aerial Vehicles (UAVs / Drones) & Automotive Control Modules"
    ],
    careerRelevance: [
      "Junior Embedded Systems Engineer",
      "Robotics Firmware Developer Assistant",
      "Embedded Hardware Testing Technician",
      "Mechatronics & Autonomous Systems Associate",
      "Robotics Application Support Specialist"
    ],
    internshipOutcome: "Students acquire practical competencies in embedded C programming, microcontroller peripheral configuration, motor driver interfacing, sensor integration, PID tuning, and hardware debugging, enabling immediate entry into robotics companies, embedded design houses, and autonomous systems firms."
  },

  "mecha-analytics": {
    id: "mecha-analytics",
    discipline: "Mechatronics",
    pathwayName: "Pathway 3 – Analytics",
    badge: "Industrial Data & OEE Analytics",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002-2h2a2 2 0 002-2z"></path></svg>`,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    whatIs: [
      "Collects, cleans, processes, and visually models operational data from manufacturing machinery and processes.",
      "Covers Industrial Data Collection, MS Excel Data Modeling, Power BI Dashboards, OEE KPIs, and Predictive Analytics.",
      "Focuses on operational machine metrics: uptime, cycle times, scrap rates, overall equipment effectiveness, and downtime.",
      "Bridges industrial engineering, statistics, database query concepts, and executive BI dashboards."
    ],
    whyImportant: [
      "Smart factories generate massive operational data; analytics turns numbers into actionable cost savings.",
      "Overall Equipment Effectiveness (OEE) quantifies plant availability, performance efficiency, and product quality.",
      "Visualizing historical failure trends pinpoints root causes of machine breakdowns to streamline maintenance.",
      "High demand for technical data analysts who combine physical manufacturing knowledge with BI data modeling."
    ],
    cie1: [
      "Data fundamentals and industrial data collection sources (telemetry, production logs, quality sheets).",
      "Types of data: Machine Telemetry (vibration, temp), Production Data (counts, cycle times), Quality Data (scrap).",
      "Manufacturing KPIs: Overall Equipment Effectiveness (OEE), Mean Time Between Failures (MTBF), Mean Time to Repair (MTTR).",
      "Data Analytics Lifecycle: Extraction → Cleaning → Exploratory Analysis → KPI Calculation → Dashboard → Action.",
      "MS Excel for data manipulation: Data Validation, Pivot Tables/Charts, XLOOKUP, conditional formulas.",
      "Data Visualization principles: chart selection (Pareto charts for defects, gauge charts for OEE KPIs).",
      "Business Intelligence (BI) Tools: Power BI / Tableau data importing, modeling, and interactive dashboards.",
      "Predictive analytics introduction: trendlines, linear regression forecasting, anomaly detection."
    ],
    cie2: [
      "Work with sample industrial CSV datasets containing machine timestamps, cycle times, and rejection flags.",
      "Clean raw data in MS Excel: parse dates, handle missing records, and add calculated columns.",
      "Build a calculation model in Excel for plant availability, performance efficiency, quality yield, and OEE %.",
      "Generate a Pareto Analysis Chart in Excel identifying the top 20% failure causes responsible for 80% downtime.",
      "Design an interactive Power BI dashboard featuring dynamic slicers (by date, shift, machine ID).",
      "Analyse performance indicators, MTBF/MTTR metrics, and write an executive summary report."
    ],
    cie3: [
      "Study real-world data applications from active manufacturing plants (automotive assembly, bottling lines).",
      "Advanced data modeling in MS Excel using Pivot Tables, dynamic slicers, and calculated fields.",
      "Building multi-table data models in Power BI, establishing relationships, and writing DAX measure formulas.",
      "Production monitoring dashboard construction featuring live gauge widgets for plant throughput.",
      "Analyzing machine downtime logs to calculate MTBF and MTTR metrics for equipment assets.",
      "Presenting data-driven insights: demonstrating drill-down features to isolate component failure root causes."
    ],
    machines: [
      { name: "Microsoft Excel (Advanced)", desc: "Primary tool for data manipulation, Pivot Tables, XLOOKUP, and statistical modeling." },
      { name: "Microsoft Power BI / Tableau", desc: "Industry-standard BI platforms for data modeling, DAX measures, and dashboards." },
      { name: "SQL Query Tools", desc: "Database query concepts for extracting production data from relational tables." },
      { name: "Python Data Stack", desc: "Pandas and Matplotlib/Seaborn concepts for automated script-based data analysis." },
      { name: "Industrial Dataset Repository", desc: "Curated real-world manufacturing datasets (cycle times, scrap rates, downtime)." }
    ],
    software: [
      "Microsoft Excel (Advanced Data Modeling & Pivot Analysis)",
      "Microsoft Power BI / Tableau (Interactive BI Dashboard Development)",
      "SQL Query Tools & Python Pandas Concepts"
    ],
    practicalActivities: [
      "Cleaning a raw CSV dataset in Excel: parsing timestamps, removing duplicates, and calculating cycle times",
      "Creating an automated Excel Pivot Table dashboard tracking scrap rate % and output broken down by shift",
      "Constructing a Pareto Chart in Excel visualizing component defect categories to prioritize quality actions",
      "Importing manufacturing data into Power BI, establishing relational models, and writing DAX OEE measures",
      "Designing a 1-page executive Power BI Dashboard displaying OEE gauges, MTBF metrics, and dynamic slicers"
    ],
    whatStudentsLearn: [
      "Operational analytics methodologies applied to manufacturing, mechatronic systems, and industrial data.",
      "Calculation procedures for critical industrial KPIs, including OEE, MTBF, MTTR, scrap rates, and throughput.",
      "Advanced MS Excel data modeling, dynamic Pivot Tables, XLOOKUP functions, and statistical trend calculations.",
      "Data visualization principles and dashboard development using Microsoft Power BI / Tableau.",
      "Techniques for extracting actionable business insights from raw operational logs to reduce downtime."
    ],
    skillsDeveloped: [
      "Advanced MS Excel Data Modeling & Pivot Analysis",
      "Power BI / Tableau Dashboard Creation",
      "Industrial KPI Calculation (OEE / MTBF / MTTR)",
      "Data Cleaning, Transformation & Structuring",
      "Pareto Analysis & Root-Cause Visual Identification",
      "Technical Data Insights Presentation"
    ],
    realWorldApplications: [
      "Manufacturing Plant Operational Performance Monitoring",
      "Automotive & Discrete Production OEE & Scrap Tracking",
      "Industrial Fleet & Asset Maintenance Analytics",
      "Supply Chain & Inventory Throughput Dashboards",
      "Energy & Utility Consumption Analytics Facilities"
    ],
    careerRelevance: [
      "Junior Industrial Data Analyst",
      "Operations & Production Data Specialist",
      "Manufacturing Intelligence Assistant",
      "BI (Business Intelligence) Dashboard Developer",
      "Maintenance & Asset Analytics Assistant"
    ],
    internshipOutcome: "Students acquire practical capabilities in MS Excel data modeling, industrial KPI calculation (OEE/MTBF), Power BI dashboard development, and operational trend analysis, enabling immediate entry into manufacturing analytics teams, industrial consultancies, and operations management divisions."
  }
};

// Export for module systems or global window access
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PATHWAYS_DATA;
} else {
  window.PATHWAYS_DATA = PATHWAYS_DATA;
}
