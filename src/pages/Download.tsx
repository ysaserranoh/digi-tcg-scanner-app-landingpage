
function Download() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Download Digi TCG Scanner</h1>
          <p>Get started with the most powerful card scanning app available</p>
        </div>

        <div className="download-section">
          <div className="download-cards">
            <div className="download-card">
              <h2>📱 iOS App</h2>
              <p>Available on the App Store</p>
              <div className="version-info">
                <span>Version 2.1.0</span>
                <span>iOS 14.0+</span>
              </div>
              <button className="btn-primary download-btn">
                Download for iPhone
              </button>
            </div>

            <div className="download-card">
              <h2>🤖 Android App</h2>
              <p>Available on Google Play Store</p>
              <div className="version-info">
                <span>Version 2.1.0</span>
                <span>Android 8.0+</span>
              </div>
              <button className="btn-primary download-btn">
                Download for Android
              </button>
            </div>
          </div>

          <div className="system-requirements">
            <h3>System Requirements</h3>
            <div className="requirements-grid">
              <div className="requirement">
                <h4>iOS</h4>
                <ul>
                  <li>iOS 14.0 or later</li>
                  <li>iPhone 8 or newer</li>
                  <li>100 MB free space</li>
                  <li>Camera access</li>
                </ul>
              </div>
              <div className="requirement">
                <h4>Android</h4>
                <ul>
                  <li>Android 8.0 (API 26)</li>
                  <li>2GB RAM minimum</li>
                  <li>100 MB free space</li>
                  <li>Camera access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download