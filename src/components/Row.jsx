

const Row = ({imgSrc, prayerText, prayerTime}) => {
  return (
    <div className="row mb-3">
    <div className="col d-flex align-items-center justify-content-between bg-secondary g-0">
            <div className="d-flex align-items-center">
                <img src={imgSrc} className="bg-white px-lg-2" width="65px"/>
                <div className="prayer-text fs-2 fw-bold ms-4">{prayerText}</div>
            </div>
            <div className="prayer-time bg-dark px-4 h-100 d-flex align-items-center fw-bold fs-4">{prayerTime}</div>
        </div>
    </div>
  )
}

export default Row