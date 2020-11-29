import React, {useState} from 'react';

function Slides({slides}) {
    const [slide, setSlide] = useState(0)

    const prevSlide = () => setSlide(currentSlide => currentSlide - 1)
    const nextSlide = () => setSlide(currentSlide => currentSlide + 1)
    const restartSlide = () => setSlide(0)
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={restartSlide} disabled={slide === 0} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={prevSlide} disabled={slide === 0} data-testid="button-prev" className="small">Prev</button>
                <button onClick={nextSlide} disabled={slide === slides.length - 1} data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slide].title}</h1>
                <p data-testid="text">{slides[slide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
