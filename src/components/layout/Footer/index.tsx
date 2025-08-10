import { Music } from "lucide-react";

export default function Footer () {
    return(
        <>
        {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo e Descrição */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Music className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">FanInvest</h3>
                      </div>
                      <p className="text-gray-400 mb-4">
                        A plataforma que conecta fãs e artistas através de streaming e 
                        investimento musical. Revolucionando a forma como a música é consumida e monetizada.
                      </p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          <span className="sr-only">Facebook</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          <span className="sr-only">Instagram</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.296C4.165 14.81 3.617 13.5 3.617 12c0-1.5.548-2.81 1.516-3.692.868-.806 2.019-1.296 3.316-1.296s2.448.49 3.316 1.296c.968.882 1.516 2.192 1.516 3.692 0 1.5-.548 2.81-1.516 3.692-.868.806-2.019 1.296-3.316 1.296zm7.718-1.296c-.868.806-2.019 1.296-3.316 1.296s-2.448-.49-3.316-1.296c-.968-.882-1.516-2.192-1.516-3.692 0-1.5.548-2.81 1.516-3.692.868-.806 2.019-1.296 3.316-1.296s2.448.49 3.316 1.296c.968.882 1.516 2.192 1.516 3.692 0 1.5-.548 2.81-1.516 3.692z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </div>
                    </div>
        
                    {/* Links */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Produto</h4>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Para Artistas</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Para Fãs</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
                      </ul>
                    </div>
        
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Suporte</h4>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a></li>
                      </ul>
                    </div>
                  </div>
        
                  <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>Copyright &copy; 2025 FanInvest. Todos os direitos reservados.</p>
                  </div>
                </div>
              </footer>
        </>
    );
}