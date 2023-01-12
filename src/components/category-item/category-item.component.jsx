import './category-item.styles.scss';

const CategoryItem = ({ titles }) => {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${titles.imageUrl})` }}
      />
      <div className='category-body-container'>
        <h2>{titles.title.toLocaleUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
