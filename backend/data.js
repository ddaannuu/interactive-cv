const educationHistory = [ 
    { id: 1, period: '2023 - Present', institution: 'Universitas  Amikom Yogyakarta', major: 'S1 - Informatics', description:'' },
    { id: 2, period: '2020 - 2023', institution: 'SMK Negeri 1 Sewon', major: 'Computer and Network Engineering', description:'Gained fundamental knowledge and practical skills in Computer and Network Engineering' }
];
const skills = [
  {
    name: 'Vue.js',
    level: 'Mahir',
    category: 'Web Development',
    icon: 'vue.webp'
  },
  {
    name: 'JavaScript',
    level: 'Mahir',
    category: 'Programming Language',
    icon: 'js.png'
  },
  {
    name: 'Bootstrap',
    level: 'Mahir',
    category: 'Web Development',
    icon: 'bootstrap.png'
  },
  {
    name: 'Node.js',
    level: 'Menengah',
    category: 'Web Development',
    icon: 'node.png'
  },
  {
    name: 'Express.js',
    level: 'Menengah',
    category: 'Web Development',
    icon: 'express.png'
  },
  {
    name: 'PostgreSQL',
    level: 'Menengah',
    category: 'Database',
    icon: 'postgresql.png'
  },
  {
    name: 'Git & GitHub',
    level: 'Mahir',
    category: 'Tools',
    icon: 'git.png'
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Mahir',
    category: 'Web Development',
    icon: 'html.png'
  }
]

const projects = [ 
    { title: 'Website Toko Online', image: 'https://via.placeholder.com/500x300?text=Proyek+1',
    description: 'Platform e-commerce dengan fitur keranjang belanja.', tech: ['Vue.js', 'Express.js',
    'PostgreSQL'], link: '#' },
    { title: 'Aplikasi Manajemen Tugas', image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'Aplikasi untuk melacak progres tugas harian.', tech: ['React', 'Firebase'], link: '#' }
];
module.exports = { educationHistory, skills, projects };