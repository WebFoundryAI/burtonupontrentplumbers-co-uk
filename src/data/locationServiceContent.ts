/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  "burton-upon-trent": {
    neighborhoods: ["Stapenhill", "Winshill", "Stretton", "Horninglow", "Branston", "Outwoods", "Brizlincote Valley", "Shobnall"],
    landmarks: ["National Brewery Centre", "the Washlands", "St Modwen's Church", "Trent and Mersey Canal", "Burton Bridge"],
    drainageInfo: "Burton upon Trent's drainage infrastructure reflects the town's deep industrial heritage, particularly its world-famous brewing industry. The town sits in the Trent Valley floodplain, where the high water table and proximity to the River Trent create unique challenges for drainage systems. Many properties in the older parts of town — particularly around Horninglow Street, High Street, and the conservation area near St Modwen's Church — have Victorian-era clay pipe drainage systems originally installed during the town's brewing boom. The Washlands floodplain park along the River Trent plays a crucial role in flood management but also means nearby properties can experience drainage issues during heavy rainfall.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, modern family homes, and commercial premises"
  },
  uttoxeter: {
    neighborhoods: ["Town Centre", "Bramshall Road", "Balance Street", "Doveridge", "Rocester", "Marchington"],
    landmarks: ["Uttoxeter Racecourse", "High Street", "Market Place", "St Mary's Church", "Town Meadows"],
    drainageInfo: "Uttoxeter is a historic market town in Staffordshire with a mix of period properties in the town centre and modern housing developments on the outskirts. The town sits near the confluence of several small watercourses feeding into the River Dove, and the local geology includes clay-heavy soils that can affect drainage performance. Properties around the High Street and Market Place often have older stone and clay drainage systems dating back to the Georgian and Victorian periods. The rural setting means some properties rely on private drainage systems including septic tanks and soakaways.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "period market town properties, modern estates, rural farmhouses, and commercial units"
  },
  swadlincote: {
    neighborhoods: ["Church Gresley", "Newhall", "Woodville", "Albert Village", "Overseal", "Midway"],
    landmarks: ["Sharpe's Pottery Museum", "Swadlincote Ski Centre", "The Delph", "Eureka Park", "Maurice Lea Memorial Park"],
    drainageInfo: "Swadlincote in South Derbyshire has a proud industrial heritage rooted in pottery and pipe manufacturing. The town's clay-rich geology, which once fuelled its pottery industry, now presents specific challenges for drainage systems. The heavy clay soil has poor natural drainage and can cause ground movement, leading to pipe displacement and cracking. Properties in the older parts of Swadlincote, Church Gresley, and Woodville often have drainage systems dating back to the town's industrial heyday, while some sit on land previously used for clay extraction or pottery works.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian terraces, former industrial town housing, modern estates, and commercial properties"
  },
  lichfield: {
    neighborhoods: ["Boley Park", "Darwin Park", "Stychbrook Park", "Curborough", "The Close", "Dam Street area"],
    landmarks: ["Lichfield Cathedral", "Samuel Johnson Birthplace Museum", "Stowe Pool", "Beacon Park", "Erasmus Darwin House"],
    drainageInfo: "Lichfield is a beautiful cathedral city in Staffordshire with a rich history stretching back to medieval times. The city's drainage infrastructure varies enormously between the historic core around the cathedral close and the modern residential developments on the outskirts. Properties in the historic centre around Dam Street, Bird Street, Bore Street, and The Close often have drainage systems adapted and extended over centuries. The proximity to Stowe Pool and Minster Pool means groundwater levels can be high in the city centre, particularly during wet weather.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "historic townhouses, listed buildings, modern family homes, and commercial premises"
  },
  tamworth: {
    neighborhoods: ["Dosthill", "Belgrave", "Glascote", "Wilnecote", "Fazeley", "Kettlebrook", "Colehill"],
    landmarks: ["Tamworth Castle", "Castle Grounds", "Ankerside Shopping Centre", "Snowdome", "St Editha's Church"],
    drainageInfo: "Tamworth sits at the confluence of the rivers Tame and Anker, a position that has shaped the town's development since Saxon times. This riverside location creates specific drainage challenges, as the water table is naturally high in many parts of the town and the risk of surface water flooding is elevated during heavy rainfall. The older parts of Tamworth around the castle grounds and Church Street have Victorian and Edwardian drainage systems, while newer residential areas including Dosthill, Belgrave, and Wilnecote have more modern infrastructure.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "period town centre properties, modern estates, riverside properties, and commercial units"
  },
  derby: {
    neighborhoods: ["Darley Abbey", "Allestree", "Littleover", "Mickleover", "Spondon", "Chellaston", "Normanton"],
    landmarks: ["Derby Cathedral", "Silk Mill", "Derby County FC - Pride Park", "Markeaton Park", "Cathedral Quarter"],
    drainageInfo: "Derby, a major city in Derbyshire, sits along the River Derwent and has a diverse range of property types from its UNESCO World Heritage Site industrial mills at Darley Abbey to modern housing estates. The city centre around Cathedral Quarter, Sadler Gate, and Iron Gate has complex drainage systems adapted over centuries. The proximity to the River Derwent means flood risk is a significant consideration, and many properties in low-lying areas have been affected by major flood events. Residential areas like Allestree, Littleover, and Chellaston have a mix of housing ages and drainage system types.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "heritage properties, Victorian terraces, modern estates, and industrial premises"
  },
  "ashby-de-la-zouch": {
    neighborhoods: ["Market Street area", "South Street", "Kilwardby Street", "Moira", "Donisthorpe", "Measham", "Packington"],
    landmarks: ["Ashby Castle", "St Helen's Church", "Bath Grounds", "Hood Park Leisure Centre", "Market Street"],
    drainageInfo: "Ashby-de-la-Zouch is a historic market town in north-west Leicestershire dominated by the ruins of its medieval castle. The town centre around Market Street, Brook Street, and South Street has older drainage systems serving period commercial and residential properties, some dating to the Victorian era. The Bath Grounds area, sitting in a natural valley, can experience drainage challenges during heavy rainfall. The local geology includes coal measure clays from the historic coalfield, which can cause ground movement and affect drainage infrastructure. Surrounding villages including Moira, Donisthorpe, and Measham have a mix of drainage types.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "period market town properties, former coalfield housing, modern estates, and rural properties"
  },
  rugeley: {
    neighborhoods: ["Brereton", "Etching Hill", "Slitting Mill", "Armitage", "Trent Valley area"],
    landmarks: ["Rugeley Town Centre", "Market Square", "St Augustine's Church", "Hagley Park", "Cannock Chase"],
    drainageInfo: "Rugeley is a market town in south-eastern Staffordshire, situated between the Trent Valley and the elevated heathland of Cannock Chase. This varied topography creates different drainage challenges across the town. Properties in the Trent Valley areas near Armitage have drainage affected by high groundwater levels, while the town centre around Market Square and Horse Fair has older Victorian systems. Higher ground towards Etching Hill and Brereton has better natural drainage but can experience issues with clay soils and mature tree roots. The proximity to Cannock Chase means run-off from elevated ground can overwhelm local drainage during heavy rainfall.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional market town properties, modern estates, rural properties, and commercial units"
  },
  tutbury: {
    neighborhoods: ["Castle Street", "High Street", "Monk Street", "Fauld", "Hanbury", "Hatton", "Scropton"],
    landmarks: ["Tutbury Castle", "St Mary's Priory Church", "Dove Bridge", "Tutbury Mill", "High Street"],
    drainageInfo: "Tutbury is a picturesque village in Staffordshire perched on a hill overlooking the Dove Valley. The village's elevated position and historic character create unique drainage considerations. Properties around the castle, High Street, and Monk Street are among the oldest in the area, with drainage systems that may date back centuries. The hillside location means drainage gradients are generally good, but older properties often have narrow, winding drainage runs following the medieval street layout. Lower-lying properties near the River Dove can experience challenges during periods of high river levels.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "historic stone cottages, period village houses, modern rural homes, and converted properties"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  "burton-upon-trent": {
    "blocked-drains": {
      intro: "Burton upon Trent's rich brewing heritage means blocked drains can affect anything from a Victorian terrace near Horninglow Street to a modern family home in Stretton. Our experienced engineers understand the unique drainage challenges facing properties across the town and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in kitchen drains", "Tree root intrusion from mature street trees in established areas", "Debris accumulation in Victorian clay pipes from the brewing era", "Wet wipe blockages in residential drainage", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near the Washlands and River Trent should have drainage inspected regularly, as high groundwater levels during wet weather can exacerbate existing blockages and cause silt ingress."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Burton upon Trent, you need a fast response from engineers who know the local area. Whether you're in Stapenhill, Winshill, or Horninglow, our drain unblocking teams are strategically positioned to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Burton's busy restaurants and pubs in the town centre and along Station Street benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Burton upon Trent property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Burton's older properties with Victorian-era drainage from the town's brewing heyday.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Burton's older areas near Horninglow Street or the town centre? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Burton upon Trent's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Burton's hard water supply contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely, particularly in the town's older Victorian properties."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Burton upon Trent emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the town. From Stapenhill family homes to town centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Burton upon Trent location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Burton upon Trent's mix of Victorian brewing-era infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Burton's alluvial Trent Valley soils can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs of pipe displacement."
    }
  },
  uttoxeter: {
    "blocked-drains": {
      intro: "Uttoxeter's historic market town character and surrounding rural communities present a varied set of drainage challenges. From the traditional stone-built properties around the High Street and Market Place to modern housing on the outskirts near the racecourse, our Uttoxeter blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Sediment accumulation in older stone drainage systems", "Root intrusion from established trees in mature gardens", "Fat and grease buildup from domestic kitchens", "Debris blockages in rural property drainage", "Surface water issues near the River Dove"],
      process: "Every Uttoxeter blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Uttoxeter properties with private drainage systems such as septic tanks should ensure they are emptied regularly — the clay-heavy local soils can reduce soakaway performance."
    },
    "drain-unblocking": {
      intro: "From emergency callouts near Uttoxeter Racecourse to routine unblocking on the High Street, our Uttoxeter drain unblocking service covers every eventuality. We understand the varied property stock across the area and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Uttoxeter-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Uttoxeter's older properties around the Market Place and High Street often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period property near Uttoxeter's Market Place or investigating drainage issues at a rural farmhouse, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Uttoxeter property.",
      commonProblems: ["Unknown pipe routes in period buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Rural properties near Uttoxeter with private drainage should have periodic CCTV surveys to check septic tank connections and soakaway condition."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Uttoxeter, equally effective on Victorian clay pipes in traditional town centre properties and modern systems in newer developments near Bramshall Road. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in domestic kitchens", "Scale deposits from water supply", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Uttoxeter's clay soils can cause silt to enter drainage systems through damaged joints. Combine jetting with CCTV inspection to identify any structural issues causing ongoing silt ingress."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Uttoxeter receive our immediate attention, with engineers ready to respond rapidly to properties from the town centre to Doveridge and Rocester. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Uttoxeter properties near the River Dove and its tributaries should have emergency drainage contacts readily available, particularly during autumn and periods of heavy rainfall."
    },
    "drain-repairs": {
      intro: "Uttoxeter's diverse building stock requires drainage repair expertise spanning period market town properties and modern rural developments. Our repair teams handle everything from relining Victorian clay pipes in the town centre to replacing damaged plastic sections in newer estates, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in Victorian properties", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from agricultural vehicle traffic"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Uttoxeter's clay-heavy soils can cause ground movement during seasonal moisture changes. Monitor drainage performance and act on early warning signs like slow flow or damp patches."
    }
  },
  swadlincote: {
    "blocked-drains": {
      intro: "Swadlincote's industrial heritage in pottery and pipe manufacturing, combined with its mix of historic and modern housing, creates diverse drainage challenges. Our Swadlincote blocked drain specialists understand how the area's clay-rich geology affects drainage systems, from Church Gresley's traditional terraces to Albert Village's newer housing developments.",
      commonProblems: ["Clay soil infiltration into drainage systems", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your Swadlincote property's position and ground conditions before selecting clearing methods. Properties on former clay extraction sites may require different approaches than those on undisturbed ground. Our engineers are experienced with all Swadlincote property types and drainage configurations.",
      localTip: "Swadlincote properties near former pottery works or clay pits should ensure external drains are regularly inspected, as disturbed ground can cause pipe settlement and joint displacement."
    },
    "drain-unblocking": {
      intro: "When drains block in Swadlincote, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Woodville or an overflowing external drain in Church Gresley, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Swadlincote engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Swadlincote's clay soil conditions mean that pipe joints can shift over time. If you experience recurring blockages, a CCTV survey may reveal an underlying structural issue that needs addressing."
    },
    "cctv-drain-surveys": {
      intro: "Swadlincote's architectural variety, from Church Gresley's traditional terraces to newer developments around The Delph, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing a property in Swadlincote's former industrial areas? CCTV surveys can identify ground settlement issues that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Swadlincote's varied drainage systems often need. From clearing scale deposits in Church Gresley's traditional pipes to routine maintenance for newer systems around Albert Village, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale accumulation from water supply", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Swadlincote properties on clay soil benefit from periodic jetting to remove clay silt and mineral deposits before they restrict flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Swadlincote receive rapid response from our local teams, day or night. From flooded gardens in Newhall to sewage issues in Woodville, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Swadlincote service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Swadlincote's clay soils can become waterlogged during prolonged rainfall, increasing the risk of surface water flooding. Keep gullies clear and report slow drainage promptly."
    },
    "drain-repairs": {
      intro: "Swadlincote's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for an older pipe in Church Gresley or excavation repairs in a newer Woodville property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Swadlincote's heavy clay soil causes seasonal ground movement. Consider flexible repair solutions like pipe relining that accommodate ground conditions better than rigid replacements."
    }
  },
  lichfield: {
    "blocked-drains": {
      intro: "Lichfield's historic cathedral city character and surrounding residential areas present a varied set of drainage challenges. From the medieval properties near the cathedral close and Dam Street to modern family homes in Boley Park and Darwin Park, our Lichfield blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Debris accumulation in ageing stone and clay drainage", "Root intrusion from established trees in mature gardens", "Fat and grease buildup in domestic kitchens", "Shared drainage blockages in period properties", "Surface water issues near Stowe Pool and Minster Pool"],
      process: "Lichfield's varied property types demand flexible approaches. We assess each situation individually, considering property age, pipe material, and the area's specific environmental factors before selecting our clearing method.",
      localTip: "Lichfield properties near Stowe Pool and Minster Pool should have drainage inspected regularly, as elevated groundwater levels affect pipe integrity and can exacerbate blockages."
    },
    "drain-unblocking": {
      intro: "When Lichfield drains need unblocking, our local teams cover the entire area from the cathedral close and Dam Street to Boley Park, Darwin Park, and Curborough. We handle everything from simple kitchen sink blockages to complex shared drainage issues in the city's many period properties.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages from hair and soap", "External gulley obstructions from fallen leaves", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Lichfield engineers arrive with comprehensive unblocking tools suited to the area's property mix. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing the job.",
      localTip: "Lichfield's medieval street layout in the city centre means drainage runs can follow unexpected routes. If one clearing attempt doesn't solve the problem, a CCTV survey will map the exact pipe routes."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Lichfield property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the city's historic properties, listed buildings, and modern developments where drainage history may be varied.",
      commonProblems: ["Mapping drainage in older stone buildings", "Assessing drainage near pools and watercourses", "Pre-purchase surveys for period properties", "Root ingress from mature vegetation", "Investigating causes of recurring blockages"],
      process: "We survey Lichfield drainage methodically, recording condition and mapping routes. This is especially important for properties in the historic centre where drainage may follow medieval routes that differ from modern maps.",
      localTip: "Buying a property near Lichfield's cathedral close or Dam Street? Always commission a full CCTV drain survey — historic properties can have complex drainage arrangements that are not obvious from the surface."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Lichfield's varied drainage systems, from traditional stone channels in period properties to modern plastic pipes in newer estates. Our specialist equipment clears the silt, scale, and debris that accumulate in local drainage throughout the area.",
      commonProblems: ["Silt and sediment deposits from nearby pools", "Scale accumulation from water supply", "Grease buildup in residential drains", "Root fragments requiring clearance", "Pre-survey cleaning for accurate assessment"],
      process: "We match jetting equipment to Lichfield's pipe types and conditions. Period drainage receives careful, lower-pressure treatment, while modern systems can handle more thorough cleaning for optimal results.",
      localTip: "Lichfield's proximity to pools and watercourses means higher groundwater levels that can carry silt into drainage — regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Lichfield drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding near the cathedral close or sewage backup in Boley Park. Our engineers are available around the clock, equipped to handle emergencies across the city and surrounding areas.",
      commonProblems: ["Surface water flooding during heavy rainfall", "Sewage backing up into ground-floor rooms", "Manhole overflows on residential streets", "Drain collapses after ground saturation", "Groundwater-related drainage emergencies"],
      process: "Emergency calls from Lichfield receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Lichfield properties near Stowe Pool and Minster Pool should maintain clear surface water drains year-round, as water levels can rise after sustained rainfall."
    },
    "drain-repairs": {
      intro: "Lichfield's drainage spans from original medieval stone channels to modern plastic systems, and our repair teams work confidently with all types. Whether it's relining Victorian pipes near the city centre or replacing collapsed sections in Darwin Park, we select repair methods suited to each property's age and construction.",
      commonProblems: ["Cracked stone drainage channels", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Subsidence-related damage in the historic core"],
      process: "We investigate thoroughly before recommending Lichfield drainage repairs. Our approach accounts for the area's varied terrain and ground conditions, using durable materials that provide long-lasting results.",
      localTip: "Lichfield's listed buildings and conservation area properties may require specialist repair techniques. Our engineers have experience working within heritage constraints."
    }
  },
  tamworth: {
    "blocked-drains": {
      intro: "Tamworth's riverside location at the confluence of the Tame and Anker means most properties face drainage challenges influenced by high water tables and flood risk. Our Tamworth blocked drain service combines knowledge of the local drainage infrastructure with modern clearing techniques, effectively tackling blockages in properties across the town from the castle grounds to Wilnecote.",
      commonProblems: ["Silt accumulation from high water table conditions", "Root intrusion from maturing trees in established areas", "Fat accumulation in domestic drains", "Debris in shared drainage serving housing clusters", "Surface water blockages during heavy rainfall"],
      process: "Tamworth's riverside location means drainage can be influenced by river levels and groundwater. We assess your specific situation, considering property position, pipe material, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Tamworth properties near the castle grounds and river corridors are most susceptible to groundwater-related drainage issues. Properties with trees close to pipe runs should have annual inspections."
    },
    "drain-unblocking": {
      intro: "When Tamworth drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Dosthill to Fazeley, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues"],
      process: "Our Tamworth engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Tamworth's terraced housing in Glascote and Belgrave often has shared drainage. If your neighbours also have slow drains, the blockage is likely in the communal section — contact us to investigate."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Tamworth property's drainage is essential, particularly given the town's riverside location and high water table. Our CCTV surveys reveal the condition of pipes beneath your property, identifying deterioration that surface inspection cannot detect. This is increasingly valuable for properties in flood-prone areas.",
      commonProblems: ["Age-related pipe deterioration in Victorian systems", "Root ingress from established street trees", "Pipe condition assessment for home purchases", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Tamworth properties near the rivers Tame and Anker should have drainage surveyed regularly — the high water table and seasonal flooding can accelerate pipe deterioration."
    },
    "drain-jetting": {
      intro: "Tamworth's drainage benefits greatly from regular high-pressure jetting maintenance. Our specialist equipment removes the silt and deposits that accumulate in drainage systems affected by the town's high water table, maintaining optimal flow in domestic and commercial properties throughout the area.",
      commonProblems: ["Silt buildup from high groundwater", "Grease accumulation", "Scale and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting the integrity of your pipe infrastructure. We verify results with flow testing.",
      localTip: "Tamworth businesses at Ankerside Shopping Centre and along the town centre should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Tamworth drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded ground floor in Dosthill or sewage backup in Belgrave, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage from river-influenced ground conditions", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Tamworth's riverside position means drainage systems can become overwhelmed during heavy rainfall and high river levels. Keep emergency drain contacts readily available, especially during autumn and winter."
    },
    "drain-repairs": {
      intro: "Tamworth's position at the river confluence means drainage repairs must account for high water tables and variable ground conditions. Our repair specialists understand the challenges of working in a flood-risk area and provide repair solutions that extend the life of drainage systems while delivering reliable, lasting results.",
      commonProblems: ["Cracked pipes from ground movement", "Deteriorating clay pipe joints", "Root damage from established trees", "Ground settling causing pipe displacement", "Flood damage to drainage infrastructure"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Tamworth's riverside infrastructure is under constant pressure from groundwater. Consider proactive repair and relining rather than waiting for complete failure."
    }
  },
  derby: {
    "blocked-drains": {
      intro: "Derby's blend of heritage properties and modern developments creates varied drainage challenges. Our Derby blocked drain specialists understand the differences between period properties in Darley Abbey and the Cathedral Quarter, Victorian terraces in Normanton, and modern estates in Chellaston, bringing the right expertise to every callout.",
      commonProblems: ["Root intrusion from mature trees in established streets", "Fat and grease buildup from busy household kitchens", "Debris accumulation in period clay pipes", "Surface water blockages in city centre areas", "Shared drainage issues in Victorian terraced housing"],
      process: "We assess each Derby blockage considering the property type, pipe age, and drainage layout. Period properties in Darley Abbey need different handling than modern estates in Mickleover, and our engineers adapt their approach accordingly.",
      localTip: "Derby's leafy streets in Allestree and Littleover have mature trees that pose significant root intrusion risks — schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Derby, our local teams respond promptly with the right equipment for every property type. From heritage properties in Darley Abbey to modern commercial units in the city centre, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Commercial drainage issues in the city centre"],
      process: "Our Derby engineers arrive equipped for the city's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Derby properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a heritage property in Darley Abbey or investigating drainage at a Spondon family home, our CCTV surveys provide the detailed assessment you need. We reveal the true condition of pipes beneath Derby's diverse range of properties.",
      commonProblems: ["Pre-purchase surveys for heritage and period properties", "Root ingress investigation in mature gardens", "Mapping complex drainage in commercial premises", "Condition assessment of Victorian pipe systems", "Insurance and renovation planning requirements"],
      process: "We survey Derby properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Derby home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Derby's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from Victorian clay pipes in Normanton and clears root masses from garden-heavy properties in Allestree, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Derby's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Derby properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Derby demand swift, professional response. Whether you're facing sewage backup in a heritage property or flooding at a Chellaston family home, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "River Derwent flooding affecting drainage systems"],
      process: "Emergency calls from Derby are prioritised and dispatched immediately. Our engineers understand the city's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Derby properties near the River Derwent may experience increased surface water runoff during heavy rain — ensure gullies and downpipe connections are clear, especially during autumn and winter."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Derby's varied properties requires specialist care. Our repair teams work with all property ages across the city, from restoring Victorian clay pipes in Normanton to fixing modern systems in Mickleover and Chellaston.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Flood damage from River Derwent proximity"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Derby's River Derwent flood risk means some properties experience periodic waterlogging — flexible repair solutions like pipe relining accommodate these conditions better than rigid replacements."
    }
  },
  "ashby-de-la-zouch": {
    "blocked-drains": {
      intro: "Ashby-de-la-Zouch's reputation as an attractive market town comes with distinctive drainage challenges. The area's period properties around Market Street and the castle feature original clay drainage systems, while the former coalfield geology in surrounding villages contributes to ground movement issues. Our Ashby specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens", "Aged clay pipe deterioration", "Fat buildup from busy household kitchens", "Leaf debris in autumn months from tree-lined streets", "Shared drainage in period properties"],
      process: "We approach Ashby blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Ashby's mature trees along Market Street and surrounding residential streets are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Ashby-de-la-Zouch residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls across the town, from the historic centre to Moira and Measham, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues"],
      process: "Our Ashby engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Ashby's Victorian properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Ashby-de-la-Zouch's active property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the town's sought-after period and modern homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Ashby properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Ashby home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points in what is a competitive property market."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Ashby-de-la-Zouch's period and modern drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features.",
      commonProblems: ["Scale from water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Ashby's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Ashby's Bath Grounds area sits in a natural valley where drainage gradients may be less favourable. Regular jetting helps maintain optimal performance in lower-lying areas."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Ashby-de-la-Zouch receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a town centre property or flooding in Moira, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars", "Garden flooding from blocked drains", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Ashby properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Ashby properties with cellars should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Ashby-de-la-Zouch's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement from coal measure clays", "Historical modification issues", "Cellar drainage problems"],
      process: "We investigate Ashby drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Ashby's coal measure clay geology can cause ground movement. Monitor drainage performance after prolonged dry or wet periods, as clay expansion and contraction can displace pipe joints."
    }
  },
  rugeley: {
    "blocked-drains": {
      intro: "Rugeley's location between the Trent Valley and Cannock Chase creates specific drainage considerations, from high groundwater levels near the river corridor to run-off from elevated heathland. Our Rugeley blocked drain specialists understand how these local factors affect drainage systems and bring the expertise needed for properties across the town.",
      commonProblems: ["Silt accumulation from high groundwater and run-off", "Root intrusion from garden trees in established streets", "Fat and grease buildup from domestic kitchens", "Debris accumulation in Victorian clay pipes", "Surface water issues from Cannock Chase run-off"],
      process: "We assess your Rugeley property's position and drainage layout before selecting clearing methods. Properties in the Trent Valley corridor may require different approaches than those on higher ground towards Etching Hill. Our engineers are experienced with all property types in the area.",
      localTip: "Rugeley properties near Cannock Chase can experience increased surface water run-off during heavy rain. Ensure gullies and surface water drains are kept clear to prevent property flooding."
    },
    "drain-unblocking": {
      intro: "When drains block in Rugeley, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Brereton or an overflowing external drain in Armitage, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Rugeley engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Rugeley's Victorian properties around Market Square often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Rugeley's varied property market, from traditional market town homes to modern estates, makes drainage condition assessment increasingly important. Our CCTV surveys reveal exactly what's inside your pipes, providing essential information for property transactions and ongoing maintenance.",
      commonProblems: ["Silt and sediment infiltration assessment", "Age-related pipe deterioration in Victorian properties", "Root ingress from established gardens", "Drainage route mapping before renovations", "Condition assessment for property purchases"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any location-specific issues. The final report includes annotated footage, a condition summary, and maintenance recommendations.",
      localTip: "Purchasing a property near Rugeley's Trent Valley corridor? A pre-purchase CCTV survey is essential — high groundwater conditions accelerate pipe deterioration and hidden defects are common."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Rugeley's drainage systems often need. Our service removes silt, scale, and accumulated deposits from Victorian pipes in the town centre and clears debris from properties throughout Brereton and Etching Hill.",
      commonProblems: ["Silt and sediment accumulation from high groundwater", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. Properties near the Trent Valley often have silt that requires specific nozzle selection for effective removal.",
      localTip: "Rugeley's Trent Valley properties experience faster silt accumulation than those on higher ground. Consider jetting every 12 months rather than the usual 18 to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Rugeley receive rapid response from our local teams, day or night. From flooded gardens near Armitage to sewage issues in Etching Hill, our engineers are ready to tackle any emergency and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Surface water flooding from Cannock Chase run-off", "Overflowing inspection chambers", "Collapsed drains in waterlogged ground", "Storm damage affecting drainage systems"],
      process: "Emergency calls to our Rugeley service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Rugeley properties near the Trent Valley should have non-return valves fitted on main drainage connections to prevent high groundwater from forcing water back into the system during heavy rain."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Rugeley requires understanding the specific challenges of the Trent Valley's high water table and the varying ground conditions across the town. Our repair specialists select methods and materials suited to these local conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from ground movement", "Root damage from garden vegetation", "Joint displacement in waterlogged ground", "Corrosion affecting older connections", "Silt infiltration through damaged joints"],
      process: "We assess Rugeley drainage repairs with local ground conditions in mind. Materials are chosen for durability in high-moisture environments, and repair methods account for the variable ground conditions across the town.",
      localTip: "Rugeley's Trent Valley location means some areas have persistently high groundwater. Ensure repair materials are specified for wet ground conditions to maximise lifespan."
    }
  },
  tutbury: {
    "blocked-drains": {
      intro: "Tutbury and the surrounding Dove Valley communities blend historic village charm with modern rural housing, each with their own drainage characteristics. Our Tutbury blocked drain service covers everything from the village's medieval stone cottages to Hatton's newer family homes, bringing local expertise to every callout.",
      commonProblems: ["Root intrusion from established village trees and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older stone drainage systems", "Surface water blockages from leaf litter", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Tutbury blockage considering the property type, drainage age, and local conditions. Traditional stone properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Tutbury properties near the River Dove should have drainage inspected after periods of heavy rainfall when debris and silt can accumulate rapidly in lower-lying areas."
    },
    "drain-unblocking": {
      intro: "When Tutbury drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From the historic village centre to Hatton and Scropton, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Tutbury engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Tutbury's older stone-built properties often have deep inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Tutbury property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in the Dove Valley area where ground conditions vary.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Tutbury's hillside properties may have drainage running at steep gradients. CCTV surveys help identify any erosion or joint displacement caused by fast-flowing water in steep pipe runs."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Tutbury's drainage systems. Our specialist equipment handles everything from clearing root masses in the village's older properties to descaling pipes in Hatton's modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby river and streams", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Tutbury properties near the River Dove experience more silt buildup — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Tutbury drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Hanbury or sewage backup in Hatton, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on village streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Tutbury's hillside location and proximity to the River Dove mean water levels can rise quickly after sustained rainfall. Keep emergency drain contacts readily available and know your manhole locations."
    },
    "drain-repairs": {
      intro: "Tutbury's property stock spans historic stone cottages to modern family homes, and our drain repair expertise matches this diversity. From relining period pipes in the village centre to replacing damaged sections in Hatton, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked stone drainage channels in period properties", "Clay pipe deterioration from age", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on hillside properties"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Tutbury's variable geology of sandstone and clay means ground conditions can change over short distances — always commission a proper survey before planning drainage repair work."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Severn Trent Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Severn Trent Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Burton upon Trent and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Burton upon Trent and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Burton upon Trent and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Burton upon Trent and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
