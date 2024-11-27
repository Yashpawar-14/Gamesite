import {useRef,useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt =({ children , className =''})=>{
    const [transformStyle, settransformStyle] = useState('')
    const itemRef= useRef();
    const handleMouseMove =(e) => {
        if(!itemRef.current) return;
        const {left ,top ,width ,height}= itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left)/width;
        const relativeY =(e.clientY-top)/height;

        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg)
        rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`

        settransformStyle(newTransform)
    }
    const handelMouseLeave=() =>{
        settransformStyle('')
    }
    return(
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handelMouseLeave} style={{transform:transformStyle}}>
           {children} 
        </div>
    )
}

const BentoCard =({src , title , description  }) =>{
    return(
        <div className=" relative size-full">
            <video 
            src={src} 
            loop
            muted
            autoPlay
            className=" absolute left-0 top-0 size-full object-cover object-center"
            
            
            />
            <div className=" relative z-10 flex size-full felx-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description &&(
                        <p className="mt-3 mx-w-64 text-xs md:text-base">{description}
                        </p>
                    )}
                </div>

            </div>
            {title}
        </div>
    )
}

const Features = () => {
  return (  
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32 '>
                <p className='font-circular-web text-lg text-blue-50'  > Into the MetaGame Layer</p>

            
            <p className=' max-w-md font-circular-web text-lg text-blue-50 opacity-50 '>Life's a crappy game, but Zentry is not,
                A place where we gather, our worries forgot.
                Unite and immerse, let the journey ignite,
                In Zentry, we thrive, through day and night.</p>
                </div>

        
        <BentoTilt className='border-hsla relative mb-7 h-95 w-full overflow-hidden rounded-md md:h-[64vh]'>
            <BentoCard
            src="videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>}
            description="
                        Radiant the sun, it lights up the skies,
                        Hope in its warmth, where the golden truth lies.
                        A beacon of strength, through shadows it gleams,
                        Guiding our hearts to follow our dreams."
                      
            />

        </BentoTilt>
        <div className=" grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                <BentoCard
                    src="videos/feature-2.mp4"
                    title={<>zig<b>m</b>a</>}
                    description="In a realm of battles and destiny's flame,An anime-inspired world calls your name."
                />

            </BentoTilt>
            <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                <BentoCard 
                 src="videos/feature-3.mp4"
                 title={<>N<b>e</b>xus</>}
                 description="A nexus of dreams where all paths converge,Boundless worlds awaken, their energies surge"
                />

            </BentoTilt>
            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                <BentoCard 
                 src="videos/feature-4.mp4"
                 title={<>az<b>u</b>l</>}
                 description="A nexus of dreams where all paths converge,Boundless worlds awaken, their energies surge"
                />

            </BentoTilt>
            <BentoTilt className="bento-tilt_2">
                <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                    <h1 className="bento-title special-font max-w-64 text-black">More C<b>0</b>ming <b>S</b>oon!</h1>
                    <TiLocationArrow className=" m-5 scale-[5] self-end"/>
                </div>

            </BentoTilt>
            <BentoTilt className="bento-tilt_2">
                <video src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
                />

            </BentoTilt>

        </div>
        </div>

    </section>
  )
}

export default Features