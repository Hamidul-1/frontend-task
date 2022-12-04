import './App.css';
import cover from '../../frontend-task/src/images/cover pic.png';
import logo from '../../frontend-task/src/images/logo.png';

function App() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:text-left">
          <img src={logo} class="max-w-sm rounded-lg" />
          <img src={cover} class="max-w-sm rounded-lg" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center m-16">
              <h1 className="text-xl font-bold">SignUp Form</h1>
            </div>
            <div className="form-control">
              <input type="text-base" placeholder="Write First Name" />
              <hr className='mb-16'/>
              <br />
              <input type="text-base" placeholder="Write Last Name" />
              <hr className='mb-16'/>
            </div>
            <div className='text-center mb-16'>
              <button className="btn btn-primary">Button -❯</button>
            </div>
            <div className='flex text-right'>
              <h1 className='text-xs text-slate-400'>Already have an account? </h1>
              <h1 className='text-primary'>LOGIN HERE!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
