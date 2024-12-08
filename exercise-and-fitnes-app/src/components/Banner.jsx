const Banner = ({ pageName, subtitle, backgroundImage }) => {
  return (
    <section
      className={`${backgroundImage} h-[23vw] max-h-[180px] w-full bg-cover bg-center text-white flex justify-center flex-col relative font-semibold z-30`}
    >
      <div className="uppercase width z-40">
        <h4 className=" text-xl sm:text-3xl  sm:mb-1.5">{pageName}</h4>
        <p className=" text-xs sm:text-sm text-gray-300 tracking-wider">
          {subtitle}
        </p>
      </div>
      <div className="absolute w-full h-full bg-black/50" />
    </section>
  )
}
export default Banner
