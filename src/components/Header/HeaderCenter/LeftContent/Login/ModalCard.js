import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./ModalCard.css";

const ModalCard = ({isShowing, hide}) =>
	isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className='modal-overlay ' />
					<div
						className='modal-wrapper '
						aria-modal
						aria-hidden
						tabIndex={-1}
						role='dialog'
					>
						<div className='modal d-block'>
							<div className='modal-header'>
								<button
									type='button'
									className='modal-close-button'
									data-dismiss='modal'
									aria-label='Close'
									onClick={hide}
								>
									<i class='fa fa-times fa-2x'></i>
								</button>
							</div>
							<div>
								<div className='form-group text-center'>
									<h4>Sản phẩm</h4>
									<h6>Hãy điền thông tin của bạn</h6>
								</div>
								<div className='form-group' style={{position: "relative"}}>
									<label htmlFor='l_email'>Email:</label>
									<input
										type='email'
										id='l_email'
										className='form-control mb-1'
										placeholder='Vui lòng nhập email'
										required
									/>
								</div>
								<div className='form-group pb-3' style={{position: "relative"}}>
									<label htmlFor='l_password'>Password</label>
									<input
										type='password'
										id='l_password'
										className='form-control mb-1'
										placeholder='Vui lòng nhập mật khẩu'
										required
									/>
									<a
										href='#forgotPassword'
										style={{display: "block", position: "absolute", right: 0}}
										title='Fill Email Field and Click it'
									>
										Quên mật khẩu?
									</a>
								</div>
								<div className='form-group pt-2'>
									<button className='btn btn-info form-control'>
										Đăng nhập
									</button>
								</div>
								<div className='form-group text-center pt-2 social-login'>
									<h6>OR Continue with</h6>
									<a href='#' className='google'>
										{" "}
										<i className='fa fa-google-plus fa-lg' />{" "}
									</a>
									<a href='#' className='facebook'>
										{" "}
										<i className='fa fa-facebook fa-lg' />{" "}
									</a>
									<a href='#' className='twitter'>
										{" "}
										<i className='fa fa-twitter fa-lg' />{" "}
									</a>
									<a href='#' className='github'>
										{" "}
										<i className='fa fa-github fa-lg' />{" "}
									</a>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>,
				document.getElementById("portal")
		  )
		: null;

export default ModalCard;
