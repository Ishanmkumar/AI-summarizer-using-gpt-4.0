
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-center items-center w-full mb-10 pt-7 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 direction-col border-2 rounded-full'>
            <div className="font-extrabold text-2xl font-satoshi ">Summarizer</div>
       </nav>

      <h1 className='head_text'>
        Summarize Article with <br className='max-md: hidden'/>
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero