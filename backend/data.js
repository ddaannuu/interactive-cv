const educationHistory = [ 
    { id: 1, period: '2023 - Present', institution: 'Universitas  Amikom Yogyakarta', major: 'S1 - Informatics', description:'' },
    { id: 2, period: '2020 - 2023', institution: 'SMK Negeri 1 Sewon', major: 'Computer and Network Engineering', description:'Gained fundamental knowledge and practical skills in Computer and Network Engineering' }
];
const skills = [
  {
    name: 'Vue.js',
    level: 'Novice',
    category: 'Web Development',
    icon: 'vue.webp'
  },
  {
    name: 'JavaScript',
    level: 'Novice',
    category: 'Web Development',
    icon: 'javascript.webp'
  },
  {
    name: 'Bootstrap',
    level: 'Novice',
    category: 'Web Development',
    icon: 'bootstrap.png'
  },
  {
    name: 'Mysql',
    level: 'Intermediate',
    category: 'Database',
    icon: 'mysql.png'
  },
  {
    name: 'GitHub',
    level: 'Intermediate',
    category: 'Tools',
    icon: 'github.png'
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Intermediate',
    category: 'Web Development',
    icon: 'html.webp'
  },
  {
    name: 'Arduino',
    level: 'Intermediate',
    category: 'Microcontroller',
    icon: 'arduino.webp'
  },
  {
    name: 'C++',
    level: 'Intermediate',
    category: 'Microcontroller',
    icon: 'cpp.png'
  }
]

const projects = [ 
    { title: 'Sistem Pendeteksi Kondisi Darurat Ruangan Berbasis Sensor', image: 'microcontroller.jpg',
    description: 'Microcontroller project with NodeMCU', tech: ['C++', 'Arduino',
    ], link: 'https://drive.google.com/file/d/1OZRsl1v1E_7o4FJY1gVn2lezkAvPSJs3/view?usp=sharing' },
    { title: 'Aplikasi Manajemen Tugas', image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'Aplikasi untuk melacak progres tugas harian.', tech: ['React', 'Firebase'], link: '#' }
];
module.exports = { educationHistory, skills, projects };