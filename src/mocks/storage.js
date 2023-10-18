const storage = [
  {
    id: 0,
    typeRoof: 'Односкатная',
    questions: [
      {
        id: 0,
        question: 'Ширина здания, м',
        image: '../../assets/Gable/Gable-A.svg',
        path: 'q-1',
        link: 'q-2',
      },
      {
        id: 1,
        question: 'Высота крыши в коньке, м',
        image: '../../assets/Gable/Gable-B.svg',
        path: 'q-2',
        link: 'q-3',
      },
      {
        id: 2,
        question: 'Длина свеса, м',
        image: '../../assets/Gable/Gable-C.svg',
        path: 'q-3',
        link: 'q-4',
      },
      {
        id: 3,
        question: 'Длина конька, м',
        image: '../../assets/Gable/Gable-D.svg',
        path: 'q-4',
        link: '../result',
      },
    ],

    image: '../../assets/Gable/Gable-0.svg',
    alt: 'Схема односкатной крыши',
    path: '/1',
    link: '/2',
    next: 'NEXT',
  },
  {
    id: 1,
    typeRoof: 'Двускатная',
    questions: [
      {
        id: 0,
        question: 'Ширина здания, м',
        image: '../../assets/Shed/Shed-A.svg',
        path: 'q-1',
        link: 'q-2',
      },
      {
        id: 1,
        question: 'Высота крыши в коньке, м',
        image: '../../assets/Shed/Shed-B.svg',
        path: 'q-2',
        link: 'q-3',
      },
      {
        id: 2,
        question: 'Длина свеса, м',
        image: '../../assets/Shed/Shed-C1.svg',
        path: 'q-3',
        link: 'q-4',
      },
      {
        id: 3,
        question: 'Длина конька, м',
        image: '../../assets/Shed/Shed-D.svg',
        path: 'q-4',
        link: '../result',
      },
    ],

    image: '../../assets/Shed/Shed-0.svg',
    alt: 'Схема двускатной крыши',
    path: '/2',
    link: '/3',
    next: 'NEXT',
  },
  {
    id: 2,
    typeRoof: 'Мансардная',
    questions: [
      {
        id: 0,
        question: 'Ширина заложений, м',
        image: '../../assets/Mansard/Mansard-A1.svg',
        path: 'q-1',
        link: 'q-2',
      },
      {
        id: 1,
        question: 'Длина конька, м',
        image: '../../assets/Mansard/Mansard-A2.svg',
        path: 'q-2',
        link: 'q-3',
      },
      {
        id: 2,
        question: 'Высота подъема 1, м',
        image: '../../assets/Mansard/Mansard-B1.svg',
        path: 'q-3',
        link: 'q-4',
      },
      {
        id: 3,
        question: 'Высота подъема 2, м',
        image: '../../assets/Mansard/Mansard-B2.svg',
        path: 'q-4',
        link: 'q-5',
      },
      {
        id: 4,
        question: 'Высота подъема 2, м',
        image: '../../assets/Mansard/Mansard-C.svg',
        path: 'q-5',
        link: 'q-6',
      },
      {
        id: 5,
        question: 'Высота подъема 2, м',
        image: '../../assets/Mansard/Mansard-D.svg',
        path: 'q-6',
        link: '../result',
      },
    ],

    image: '../../assets/Mansard/Mansard-0.svg',
    alt: 'Схема мансардной крыши',
    path: '/3',
    link: '/result',
    next: 'FINISH',
  },
]

export default storage
