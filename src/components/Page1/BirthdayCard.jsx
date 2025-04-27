function BirthdayCard() {
  return (
    <div className="birthdayCard" id="Bday">
      <div className="cardFront">
        <div className="front-text">
          <h3 className="happy !top-56">HAPPY</h3>
          <h2 className="bday !top-[202px]">BIRTHDAY</h2>
          <h3 className="toyou !top-[180px]">to you!</h3>
        </div>
        <div className="wrap-deco">
          <div className="decorations"></div>
          <div className="decorationsTwo"></div>
        </div>
        <div className="wrap-decoTwo">
          <div className="decorations"></div>
          <div className="decorationsThree"></div>
        </div>
        <div className="plate">
          <div className="cake"></div>
          <div className="flame"></div>
        </div>
      </div>
      <div className="cardInside">
        <div className="inside-text">
          <h3 className="happy !top-56">HAPPY</h3>
          <h2 className="bday !top-52">BIRTHDAY</h2>
          <h3 className="toyou !top-48">to you!</h3>
        </div>
        <div className="wishes !-top-16 relative">
          <p>Dear Muskan,</p>
          <p>Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.</p>
          <p className="name"></p>
        </div>
      </div>
    </div>
  );
}

export default BirthdayCard;
