import './Sort.scss';

const Sort = ({sortHandler}) => {

    const changeHandler = (e) => {
        sortHandler([...e.target.options])
    }

    return (
        <div className="sort">
            <label htmlFor="sort" className="sort__label">Sort By : </label>
            <select id="sort" className="sort__select" onChange={changeHandler}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
    )
}

export default Sort;