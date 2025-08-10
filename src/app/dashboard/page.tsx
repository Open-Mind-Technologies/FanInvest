// src/app/dashboard/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Music, Users, TrendingUp, Heart, Upload, BarChart3, Settings, LogOut } from 'lucide-react';
import Button from '@/components/ui/button';


export default function DashboardPage() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold gradient-text">FanInvest</h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Bem-vindo, {user.name}! 👋
          </h2>
          <p className="text-gray-600">
            {user.role === 'fan' 
              ? 'Descubra novos artistas e apoie a música que você ama.'
              : user.role === 'artist'
              ? 'Compartilhe sua música e conecte-se com seus fãs.'
              : 'Gerencie a plataforma e analise métricas.'
            }
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards específicos por role */}
          {user.role === 'fan' && (
            <>
              {/* Descobrir Música */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Music className="w-6 h-6 text-purple-600" />
                  </div>
                  <Button size="sm" className="text-xs">
                    Explorar
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Descobrir Música
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Encontre novos artistas independentes e suas últimas criações.
                </p>
                <div className="text-xs text-gray-500">
                  +127 novas faixas esta semana
                </div>
              </div>

              {/* Minhas Assinaturas */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    Ver Todas
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Minhas Assinaturas
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Artistas que você está apoiando atualmente.
                </p>
                <div className="text-xs text-gray-500">
                  3 assinaturas ativas
                </div>
              </div>

              {/* Recomendações */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    Ver Mais
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Recomendações
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Baseado no seu histórico de escuta e preferências.
                </p>
                <div className="text-xs text-gray-500">
                  15 recomendações personalizadas
                </div>
              </div>
            </>
          )}

          {user.role === 'artist' && (
            <>
              {/* Upload de Música */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Upload className="w-6 h-6 text-green-600" />
                  </div>
                  <Button size="sm" className="text-xs">
                    Upload
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nova Música
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Compartilhe suas últimas criações com seus fãs.
                </p>
                <div className="text-xs text-gray-500">
                  12 faixas publicadas
                </div>
              </div>

              {/* Meus Fãs */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    Ver Todos
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Meus Fãs
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Fãs que estão apoiando sua música.
                </p>
                <div className="text-xs text-gray-500">
                  247 assinantes ativos
                </div>
              </div>

              {/* Analytics */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    Relatório
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Analytics
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Acompanhe o desempenho das suas músicas.
                </p>
                <div className="text-xs text-gray-500">
                  +23% de reproduções este mês
                </div>
              </div>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Configurações</span>
            </Button>
            {user.role === 'fan' && (
              <Button variant="outline" size="sm">
                Explorar Artistas
              </Button>
            )}
            {user.role === 'artist' && (
              <>
                <Button variant="outline" size="sm">
                  Nova Playlist
                </Button>
                <Button variant="outline" size="sm">
                  Gerenciar Assinaturas
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Resumo da Semana</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm opacity-90">
                {user.role === 'fan' ? 'Músicas ouvidas' : 'Reproduções'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">8.5h</div>
              <div className="text-sm opacity-90">Tempo total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm opacity-90">
                {user.role === 'fan' ? 'Artistas descobertos' : 'Novos fãs'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">R$ 45</div>
              <div className="text-sm opacity-90">
                {user.role === 'fan' ? 'Investido' : 'Ganho'}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}