import "./Login.css";

const LoginModal = ({ show, closeModal }) => {
  if (!show) return null;

  return (
    <div
      className="modal-backdrop"
    
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modallabel">login</div>
        </div>
        <div className="modal-signin-options-container">
          <div className="modal-signin-option">google</div>
        </div>
        <div className="modal-signin-form-container">
          <input type="email" className="modal-signin-from-item" />
          <input type="password" className="modal-signin-from-item" />
        </div>
        <div className="modal-footer">
          <div className="modal-signin-button">Sign in</div>
          <div className="modal-signin-other-options-container">
            <p className="modal-signin-other-option">
              Don't have an account?{" "}
              <strong
                onClick={() => {
                  throw new Error("Function haven't been implemented yet");
                }}
              >
                Register
              </strong>
            </p>
            <p className="modal-signin-other-option">Forgot password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
