// Data.js


// Owners for different categories (assuming these owners are specific to categories)
export const owners = {
    technology: [
      { name: "Laura ", image: "https://ericarawls.com/wp-content/uploads/2021/08/BusinessWoman-768x513.jpg", email: "owner1@example.com", phone: "123456789", about: "Tech enthusiast" },
      { name: "Leah ", image: "https://t4.ftcdn.net/jpg/06/21/27/47/360_F_621274742_0bdYOZ58agnhXB9t58XoR6g04bvjEVWD.jpg", email: "owner2@example.com", phone: "987654321", about: "Software developer" }
    ],
    design: [
      { name: "Candace ", image: "https://www.shutterstock.com/shutterstock/videos/1105064915/thumb/1.jpg?ip=x480", email: "owner3@example.com", phone: "555555555", about: "Creative designer" },
      { name: "Yara ", image: "https://www.shutterstock.com/shutterstock/videos/1082482270/thumb/8.jpg?ip=x480", email: "owner4@example.com", phone: "444444444", about: "UX/UI designer" }
    ],
    business: [
      { name: "Aura ", image: "https://t4.ftcdn.net/jpg/06/69/25/01/360_F_669250190_x72tcHedmRKyUND0jCantoOkX8jspPSn.jpg", email: "owner5@example.com", phone: "333333333", about: "Business strategist" },
      { name: "Jean ", image: "https://thumbs.dreamstime.com/b/happy-black-businesswoman-desk-17214978.jpg", email: "owner6@example.com", phone: "222222222", about: "Entrepreneur" }
    ]
  };
  
  // Categories for projects
  export const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Design" },
    { id: 3, name: "Business" },
    { id: 4, name: "All" }
  ];



