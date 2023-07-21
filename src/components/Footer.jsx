import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>All done in love ❤️: Juan Cristobal Dev</p>
      <a
        onClick={ async () => {
          await localStorage.removeItem('token');
          window.location.reload();
        }}
        style={{
          marginTop: '.5rem',
          fontSize: '.75rem',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        Cerrar sesíon
      </a>
    </footer>
  );
}
