import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {id, className, headerText, description} = bannerCards
  const listStyling = `banner-style ${className}`
  return (
    <li className={listStyling} key={id}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="buttonEle" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
