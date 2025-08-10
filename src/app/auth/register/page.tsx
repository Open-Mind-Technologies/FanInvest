// src/app/auth/register/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, Music, Eye, EyeOff, Users, Mic } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { RegisterData } from '@/types';
import Input from '@/components/ui/inputs';
import Button from '@/components/ui/button';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'fan' | 'artist'>('fan');
  
  const { register: registerUser, isLoading, error, isAuthenticated, clearError } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterData>({
    defaultValues: {
      role: 'fan'
    }
  });

  const password = watch('password');

  // Redirecionar se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  // Limpar erro quando componente desmonta
  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  const onSubmit = async (data: RegisterData) => {
    try {
      await registerUser({ ...data, role: selectedRole });
      router.push('/dashboard');
    } catch (error) {
      // Erro já é tratado no contexto
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">FanInvest</h1>
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-900">
            Crie sua conta
          </h2>
          <p className="mt-2 text-gray-600">
            Junte-se à revolução musical e comece a investir nos seus artistas favoritos
          </p>
        </div>

        {/* Role Selection */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Você é:</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedRole('fan')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedRole === 'fan'
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Fã</p>
              <p className="text-xs text-gray-500 mt-1">
                Descobrir e apoiar artistas
              </p>
            </button>
            
            <button
              type="button"
              onClick={() => setSelectedRole('artist')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedRole === 'artist'
                  ? 'border-pink-500 bg-pink-50 text-pink-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              <Mic className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Artista</p>
              <p className="text-xs text-gray-500 mt-1">
                Compartilhar sua música
              </p>
            </button>
          </div>
        </div>

        {/* Register Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Nome */}
          <Input
            {...register('name', {
              required: 'Nome é obrigatório',
              minLength: {
                value: 2,
                message: 'Nome deve ter pelo menos 2 caracteres'
              }
            })}
            type="text"
            label={selectedRole === 'artist' ? 'Nome Artístico' : 'Nome Completo'}
            placeholder={selectedRole === 'artist' ? 'Seu nome artístico' : 'Seu nome completo'}
            icon={<User className="w-5 h-5" />}
            error={errors.name?.message}
          />

          {/* Email */}
          <Input
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email inválido'
              }
            })}
            type="email"
            label="Email"
            placeholder="seu.email@exemplo.com"
            icon={<Mail className="w-5 h-5" />}
            error={errors.email?.message}
          />

          {/* Senha */}
          <div className="relative">
            <Input
              {...register('password', {
                required: 'Senha é obrigatória',
                minLength: {
                  value: 8,
                  message: 'Senha deve ter pelo menos 8 caracteres'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: 'Senha deve conter pelo menos: 1 minúscula, 1 maiúscula e 1 número'
                }
              })}
              type={showPassword ? 'text' : 'password'}
              label="Senha"
              placeholder="••••••••"
              icon={<Lock className="w-5 h-5" />}
              error={errors.password?.message}
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Confirmar Senha */}
          <div className="relative">
            <Input
              {...register('confirmPassword', {
                required: 'Confirmação de senha é obrigatória',
                validate: (value) => 
                  value === password || 'As senhas não coincidem'
              })}
              type={showConfirmPassword ? 'text' : 'password'}
              label="Confirmar Senha"
              placeholder="••••••••"
              icon={<Lock className="w-5 h-5" />}
              error={errors.confirmPassword?.message}
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2">
            <input
              {...register('terms', { required: 'Você deve aceitar os termos' })}
              type="checkbox"
              className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <p className="text-sm text-gray-600">
              Eu aceito os{' '}
              <Link href="/terms" className="text-purple-600 hover:text-purple-500">
                Termos de Serviço
              </Link>{' '}
              e a{' '}
              <Link href="/privacy" className="text-purple-600 hover:text-purple-500">
                Política de Privacidade
              </Link>
            </p>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-600">{errors.terms.message}</p>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            isLoading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Criando conta...' : 'Criar conta grátis'}
          </Button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Já tem uma conta?{' '}
              <Link
                href="/auth/login"
                className="font-medium text-purple-600 hover:text-purple-500 transition-colors"
              >
                Fazer login
              </Link>
            </p>
          </div>
        </form>

        {/* Benefits */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 mb-4">
            {selectedRole === 'fan' ? 'Como fã, você pode:' : 'Como artista, você pode:'}
          </p>
          <div className="space-y-2">
            {selectedRole === 'fan' ? (
              <>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Descobrir novos artistas independentes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Apoiar artistas através de assinaturas</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Acesso exclusivo a conteúdo premium</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                  <span>Fazer upload de suas músicas</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                  <span>Conectar-se diretamente com fãs</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                  <span>Monetizar seu conteúdo exclusivo</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}