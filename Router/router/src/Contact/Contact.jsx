
import Button from '../Button/Button'


const Contact = () => {


    return (
      <div className="Contact">
        <div className="formControl">
          <input
            
            type="text"
            placeholder="subject"
          />
        
        </div>
        <div className="formControl">
          <input
            
            type="email"
            placeholder="Email"
          />
          
        </div>
        <div className="formControl">
          <textarea >Your request here</textarea>
        </div>
        <div className="formControl">
          <Button >Submit</Button>
        </div>
      </div>
    );
};

export default Contact