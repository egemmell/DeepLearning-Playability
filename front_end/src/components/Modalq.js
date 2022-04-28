import React, {useState} from "react";
import ReactDOM from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

const Modalq = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};

export default Modalq;