// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FanInvest - Invista na Música que Você Ama',
  description: 'Plataforma de streaming e investimento musical que conecta fãs e artistas através de assinaturas e apoio direto.',
  keywords: 'música, streaming, investimento, artistas, fãs, assinatura',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}










// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
