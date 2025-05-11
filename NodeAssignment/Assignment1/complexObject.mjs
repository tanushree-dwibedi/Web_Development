const userId = Symbol('id');

const complexObject = {
  name: 'Tanushree',
  age: 21,
  address: {
    street: '123 AI Lane',
    city: 'Bhubaneswar',
    pin: 751003,
    coordinates: {
      lat: 20.2961,
      long: 85.8245
    }
  },
  skills: ['Python', 'JavaScript', 'C++'],
  education: {
    college: 'SOA University',
    degree: 'B.Tech',
    year: 3,
    achievements: [
      { title: 'Best Paper Award', year: 2024 },
      { title: 'Hackathon Winner', year: 2023 }
    ]
  },
  projects: [
    { name: 'Stock Price Predictor', tech: ['LSTM', 'TensorFlow'] },
    { name: 'Depth Estimation', tech: ['OpenCV', 'Jetson Nano'] }
  ],
  getSummary() {
    return `${this.name} is a ${this.education.year}rd year student at ${this.education.college}.`;
  },
  [userId]: 1001,
  toJSON() {
    return { name: this.name, age: this.age };
  }
};

// ✅ Add this line at the bottom
export default complexObject;

//module.exports = complexObject;
