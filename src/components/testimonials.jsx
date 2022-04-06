export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Struktur organisasi</h2>
        </div>
        <center>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Direktur Utama
                </button>
        </center>
        <center>
        <img src="img/struktur.png" className="img-responsive" alt="" />{" "}
        </center>
        <center>
                 <button type='submit' className='btn btn-custom btn-lg'>
                  Wakil direktur operasional
                </button>
                  <button type='submit' className='btn btn-custom btn-lg'>
                  Wakil direktur marketing
                </button>
                  <button type='submit' className='btn btn-custom btn-lg'>
                  Wakil direktur manajemem
                </button>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Bendahara
                </button>
                </center>
      </div>
    </div>
    
  )
}
