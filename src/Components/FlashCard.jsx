import React from 'react'
import './FlashCard.css'

const FlashCard = () => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isFlipped, setIsFlipped] = React.useState(false);

    const images = [
        './img/Yoga-1.png',
        './img/Yoga-2.png',
        './img/Yoga-3.png',
        './img/Yoga-4.png',
        './img/Yoga-5.png',
        './img/Yoga-6.png',
        './img/Yoga-7.png',
        './img/Yoga-8.png',
    ]
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentImage(randomIndex);
        setIsFlipped(false);
    }
    return (
        <div className='flashcard-container'>
            <div className='flashcard-wrapper'>
                <div className={`flashcard` + (isFlipped ? ' flipped' : '')} onClick={() => setIsFlipped(!isFlipped)}>
                    <div className='flashcard-front'>
                        <img
                            src={images[currentImage]}
                            alt='Yoga'
                            className='flashcard-image'
                        />
                    </div>
                    <div className='flashcard-back'>
                        <div className="flashcard-content">
                            <div className="flashcard-info">
                            <h2 className='flashcard-info'>Yoga Pose</h2>
                            <p className='flashcard-description'>This is a description of the yoga pose shown on the front of the flashcard.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button
                className='refresh-button'
                onClick={getRandomImage}>
                Refresh
            </button>
        </div>

    )
}

export default FlashCard