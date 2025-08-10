// src/app/page.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Music, Users, TrendingUp, Heart, Play, Star, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/button';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold gradient-text">FanInvest</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors">
                Como Funciona
              </a>
              <a href="#para-artistas" className="text-gray-600 hover:text-gray-900 transition-colors">
                Para Artistas
              </a>
              <a href="#precos" className="text-gray-600 hover:text-gray-900 transition-colors">
                Preços
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="ghost">Entrar</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button>Começar Grátis</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Invista na Música
              <br />
              <span className="gradient-text">que Você Ama</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A primeira plataforma que conecta fãs e artistas através de streaming 
              e investimento musical. Descubra novos talentos, apoie seus artistas 
              favoritos e faça parte da revolução musical.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Link href="/auth/register">
                <Button size="lg" className="w-full sm:w-auto">
                  <Play className="w-5 h-5 mr-2" />
                  Começar Gratuitamente
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Music className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Artistas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">50K+</div>
                <div className="text-sm text-gray-600">Fãs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1M+</div>
                <div className="text-sm text-gray-600">Músicas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">R$ 2M+</div>
                <div className="text-sm text-gray-600">Investido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma plataforma simples e poderosa que revoluciona a forma como 
              fãs e artistas se conectam através da música.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Para Fãs */}
            <div className="text-center p-6 rounded-lg bg-purple-50 border border-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Para Fãs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Descubra novos artistas independentes</li>
                <li>• Assine artistas e apoie diretamente</li>
                <li>• Acesso exclusivo a conteúdo premium</li>
                <li>• Streaming ilimitado de alta qualidade</li>
              </ul>
            </div>

            {/* Para Artistas */}
            <div className="text-center p-6 rounded-lg bg-pink-50 border border-pink-100">
              <div className="w-16 h-16 bg-pink-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Para Artistas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Faça upload e compartilhe sua música</li>
                <li>• Monetize através de assinaturas</li>
                <li>• Conecte-se diretamente com fãs</li>
                <li>• Analytics detalhados de performance</li>
              </ul>
            </div>

            {/* Investimento */}
            <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investimento</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Invista em artistas promissores</li>
                <li>• Receba retornos baseados no sucesso</li>
                <li>• Portfolio musical diversificado</li>
                <li>• Transparência total nos resultados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="para-artistas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Construa sua Carreira Musical
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa plataforma oferece todas as ferramentas que você precisa 
                para crescer como artista independente e monetizar sua paixão.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Base de Fãs Engajados</h3>
                    <p className="text-gray-600">Construa uma comunidade leal que valoriza e apoia sua arte.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Renda Recorrente</h3>
                    <p className="text-gray-600">Sistema de assinaturas que garante renda estável e previsível.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Controle Total</h3>
                    <p className="text-gray-600">Você mantém os direitos da sua música e controla como é distribuída.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/auth/register">
                  <Button size="lg">
                    Começar Como Artista
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Maria Silva</h3>
                  <p className="text-purple-100">Cantora Independente</p>
                </div>
                <p className="text-lg mb-6">
                  &quot;Desde que comecei a usar o FanInvest, consegui triplicar minha renda 
                  musical e criar uma conexão real com meus fãs. É incrível!&quot;
                </p>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current text-yellow-300" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Preços Transparentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para você. Sem taxas ocultas, sem compromisso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Fã */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fã</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">Grátis</div>
                <p className="text-gray-600 mb-6">Para descobrir e apoiar artistas</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span>Streaming gratuito</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span>Descoberta de artistas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span>Assinaturas de artistas</span>
                </li>
              </ul>
              <Link href="/auth/register">
                <Button variant="outline" className="w-full">
                  Começar Grátis
                </Button>
              </Link>
            </div>

            {/* Plano Artista */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-white relative transform scale-105">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                Mais Popular
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Artista</h3>
                <div className="text-4xl font-bold mb-4">30 MT<span className="text-lg">/mês</span></div>
                <p className="text-purple-100 mb-6">Para músicos independentes</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                  <span>Upload ilimitado</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                  <span>Analytics detalhados</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                  <span>Monetização por assinatura</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <Link href="/auth/register">
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Começar Agora
                </Button>
              </Link>
            </div>

            {/* Plano Pro */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">79 MT<span className="text-lg">/mês</span></div>
                <p className="text-gray-600 mb-6">Para artistas estabelecidos</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span>Todos os recursos do Artista</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span>Marketing personalizado</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span>Distribuição externa</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span>Gerente de conta dedicado</span>
                </li>
              </ul>
              <Link href="/auth/register">
                <Button variant="outline" className="w-full">
                  Falar com Vendas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Pronto para Revolucionar sua Experiência Musical?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de artistas e fãs que já estão transformando 
            a indústria musical. Comece gratuitamente hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto">
                <Play className="w-5 h-5 mr-2" />
                Começar Gratuitamente
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto">
              Falar com um Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}