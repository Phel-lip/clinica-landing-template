export const siteConfig = {
  clinic: {
    name: "Evoluir Clínica",
    description: "Cuidando do desenvolvimento emocional e cognitivo com propósito. ",
  },

  contact: {
    whatsapp: "5582991298964",
    whatsappMessage: "Olá, vim pelo site e gostaria de agendar uma avaliação",
    instagram: "https://instagram.com/evoluirclinica",
    email: "contato@evoluirclinica.com.br",
    phone: "(82) 99129-8964",
  },

  location: {
    address: "Av. Ceci Cunha, 1397",
    city: "Novo Horizonte, Arapiraca",
  },

  team: [
    {
      name: "Tatiely",
      role: "Psicóloga",
      image: "/team/tatiely.png",
      bio: "Atua com foco no desenvolvimento emocional e comportamental infantil.",
    },
    {
      name: "Larissa",
      role: "Fonoaudióloga",
      image: "/team/larissa.png",
      bio: "Especialista no desenvolvimento da comunicação e linguagem.",
    },
    {
      name: "Ester",
      role: "Neuropsicopedagoga",
      image: "/team/ester.png",
      bio: "Foco em aprendizagem e desenvolvimento cognitivo.",
    },
  ]
}
export const getWhatsAppLink = () => {
  const phone = siteConfig.contact.whatsapp
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage)

  return `https://wa.me/${phone}?text=${message}`
}