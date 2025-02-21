import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
       <div>
         <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But don't worry, you can find plenty of other things on our homepage.</p>
			

            <Link to='/' className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span className="relative">Back to homepage</span>
</Link>


		</div>
	</div>
</section>
       </div>
    );
};

export default ErrorPage;