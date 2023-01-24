import Modal from 'react-modal';
import type { NextComponentType, NextPageContext } from 'next';
import { ReactNode } from 'react';
declare type Fn = () => any;

interface Props {
  closeModal: Fn;
  openModal: boolean;
  className: string;
  overlay: string;
  children: ReactNode | null;
}

const ModalContainer: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { children, closeModal, openModal, className, overlay } = props;

  return (
    <Modal
      isOpen={openModal}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className={className}
      overlayClassName={overlay}
      ariaHideApp={false}
      contentLabel='Modal'
      preventScroll={false}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
