import { AuthContext } from './../context/Auth';
import React, { useContext, useState } from 'react';

export default function Login() {
    const [document, setDocument] = useState('');
    const [password, setPassword] = useState('');

    const { setIsAuthenticated } = useContext(AuthContext);

    const handleClickSignIn = async (e) => {
        e.preventDefault();

        setIsAuthenticated(true);
    }

    return (
        <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/6e/a7/5e/6ea75e607e5276f6bbb5e89016206c2b.jpg)'}}>
                    <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 class="text-4xl font-bold text-white">AGAH PET</h2>

                            <p class="max-w-xl mt-3 text-gray-300">A solução completa para sua gestão! Controle estoque, agendamentos e finanças em um só lugar. Experimente agora e veja seu petshop prosperar.</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">AGAH PET</h2>

                            <p class="mt-3 text-gray-500 dark:text-gray-300">Logue para acessar sua conta</p>
                        </div>

                        <div class="mt-8">
                            <form>
                                <div>
                                    <label for="document" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">CPF</label>
                                    <input 
                                        type="document" 
                                        name="text" 
                                        id="document" 
                                        value={document}
                                        onChange={(e) => setDocument(e.target.value)}
                                        placeholder='Seu documento/CPF' 
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                    />
                                </div>

                                <div class="mt-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <p class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Esqueceu a senha?</p>
                                    </div>

                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Sua senha'
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                    />
                                </div>

                                <div class="mt-6">
                                    <button onClick={(e) => handleClickSignIn(e)} class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Entrar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}