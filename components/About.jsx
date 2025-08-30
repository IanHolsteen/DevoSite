import Image from 'next/image'

export default function Example() {
    return (
        <div id="about" className="mx-auto overflow-hidden max-w-6xl mt-48">
            <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen lg:block" />
                <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h3 className=" mt-2 text-3xl font-bold leading-8 tracking-tight text-silver sm:text-4xl"><em className='text-salmon mr-2'>//</em> About Me</h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:col-start-2 lg:row-start-1">
                        <svg
                            className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={2} height={2} className="text-mustard" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div className="relative w-full max-w-sm mx-auto drop-shadow-xl">
                                    <Image
                                        src='/images/portrait.jpg'
                                        alt="Portrait of Ian Holsteen"
                                        className="rounded-none object-cover object-center"
                                        width={600}
                                        height={600}
                                        sizes="(max-width: 768px) 100vw, 600px"
                                    />
                                    </div>

                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="mx-auto max-w-prose text-base lg:max-w-none">
                            <p className="text-lg text-silver">
                                Hello! My name is Ian, and I am a passionate about creating things. My drive to create began with learning to play the piano, following a multi-generation tradition. My joy in creating music led me to learning a variety of digital audio applications and in order to promote myself, web applications. This journey is where I discovered my love for coding and my interest in building beautiful and user-friendly web applications.
                            </p>
                        </div>
                        <div className="prose prose-indigo mx-auto mt-5 text-silver lg:col-start-1 lg:row-start-1 lg:max-w-none">
                            {/* <p>
                                I have always had a passion for creating things, whether it be with my instruments, my hands or crafting web applications.
                            </p>
                            <p>
                                I am now on the lookout for new and exciting opportunities to showcase my skills and continue growing as a developer. My favorite frameworks include <em className='text-aqua not-italic'>React, TailwindCSS, and Next.js</em>. I love the versatility and power that these tools bring to web development and the endless possibilities they offer.
                            </p> */}
                            <p>
                                I enjoy taking ideas from concept to reality and am dedicated to delivering high-quality work, whether it’s a small, straightforward project or something more ambitious. I’m always eager to learn and experiment with new technologies to make projects both functional and engaging. If you’re looking for a developer who can bring your ideas to life efficiently and thoughtfully, I’d love to connect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
