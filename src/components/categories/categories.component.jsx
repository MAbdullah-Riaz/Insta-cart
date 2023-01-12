import './categories.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Categories = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((title) => {
        return <CategoryItem key={title.id} titles={title} />;
      })}
    </div>
  );
};

export default Categories;
