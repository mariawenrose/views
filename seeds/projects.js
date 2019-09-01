exports.seed = function (knex, Promise) {
    return knex('projects').insert([
      { id: 1, title: 'Business Tigress & Friends', description: 'Collab Committee Zine ', category: 'design', role: '', tools: 'Photoshop, Adobe Illustrator' },
      { id: 2, title: 'Method App', description: 'React App made with the Behance API', category: 'web', role: 'Student Group Project', tools: 'React' },
      { id: 3, title: 'Fractal Type', description: '3D Printed Custom Typeface', category: 'design', role: 'Student Project', tools: 'Adobe Illustrator, SolidWorks' },
      { id: 4, title: 'Paper + Pixels Edition 2', description: 'School Magazine (Publication)', category: 'design', role: 'Editor, Project Management', tools: 
     'InDesign, Adobe Illustrator'},
      { id: 5, title: 'Scope Exhibition', description: 'Event Design', category: 'design', role: 'Project Manager', tools: 'Photoshop, Indesign, Illustrator' },
      { id: 6, title: 'ZIY Logo', description: 'Custom Logotype', category: 'design', role: 'freelance', tools: 'Photoshop, InDesign, Adobe Illustrator' },
      { id: 7, title: '3 Degrees', description: 'Front End Interface that sells old phones', category: 'web', role: 'Student Group Project', tools: 'Vanilla JS' },
    ])
  }
  