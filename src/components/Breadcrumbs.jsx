import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section class="breadcrumb-section">
      <div class="breadcrumb-container">
        <nav>
          <ul className='breadcrumbs'>
            <li>
              <Link to="/" className='breadcrumb-link'><i className="fa-regular fa-house"></i> Homepage</Link>
              <span><i className="fa-regular fa-angles-right fa-xs"></i></span>
            </li>
            {pathnames.map((value, index) => {
              const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

              return (
                <li key={pathTo}>
                  {!isLast ? (
                    <>
                      <Link to={pathTo}>{value}</Link>
                      <span> &gt; </span>
                    </>
                  ) : (
                    <span className="breadcrumb-active">{capitalizedValue}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Breadcrumbs