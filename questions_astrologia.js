const astrologiaQuestions = [
  {
    q: "¿Qué signo zodiacal inicia el zodiaco occidental?",
    options: ["Tauro", "Aries", "Géminis", "Piscis"],
    answer: 1
  },
  {
    q: "¿Qué elemento corresponde al signo de Cáncer?",
    options: ["Fuego", "Aire", "Tierra", "Agua"],
    answer: 3
  },
  {
    q: "¿Cuál es el planeta regente de Leo?",
    options: ["La Luna", "Marte", "El Sol", "Júpiter"],
    answer: 2
  },
  {
    q: "¿Qué signo es conocido por ser dual y mutable?",
    options: ["Géminis", "Escorpio", "Sagitario", "Capricornio"],
    answer: 0
  },
  {
    q: "¿Cuántas casas astrológicas existen?",
    options: ["8", "12", "10", "7"],
    answer: 1
  },
  {
    q: "¿Qué planeta representa la comunicación?",
    options: ["Saturno", "Mercurio", "Venus", "Urano"],
    answer: 1
  },
  {
    q: "¿Cuál es el elemento de Virgo?",
    options: ["Tierra", "Agua", "Aire", "Fuego"],
    answer: 0
  },
  {
    q: "¿Qué signo es considerado el más intuitivo del zodiaco?",
    options: ["Cáncer", "Leo", "Piscis", "Escorpio"],
    answer: 2
  },
  {
    q: "¿Qué signo está regido por Venus?",
    options: ["Tauro y Libra", "Virgo y Aries", "Cáncer y Leo", "Géminis y Sagitario"],
    answer: 0
  },
  {
    q: "¿Qué planeta representa la expansión?",
    options: ["Saturno", "Júpiter", "Marte", "Urano"],
    answer: 1
  },
  {
    q: "¿Qué signo está asociado al liderazgo y comienzo?",
    options: ["Capricornio", "Aries", "Sagitario", "Géminis"],
    answer: 1
  },
  {
    q: "¿Cuál es el signo opuesto de Tauro?",
    options: ["Escorpio", "Virgo", "Piscis", "Libra"],
    answer: 0
  },
  {
    q: "¿Qué modalidad tiene Acuario?",
    options: ["Cardinal", "Fijo", "Mutable", "Neutral"],
    answer: 1
  },
  {
    q: "¿Cuál es el planeta de la disciplina y las lecciones?",
    options: ["Marte", "Saturno", "Urano", "Venus"],
    answer: 1
  },
  {
    q: "¿Qué signo rige los pies?",
    options: ["Géminis", "Cáncer", "Piscis", "Sagitario"],
    answer: 2
  },
  {
    q: "¿Qué casa representa el hogar y la familia?",
    options: ["Casa 10", "Casa 4", "Casa 2", "Casa 7"],
    answer: 1
  },
  {
    q: "¿Qué signo es conocido por su intensidad emocional?",
    options: ["Escorpio", "Libra", "Aries", "Capricornio"],
    answer: 0
  },
  {
    q: "¿Qué planeta rige los sueños y la inspiración?",
    options: ["Neptuno", "Venus", "Plutón", "Mercurio"],
    answer: 0
  },
  {
    q: "¿Qué signo está asociado con los viajes largos y la filosofía?",
    options: ["Sagitario", "Leo", "Cáncer", "Géminis"],
    answer: 0
  },
  {
    q: "¿Qué elemento corresponde a Libra?",
    options: ["Fuego", "Aire", "Tierra", "Agua"],
    answer: 1
  },
  {
    q: "¿Cuál es el planeta regente de Aries?",
    options: ["Marte", "Venus", "Júpiter", "Urano"],
    answer: 0
  },
  {
    q: "¿Qué signo es conocido como el maestro del zodiaco?",
    options: ["Sagitario", "Virgo", "Capricornio", "Piscis"],
    answer: 3
  },
  {
    q: "¿Qué signo se asocia con la búsqueda de armonía y equilibrio?",
    options: ["Acuario", "Libra", "Escorpio", "Tauro"],
    answer: 1
  },
  {
    q: "¿Qué signo rige la comunicación y el pensamiento?",
    options: ["Géminis", "Aries", "Virgo", "Leo"],
    answer: 0
  },
  {
    q: "¿Cuál de los siguientes es un signo cardinal?",
    options: ["Leo", "Cáncer", "Virgo", "Acuario"],
    answer: 1
  },
  {
    q: "¿Qué planeta rige Capricornio?",
    options: ["Júpiter", "Venus", "Saturno", "Plutón"],
    answer: 2
  },
  {
    q: "¿Qué casa representa las relaciones y asociaciones?",
    options: ["Casa 3", "Casa 7", "Casa 11", "Casa 6"],
    answer: 1
  },
  {
    q: "¿Qué signo rige la creatividad y el romance?",
    options: ["Leo", "Sagitario", "Tauro", "Acuario"],
    answer: 0
  },
  {
    q: "¿Qué planeta rige la transformación profunda?",
    options: ["Plutón", "Urano", "Mercurio", "Saturno"],
    answer: 0
  },
  {
    q: "¿Qué elemento es dominante en los signos mutables?",
    options: ["Tierra", "Agua", "Aire", "No existe uno dominante"],
    answer: 3
  },
  {
    q: "¿A qué signo corresponde el símbolo del arquero?",
    options: ["Sagitario", "Acuario", "Virgo", "Aries"],
    answer: 0
  },
  {
    q: "¿Qué signo está asociado a la justicia?",
    options: ["Libra", "Escorpio", "Capricornio", "Piscis"],
    answer: 0
  },
  {
    q: "¿Qué planeta rige la tecnología e innovación?",
    options: ["Neptuno", "Urano", "Venus", "Plutón"],
    answer: 1
  },
  {
    q: "¿Qué signo rige la intuición psíquica y la sensibilidad extrema?",
    options: ["Cáncer", "Escorpio", "Piscis", "Libra"],
    answer: 2
  },
  {
    q: "¿Cuántos signos de agua existen?",
    options: ["2", "3", "4", "1"],
    answer: 1
  },
  {
    q: "¿Qué signo rige la piel y los huesos?",
    options: ["Virgo", "Capricornio", "Tauro", "Sagitario"],
    answer: 1
  },
  {
    q: "¿Qué planeta rige la acción e iniciativa?",
    options: ["Mercurio", "Plutón", "Marte", "Urano"],
    answer: 2
  },
  {
    q: "¿Qué signo es conocido por su rebeldía?",
    options: ["Leo", "Acuario", "Libra", "Piscis"],
    answer: 1
  },
  {
    q: "¿Qué casa representa la salud y el trabajo diario?",
    options: ["Casa 9", "Casa 6", "Casa 2", "Casa 8"],
    answer: 1
  },
  {
    q: "¿Qué signo rige los valores y la economía?",
    options: ["Tauro", "Cáncer", "Aries", "Acuario"],
    answer: 0
  },
  {
    q: "¿Cuál es el signo más perfeccionista del zodiaco?",
    options: ["Virgo", "Aries", "Escorpio", "Géminis"],
    answer: 0
  },
  {
    q: "¿Qué planeta rige el karma?",
    options: ["Plutón", "Saturno", "Urano", "Júpiter"],
    answer: 1
  },
  {
    q: "¿Qué signo representa lo oculto y la profundidad emocional?",
    options: ["Escorpio", "Capricornio", "Géminis", "Leo"],
    answer: 0
  },
  {
    q: "¿Cuál es la modalidad de Sagitario?",
    options: ["Cardinal", "Fijo", "Mutable", "No tiene"],
    answer: 2
  },
  {
    q: "¿Qué planeta rige la belleza y el placer?",
    options: ["Venus", "Mercurio", "Marte", "Júpiter"],
    answer: 0
  },
  {
    q: "¿Qué signo inicia la estación de otoño en el hemisferio norte?",
    options: ["Libra", "Virgo", "Escorpio", "Sagitario"],
    answer: 0
  },
  {
    q: "¿Quién es el regente moderno de Piscis?",
    options: ["Neptuno", "Júpiter", "Venus", "Marte"],
    answer: 0
  },
  {
    q: "¿Qué casa representa la identidad personal?",
    options: ["Casa 2", "Casa 1", "Casa 5", "Casa 12"],
    answer: 1
  },
  {
    q: "¿Qué signo está simbolizado por la balanza?",
    options: ["Libra", "Virgo", "Capricornio", "Piscis"],
    answer: 0
  },
  {
    q: "¿Qué planeta está asociado con el subconsciente?",
    options: ["Mercurio", "Neptuno", "Saturno", "Venus"],
    answer: 1
  },
  {
    q: "¿Cuál de estos es un signo de tierra?",
    options: ["Cáncer", "Acuario", "Tauro", "Libra"],
    answer: 2
  },
  {
    q: "¿Qué signo es conocido por su independencia radical?",
    options: ["Acuario", "Leo", "Piscis", "Escorpio"],
    answer: 0
  },
  {
    q: "¿Qué signo rige las piernas y los muslos?",
    options: ["Escorpio", "Sagitario", "Aries", "Cáncer"],
    answer: 1
  },
  {
    q: "¿Qué casa representa la espiritualidad y el inconsciente?",
    options: ["Casa 12", "Casa 8", "Casa 2", "Casa 7"],
    answer: 0
  },
  {
    q: "¿Qué planeta representa el cambio repentino?",
    options: ["Urano", "Júpiter", "Plutón", "Venus"],
    answer: 0
  },
  {
    q: "¿Qué signo es famoso por su paciencia y terquedad?",
    options: ["Aries", "Tauro", "Géminis", "Libra"],
    answer: 1
  },
  {
    q: "¿Qué signo es conocido por su idealismo y compasión?",
    options: ["Escorpio", "Cáncer", "Leo", "Piscis"],
    answer: 3
  },
  {
    q: "¿Qué elemento domina el grupo Aries–Leo–Sagitario?",
    options: ["Tierra", "Fuego", "Agua", "Aire"],
    answer: 1
  },
  {
    q: "¿Qué signo rige el estómago?",
    options: ["Leo", "Virgo", "Cáncer", "Acuario"],
    answer: 2
  },
  {
    q: "¿Qué planeta rige los cambios emocionales rápidos?",
    options: ["Venus", "La Luna", "Marte", "Mercurio"],
    answer: 1
  },
  {
    q: "¿Qué signo es conocido como el humanitario del zodiaco?",
    options: ["Acuario", "Sagitario", "Virgo", "Libra"],
    answer: 0
  },
  {
    q: "¿Cuál es la modalidad de Piscis?",
    options: ["Cardinal", "Fijo", "Mutable", "No tiene"],
    answer: 2
  },
  {
    q: "¿Qué signo representa la ambición y la responsabilidad?",
    options: ["Capricornio", "Aries", "Géminis", "Piscis"],
    answer: 0
  },
  {
    q: "¿Qué signo rige la garganta?",
    options: ["Tauro", "Géminis", "Escorpio", "Libra"],
    answer: 0
  },
  {
    q: "¿Qué planeta gobierna la mente superior?",
    options: ["Júpiter", "Mercurio", "Neptuno", "Plutón"],
    answer: 0
  },
  {
    q: "¿Qué signo rige los sistemas nerviosos y los pulmones?",
    options: ["Géminis", "Cáncer", "Acuario", "Virgo"],
    answer: 0
  }
];
