import React, { useState } from 'react'
import './style.scss'
import ModalConfirmDelete from '../ModalConfirmDelete';

const AccountManagement = () => {

  const [openModalDelete, setOpenModalDelete] = useState(false);

  return (
    <div className='account-management'>
      <h2 class="chakra-heading">Account Management</h2>

      <p class="chakra-text">
        Deleting your account will remove all of your information from our database. This cannot be undone.
      </p>

      <button type="button" class="chakra-button" onClick={() => setOpenModalDelete(true)}>
        <svg viewBox="2 2 20 20" focusable="false" class="chakra-icon">
          <path fill="currentColor" d="M21.53 11.47C21.823 11.763 21.823 12.238 21.53 12.531C21.384 12.677 21.192 12.751 21 12.751C20.808 12.751 20.616 12.678 20.47 12.531L19 11.061L17.53 12.531C17.384 12.677 17.192 12.751 17 12.751C16.808 12.751 16.616 12.678 16.47 12.531C16.177 12.238 16.177 11.763 16.47 11.47L17.9399 10L16.47 8.53003C16.177 8.23703 16.177 7.76199 16.47 7.46899C16.763 7.17599 17.238 7.17599 17.531 7.46899L19.001 8.93896L20.4709 7.46899C20.7639 7.17599 21.239 7.17599 21.532 7.46899C21.825 7.76199 21.825 8.23703 21.532 8.53003L20.062 10L21.53 11.47ZM10.009 10.5C12.215 10.5 14.009 8.706 14.009 6.5C14.009 4.294 12.215 2.5 10.009 2.5C7.80303 2.5 6.00903 4.294 6.00903 6.5C6.00903 8.706 7.80303 10.5 10.009 10.5ZM12 12.5H8C3.94 12.5 2.5 15.473 2.5 18.019V21C2.5 21.276 2.724 21.5 3 21.5H17C17.276 21.5 17.5 21.276 17.5 21V18.019C17.5 15.473 16.06 12.5 12 12.5Z">
          </path>
        </svg>
        Delete Account
      </button>

      <ModalConfirmDelete
        show={openModalDelete}  
        onHide={() => setOpenModalDelete(false)}
      />
    </div>
  )
}

export default AccountManagement