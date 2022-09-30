import { ChangeEvent, ChangeEventHandler } from "react";
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
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
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
