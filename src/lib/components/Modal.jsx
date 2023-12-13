import React, { useState } from 'react';
import './modal.css';

// Component Modal with props closeModal and messageModal
export default function Modal({ closeModal, messageModal }) {
	return (
		//Modal section
		<section className="modal">
			{/* Content of the modal*/}
			<div className="modal__content">
				{/* Displaying the messageModal */}
				<span className="modal__content__message">{messageModal}</span>
				{/* Button to close the modal*/}
				<button className="button" onClick={closeModal}>
					Close
				</button>
			</div>
		</section>
	);
}
