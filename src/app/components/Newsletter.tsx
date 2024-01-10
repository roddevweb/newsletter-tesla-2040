export default function Newsletter() {
    return (

        <div className={`
        flex 
        flex-col 
        items-center 
        min-h-screen 
        bg-cover 
        bg-center
      `} style={{ backgroundImage: `url("/tesla-background.jpg")`, backgroundSize: 'cover' }}>
  
        {/* Header com logo centralizada */}
        <div className={`
          mb-8
        `}>
          <img src="/logo-tesla-2040.png" alt="Tesla Logo" className={`
            w-80 
            mt-16 
            mx-auto
          `} />
        </div>
  
        <div className={`
          bg-white 
          p-8 
          rounded 
          shadow-md 
          max-w-md 
          w-full
          transition-all
          duration-300
          ease-in-out
        `}>
          <h2 className={`
            text-4xl 
            text-center 
            font-bold 
            mb-6
          `}>Be the Pioneer</h2>
          <p className={`
            mb-3
          `}>First to Updates, Offers & News on<span className="font-bold">Tesla's 2040 Flying Cars</span>. Don't Miss Out, Soar into the Future!</p>
          <form>
  
            {/* Campo Nome Completo */}
            <div className={`
              mb-4
            `}>
              <label className={`
                block 
                text-gray-700 
                text-sm 
                font-bold 
                mb-2
              `} htmlFor="fullName">
                Full Name:
              </label>
              <input
                className={`
                  w-full 
                  p-2 
                  border 
                  rounded
                  focus:outline-none
                  focus:border-blue-500
                  transition-all
                  duration-300
                `}
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>
  
            {/* Campo E-mail */}
            <div className={`
              mb-4
            `}>
              <label className={`
                block 
                text-gray-700 
                text-sm 
                font-bold 
                mb-2
              `} htmlFor="email">
                E-mail:
              </label>
              <input
                className={`
                  w-full 
                  p-2 
                  border 
                  rounded
                  focus:outline-none
                  focus:border-blue-500
                  transition-all
                  duration-300
                `}
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Botão de Inscrição */}
            <button
              className={`
                w-full 
                bg-blue-500 
                text-white 
                p-2 
                rounded 
                hover:bg-blue-700 
                mb-4
                focus:outline-none
                transition-all
                duration-300
              `}
              type="submit"
            >
              Subscribe Now
            </button>
  
            {/* Lembrete Importante */}
            <p className={`
              text-sm 
              text-gray-600
            `}>
              By subscribing, you agree to receive notifications about Tesla's launches and events. Your journey to the skies begins here!
            </p>
          </form>
        </div>
      </div>
    );
  }