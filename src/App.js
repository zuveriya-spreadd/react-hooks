import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log('Submitting form data', data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h2>Registration Form</h2>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Name must contain only letters and spaces',
                },
              })}
            />
            {errors.name && <p className="alert">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select {...register('gender', { required: 'Gender is required' })}>
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="alert">{errors.gender.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              {...register('age', {
                required: 'Age is required',
                min: { value: 1, message: 'Age must be at least 1' },
                max: { value: 120, message: 'Age must be below 120' },
              })}
            />
            {errors.age && <p className="alert">{errors.age.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              {...register('dob', {
                required: 'Date of Birth is required',
                validate: (value) => {
                  const today = new Date().toISOString().split('T')[0];
                  return (
                    value <= today || 'Date of Birth cannot be in the future'
                  );
                },
              })}
            />
            {errors.dob && <p className="alert">{errors.dob.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <p className="alert">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be 10 digits',
                },
              })}
            />
            {errors.phone && <p className="alert">{errors.phone.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must contain letters and numbers',
                },
              })}
            />
            {errors.password && (
              <p className="alert">{errors.password.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <p className="alert">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              placeholder="Enter Address"
              {...register('address', { required: 'Address is required' })}
            ></textarea>
            {errors.address && (
              <p className="alert">{errors.address.message}</p>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
