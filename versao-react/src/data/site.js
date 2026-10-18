// Informações reunidas em um só arquivo para facilitar futuras atualizações.
export const site = {
  nome: 'Evoluir Clínica',
  descricao: 'Cuidando do desenvolvimento emocional e cognitivo com propósito.',
  whatsapp: '5582991298964',
  mensagem: 'Olá, vim pelo site e gostaria de agendar uma avaliação',
  instagram: 'https://instagram.com/evoluirclinicaarapiraca',
  email: 'clinicaevoluirarapiraca@gmail.com',
  telefone: '(82) 99129-8964',
  endereco: 'Av. Ceci Cunha, 1397',
  bairroCidade: 'Novo Horizonte, Arapiraca - AL',
};

export function linkWhatsApp() {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensagem)}`;
}
