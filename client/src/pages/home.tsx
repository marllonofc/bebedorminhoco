import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Gift, Calendar, CheckSquare, Shield, Clock, Star, AlertCircle, Download, Lock, ShieldCheck } from "lucide-react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 86400000); // 24 hours

    return () => clearInterval(timer);
  }, []);

  const handlePurchaseClick = () => {
    // TODO: Implement purchase functionality
    console.log("Purchase initiated");
  };

  return (
    <div className="font-inter bg-cream text-navy">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-baby-blue to-soft-pink py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" data-testid="main-title">
            🌙Manual do Bebê Dorminhoco💤
          </h1>
          <p className="text-xl text-white opacity-90" data-testid="subtitle">
            14 Passos para a <span className="text-violet-400 font-semibold">Liberdade Noturna</span>!
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-baby-blue/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy" data-testid="hero-title">
              Transforme as Noites de Terror em Noites de Paz Absoluta
            </h2>
            <p className="text-xl mb-8 text-gray-700" data-testid="hero-description">
              Descubra o método comprovado que já ajudou mais de 10.000 famílias a conquistarem o sono dos sonhos para seus bebês em até 6 Semanas!
            </p>
            
            <div className="mb-8">
              <img 
                src="https://i.postimg.cc/jjM4w98L/bebe-dormindo-2.png" 
                alt="Bebê dormindo peacefully" 
                className="rounded-xl shadow-2xl mx-auto max-w-md w-full"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Identification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="problems-title">
              🥵Você está <span className="text-red-600 font-extrabold">EXAUSTA</span> e não aguenta mais...
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-1">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    Acordar 5, 6, 7 vezes por noite?
                  </h3>
                  <p className="text-gray-700">Seu bebê acorda constantemente e você já não lembra como é ter uma noite completa de sono...</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    Passar horas tentando fazer o bebê dormir?
                  </h3>
                  <p className="text-gray-700">Você balança, canta, roda a casa toda... mas nada funciona e o bebê continua resistindo ao sono.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-3">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    Sentir que está falhando como mãe?
                  </h3>
                  <p className="text-gray-700">Outras mães parecem ter tudo sob controle enquanto você se sente perdida e incompetente...</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-4">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    Ver seu relacionamento se deteriorando?
                  </h3>
                  <p className="text-gray-700">A falta de sono está afetando seu humor, sua paciência e sua relação com seu parceiro...</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-navy text-white p-8 rounded-xl text-center" data-testid="solution-teaser">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">PARE DE SOFRER! A solução está aqui...</h3>
                <p className="text-lg">Milhares de mães já transformaram suas noites com este método e que ninguém fala por ai!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Presentation */}
      <section className="py-16 bg-gradient-to-b from-baby-blue/5 to-soft-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy" data-testid="solution-title">
                💡Apresento o MANUAL DO BEBÊ DORMINHOCO💤
              </h2>
              <p className="text-xl text-gray-700 mb-8" data-testid="solution-description">
                Um Manual completo de 14 passos que vai transformar seu bebê em um dorminhoco naturalmente!
              </p>
            </div>

            <div className="text-center mb-12">
              <img 
                src="https://i.ibb.co/rG31Jz1j/Mockup-Manual-do-Bebe-Dorminhoco-14-Passos-para-a-Liberdade-Noturna.png" 
                alt="Mãe feliz com bebê dormindo" 
                className="rounded-xl shadow-2xl mx-auto max-w-lg w-full"
                data-testid="solution-image"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg" data-testid="feature-card-1">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <CheckCircle />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Método Científico Comprovado</h3>
                  <p className="text-gray-700">Baseado em pesquisas internacionais sobre o sono infantil e aprovado por pediatras</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="feature-card-2">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <Clock />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Primeiros Resultados em Até 15 Dias</h3>
                  <p className="text-gray-700">Sem choro excessivo, sem traumas, apenas uma transição suave e natural</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="feature-card-3">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <CheckCircle />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Para Bebês de 0 a 4 Anos</h3>
                  <p className="text-gray-700">Método adaptável para diferentes idades e personalidades dos bebês</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="feature-card-4">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <CheckCircle />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Respeitoso e Gentil</h3>
                  <p className="text-gray-700">Sem métodos traumáticos, apenas técnicas amorosas e eficazes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="bonus-title">
              🫣BÔNUS EXCLUSIVOS 100% GRATUITOS!😻
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Bonus 1 */}
              <Card className="bg-gradient-to-b from-soft-pink/20 to-white border-2 border-soft-pink" data-testid="bonus-card-1">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-soft-pink text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Gift className="text-2xl" />
                    </div>
                    <div className="text-red-500 line-through text-lg font-semibold">R$ 27,00</div>
                    <Badge className="bg-green-600 text-white font-bold text-lg">GRÁTIS!</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-center">Bônus Mini eBook</h3>
                  <h4 className="font-semibold mb-3 text-center">"Erros Comuns que Atrapalham o Sono do Bebê"</h4>
                  <p className="text-gray-700 text-sm text-center">Descubra os erros mais comuns que os pais cometem e que sabotam o sono do bebê</p>
                </CardContent>
              </Card>
              
              {/* Bonus 2 */}
              <Card className="bg-gradient-to-b from-baby-blue/20 to-white border-2 border-baby-blue" data-testid="bonus-card-2">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-baby-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="text-2xl" />
                    </div>
                    <div className="text-red-500 line-through text-lg font-semibold">R$ 27,00</div>
                    <Badge className="bg-green-600 text-white font-bold text-lg">GRÁTIS!</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-center">Bônus Cartão</h3>
                  <h4 className="font-semibold mb-3 text-center">"Rotina Noturna em 15 Minutos"</h4>
                  <p className="text-gray-700 text-sm text-center">Cartão prático para imprimir com o passo a passo da rotina noturna perfeita</p>
                </CardContent>
              </Card>
              
              {/* Bonus 3 */}
              <Card className="bg-gradient-to-b from-warm-coral/20 to-white border-2 border-warm-coral" data-testid="bonus-card-3">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-warm-coral text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckSquare className="text-2xl" />
                    </div>
                    <div className="text-red-500 line-through text-lg font-semibold">R$ 27,00</div>
                    <Badge className="bg-green-600 text-white font-bold text-lg">GRÁTIS!</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-center">Bônus Checklist</h3>
                  <h4 className="font-semibold mb-3 text-center">"Sono Perfeito"</h4>
                  <p className="text-gray-700 text-sm text-center">Lista completa para verificar se tudo está pronto para uma noite perfeita de sono</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-green-100 border-2 border-green-400 text-center" data-testid="bonus-value">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">VALOR TOTAL DOS BÔNUS: R$ 81,00</h3>
                <p className="text-green-700 font-semibold">Todos inclusos GRATUITAMENTE na sua compra!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-pink-300 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="pricing-title">
              😱OFERTA ESPECIAL POR TEMPO LIMITADO!🚨
            </h2>
            
            <Card className="bg-white text-navy rounded-xl shadow-2xl mb-8" data-testid="pricing-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-red-500 line-through text-2xl mb-2">De R$ 47,00</div>
                  <div className="text-5xl font-bold text-green-600 mb-4">R$ 12,00</div>
                  <div className="text-lg text-gray-600">Acesso Imediato + 3 Bônus Gratuitos</div>
                </div>
                
                <Card className="bg-red-100 border border-red-400 mb-6" data-testid="urgency-banner">
                  <CardContent className="p-4">
                    <div className="font-bold text-red-700 mb-2 flex items-center justify-center">
                      <AlertCircle className="mr-2" />
                      ATENÇÃO: PROMOÇÃO VÁLIDA APENAS POR MAIS {5} DIAS!
                    </div>
                    <div className="text-red-600">Após esse prazo, o preço volta para R$ 47,00</div>
                  </CardContent>
                </Card>
                
                <Button
                  data-testid="button-purchase-final"
                  onClick={() => window.location.href = 'https://estante-virtual6.pay.yampi.com.br/r/4QRC8DIB1O'}
                  className="pulse-button bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-6 py-3 rounded-full w-full mb-4 transition-all whitespace-normal break-words text-center leading-tight"
                >
                  🛒 QUERO O MEU BEBÊ DORMINHOCO AGORA!
                </Button>
                
                <div className="text-center text-sm text-gray-600 mt-2">
                  Pagamento 100% seguro
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-600 text-white" data-testid="guarantee-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
                  <ShieldCheck className="text-yellow-500 mr-2 h-6 w-6" />
                  GARANTIA DE 7 DIAS
                </h3>
                <p className="text-center"></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-soft-pink/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="testimonials-title">
              😴O Que Dizem as Mamães Que Já Transformaram Suas Noites✨
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-1">
                <CardContent className="p-6">
                  <img 
                    src="https://i.postimg.cc/dVXSpb9G/randomface.jpg" 
                    alt="Mãe feliz com bebê" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Em apenas 10 dias minha filha de 8 meses passou a dormir a noite toda! Eu não acreditava que seria tão simples. Agora acordo descansada e sou uma mãe muito mais paciente."</p>
                  <div className="font-bold text-navy">Ana Carolina - São Paulo/SP</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-2">
                <CardContent className="p-6">
                  <img 
                    src="https://i.postimg.cc/LstBDwQ9/randomface-1.jpg
