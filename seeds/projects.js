exports.seed = function (knex, Promise) {
    return knex('projects').insert([
      { id: 1, title: 'Business Tigress & Friends', description: 'Collaborative Comittee Zine ', category: 'design', role: '', tools: 'Photoshop, Adobe Illustrator', image:'' },
      { id: 2, title: 'Method App', description: 'Behance API - React App', category: 'web', role: 'Student Group Project', tools: 'React', image:''  },
      { id: 3, title: 'Fractal Scupture', description: '3D Printed Custom Typeface', category: 'design', role: 'Student Project', tools: 'Adobe Illustrator, SolidWorks', image:'https://views-portfolio.s3.ap-southeast-2.amazonaws.com/1568199978915'  },
      { id: 4, title: 'Paper + Pixels Issue 2', description: 'Publication Design', category: 'design', role: 'Editor, Project Management', tools: 
     'InDesign, Adobe Illustrator', image:'' },
      { id: 5, title: 'Scope Exhibition', description: 'Event & Identity Design', category: 'design', role: 'Project Manager', tools: 'Photoshop, Indesign, Illustrator', image:
      'https://views-portfolio.s3.amazonaws.com/1568199617496'  },
      { id: 6, title: 'ZIY Logo', description: 'Custom Logotype', category: 'design', role: 'freelance', tools: 'Photoshop, InDesign, Adobe Illustrator', image:''  },
      { id: 7, title: '3 Degrees', description: 'Vanilla JS Project', category: 'web', role: 'Student Group Project', tools: 'Vanilla JS', image:''  },
      { id: 8, title: 'Fractal Typeface', description: 'Typography Design', category: 'design', role: 'Student Project', tools: 'Adobe Illustrator', image:'https://views-portfolio.s3.ap-southeast-2.amazonaws.com/1568200022146'  },

    ])
  }
  