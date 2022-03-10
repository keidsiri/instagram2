import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
  const [open ,setOpen] = useRecoilState(modalState);

  return <div>
    <h1></h1>
  </div>;
}

export default Modal;