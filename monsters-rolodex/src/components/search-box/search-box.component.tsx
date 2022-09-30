import "./search-box.styles.css";

interface ISearchBox extends IChangeHandlerProps {
  className: string;
}
// overload
interface ISearchBox {
  placeholder?: string;
}
// extends
interface IChangeHandlerProps {
  onChangeHandler: (a: any) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBox) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
