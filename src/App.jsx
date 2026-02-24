import { Link, Navigate, Route, Routes } from 'react-router-dom'

function EmbeddedPage({ src, label, to }) {
  return (
    <div className="page-shell">
      <Link to={to} className="floating-link">
        {label}
      </Link>
      <iframe
        title={label}
        src={src}
        className="page-frame"
        loading="eager"
        referrerPolicy="no-referrer"
      />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<EmbeddedPage src="/do-nothing-app.html" label="Privacy Policy" to="/privacy-policy" />}
      />
      <Route
        path="/privacy-policy"
        element={<EmbeddedPage src="/privacy-policy-nothing.html" label="Back to App" to="/" />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