" 
                    alt="Mãe feliz testimonial" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Eu estava desesperada! Meu bebê só dormia no colo e eu passava noites em claro. Com o manual, em 2 semanas ele já dormia no berço sozinho. Salvou meu casamento!"</p>
                  <div className="font-bold text-navy">Mariana Silva - Rio de Janeiro/RJ</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-3">
                <CardContent className="p-6">
                  <img 
                    src="https://i.postimg.cc/4NY6qm2F/image.png
" 
                    alt="Mãe tranquila testimonial" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Testei tudo que existe na internet, nada funcionava. O Manual foi diferente: científico, prático e realmente eficaz. Meu bebê dorme 12h seguidas!"</p>
                  <div className="font-bold text-navy">Juliana Santos - Belo Horizonte/MG</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-4">
                <CardContent className="p-6">
                  <img 
                    src="https://i.postimg.cc/qRmKZTsT/image.png
" 
                    alt="Família feliz testimonial" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Como pediatra, recomendo este manual para todas as mães. É baseado em ciência, respeitoso com o bebê e realmente funciona. Meus próprios filhos dormiram com este método."</p>
                  <div className="font-bold text-navy">Dra. Patricia Lima - Pediatra - Brasília/DF</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="learn-title">
              ✍️Exatamente O Que Você Vai Aprender✨
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: "1",
                  title: "A Ciência Por Trás do Sono Infantil",
                  description: "Entenda como funciona o sono do bebê e porque ele é diferente do adulto",
                  color: "baby-blue"
                },
                {
                  number: "2",
                  title: "Identificando os Sinais de Sono",
                  description: "Aprenda a reconhecer quando seu bebê está com sono ANTES do choro",
                  color: "soft-pink"
                },
                {
                  number: "3",
                  title: "Criando o Ambiente Perfeito",
                  description: "Temperatura, iluminação, ruídos: todos os detalhes para o quarto ideal",
                  color: "baby-blue"
                },
                {
                  number: "4",
                  title: "A Rotina dos 15 Minutos",
                  description: "Passo a passo da rotina noturna que prepara o bebê para dormir",
                  color: "soft-pink"
                },
                {
                  number: "5",
                  title: "Técnicas de Auto-Acalmação",
                  description: "Como ensinar seu bebê a voltar a dormir sozinho durante a noite",
                  color: "baby-blue"
                },
                {
                  number: "6",
                  title: "Lidando com Regressões",
                  description: "O que fazer quando o bebê volta a acordar após ter aprendido a dormir",
                  color: "soft-pink"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-4 bg-${item.color}/10 rounded-lg`}
                  data-testid={`learn-item-${index + 1}`}
                >
                  <div className={`bg-${item.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold`}>
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="faq-title">
              🤔Perguntas Frequentes
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "O método funciona para bebês de todas as idades?",
                  answer: "Sim! O manual é adaptável para bebês de 0 a 4 anos. Cada faixa etária tem orientações específicas para garantir o sucesso do método."
                },
                {
                  question: "O bebê vai chorar muito durante o processo?",
                  answer: "Não! Nosso método é gentil e respeitoso. Evitamos o choro excessivo através de técnicas graduais e amorosas que respeitam o temperamento do bebê."
                },
                {
                  question: "Em quanto tempo verei resultados?",
                  answer: "A maioria das famílias vê melhorias significativas em até 15 dias. Alguns bebês respondem ainda mais rápido, especialmente com consistência na aplicação."
                },
                {
                  question: "Iniciando o processo de autonomia do sono no meu bebê recém nascido em quanto tempo ele estabiliza o sono?",
                  answer: "Aos 4 meses de idade ele já deve estabilizar o sono e ter um padrão de sono mais consistente."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-white shadow-sm border border-gray-200" data-testid={`faq-item-${index + 1}`}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-navy flex items-center">
                      <AlertCircle className="text-baby-blue mr-2" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-pink-300 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="final-cta-title">
              🕒Sua Última Chance de Transformar as Noites da Sua Família🌙
            </h2>
            
            <img 
              src="https://i.postimg.cc/WbSzvvtF/mae-e-bebe-2.png" 
              alt="Bebê dormindo peacefully no berço" 
              className="rounded-xl shadow-2xl mx-auto max-w-lg w-full mb-8"
              data-testid="final-cta-image"
            />
            
            <p className="text-xl mb-8" data-testid="final-cta-description">
              Imagine acordar amanhã depois de uma noite completa de sono...
              Seu bebê dormindo tranquilamente no berço, você descansada e feliz.
            </p>
            
            <Card className="bg-white text-navy rounded-xl mb-8" data-testid="final-pricing-card">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-4">😴R$ 12,00💤</div>
                <div className="text-lg mb-4">Manual + 3 Bônus Gratuitos</div>
                
                <Button
                  onClick={() => window.location.href = 'https://estante-virtual6.pay.yampi.com.br/r/4QRC8DIB1O'}
                  className="pulse-button bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-6 py-3 rounded-full w-full mb-4 transition-all whitespace-normal break-words text-center leading-tight"
                  data-testid="button-purchase-final"
                >
                  🚀 SIM! QUERO O MEU BEBÊ DORMINHOCO AGORA!
                </Button>


                
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center justify-center">
                    <Shield className="text-green-600 mr-2 h-4 w-4" />
                    Garantia de 7 dias
                  </div>
                  <div className="flex items-center justify-center">
                    <Download className="text-green-600 mr-2 h-4 w-4" />
                    Acesso imediato
                  </div>
                  <div className="flex items-center justify-center">
                    <Lock className="text-green-600 mr-2 h-4 w-4" />
                    Pagamento 100% seguro
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-yellow-300 text-sm" data-testid="final-urgency">
              ⚠️ OFERTA VÁLIDA APENAS POR MAIS {5} DIAS - NÃO PERCA!
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="font-bold text-lg" data-testid="footer-title">Manual do Bebê Dorminhoco</h3>
            <p className="text-gray-400" data-testid="footer-tagline">Transformando noites, fortalecendo famílias</p>
          </div>
          
          <div className="text-gray-400 text-sm space-y-2">
            <p data-testid="footer-copyright">© 2025 Manual do Bebê Dorminhoco. Todos os direitos reservados.</p>
            <p data-testid="footer-support">Suporte E-mail: manualdobebedorminhoco@gmail.com</p>
            <p data-testid="footer-disclaimer">Este produto não substitui orientação médica profissional.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
