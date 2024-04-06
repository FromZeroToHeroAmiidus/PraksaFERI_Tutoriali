import profilePic from './assets/islamMentor.png'

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="card" className='card-image'/>
            <h2 className='card-title'>SkillUp Mentor</h2>
            <p className='card-text'>We do tutoring well!</p>
        </div>
    );
}

export default Card