export const seedData = [
    {
      id: 1,
      title: 'FitWave smart watch',
      image: ' https://saamaan.pk/cdn/shop/products/Comet-Infinity-Smartwatch.jpg?v=1671009969',
      small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
      detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec. ',
      owner: owners.technology[0],
      category: 1,
      goal_amount: 50000,
      amount_raised: 15000,
      comments: [
        { id: 1, contributor_name: "John", content: "Great project!" },
        { id: 2, contributor_name: "Jane", content: "Looking forward to this." }
      ]
    },
    {
      id: 2,
      title: ' Ergos-New generation ultra thin laptops',
  image: ' https://img.freepik.com/free-photo/stylish-workspace-with-computer-home_155003-4326.jpg',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam. ',
  detailed_description: ' Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.technology[1],
  category: 1,
  goal_amount: 20000,
  amount_raised: 5000

      
    },
    {
      id: 3,
      title: 'SmartCity Infrastructure: AI-Powered Traffic Management',
  image: 'https://parquery.com/media/green-on-demand-with-Parquerys-virtual-AI-based-detectors-replacing-induction-loops_7ur0TlY.jpg',
  small_description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam. ',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.  ',
  owner: owners.technology[0],
  category: 1,
  goal_amount: 50000,
  amount_raised: 15000
    },
    {
      id: 4,
      title: 'Innovative Tech Gadget',
  image: 'https://media.istockphoto.com/id/1252809376/photo/japanese-man-at-hand-using-a-smartphone.jpg?s=612x612&w=0&k=20&c=3zUF1981mbU4mN3gmQ8IYWU96HAs1pPEN89WYKw5NAQ=',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quamDuis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.technology[1],
  category: 1,
  goal_amount: 50000,
  amount_raised: 15000
      
    },
    {
      id: 5,
      title: 'Innovative Tech Gadget',
  image: ' https://www.ied.edu/_default_upload_bucket/1081/image-thumb__1081__scaleByWidth1000/1600x952px_Le%20scuole_Design.jpg',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.design[0],
  category: 2,
  goal_amount: 50000,
  amount_raised: 15000
    },
    {
      id: 6,
      title: 'Innovative Tech Gadget',
  image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/why-design-thinking-is-important-in-todays-job-industries-132433-1x1.jpg?VersionId=JAHp7dbg0er_X8nmv1NGAEJLGvYjAHLW',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.design[1],
  category: 2,
  goal_amount: 50000,
  amount_raised: 15000
      
    },
    {
      id: 7,
      title: 'Innovative Tech Gadget',
      image: 'https://frugalminimalistkitchen.com/wp-content/uploads/2021/06/Minimalist-Aesthetic-Boho-Desktop-wallpaper-annanicolestudios-1.jpg?ezimgfmt=rs:391x313/rscb6/ngcb6/notWebP',
      small_description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
      detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
      owner: owners.design[0],
      category: 2,
      goal_amount: 50000,
      amount_raised: 15000
      
    },
    {
      id: 8,
      title: 'Startup Hive: Incubating the Next Generation of Entrepreneurs',
  image: 'https://img.freepik.com/premium-photo/floral-background-abstract-flower-design-copyspace-wedding-greeting-cards-quotes_1123-715.jpg',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.business[0],
  category: 3,
  goal_amount: 50000,
  amount_raised: 15000
      
    },
    {
        id: 9,
        title: 'Green Ventures: Sustainable Business Accelerator',
  image: 'https://img.freepik.com/free-photo/african-american-business-woman-by-window_1303-10869.jpg',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.business[0],
  category: 3,
  goal_amount: 50000,
  amount_raised: 1500
        
      },
      {
        id: 10,
        title: 'Innovative Tech Gadget',
  image: 'https://st3.depositphotos.com/13193658/31671/i/450/depositphotos_316718750-stock-photo-happy-businessman-looking-showing-winner.jpg',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.business[0],
  category: 3,
  goal_amount: 50000,
  amount_raised: 15000
        
      }


      
  ];
  
  export const relatedProjects = [
    {
      id: 1,
      title: 'FitWave smart watch',
      image: ' https://saamaan.pk/cdn/shop/products/Comet-Infinity-Smartwatch.jpg?v=1671009969',
      small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam.',
      detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec. ',
      owner: owners.technology[0],
      category: 1,
      goal_amount: 50000,
      amount_raised: 15000,
      comments: [
        { id: 1, contributor_name: "John", content: "Great project!" },
        { id: 2, contributor_name: "Jane", content: "Looking forward to this." }
      ]
    },
    {
      id: 2,
      title: ' Ergos-New generation ultra thin laptops',
  image: ' https://img.freepik.com/free-photo/stylish-workspace-with-computer-home_155003-4326.jpg',
  small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam. ',
  detailed_description: ' Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.',
  owner: owners.technology[1],
  category: 1,
  goal_amount: 20000,
  amount_raised: 5000

      
    },
    {
      id: 3,
      title: 'SmartCity Infrastructure: AI-Powered Traffic Management',
  image: 'https://parquery.com/media/green-on-demand-with-Parquerys-virtual-AI-based-detectors-replacing-induction-loops_7ur0TlY.jpg',
  small_description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, neque non sodales porttitor, dolor tellus sodales metus, ac condimentum erat ante sed tortor. Ut et urna pulvinar, varius velit at, ultrices quam. Nunc rhoncus dui at urna bibendum sollicitudin. In gravida, nisl eget dignissim pellentesque, risus quam tempus elit, non mollis tortor justo eu ligula. Vestibulum varius sollicitudin lorem, at mattis nibh fringilla sit amet. Phasellus tincidunt, lectus eget aliquam interdum, justo sapien lobortis metus, et ultrices leo tortor a felis. Sed sed tortor ut nunc pellentesque tincidunt. Aenean convallis metus velit, eu ultricies nunc facilisis in. Vestibulum tempor efficitur ex, fermentum luctus nisl semper in. Vivamus vitae gravida risus. Suspendisse potenti. Proin aliquet ex nec libero porttitor, ac varius nunc dignissim. Curabitur at tincidunt eros, eu consequat arcu. Mauris tortor ex, dapibus sit amet accumsan eget, fermentum a nisl. Duis in sapien nec ex facilisis aliquam. ',
  detailed_description: 'Integer elementum elementum orci, a scelerisque ex tempor sed. Nam vitae finibus erat. Sed a auctor nisi. Sed efficitur congue ante, a pretium ex luctus id. Vivamus ultrices est sed mi condimentum, eget venenatis odio elementum. Praesent fringilla ante sed ante dignissim lacinia. Duis varius, est et dictum vulputate, lorem odio ullamcorper felis, nec elementum elit lorem nec dolor. Vivamus quam mauris, consectetur accumsan ultricies ut, placerat in quam.Duis sed risus eget urna auctor malesuada. Pellentesque sit amet finibus lectus.Nunc sit amet metus non leo laoreet egestas at nec lacus. Praesent varius sodales magna. Suspendisse potenti. Proin ac orci a ipsum varius blandit. Ut ullamcorper ex justo, et sodales velit vestibulum nec.  ',
  owner: owners.technology[0],
  category: 1,
  goal_amount: 50000,
  amount_raised: 15000
    },
  ];
  