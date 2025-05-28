import bg from '../Assets/pattern.svg';
import ch from '../Assets/character.png';

export default function Main() {
    return (
        <div
            className="relative h-screen bg-cover bg-center bg-black bg-opacity-50"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="flex flex-col items-center justify-center h-full px-4 text-center">
                <div className="flex flex-col w-fit">
                    <h2 className="text-white font-semibold self-end leading-none m-0 
                        text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem]">
                        create
                    </h2>

                    <h1 className="text-white font-bold leading-none 
                        text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem]">
                        develop
                    </h1>

                    <h2 className="text-white font-semibold self-start leading-none m-0 
                        text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem]">
                        design
                    </h2>


                </div>
            </div>
        </div>
    );
}
