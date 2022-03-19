const NavBar = () => {
    return (
        <header className="bg-gray-200">
            <nav className="container mx-auto px-6 py-3">
                <div className="md:flex justify-around items-center">
                    <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                        <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="./#">KM's</a>
                    </div>
                    <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                        <a className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" href="./#">Home</a>
                        <a className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" href="./#">Tienda</a>
                        <a className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" href="./#">Categorias</a>
                        <a className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" href="./#">Blog</a>
                    </div>
                    <div className="flex items-center py-2 -mx-1 md:mx-0">
                        <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto" href="./#">Logearse</a>
                        <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto" href="./#">Entrar</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar